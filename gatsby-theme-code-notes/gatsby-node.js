const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const slugify = require('@alexcarpenter/slugify')
const { createFilePath } = require(`gatsby-source-filesystem`)
const createOpenSearchFile = require('./src/utils/createOpenSearch')

const DEFAULT_BASE_PATH = '/'

const getBasePath = (bp = DEFAULT_BASE_PATH) => {
  if (bp === '' || bp === '.' || bp === './') {
    return DEFAULT_BASE_PATH
  } else {
    return bp
  }
}

exports.onPreBootstrap = ({ store, reporter }, themeOptions) => {
  const { program } = store.getState()
  const contentPath = themeOptions.contentPath || `content/notes`
  const dirs = [path.join(program.directory, contentPath)]
  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      reporter.log(`Initializing ${dir} directory`)
      mkdirp.sync(dir)
    }
  })
}

exports.onPreExtractQueries = ({ reporter }, themeOptions) => {
  if (themeOptions.openSearch && themeOptions.openSearch.siteUrl) {
    const filePath = path.join('public', 'opensearch.xml')
    fs.writeFile(
      filePath,
      createOpenSearchFile(themeOptions.openSearch),
      (err) => {
        if (err) throw err
        reporter.log('The opensearch.xml file has been created')
      }
    )
  }
}

exports.createPages = async ({ graphql, actions }, options) => {
  const { createPage } = actions
  const basePath = getBasePath(options.basePath)

  const mdxPages = await graphql(
    `
      {
        allPages: allMdx(filter: { frontmatter: { page: { eq: true }, active: { ne: false }} }) {
          edges {
            node {
              id
              frontmatter {
                title
                tags
                emoji
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (mdxPages.errors) {
    throw mdxPages.errors
  }

  const mdxNotes = await graphql(
    `
      {
        allNotes: allMdx(filter: { frontmatter: { page: { eq: null }, active: { ne: false } } }) {
          edges {
            node {
              id
              frontmatter {
                title
                tags
              }
              fields {
                slug
              }
            }
          }

          tags: group(field: frontmatter___tags) {
            tag: fieldValue
            totalCount
          }
        }

        untagged: allMdx(filter: { frontmatter: { tags: { eq: null }, page: { eq: null }, active: { ne: false } } }) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  )

  if (mdxNotes.errors) {
    throw mdxNotes.errors
  }

  const { allPages } = mdxPages.data
  const pagesData = allPages.edges

  const slugifiedPages = pagesData.map((page) => {
    const { node } = page
    const { frontmatter } = node
    const { title } = frontmatter
    return {
      ...node,
      slug: `/${slugify(title)}`,
      path: path.join(basePath, '/', slugify(title)),
    }
  })

  const { allNotes, untagged } = mdxNotes.data

  const globalTagsList = allNotes.tags
  const notesData = allNotes.edges
  const hasUntagged = !!untagged.edges.length
  const slugifiedTags = globalTagsList.map((item) => {
    return {
      ...item,
      slug: `/${slugify(item.tag)}`,
      path: path.join(basePath, 'tag', slugify(item.tag)),
    }
  })

  pagesData.forEach((note, index) => {
    const slug = slugify(note.node.fields.slug)
    console.log(88, slug)
    createPage({
      path: slug,
      component: path.join(__dirname, './src/templates', 'Page.js'),
      context: {
        id: note.node.id,
        pages: slugifiedPages,
        tags: slugifiedTags,
      },
    })
  })

  notesData.forEach((note, index) => {
    const previous =
      index === notesData.length - 1 ? null : notesData[index + 1].node
    const next = index === 0 ? null : notesData[index - 1].node
    const slug = slugify(note.node.fields.slug)

    createPage({
      path: slug,
      component: path.join(__dirname, './src/templates', 'Note.js'),
      context: {
        id: note.node.id,
        previous,
        next,
        hasUntagged,
        basePath,
        tags: slugifiedTags,
        pages: slugifiedPages,
      },
    })
  })

  createPage({
    path: '/notes',
    component: path.join(__dirname, './src/templates', 'Notes.js'),
    context: {
      tags: slugifiedTags,
      pages: slugifiedPages,
      basePath,
      hasUntagged,
    },
  })

  createPage({
    path: '/',
    component: path.join(__dirname, './src/templates', 'Home.js'),
    context: {
      pages: slugifiedPages,
      tags: slugifiedTags,
      basePath,
      hasUntagged,
    },
  })

  // Create tag pages
  slugifiedTags.forEach((item) => {
    createPage({
      path: item.path,
      component: path.join(__dirname, './src/templates', 'TagPage.js'),
      context: {
        tag: item.tag,
        tags: slugifiedTags,
        pages: slugifiedPages,
        hasUntagged,
        basePath,
      },
    })
  })

  if (hasUntagged) {
    createPage({
      path: path.join(basePath, 'tag', 'untagged'),
      component: path.join(__dirname, './src/templates', 'UntaggedTagPage.js'),
      context: {
        tag: 'untagged',
        tags: slugifiedTags,
        pages: slugifiedPages,
        hasUntagged,
        basePath,
      },
    })
  }

  createPage({
    path: path.join('404'),
    component: path.join(__dirname, './src/templates', '404.js'),
    context: {
      tags: slugifiedTags,
      pages: slugifiedPages,
      hasUntagged,
      basePath,
    },
  })
}

exports.onCreateNode = async ({ node, actions, getNode }, options) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({
      node,
      getNode,
      trailingSlash: false,
    })
    const pathSlug = path.join(getBasePath(options.basePath), slug)
    createNodeField({
      name: `slug`,
      node,
      value: pathSlug,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type OpenSearch {
      siteShortName: String
      siteUrl: String
      siteTags: String
      siteContact: String
      siteDescription: String
    }
    type SiteSiteMetadata {
      title: String!
      description: String!
      gitRepoContentPath: String
      showThemeInfo: Boolean
      showDescriptionInSidebar: Boolean
      logo: String
      openSearch: OpenSearch
      showDate: Boolean
    }
  `
  createTypes(typeDefs)
}
