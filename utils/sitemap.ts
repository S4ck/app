import {ServerTenant} from "~/tenant/types";

export function buildSitemap(stores: ServerTenant[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${stores
        .map(({slug}) => {
          return `
              <url>
                  <loc>${`${process.env.APP_URL}/${slug}`}</loc>
              </url>
          `;
        })
        .join("")}
  </urlset>
  `;
}
