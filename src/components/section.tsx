import React, { PropsWithChildren } from "react";

export interface Props {
  title: string;
}

export default function SectionGrub(
  Props: PropsWithChildren<Props>
): JSX.Element {
  return (
    <section className="bg-white overflow-hidden px-4 py-6 space-y-4">
      <h2 className="text-2xl sm:text-xl font-bold">{Props.title}</h2>
      {Props.children}
    </section>
  );
}
