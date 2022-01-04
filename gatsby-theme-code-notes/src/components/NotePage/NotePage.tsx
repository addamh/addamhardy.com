/** @jsx jsx */
import { FunctionComponent, Fragment, useEffect, useState } from 'react'
import { jsx, Box, Flex, Heading, Link, Text } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GoCalendar, GoLink, GoTag } from 'react-icons/go'
import { useSiteMetadata } from '../../use-site-metadata'
import { Contents } from '../Contents'
import { NoteLayout } from '../NoteLayout'
import { TagList } from '../TagList'
import { BackLinks } from '../BackLinks'

interface NotePageProps {
  data: {
    mdx: {
      frontmatter: {
        tags: string[]
        title: string
        emoji: string
        link: string
        modified: string
        modifiedTimestamp: string
      }
      references: {
        frontmatter: {
          title: string
        }
        slug: string
      }[]
      body: any
      parent: {
        relativePath: string
      }
      tableOfContents: any
    }
  }
  pageContext: {
    id: string
    previous: boolean
    next: boolean
    hasUntagged: boolean
    basePath?: string
    tags: any
    pages: any
  }
  location: {
    pathname: string
  }
}

export const NotePage: FunctionComponent<NotePageProps> = ({
  data,
  pageContext,
  location,
}) => {
  if (!data) {
    return null
  }
  const { showDate } = useSiteMetadata()
  const {
    frontmatter: { title, tags, emoji, link, modified, modifiedTimestamp },
    body,
    parent: { relativePath },
    tableOfContents,
  } = data.mdx

  const { gitRepoContentPath } = useSiteMetadata()
  const showMetadata = !!(link || showDate)
  const [shortenedLink, setShortenedLink] = useState<string>(link)

  useEffect(() => {
    if (link) {
      if ('URL' in window) {
        const { hostname, pathname } = new URL(link)
        setShortenedLink(`${hostname}${pathname}`)
      }
    }
  }, [link])

  return (
    <NoteLayout
      hasUntagged={pageContext.hasUntagged}
      basePath={pageContext.basePath}
      tags={pageContext.tags}
      pages={pageContext.pages}
      path={location.pathname}
      title={title}
    >
      <article>
        <Box
          as="header"
          sx={{
            my: 4,
            borderBottom: '1px solid',
            borderBottomColor: 'muted',
            pb: 4,
          }}
        >
          {emoji && (
            <Box
              sx={{
                fontSize: 7,
                lineHeight: 1,
                mb: 3,
                float: 'left',
                mr: 2
              }}
            >
              <span style={{verticalAlign: 'middle'}} role="img">{emoji}</span>
            </Box>
          )}

          <Heading as="h1" variant="noteTitle">
            {title}
          </Heading>

          {showMetadata && (
            <Flex
              sx={{
                mb: 2,
                alignItems: 'center',
              }}
            >
              {link && (
                <Fragment>
                  <GoLink
                    sx={{
                      color: 'input',
                      pointerEvents: 'none',
                      mr: 2,
                      flexShrink: 0,
                    }}
                  />
                  <Link
                    href={link}
                    sx={{
                      mr: 4,
                      fontSize: 0,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {shortenedLink}
                  </Link>
                </Fragment>
              )}
              {modifiedTimestamp && modified && (
                <time
                  dateTime={modifiedTimestamp}
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <GoCalendar
                    sx={{
                      color: 'input',
                      pointerEvents: 'none',
                      mr: 2,
                      flexShrink: 0,
                    }}
                  />
                  <Text variant="dateModified">{modified}</Text>
                </time>
              )}
            </Flex>
          )}

          {tags && (
            <Flex>
              <GoTag
                sx={{
                  color: 'input',
                  pointerEvents: 'none',
                  mr: 2,
                  flexShrink: 0,
                }}
              />
              <TagList tags={tags} />
            </Flex>
          )}
        </Box>

        {!!data.mdx.references.length && (
          <BackLinks references={data.mdx.references} />
        )}

        <Contents toc={tableOfContents} />

        <MDXRenderer>{body}</MDXRenderer>

        <Box
          sx={{
            mt: 6,
            pt: 4,
            borderTop: '2px solid',
            borderTopColor: 'background',
          }}
        >
          {gitRepoContentPath && (
            <Link
              href={`${gitRepoContentPath}${relativePath}`}
              sx={{ fontSize: 0 }}
            >
              Edit this page
            </Link>
          )}
        </Box>
      </article>
    </NoteLayout>
  )
}
