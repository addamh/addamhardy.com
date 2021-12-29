import { graphql } from 'gatsby'
import { Page } from '../components/Page'

export default Page

export const pageQuery = graphql`
  query PageById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        tags
        emoji
        modified(formatString: "LL")
        modifiedTimestamp: modified
      }
      references: inboundReferences {
        ... on Mdx {
          frontmatter {
            title
          }
          slug
        }
      }
      fields {
        slug
      }
      tableOfContents(maxDepth: 3)
      parent {
        ... on File {
          relativePath
        }
      }
    }
  }
`
