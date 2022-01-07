import Head from "next/head";
import { NextPage } from "next";

interface Props {
  title: string;
  description: string;
  image: string;
}

const SEO: NextPage<Props> = (props) => {
  const { title } = props;
  const { description } = props;
  const { image } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="title" content={title} />
      <meta property="og:url" content="https://hmj.tep.my.id/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="HMJ TEP UM 2022" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="https://hmj.tep.fip.um.ac.id" />
      <meta name="twitter:creator" content="@hmjtep_um" />
    </Head>
  );
};

export default SEO;
