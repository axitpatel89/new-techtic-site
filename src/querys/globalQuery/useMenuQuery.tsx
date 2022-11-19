import { useStaticQuery, graphql } from "gatsby";

export interface MenuType {
  id: string;
  url: string;
  path: string;
  label: string;
  parentId: boolean;
}

export const useMenuQuery = () => {
  const data: {
    tsMenu: {
      menuItems: {
        nodes: MenuType[];
      };
    };
  } = useStaticQuery(
    graphql`
      query MenuQuery {
        tsMenu(locations: { eq: GATSBY_HEADER_MENU }) {
          menuItems {
            nodes {
              id
              url
              path
              label
              parentId
            }
          }
        }
      }
    `
  );
  const menuAll: MenuType[] = data.tsMenu.menuItems.nodes.filter(
    ({ parentId }) => parentId === null
  );
  return { menuAll };
};
