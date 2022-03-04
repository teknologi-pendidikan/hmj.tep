import Link from "next/link";
import React, { PropsWithChildren } from "react";

export interface Props {
  title: string;
  description: string;
  links: string;
}

export default function CardInformasi(
  Props: PropsWithChildren<Props>
): JSX.Element {
  return (
    <Link href={`${Props.links}`} passHref>
      <article className="border border-gray-200 rounded-md p-4 space-y-4 hover:border-brand-100 hover:cursor-pointer">
        <div className="space-y-2">
          <div className="flex flex-row text-base">
            <h3 className="flex-1 font-semibold text-gray-700 truncate">
              {Props.title}
            </h3>
          </div>
          <div className="text-gray-600 text-sm">
            <p>{Props.description}</p>
          </div>
        </div>
        <a
          className="flex flex-row-reverse px-4 py-2 text-sm rounded-md items-center justify-center border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 text-brand-500 border-brand-500 hover:bg-blue-100 focus:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-75"
          href={Props.links}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            className="ml-2 -mr-1 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
          Baca Pengumuman
        </a>
      </article>
    </Link>
  );
}
