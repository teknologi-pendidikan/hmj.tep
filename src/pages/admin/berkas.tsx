/* eslint-disable @typescript-eslint/no-var-requires */
import useSWR from "swr";

import {
  Header,
  Footer,
  SEO,
  PageTitle,
  CardLinks,
  SectionGrub,
} from "components";

function GetDataBerkas() {
  const fetcher = (url: RequestInfo) =>
    fetch(url, { mode: "cors" }).then((r) => r.json());
  const { data, error } = useSWR(
    "https://hmdtep-api.azurewebsites.net/api/data/berkas",
    fetcher
  );

  if (error)
    return {
      title: "Data gagal untuk dimuat",
      description: "Data gagal untuk dimuat",
      link: "#",
    };

  if (!data)
    return {
      title: "Data sedang dimuat",
      description: "Data sedang dimuat",
      link: "#",
    };

  return data;
}

function Home() {
  const daftarberkas = GetDataBerkas();
  const pinnedPost = [];

  for (let i = 0; i < daftarberkas.length; i += 1) {
    pinnedPost.push(
      <CardLinks
        key={i}
        title={daftarberkas[i].nama}
        description={daftarberkas[i].jenis}
        links={daftarberkas[i].tautan}
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
      <Header title="Akses Admin Berkas" />
      <section className="flex flex-col flex-1 py-16">
        <PageTitle
          title="Akses Administrator Sistem Informasi"
          description="Akses Administrator Sistem Informasi. Halaman ini diperuntukkan untuk akses cepat menuju berbagai dokumen yang bersifat penting. Beberapa berkas mungkin tidak dapat diakses dikarenakan anda tikda memiliki akses terhadapnya."
        />
        <div className="flex-1">
          <div className="w-full sm:max-w-xl mx-auto space-y-3">
            <SectionGrub title="Daftar Berkas Penting">
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
