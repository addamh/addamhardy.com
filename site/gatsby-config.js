module.exports = {
  siteMetadata: {
    title: 'addamhardy.com',
    description: 'Addam Hardy',
    keywords: [],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'content/notes',
        basePath: '/',
        gitRepoContentPath: '',
        showDescriptionInSidebar: true,
        showThemeInfo: false,
        logo: '',
        openSearch: {
          siteShortName: `Gatsby Theme Code Notes Example`,
          siteUrl: 'https://code-notes-example.netlify.app',
          siteTags: 'front-end',
          siteContact: 'https://twitter.com/MrMartineau',
          siteDescription: 'A Gatsby theme for storing your code-related notes',
        },
        showDate: true,
      },
    },
    'gatsby-plugin-postcss',
  ],
}
