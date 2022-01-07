import Link from "next/link";

export default function Header({ title }) {
  return (
    <>
      <header
        id="header"
        className="bg-gray-200 py-4 px-8 flex gap-4 items-center"
      >
        <p className="text-xl">{title}</p>
      </header>
    </>
  );
}
