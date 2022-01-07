import { useRouter } from "next/router";
import type { NextPage } from "next";
import Image from "next/image";
import Footer from "components/footer";
import Header from "components/header";

const Rekrutmen: NextPage = () => {
  function stringtourl(str: string) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,
      "+"
    );
    str = str.replace(/-+-/g, "+"); //thay thế 2- thành 1-
    str = str.replace(/^\-+|\-+$/g, "");
    return str;
  }
  const router = useRouter();
  const unduhFormulir = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const nim: number = event.target.nim.value;
    const nama: string = event.target.name.value;
    router.push(
      `https://wa.me/6285748250120?text=%2ADAFTAR+HMJ+TEP+UM+2022%2A%0D%0A%0D%0A${nim}%2F${stringtourl(
        nama
      )}%2FOFFERING%2FANGKATAN%0D%0A%0D%0Akode-registrasi`
    );
  };
  return (
    <>
      <Header title="Rekrutmen Pengurus" />
      <div className="min-h-full flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8">
          <div>
            <Image
              src={"/banner-atas.png"}
              alt="banner"
              layout="responsive"
              className="mb-4"
              width={300}
              height={100}
            />
            <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Rekrutmen HMJ TEP UM
            </h1>
            <p className="mt-2 text-center text-lg text-gray-600">
              Masa Kepengurusan 2022
            </p>
          </div>
          <div>
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
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
          {/* Section Formulir */}
          <form
            className="mt-8 space-y-6"
            action="https://wa.me/6285748250120"
            method="get"
            target="_blank"
            onSubmit={unduhFormulir}
          >
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
              Unduh Formulir Pendaftaran
            </h2>
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

            <div className="shadow-sm">
              <div>
                <label
                  htmlFor="nim-check"
                  className="text-md font-semibold text-center"
                >
                  Nama Lengkap
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-800 focus:border-blue-800 focus:z-10 sm:text-sm"
                  placeholder="Nama Lengkap"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full h-12 flex items-center justify-center py-2 px-4 border border-transparent text-xl font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="flex items-center pl-3"></span>
                Unduh Formulir
              </button>
            </div>
          </form>
          <div>
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
              Timeline Pendaftaran
            </h2>
            <ul className="mt-2 mx-4 text-sm list-disc text-gray-600">
              <li>
                <b>07 - 14 Januari</b> : Pengambilan dan pengembalian formulir
              </li>
              <li>
                <b>15 - 17 Januari</b> : Tes Wawancara
              </li>
              <li>
                <b>19 Januari </b>: Pengumuman hasil open recruitment
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
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
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
              Penjelasan Divisi
            </h2>
            <h3 className="mt-6 text-center text-lg font-extrabold text-gray-900">
              Divisi Penalaran
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Divisi Penalaran merupakan divisi yang bergerak pada pengembangan
              sumber daya manusia (PSDM) dibidang akademik dengan ranah
              Pendidikan,Penelitian,Pelatihan,dan pengembangan (4P). Tujuan
              utama divisi penalaran adalah mengembangkan taraf intelektual dan
              kompetensi kognitif dari mahasiswa TEP.
            </p>
            <h3 className="mt-6 text-center text-lg font-extrabold text-gray-900">
              Divisi Bakmin
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Divisi Bakat Minat (Bakmin) merupakan divisi yang berfungsi
              sebagai wadah untuk menyalurkan bakat maupun minat yang dimiliki
              oleh mahasiswa Teknologi Pendidikan pada bidang non akademik.
              Dalam tugasnya, Divisi Bakmin juga bekerja sama dengan komunitas
              yang ada di Jurusan Teknologi Pendidikan untuk mengadakan kegiatan
              yang dapat menyalurkan bakat dan minat mahasiswa Teknologi
              Pendidikan.
            </p>
            <h3 className="mt-6 text-center text-lg font-extrabold text-gray-900">
              Divisi Humas
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Divisi Hubungan Masyarakat (Humas) merupakan divisi yang
              menjembatani dan memfasilitasi komunikasi antar komponen jurusan.
              Peran Divisi Humas sendiri yaitu memperkenalkan jurusan Teknologi
              Pendidikan kepada mahasiswa baru dan masyarakat umum melalui
              berbagai macam kegiatan-kegiatan yang akan diadakan.
            </p>
            <h3 className="mt-6 text-center text-lg font-extrabold text-gray-900">
              Divisi Wirakesma
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Divisi Wirakesma merupakan divisi yang berjalan di bidang
              kewirausahaan dan kesejahteraan mahasiswa Jurusan Teknologi
              Pendidikan. Tujuan pokok dari Divisi Wirakesma adalah mendatangkan
              profit untuk HMJ TEP yang nantinya digunakan sebagai pendanaan
              program kegiatan tahunan serta memberikan pelayanan kesejahteraan
              bagi mahasiswa TEP.
            </p>
            <h3 className="mt-6 text-center text-xl font-extrabold text-gray-900">
              Divisi Medkominfo
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Medkominfo atau media komunikasi dan informasi merupakan divisi
              yang bergerak pada bidang media digital dalam mengelola dan
              menyebarkan informasi kepada mahasiswa jurusan maupun luar Jurusan
              Teknologi Pendidikan. Tujuannya adalah menyajikan berbagai
              informasi digital mengenai kegiatan yang ada di Jurusan Teknologi
              Pendidikan, serta menjalin kerja sama melalui media sosial.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rekrutmen;
