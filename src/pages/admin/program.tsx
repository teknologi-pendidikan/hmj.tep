import useSWR from "swr";

import {
  Header,
  Footer,
  SEO,
  PageTitle,
  CardLinks,
  SectionGrub,
} from "components";

function GetProgram() {
  const fetcher = (url: RequestInfo) =>
    fetch(url, { mode: "cors" }).then((r) => r.json());
  const { data, error } = useSWR(
    "https://hmdtep-api.azurewebsites.net/api/data/program",
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
  const daftarprogram = GetProgram();
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
