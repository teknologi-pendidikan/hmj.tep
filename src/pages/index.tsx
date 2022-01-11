/* eslint-disable @typescript-eslint/no-var-requires */
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import {
  Header,
  Footer,
  SEO,
  PageTitle,
  CardInformasi,
  SectionGrub,
} from "components";

type sosmedLinks = {
  id: number;
  title: string;
  description: string;
  link: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const data: sosmedLinks = require("data/links.json");
  const pinnedposts: sosmedLinks = require("data/pinnedpost.json");
  return {
    props: {
      data,
      pinnedposts,
    },
  };
};

function Home({
  data,
  pinnedposts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const bunchOfLink = [];
  const pinnedPost = [];

  for (let i = 0; i < data.length; i += 1) {
    bunchOfLink.push(
      <CardInformasi
        key={i}
        title={data[i].title}
        description={data[i].description}
        links={data[i].link}
      />
    );
  }

  for (let i = 0; i < pinnedposts.length; i += 1) {
    pinnedPost.push(
      <CardInformasi
        key={i}
        title={pinnedposts[i].title}
        description={pinnedposts[i].description}
        links={pinnedposts[i].link}
      />
    );
  }

  return (
    <>
      <SEO
        title="Open Gate HMH TEP UM"
        description="Pusat Informasi terpadu HMJ Teknologi Pendidikan UM 2022."
        image=""
      />
      <Header title="Beranda" />
      <PageTitle
        title="Open Gate HMJ TEP UM"
        description="Pusat Informasi terpadu HMJ Teknologi Pendidikan UM 2022."
      />
      <SectionGrub title="Pinned Post">
        <ul>{pinnedPost}</ul>
      </SectionGrub>
      <SectionGrub title="Quick Links">
        <ul>{bunchOfLink}</ul>
      </SectionGrub>
      <Footer />
    </>
  );
}

export default Home;
