/* eslint-disable @typescript-eslint/no-var-requires */
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import {
  Header,
  Footer,
  SEO,
  PageTitle,
  CardLinks,
  SectionGrub,
} from "components";

type informasiberkas = {
  id: number;
  title: string;
  description: string;
  link: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const daftarprogram: informasiberkas = require("data/program.json");
  return {
    props: {
      daftarprogram,
    },
  };
};

function Home({
  daftarprogram,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const pinnedPost = [];

  for (let i = 0; i < daftarprogram.length; i += 1) {
    pinnedPost.push(
      <CardLinks
        key={i}
        title={daftarprogram[i].nama}
        description={daftarprogram[i].deskripsi}
        links="#"
      />
    );
  }

  return (
    <main className="flex flex-col w-full min-h-screen bg-neutral-100">
      <SEO
        title="ADMIN ACCESS - Sistem Informasi Utama"
        description="Admins Access Sistem Informasi Utama"
        image=""
      />
      <Header title="Data Program Kerja Agenda" />
      <section className="flex flex-col flex-1 py-16">
        <PageTitle
          title="Akses Administrator Sistem Informasi"
          description="Akses Administrator Sistem Informasi. Halaman ini diperuntukkan untuk akses cepat menuju berbagai dokumen yang bersifat penting. Beberapa berkas mungkin tidak dapat diakses dikarenakan anda tikda memiliki akses terhadapnya."
        />
        <div className="flex-1">
          <div className="w-full sm:max-w-xl mx-auto space-y-3">
            <SectionGrub title="Daftar Program kerja agenda">
              {pinnedPost}
            </SectionGrub>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
