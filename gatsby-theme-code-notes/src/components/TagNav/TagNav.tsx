/** @jsx jsx */
import { FunctionComponent, useContext, Fragment } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { jsx, Box, NavLink } from 'theme-ui'
import { SearchContext } from '../Search'
import { TagDot } from '../TagDot'

export interface TagItemInterface {
  tag: string
  totalCount: number
  slug: string
  path: string
}

interface TagNavProps {
  tags: TagItemInterface[]
  pages: any
  activeTag?: string
  rootPath?: boolean
  basePath: string
  hasUntagged?: boolean
  location: string
}

export const TagNav: FunctionComponent<TagNavProps> = ({
  tags,
  pages,
  activeTag,
  rootPath,
  location,
  basePath,
  hasUntagged,
}) => {
  const { setQuery } = useContext(SearchContext)
  return (
    <Box as="nav" sx={{ mb: 9 }}>
      <NavLink
        sx={{
          fontWeight: 'medium',
          bg: location === '/notes' ? 'navHover' : undefined,
          textTransform: 'uppercase',
          color: 'textStrong',
        }}
        to="/notes"
        as={GatsbyLink}
        onClick={() => setQuery('')}
      >
        📝 Notes
      </NavLink>

      {pages
        .sort((one, two) =>
          one.frontmatter.title.localeCompare(two.frontmatter.title)
        )
        .map((item, index) => {
          return (
            <NavLink
              sx={{
                fontWeight: 'medium',
                bg: location === item.path ? 'navHover' : undefined,
                textTransform: 'uppercase',
                color: 'textStrong',
              }}
              to={item.fields.slug}
              as={GatsbyLink}
              onClick={() => setQuery('')}
            >
              {item.frontmatter.emoji} {item.frontmatter.title}
            </NavLink>
          )
        })}

      {tags.length > 0 && (
        <Fragment>
          <Box
            sx={{
              px: 3,
              pt: 2,
              pb: 1,
              mt: 3,
              textTransform: 'uppercase',
              fontSize: '14px',
              color: 'textStrong',
              fontWeight: 'medium',
            }}
          >
            Tags
          </Box>

          {tags
            .sort((one, two) => one.tag.localeCompare(two.tag))
            .map((item, index) => {
              return (
                <NavLink
                  sx={{
                    bg: activeTag === item.tag ? 'navHover' : undefined,
                  }}
                  to={item.path}
                  as={GatsbyLink}
                  key={index}
                  onClick={() => setQuery('')}
                >
                  <TagDot tag={item.tag} />
                  {item.tag}
                </NavLink>
              )
            })}
        </Fragment>
      )}

      {hasUntagged && (
        <NavLink
          sx={{
            fontWeight: activeTag === 'untagged' ? 'bold' : undefined,
            bg: activeTag === 'untagged' ? 'navHover' : undefined,
          }}
          to={`/tag/untagged`}
          as={GatsbyLink}
          onClick={() => setQuery('')}
        >
          <TagDot />
          Untagged Notes
        </NavLink>
      )}
    </Box>
  )
}
