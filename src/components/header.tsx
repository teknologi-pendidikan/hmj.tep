// @ts-expect-error: Title are string make sureable
export default function Header({ title }): JSX.Element {
  return (
    <>
      <div
        id="nav"
        className="bg-neutral-800 py-4 px-8 flex gap-4 items-center sticky"
      >
        <p className="text-xl text-neutral-200">{title}</p>
      </div>
    </>
  );
}
