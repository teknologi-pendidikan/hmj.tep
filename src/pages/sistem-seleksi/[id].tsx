import React from "react";
import { InferGetServerSidePropsType } from "next";
import { SEO, Header, Footer } from "components";
import Router from "next/router";

export interface Props {
  params: {
    id: string;
  };
}

type dataseleksi = {
  nama: string;
  kode: string;
  divisi: string;
  angkatan: number;
  status: string;
};

export const getServerSideProps = async (context: Props) => {
  const id = context.params.id;

  return {
    props: {
      id,
    },
  };
};

function HasilSeleksi({
  id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  let element = <div className="text-center"></div>;

  const dataseleksi: {
    [index: string]: dataseleksi;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
  } = require("data/seleksi.json");

  if (!dataseleksi[id]) {
    alert("NIM tidak ditemukan");
    return;
  }

  if (dataseleksi[id].status === "Tidak Lolos") {
    element = (
      <div className="mx-4 lg:mx-64 min-h-full flex flex-col items-center justify-center py-6 px-4 sm:px-6 lg:px-8 rounded-md border-8 border-blue-500">
        <div className="mt-4 text-center text-3xl font-bold text-gray-900">
          {dataseleksi[id].nama}
          <p className="mt-4 text-xl font-bold text-gary-500">
            Belum Lolos Seleksi
          </p>
          <p className="mt-4 text-xl font-semibold">
            JANGAN PUTUS ASA dan TETAP SEMANGAT
          </p>
        </div>
      </div>
    );
  } else if (dataseleksi[id].status === "Lolos") {
    element = (
      <div className="mx-4 lg:mx-64 min-h-full flex flex-col items-center justify-center py-6 px-4 sm:px-6 lg:px-8 rounded-md border-8 border-green-500">
        <div className="mt-4 text-center text-3xl font-bold text-gray-900">
          {dataseleksi[id].nama}
          <p className="mt-4 text-xl font-bold text-gary-500">
            LOLOS SELEKSI OPEN RECRUITMENT
          </p>
          <p className="mt-4 text-xl font-semibold">
            Divisi:{" "}
            <span className="font-bold text-green-800">
              {dataseleksi[id].divisi}
            </span>
          </p>
        </div>
        <button
          onClick={() => {
            Router.push(
              "https://wa.me/6285748250120?text=Halo%20Saya%20ingin%20konfirmasi%20seleksi%20open%20recruitment"
            );
          }}
          type="submit"
          className="mt-4 w-full h-12 flex items-center justify-center py-2 border border-transparent text-xl font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <span className="flex items-center pl-3"></span>
          KONFIRMASI SELEKSI
        </button>
      </div>
    );
  } else {
    return;
  }
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
          {element}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HasilSeleksi;
