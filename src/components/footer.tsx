import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="mt-8  px-8 pt-4 pb-28">
      <div className="pt-8 px-8 border-t-2 border-gray-200" />
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="flex justify-center font-bold text-lg">hmj.tep.my.id</h2>
        <p>Open Gate System HMJ TEP UM 2022</p>
        <a title="Netlify Sponsor" href="https://www.netlify.com">
          <Image
            src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
            alt="Deploys by Netlify"
            width="114"
            height="51"
          />
        </a>
      </div>
    </footer>
  );
}
