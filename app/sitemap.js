import { getDocumentSlugs } from "outstatic/server";

export default function sitemap() {
  const mainPages = ["", "advertise", "archives", "contact"];
  const mainPagesUrl = mainPages.map((slug) => ({
    url: `${process.env.url}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  }));
  const posts = getDocumentSlugs("blogs");
  const postUrls = posts.map((slug) => ({
    url: `${process.env.url}/archives/${slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  }));

  const policies = getDocumentSlugs("policies");
  const policiesUrl = policies.map((slug) => ({
    url: `${process.env.url}/policy/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  const pages = getDocumentSlugs("pages");
  const pagesUrl = pages.map((slug) => ({
    url: `${process.env.url}/general/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  return [...mainPagesUrl, ...postUrls, ...pagesUrl, ...policiesUrl];
}
