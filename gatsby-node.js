const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
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

  const Careers = path.resolve(`src/template/Careers.tsx`);

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
