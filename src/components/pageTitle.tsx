import React, { PropsWithChildren } from "react";

export interface Props {
  title: string;
  description: string;
}

export default function PageTitle(
  Props: PropsWithChildren<Props>
): JSX.Element {
  return (
    <>
      <header className="w-full sm:max-w-xl mx-auto">
        <div id="header" className="px-4 pt-4 pb-4">
          <h1 className="text-3xl font-bold">{Props.title}</h1>
          <p className="mt-4">{Props.description}</p>
        </div>
      </header>
    </>
  );
}
