interface LayoutProps {
  children: React.ReactNode;
}

export default function IndexHeader({ children }: LayoutProps): JSX.Element {
  return (
    <section className="overflow-hidden">
      <div className="bg-brand-100 px-4 py-6 text-center">
        <h2 className="text-lg sm:text-xl font-semibold sm:mx-6 text-white">
          Informasi Publik, Kerjasama, Mediapartner dan Kegiatan
        </h2>
        <a
          className="flex flex-row px-4 py-2 text-base items-center justify-center border border-transparent font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 text-black bg-white hover:bg-neutral-600 focus:ring-neutral-500 disabled:cursor-not-allowed disabled:opacity-75 mt-4"
          href="https://wa.me/628972973121"
        >
          Hubungi HUMAS HMD TEP
        </a>
      </div>
      {children}
    </section>
  );
}
