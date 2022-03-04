/* eslint-disable @next/next/no-html-link-for-pages */
export default function Navigation(): JSX.Element {
  return (
    <nav className="flex items-center justify-center fixed bottom-0 w-full h-16 px-2 bg-white border-t border-gray-300 z-40">
      <div className="flex items-center justify-center w-full max-w-xl mx-auto">
        <ul className="flex items-center justify-evenly w-full">
          <li className="relative">
            <a
              className="inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-gray-600 hover:text-blue-600"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              <span className="text-xs truncate">Beranda</span>
            </a>
          </li>
          <li className="relative">
            <a
              className="inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-gray-600 hover:text-blue-600"
              href="/data"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="text-xs truncate">Pusat Data</span>
            </a>
          </li>
          <li className="relative">
            <a
              className="inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-gray-600 hover:text-blue-600"
              href="/informasi"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <span className="text-xs truncate">Info Umum</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
