import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description?: string;
  path?: string;           // canonical path, e.g. "/features"
  image?: string;          // /og.png by default
};

const SITE = "https://opssync.ai";

export default function SEO({ title, description, path = "/", image = "/og.png" }: SEOProps) {
  const url = `${SITE}${path}`;
  const desc = description ?? "OpsSync.ai — the single source of truth for your field operations.";
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={desc} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
