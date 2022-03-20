import { PAGE_SEO } from "config";
import Head from "next/head";
import { useRouter } from "next/router";

export function CustomHead() {
  const router = useRouter();

  const { title, metaDescription, favIconPath } = PAGE_SEO[router?.route] || {};

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <link rel="icon" href={favIconPath} />
    </Head>
  );
}
