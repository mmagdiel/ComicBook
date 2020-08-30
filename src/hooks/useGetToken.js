import { useStaticQuery, graphql } from "gatsby";

export default function useGetToken() {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            TOKEN
          }
        }
      }
    `
  );
  return site.siteMetadata.site.TOKEN;
}
