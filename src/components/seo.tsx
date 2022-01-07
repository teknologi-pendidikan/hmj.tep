import Head from "next/head";
import { NextPage } from "next";

interface Props {
  title: string;
  description: string;
}

const SEO: NextPage<Props> = (props) => {
  const { title } = props;
  const { description } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="title" content={title} />
      <meta property="og:url" content="https://hmj.tep.my.id/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  );
};

export default SEO;
