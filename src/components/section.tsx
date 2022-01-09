import React, { PropsWithChildren } from "react";

export interface Props {
  title: string;
}

export default function SectionGrub(
  Props: PropsWithChildren<Props>
): JSX.Element {
  return (
    <div className="py-4 px-8">
      <h2 className="text-2xl font-bold">{Props.title}</h2>
      {Props.children}
    </div>
  );
}