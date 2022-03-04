import Link from "next/link";
import React, { PropsWithChildren } from "react";

export interface Props {
  title: string;
  description: string;
  links: string;
}

export default function CardLinks(
  Props: PropsWithChildren<Props>
): JSX.Element {
  return (
    <Link href={`${Props.links}`} passHref>
      <article className="border border-gray-200 rounded-md p-4 space-y-4 hover:border-brand-100 hover:border-2 hover:cursor-pointer">
        <div className="space-y-2">
          <div className="flex flex-row text-base">
            <h3 className="flex-1 font-semibold truncate">{Props.title}</h3>
          </div>
          <div className="text-gray-600 text-sm">
            <p>{Props.description}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}
