/** @jsx jsx */
import { FunctionComponent, Fragment, useEffect, useState } from 'react'
import { jsx, Box, Flex, Heading, Link, Text } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GoCalendar, GoLink, GoTag } from 'react-icons/go'
import { useSiteMetadata } from '../../use-site-metadata'
import { Contents } from '../Contents'
import { PageLayout } from '../PageLayout'
import { TagList } from '../TagList'
import { BackLinks } from '../BackLinks'

interface PageProps {
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

export const Page: FunctionComponent<PageProps> = ({
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
    <PageLayout
      hasUntagged={pageContext.hasUntagged}
      basePath={pageContext.basePath}
      tags={pageContext.tags}
      pages={pageContext.pages}
      path={location.pathname}
      title={title}
    >
      <article>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </PageLayout>
  )
}
