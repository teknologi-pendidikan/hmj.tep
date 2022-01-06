import type { NextPage } from "next";

const rekrutmen: NextPage = () => {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Rekrutmen HMJ TEP UM
            </h1>
            <p className="mt-2 text-center text-lg text-gray-600">
              Masa Kepengurusan 2022
            </p>
          </div>
          <div>
            <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
              Selayang Pandang
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Telah selesai satu masa kepengurusan HMJ TEP 2021 yang telah
              sangat membekas di jurusan ini. Dengan ini maka dibukanya lembaran
              baru untuk masa kepengurusan HMJ TEP 2022. Dengan ini kami
              mengucapkan terima kasih kepada semua pihak yang telah
              berkontribusi dalam pembangunan HMJ TEP UM. Kami mengucapkan
              selamat datang bagi para calon pengurus HMJ TEP UM 2022.
            </p>
          </div>
          <div>
            <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
              Timeline Pendaftaran
            </h2>
            <ul className="mt-2 mx-4 text-sm list-disc text-gray-600">
              <li>
                <b>07 - 15 Januari</b> : Pengambilan dan pengembalian formulir
              </li>
              <li>
                <b>16 - 18 Januari</b> : Tes Wawancara
              </li>
              <li>
                <b>19 Januari </b>: Pengumuman hasil open recruitment
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
              Persyaratan
            </h2>
            <ol className="mt-2 mx-4 text-sm text-gray-600 list-decimal">
              <li>
                Mahasiswa aktif Jurusan Teknologi Pendidikan FIP UM{" "}
                <b>angkatan</b> 2020 dan 2021 (Semester 2 & Semester 4)
              </li>
              <li>
                Mengisi formulir pendaftaran secara lengkap dan dikumpulkan
                sesuai dengan <b>ketentuan</b> yang berlaku.
              </li>
              <li>Fotokopi KTM 2 lembar. </li>
              <li>
                Pas foto warna 3x4 sebanyak 2 lembar <b>menggunakan</b>{" "}
                almamater. Jika belum memiliki almamater, diharapkan menggunakan
                kemeja putih.
              </li>
            </ol>
          </div>
          <div>
            <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
              Penjelasan Divisi
            </h2>
            <h3 className="mt-6 text-center text-xl font-extrabold text-gray-900">
              Divisi Wirakesma
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Divisi Wirakesma merupakan divisi yang berjalan di bidang
              kewirausahaan dan kesejahteraan mahasiswa Jurusan Teknologi
              Pendidikan. Tujuan pokok dari Divisi Wirakesma adalah mendatangkan
              profit untuk HMJ TEP yang nantinya digunakan sebagai pendanaan
              program kegiatan tahunan serta memberikan pelayanan kesejahteraan
              bagi mahasiswa TEP
            </p>
          </div>
          {/* Section Formulir */}
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Masukkan NIM
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nomor Induk Mahasiswa"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Verifikasi NIM
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default rekrutmen;
