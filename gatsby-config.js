module.exports = {
  flags: {
    PARALLEL_QUERY_RUNNING: true
  },
  siteMetadata: {
    title: `techtic-website`,
    description: `Delivering digital transformation for progressive brands.`,
    author: `@techtic`,
    siteUrl: `https://www.techtic.com/`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
        ignore: [`**/\.*`],
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        verboseOutput: true,
        url: "http://45.79.111.106/techtic/graphql",
        schema: {
          typePrefix: `ts`,
          timeout: 12000000,
          perPage: 5,
          requestConcurrency: 2,
          previewRequestConcurrency: 2,
        },
        production: {
          allow404Images: true,
          allow401Images: true,
        },
        develop: {
          hardCacheMediaFiles: true,
          hardCacheData: false,
        },
        options: {
          verbose: true,
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 15,
            },
          },
          Post: {
            limit: 50,
          },
          Tag: {
            limit: 10,
          },
        },
        debug: {
          preview: true,
          timeBuildSteps: true,
          disableCompatibilityCheck: true,
          throwRefetchErrors: true,
          graphql: {
            showQueryVarsOnError: true,
            showQueryOnError: true,
            copyQueryOnError: true,
            onlyReportCriticalErrors: true,
            panicOnError: false,
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: "1234567",
        respectDNT: false,
        productionOnly: true,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "IBM Plex Sans",
              variants: ["300", "400", "500", "600", "700"],
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
        disableVendorPrefixes: false,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        display: `minimal-ui`,
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `black`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
  ],
};
