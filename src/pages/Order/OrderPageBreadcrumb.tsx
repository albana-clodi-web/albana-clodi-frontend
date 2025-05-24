import { Link } from "react-router";
import { IoChevronBackSharp } from "react-icons/io5";
interface BreadcrumbProps {
  pageTitle: string;
}

const ProdukPageBreadcrumb: React.FC<BreadcrumbProps> = ({ pageTitle }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
      <div className="flex gap-2 items-center justify-between">
        <Link to={"/order"}>
          <button className="p-1.5 rounded-md bg-gray-200 hover:bg-gray-400 dark:hover:bg-amber-700 transition-colors">
            <IoChevronBackSharp className="w-auto h-7 dark:text-amber-50 text-gray-500" />
          </button>
        </Link>

        <h2
          className="text-xl font-semibold text-gray-800 dark:text-white/90"
          x-text="pageName">
          {pageTitle}
        </h2>
      </div>

      <nav>
        <ol className="flex items-center gap-1.5">
          <li>
            <Link
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
              to="/">
              Home
              <svg
                className="stroke-current"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                  stroke=""
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
              to="/order">
              Halaman order
              <svg
                className="stroke-current"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                  stroke=""
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
          <li className="text-sm text-gray-800 dark:text-white/90 ">
            {pageTitle}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default ProdukPageBreadcrumb;
