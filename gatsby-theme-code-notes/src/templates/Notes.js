import { graphql } from 'gatsby'
import { NotesPage } from '../components/NotesPage'


export default NotesPage

export const pageQuery = graphql`
  fragment AllPages on Mdx {
    id
    frontmatter {
      title
      tags
      emoji
      modified(formatString: "LL")
      modifiedTimestamp: modified
    }
    fields {
      slug
    }
  }

  query {
    allMdx(filter: {frontmatter: {page: {eq: null}, active: { ne: false }}}) {
      edges {
        node {
          ...AllPages
        }
      }
    }
  }
`
