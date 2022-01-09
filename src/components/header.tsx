// @ts-expect-error: Title are string make sureable
export default function Header({ title }): JSX.Element {
  return (
    <>
      <div id="nav" className="bg-gray-200 py-4 px-8 flex gap-4 items-center">
        <p className="text-xl">{title}</p>
      </div>
    </>
  );
}
