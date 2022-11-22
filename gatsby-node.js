const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new FilterWarningsPlugin({
        exclude:
          /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
      }),
    ],
  });
};

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // const homePageTemplate = path.resolve(`src/template/home.tsx`);
  const servicesPageTemplate = path.resolve(`src/template/services.tsx`);
  const ContactPage = path.resolve(`src/template/contact.tsx`);
  const serviceDigitalCommercePageTemplate = path.resolve(
    `src/template/serviceDigitalCommerce.tsx`
  );
  const serviceDigitalProductsPageTemplate = path.resolve(
    `src/template/serviceDigitalProducts.tsx`
  );
  const aboutTemplate = path.resolve(`src/template/about.tsx`);
  const serviceB2BB2cWebsitesPageTemplate = path.resolve(
    `src/template/serviceB2BB2CWebsites.tsx`
  );
  const serviceScalePageTemplate = path.resolve(
    `src/template/serviceScale.tsx`
  );
  const ShopifyDevelopmentCompany = path.resolve(
    `src/template/shopifyDevelopmentCompany.tsx`
  );
  const MagentoDevelopmentCompany = path.resolve(
    `src/template/magentoDevelopmentCompany.tsx`
  );
  const ExpressjsDevelopment = path.resolve(
    `src/template/expressjsDevelopment.tsx`
  );
  const LaravelDevelopmentCompany = path.resolve(
    `src/template/laravelDevelopmentCompany.tsx`
  );
  const NodejsDevelopmentCompany = path.resolve(
    `src/template/nodejsDevelopmentCompany.tsx`
  );
  const AngularDevelopmentCompany = path.resolve(
    `src/template/angularDevelopmentCompany.tsx`
  );
  const ReactjsDevelopmentCompany = path.resolve(
    `src/template/reactjsDevelopmentCompany.tsx`
  );
  const ShopwareDevelopment = path.resolve(
    `src/template/shopwareDevelopment.tsx`
  );
  const NestjsDevelopmentCompany = path.resolve(
    `src/template/nestjsDevelopmentCompany.tsx`
  );
  const SwiftAppDevelopment = path.resolve(
    `src/template/swiftAppDevelopment.tsx`
  );
  const KotlinAppDevelopment = path.resolve(
    `src/template/kotlinAppDevelopment.tsx`
  );
  const PhpDevelopmentCompany = path.resolve(
    `src/template/phpDevelopmentCompany.tsx`
  );
  const ReactNativeAppDevelopment = path.resolve(
    `src/template/reactNativeAppDevelopment.tsx`
  );
  const XamarinAppDevelopment = path.resolve(
    `src/template/xamarinAppDevelopment.tsx`
  );
  const FlutterAppDevelopment = path.resolve(
    `src/template/flutterAppDevelopment.tsx`
  );
  const IonicAppDevelopment = path.resolve(
    `src/template/ionicAppDevelopment.tsx`
  );
  const AndroidAppDevelopmentCompany = path.resolve(
    `src/template/androidAppDevelopmentCompany.tsx`
  );
  const IosAppDevelopmentCompany = path.resolve(
    `src/template/iosAppDevelopmentCompany.tsx`
  );
  const WordpressDevelopmentCompany = path.resolve(
    `src/template/wordpressDevelopmentCompany.tsx`
  );
  const UiUxDevelopmentCompany = path.resolve(
    `src/template/uiuxDevelopmentCompany.tsx`
  );
  const WebAppDevelopmentCompany = path.resolve(
    `src/template/webAppDevelopmentCompany.tsx`
  );
  const OffshoreDevelopment = path.resolve(
    `src/template/offshoreDevelopment.tsx`
  );
  const MvpDevelopment = path.resolve(`src/template/mvpDevelopment.tsx`);
  const MobileApplicationDevelopmentCompany = path.resolve(
    `src/template/mobileApplicationDevelopmentCompany.tsx`
  );
  const CrossPlatformAppDevelopment = path.resolve(
    `src/template/crossPlatformAppDevelopment.tsx`
  );
  const InternetOfThings = path.resolve(`src/template/internetOfThings.tsx`);
  const FintechTemplate = path.resolve(`src/template/fintech.tsx`);
  const TravelTemplate = path.resolve(`src/template/travel.tsx`);
  const HealthcareTemplate = path.resolve(`src/template/healthcare.tsx`);
  const OnDemandTemplate = path.resolve(`src/template/onDemand.tsx`);
  const WoocommerceDevelopment = path.resolve(
    `src/template/woocommerceDevelopment.tsx`
  );
  const EcommerceDevelopment = path.resolve(
    `src/template/ecommerceDevelopment.tsx`
  );
  const BigcommerceDevelopmentCompany = path.resolve(
    `src/template/bigCommerceDevelopmentCompany.tsx`
  );
  const CommercetoolsDevelopment = path.resolve(
    `src/template/commerceToolsDevelopment.tsx`
  );

  const Careers = path.resolve(`src/template/Careers.tsx`);
  const MvpTemplate = path.resolve(`src/template/mvpTemplate.tsx`);
  const StaffAugmentation = path.resolve(`src/template/staffAugmentation.tsx`);
  const MoscowPrioritization = path.resolve(
    `src/template/moscowPrioritization.tsx`
  );
  const DosAndDontsOfExperienceDesignPage = path.resolve(
    `src/template/dosAndDontsOfExperienceDesign.tsx`
  );
  const ProcessPage = path.resolve(`src/template/process.tsx`);

  const result = await graphql(`
    query {
      allTsPage {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);
  result.data.allTsPage.edges.forEach((edge) => {
    // if (edge.node.slug === "home") {
    //   createPage({
    //     path: `${edge.node.slug}`,
    //     component: homePageTemplate,
    //     context: {
    //       title: edge.node.id,
    //     },
    //   });
    // }
    if (edge.node.slug === "services") {
      createPage({
        path: `${edge.node.slug}`,
        component: servicesPageTemplate,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "contactus") {
      createPage({
        path: `${edge.node.slug}`,
        component: ContactPage,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "digital-commerce") {
      createPage({
        path: `/services/${edge.node.slug}/`,
        component: serviceDigitalCommercePageTemplate,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "digital-products") {
      createPage({
        path: `/services/${edge.node.slug}/`,
        component: serviceDigitalProductsPageTemplate,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "b2b-and-b2c-websites") {
      createPage({
        path: `/services/${edge.node.slug}/`,
        component: serviceB2BB2cWebsitesPageTemplate,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "scale") {
      createPage({
        path: `/services/${edge.node.slug}/`,
        component: serviceScalePageTemplate,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "about") {
      createPage({
        path: `${edge.node.slug}`,
        component: aboutTemplate,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "careers") {
      createPage({
        path: `${edge.node.slug}`,
        component: Careers,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "shopify-development-company") {
      createPage({
        path: `${edge.node.slug}`,
        component: ShopifyDevelopmentCompany,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "magento-development-company") {
      createPage({
        path: `${edge.node.slug}`,
        component: MagentoDevelopmentCompany,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "expressjs-development") {
      createPage({
        path: `${edge.node.slug}`,
        component: ExpressjsDevelopment,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "laravel-development-company") {
      createPage({
        path: `${edge.node.slug}`,
        component: LaravelDevelopmentCompany,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "nodejs-development-company") {
      createPage({
        path: `${edge.node.slug}`,
        component: NodejsDevelopmentCompany,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "angular-development-company") {
      createPage({
        path: `${edge.node.slug}`,
        component: AngularDevelopmentCompany,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "reactjs-development-company") {
      createPage({
        path: `${edge.node.slug}`,
        component: ReactjsDevelopmentCompany,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "shopware-development") {
      createPage({
        path: `${edge.node.slug}`,
        component: ShopwareDevelopment,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "nestjs-development-company") {
      createPage({
        path: `${edge.node.slug}`,
        component: NestjsDevelopmentCompany,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "swift-app-development") {
      createPage({
        path: `${edge.node.slug}`,
        component: SwiftAppDevelopment,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "kotlin-app-development") {
      createPage({
        path: `${edge.node.slug}`,
        component: KotlinAppDevelopment,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "php-development-company") {
      createPage({
        path: `${edge.node.slug}`,
        component: PhpDevelopmentCompany,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "react-native-app-development") {
      createPage({
        path: `${edge.node.slug}`,
        component: ReactNativeAppDevelopment,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "xamarin-app-development") {
      createPage({
        path: `${edge.node.slug}`,
        component: XamarinAppDevelopment,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "flutter-app-development") {
      createPage({
        path: `${edge.node.slug}`,
        component: FlutterAppDevelopment,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "ionic-app-development") {
      createPage({
        path: `${edge.node.slug}`,
        component: IonicAppDevelopment,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "android-app-development-company") {
      createPage({
        path: `${edge.node.slug}`,
        component: AndroidAppDevelopmentCompany,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "ios-app-development-company") {
      createPage({
        path: `${edge.node.slug}`,
        component: IosAppDevelopmentCompany,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "wordpress-development-company") {
      createPage({
        path: `${edge.node.slug}`,
        component: WordpressDevelopmentCompany,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "ui-ux-development-company") {
      createPage({
        path: `${edge.node.slug}`,
        component: UiUxDevelopmentCompany,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "web-app-development-company") {
      createPage({
        path: `${edge.node.slug}`,
        component: WebAppDevelopmentCompany,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "offshore-development") {
      createPage({
        path: `${edge.node.slug}`,
        component: OffshoreDevelopment,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "mvp-development") {
      createPage({
        path: `${edge.node.slug}`,
        component: MvpDevelopment,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "mobile-application-development-company") {
      createPage({
        path: `${edge.node.slug}`,
        component: MobileApplicationDevelopmentCompany,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "cross-platform-app-development") {
      createPage({
        path: `${edge.node.slug}`,
        component: CrossPlatformAppDevelopment,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "internet-of-things") {
      createPage({
        path: `${edge.node.slug}`,
        component: InternetOfThings,
        context: {
          title: edge.node.id,
        },
      });
    }

    if (edge.node.slug === "fintech") {
      createPage({
        path: `${edge.node.slug}`,
        component: FintechTemplate,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "travel") {
      createPage({
        path: `${edge.node.slug}`,
        component: TravelTemplate,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "healthcare") {
      createPage({
        path: `${edge.node.slug}`,
        component: HealthcareTemplate,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "on-demand") {
      createPage({
        path: `${edge.node.slug}`,
        component: OnDemandTemplate,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "woocommerce-development") {
      createPage({
        path: `${edge.node.slug}`,
        component: WoocommerceDevelopment,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "ecommerce-development") {
      createPage({
        path: `${edge.node.slug}`,
        component: EcommerceDevelopment,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "bigcommerce-development-company") {
      createPage({
        path: `${edge.node.slug}`,
        component: BigcommerceDevelopmentCompany,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "commercetools-development") {
      createPage({
        path: `${edge.node.slug}`,
        component: CommercetoolsDevelopment,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "mvp-template") {
      createPage({
        path: `${edge.node.slug}`,
        component: MvpTemplate,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "staff-augmentation-guide-2021") {
      createPage({
        path: `${edge.node.slug}`,
        component: StaffAugmentation,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "moscow-prioritization") {
      createPage({
        path: `${edge.node.slug}`,
        component: MoscowPrioritization,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "dos-and-donts-of-experience-design") {
      createPage({
        path: `${edge.node.slug}`,
        component: DosAndDontsOfExperienceDesignPage,
        context: {
          title: edge.node.id,
        },
      });
    }
    if (edge.node.slug === "process") {
      createPage({
        path: `${edge.node.slug}`,
        component: ProcessPage,
        context: {
          title: edge.node.id,
        },
      });
    }
  });

  // create page for all post
  const ThoughtspaceDetailsPage = path.resolve(
    `./src/template/thoughtspaceDetailsPage.tsx`
  );
  const Thoughtspace = path.resolve(`./src/template/thoughtspace.tsx`);

  const PostPage = await graphql(`
    query {
      allTsPost {
        edges {
          node {
            id
            slug
            status
            databaseId
            title
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  `);
  PostPage.data.allTsPost.edges.forEach((edge) => {
    createPage({
      path: `/thoughtspace/${edge.node.slug}/`,
      component: ThoughtspaceDetailsPage,
      context: {
        id: edge.node.databaseId,
        vid: edge.node.id,
        slug: edge.node.slug,
        title: edge.node.title,
        category: edge.node.categories.nodes[0].name,
      },
    });
    createPage({
      path: `/thoughtspace/`,
      component: Thoughtspace,
      context: {},
    });
  });

  // create all casestudy pages
  // const OurWorkDetailsPage = path.resolve(`./src/template/WorkDetailsPage.tsx`);
  // const OurWorkListingPage = path.resolve(`./src/template/Work.tsx`);

  // const WorkPage = await graphql(`
  //   query {
  //     allTsCaseStudy {
  //       edges {
  //         node {
  //           id
  //           slug
  //           status
  //           databaseId
  //           title
  //           caseStudyCategory {
  //             nodes {
  //               name
  //               link
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // WorkPage.data.allTsCaseStudy.edges.forEach((edge) => {
  //   createPage({
  //     path: `/our-work/${edge.node.slug}/`,
  //     component: OurWorkDetailsPage,
  //     context: {
  //       id: edge.node.databaseId,
  //       vid: edge.node.id,
  //       slug: edge.node.slug,
  //       title: edge.node.title,
  //     },
  //   });
  //   createPage({
  //     path: `/our-work/`,
  //     component: OurWorkListingPage,
  //     context: {},
  //   });
  // });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
