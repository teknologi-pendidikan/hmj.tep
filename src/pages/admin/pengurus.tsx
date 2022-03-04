import useSWR from "swr";

import {
  Header,
  Footer,
  SEO,
  PageTitle,
  CardLinks,
  SectionGrub,
} from "components";

function GetPengurus() {
  const fetcher = (url: RequestInfo) =>
    fetch(url, { mode: "cors" }).then((r) => r.json());
  const { data, error } = useSWR(
    "https://hmdtep-api.azurewebsites.net/api/data/pengurus",
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
  const daftarpengurus = GetPengurus();
  const pinnedPost = [];

  for (let i = 0; i < daftarpengurus.length; i += 1) {
    const desc = `${daftarpengurus[i].grub} | ${daftarpengurus[i].divisi}`;
    const link = `mailto: ${daftarpengurus[i].email}`;
    pinnedPost.push(
      <CardLinks
        key={daftarpengurus[i].nim}
        title={daftarpengurus[i].nama}
        description={desc}
        links={link}
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
      <Header title="Akses Daftar Pengurus" />
      <section className="flex flex-col flex-1 py-16">
        <PageTitle
          title="Akses Administrator Sistem Informasi"
          description="Akses Administrator Sistem Informasi. Halaman ini diperuntukkan untuk akses cepat menuju berbagai dokumen yang bersifat penting. Beberapa berkas mungkin tidak dapat diakses dikarenakan anda tikda memiliki akses terhadapnya."
        />
        <div className="flex-1">
          <div className="w-full sm:max-w-xl mx-auto space-y-3">
            <SectionGrub title="Daftar Pengurus">{pinnedPost}</SectionGrub>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
