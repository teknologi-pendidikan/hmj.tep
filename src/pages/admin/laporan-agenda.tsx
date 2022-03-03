import { NextPage } from "next";
import { Header, SEO, PageTitle } from "components";

const laporanAgenda: NextPage = () => {
  return (
    <main className="flex flex-col w-full min-h-screen bg-neutral-100">
      <SEO
        title="Panduan: Pelaporan Agenda"
        description="Tata cara pelaporan hasil pelaksanaan agenda"
        image=""
      />
      <Header title="Pelaporan Agenda" />
      <div className="flex flex-col flex-1 py-16">
        <PageTitle
          title="Tatacara pelaporan hasil agenda"
          description="Halaman ini berisi panduan serta template berkas pelaporan kinerja agenda yang telah dilaksanakan oleh masih - masing divisi"
        />
        <article>
          <div id="template-agenda" className="px-4 pt-4 pb-4">
            <h2 className="text-2xl font-extrabold text-gray-900">
              1. Template Laporan Kinerja Agenda
            </h2>
            <p className="mt-4">
              Template Laporan Kinerja Agenda dapat diunduh melalui tombol di
              bawah ini. Silahkan untuk mengisikan template tersebut sesuai
              dengan panduan yang diberikan di dalam template. Contoh pengisian
              lembar dapat dilihat di{" "}
              <a
                className="underline text-brand-100 hover:font-bold"
                href="https://drive.google.com/file/d/1GyVDwtc_RyJ7yhsGj_B-PElGgj6G6D5L/view?usp=sharing"
              >
                lembar PDF ini.
              </a>
            </p>
          </div>
          <section className="overflow-hidden">
            <div className="px-4 pb-6 text-center">
              <a
                className="bg-brand-100 flex flex-row px-4 py-2 text-base items-center justify-center border border-transparent font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 text-white hover:bg-neutral-600 focus:ring-neutral-500 disabled:cursor-not-allowed disabled:opacity-75"
                href="https://docs.google.com/document/d/1GWY3dUyq2uA2sKJeJAIE0_MZ3ve8GKSf/edit?usp=sharing&ouid=103885318911030508624&rtpof=true&sd=true"
              >
                Unduh Template Laporan Kinerja Agenda
              </a>
            </div>
          </section>
          <div id="unggah-laporan-kinerja" className="px-4 pt-4 pb-4">
            <h2 className="text-2xl font-extrabold text-gray-900">
              2. Unggah Berkas Laporan Kinerja
            </h2>
            <p className="mt-4">
              Setelah mengisi template laporan kinerja, silakan untuk mengunggah
              berkas tersebut melalui google form yang sudah disediakan di
              bawah.
            </p>
          </div>
          <section className="overflow-hidden">
            <div className="px-4 py-6 text-center bg-brand-100">
              <a
                className="bg-white flex flex-row px-4 py-2 text-base items-center justify-center border border-transparent font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 text-black hover:bg-neutral-600 focus:ring-neutral-500 disabled:cursor-not-allowed disabled:opacity-75"
                href="https://forms.gle/vx2cJbvyaYGYDbjDA"
              >
                Unggah Berkas Laporan Kinerja Agenda
              </a>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
};

export default laporanAgenda;
