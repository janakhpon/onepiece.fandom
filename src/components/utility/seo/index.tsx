import Head from "next/head";
import { withBasePath } from "../../../lib/helper";
import { metadata as siteMeta } from "../../../config/siteConfig";

export type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  sitetype?: string;
};

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

const favicons: Array<Favicons> = [
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: `${withBasePath("favicon/apple-touch-icon.png")}`,
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "512x512",
    href: `${withBasePath("favicon/android-chrome-512x512.png")}`,
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: `${withBasePath("favicon/android-chrome-192x192.png")}`,
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: `${withBasePath("favicon/favicon-32x32.png")}`,
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: `${withBasePath("favicon/favicon-16x16.png")}`,
  },
  // {
  //   rel: "manifest",
  //   href: `${withBasePath("favicon/manifest.json")}`,
  // },
];

const SEO = ({ title, description, image, url, sitetype }: SEOProps) => {
  const pageTitle = title
    ? `${siteMeta.siteName} | ${title}`
    : siteMeta.siteName;
  const pageDescription = description ? description : siteMeta.description;
  const pageImage = image ?? `${withBasePath(siteMeta.siteImage)}`;
  const pageUrl = url ? url : siteMeta.siteUrl;
  const pageType = sitetype ? sitetype : siteMeta.siteContentType;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="keywords" content={siteMeta.siteContent} />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="description" content={pageDescription} />

      {/* OpenGraph | Facebook */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={pageType} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:locale" content="en_IE" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage} />

      {/* Twitter */}
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={pageImage} />

      {/* Root */}
      <link rel="canonical" href={pageUrl} />

      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content={`${withBasePath("favicon/android-chrome-192x192.png")}`} 
      />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default SEO;
