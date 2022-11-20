import { useStaticQuery, graphql } from "gatsby";

export interface MenuTypes {
  label: string;
  id: string;
  url: string;
}

export const usePerentCategory = () => {
  const data: {
    tsMenu: {
      menuItems: {
        nodes: MenuTypes[];
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryParentCategory {
        tsMenu(locations: { eq: SERVICES_MENU }) {
          menuItems {
            nodes {
              label
              id
              url
            }
          }
        }
      }
    `
  );

  const ParentCategory: MenuTypes[] = data.tsMenu.menuItems.nodes;

  return { ParentCategory };
};
