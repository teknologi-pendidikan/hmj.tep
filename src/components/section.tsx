import React, { PropsWithChildren } from "react";

export interface Props {
  title: string;
}

export default function SectionGrub(
  Props: PropsWithChildren<Props>
): JSX.Element {
  return (
    <div className="px-4 pb-8">
      <h2 className="text-2xl font-bold">{Props.title}</h2>
      {Props.children}
    </div>
  );
}
