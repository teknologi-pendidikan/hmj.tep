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
      <div className="artikel-terbaru border-2 rounded-md mt-4 p-4 flex bg-neutral-100 hover:cursor-pointer  hover:outline hover:outline-4">
        <div className="heading flex-1 pr-3">
          <h4 className="text-lg font-bold">{Props.title}</h4>
          <p>{Props.description}</p>
        </div>
      </div>
    </Link>
  );
}
