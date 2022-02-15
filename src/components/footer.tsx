import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="pb-28">
      <div className="pt-8 px-8 border-t-2 border-gray-200" />
      <div className="flex flex-col items-center gap-4 text-center">
        <p>Sistem Informasi Utama HMD TEP UM</p>
        <a title="Netlify Sponsor" href="https://www.netlify.com">
          <Image
            src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
            alt=""
            width="114"
            height="51"
          />
        </a>
      </div>
    </footer>
  );
}
