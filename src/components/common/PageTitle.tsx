import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { IoChevronBackSharp } from "react-icons/io5";

interface PageTitleProps {
  title: string;
  showBackButton?: boolean;
}

const PageTitle: FC<PageTitleProps> = ({ title, showBackButton = true }) => {
  const navigate = useNavigate();

  return (
    <div className="mb-6 space-y-5">
      <div className="flex items-center gap-2">
        {showBackButton && (
          <button
            onClick={() => navigate(-1)}
            className="p-1.5 rounded-md bg-gray-200 hover:bg-gray-400 dark:hover:bg-amber-700 transition-colors"
            aria-label="Go back"
          >
            <IoChevronBackSharp className="w-auto h-7 dark:text-amber-50 text-gray-500" />
          </button>
        )}
        <h2
          className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white/90"
          x-text="pageName"
        >
          {title}
        </h2>
      </div>
      <hr />
    </div>
  );
};

export default PageTitle;
