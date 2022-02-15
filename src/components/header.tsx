// @ts-expect-error: Title are string make sureable
export default function Header({ title }): JSX.Element {
  return (
    <>
      <header className="flex items-center justify-center fixed w-full h-16 z-40 bg-brand-100 shadow-md">
        <div className="w-full sm:max-w-xl mx-auto flex items-center justify-between h-full px-4">
          <p className="text-xl text-neutral-200">{title}</p>
        </div>
      </header>
    </>
  );
}
