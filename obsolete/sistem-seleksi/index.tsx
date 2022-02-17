import { NextPage } from "next";
import { Header, Footer, SEO } from "components";
import Router from "next/router";

type dataseleksi = {
  nama: string;
  kode: string;
  divisi: string;
  angkatan: number;
  status: string;
};

const SistemSeleksi: NextPage = () => {
  // Cek Hasil System
  const cekHasil = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    //@ts-expect-error: Title are string make sureable
    const nim: string = event.target.nim.value;
    const dataseleksi: {
      [index: string]: dataseleksi;
      // eslint-disable-next-line @typescript-eslint/no-var-requires
    } = require("data/seleksi.json");

    if (!dataseleksi[nim]) {
      alert("NIM tidak ditemukan");
      return;
    }

    if (dataseleksi[nim].status === "Tidak Lolos") {
      alert(`Maaf ${dataseleksi[nim].nama}, anda tidak lolos seleksi. \n
      TETAP SEMANGAT dan carilah tempat menjelajah yang lainnya.`);
      Router.push(`/sistem-seleksi/${nim}`);
    } else {
      alert(
        `Halo ${dataseleksi[nim].nama}\nSelamat kamu diterima pada divisi ${dataseleksi[nim].divisi}
------
Angkatan: ${dataseleksi[nim].angkatan}
Kode Registrasi: ${dataseleksi[nim].kode}`
      );

      Router.push(`/sistem-seleksi/${nim}`);
    }
  };

  return (
    <>
      <SEO
        title="Sistem Informasi Seleksi"
        description=""
        image="https://hmj.tep.my.id/og-rekrutmen.png"
      />
      <Header title="Sistem Informasi Seleksi" />
      <div className="min-h-full flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8">
          <div>
            <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Pengumuman Lolos Open Recruitment
            </h1>
            <p className="mt-2 text-center text-lg text-gray-600">
              HMJ TEP UM 2022
            </p>
          </div>
          {/* Section Formulir */}
          <form
            className="mt-8 space-y-6"
            action="https://wa.me/6285748250120"
            method="get"
            target="_blank"
            onSubmit={cekHasil}
          >
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900"></h2>
            <div className="shadow-sm">
              <div>
                <label
                  htmlFor="nim-check"
                  className="text-md font-semibold text-center"
                >
                  Masukkan NIM
                </label>
                <input
                  id="nim"
                  name="nim"
                  type="number"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-800 focus:border-blue-800 focus:z-10 sm:text-sm"
                  placeholder="Nomor Induk Mahasiswa"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full h-12 flex items-center justify-center py-2 px-4 border border-transparent text-xl font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="flex items-center pl-3"></span>
                Lihat Hasil
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SistemSeleksi;
