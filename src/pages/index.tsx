/* eslint-disable @typescript-eslint/no-var-requires */
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import {
  Header,
  Footer,
  SEO,
  PageTitle,
  CardInformasi,
  SectionGrub,
  IndexHeader,
  IndexSosmed,
  CardLinks,
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
      <CardLinks
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
    <main className="flex flex-col w-full min-h-screen bg-neutral-100">
      <SEO
        title="Open Gate HMH TEP UM"
        description="Pusat Informasi terpadu HMD Teknologi Pendidikan UM 2022."
        image=""
      />
      <Header title="Beranda" />
      <section className="flex flex-col flex-1 py-16">
        <PageTitle
          title="Sistem Informasi HMD TEP UM"
          description="Pusat Informasi terpadu HMD Teknologi Pendidikan UM 2022."
        />
        <div className="flex-1">
          <div className="w-full sm:max-w-xl mx-auto space-y-3">
            <IndexHeader>
              <IndexSosmed />
            </IndexHeader>
            <SectionGrub title="Pengumuman Penting">{pinnedPost}</SectionGrub>
            <SectionGrub title="Tautan Cepat">{bunchOfLink}</SectionGrub>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
