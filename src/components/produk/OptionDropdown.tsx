import { useEffect, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { Dropdown } from "../ui/dropdown/Dropdown";
import Button from "../ui/button/Button";
import { Link } from "react-router";

export default function OptionDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <div className="relative">
      <Button
        onClick={toggleDropdown}
        size={isMobile ? "sm" : "md"}
        variant="primary"
        startIcon={<AiOutlineBars className="size-5" />}
        className="dropdown-toggle"
      ></Button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
      >
        <ul className="flex flex-col gap-1 pb-3 border-b border-gray-200 dark:border-gray-800">
          <li>
            <Link
              to="/upload/form_upload"
              className="flex items-center gap-3 px-3 py-2 mt-3 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <svg
                className="fill-gray-500 group-hover:fill-gray-700 dark:group-hover:fill-gray-300"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M18.18 8.03933L18.6435 7.57589C19.4113 6.80804 20.6563 6.80804 21.4241 7.57589C22.192 8.34374 22.192 9.58868 21.4241 10.3565L20.9607 10.82M18.18 8.03933C18.18 8.03933 18.238 9.02414 19.1069 9.89309C19.9759 10.762 20.9607 10.82 20.9607 10.82M18.18 8.03933L13.9194 12.2999C13.6308 12.5885 13.4865 12.7328 13.3624 12.8919C13.2161 13.0796 13.0906 13.2827 12.9882 13.4975C12.9014 13.6797 12.8368 13.8732 12.7078 14.2604L12.2946 15.5L12.1609 15.901M20.9607 10.82L16.7001 15.0806C16.4115 15.3692 16.2672 15.5135 16.1081 15.6376C15.9204 15.7839 15.7173 15.9094 15.5025 16.0118C15.3203 16.0986 15.1268 16.1632 14.7396 16.2922L13.5 16.7054L13.099 16.8391M13.099 16.8391L12.6979 16.9728C12.5074 17.0363 12.2973 16.9867 12.1553 16.8447C12.0133 16.7027 11.9637 16.4926 12.0272 16.3021L12.1609 15.901M13.099 16.8391L12.1609 15.901"
                    stroke="#1C274C"
                    stroke-width="1.5"
                  ></path>{" "}
                  <path
                    d="M8 13H10.5"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M8 9H14.5"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M8 17H9.5"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157M21 14C21 17.7712 21 19.6569 19.8284 20.8284M4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284M19.8284 20.8284C20.7715 19.8853 20.9554 18.4796 20.9913 16"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
              Upload Excel
            </Link>
          </li>
          <li>
            <Link
              to="/kategori_produk"
              className="flex items-center gap-3 px-3 py-2 mt-3 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <svg
                className="fill-gray-500 group-hover:fill-gray-700 dark:group-hover:fill-gray-300"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="m74 42a2 2 0 0 1 2 1.85v28.15a6 6 0 0 1 -5.78 6h-40.22a6 6 0 0 1 -6-5.78v-28.22a2 2 0 0 1 1.85-2zm-15.5 8.34-.12.1-11.45 12.41-5.2-5a1.51 1.51 0 0 0 -2-.1l-.11.1-2.14 1.92a1.2 1.2 0 0 0 -.1 1.81l.1.11 7.33 6.94a3.07 3.07 0 0 0 2.14.89 2.81 2.81 0 0 0 2.13-.89l5.92-6.29.43-.44.42-.45.55-.58.21-.22.42-.44 5.62-5.93a1.54 1.54 0 0 0 .08-1.82l-.08-.1-2.14-1.92a1.51 1.51 0 0 0 -2.01-.1zm15.5-28.34a6 6 0 0 1 6 6v6a2 2 0 0 1 -2 2h-56a2 2 0 0 1 -2-2v-6a6 6 0 0 1 6-6z"></path>
                </g>
              </svg>
              Kategori Produk
            </Link>
          </li>
          <li>
            <Link
              to="/produk/barcode_sku"
              className="flex items-center gap-3 px-3 py-2 mt-3 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <svg
                className="fill-gray-500 group-hover:fill-gray-700 dark:group-hover:fill-gray-300"
                width="30"
                height="25"
                fill="none"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>barcode1</title>{" "}
                  <path d="M23.807 19.398h-1.758v0.586h1.758v-0.586zM17.248 21.156v0.586h1.758v0.586h0.586v-2.344h-0.586v1.172h-1.758zM17.248 23.5h1.172v-0.586h-1.172v0.586zM18.42 22.914h0.586v-0.586h-0.586v0.586zM17.248 19.984h-0.586v1.172h0.586v-1.172zM14 8h-2v10h2v-10zM16 8h-1v10h1v-10zM22.049 23.5h1.758v-0.586h-1.758v0.586zM19.006 19.398h-1.758v0.586h1.758v-0.586zM24.393 22.914v-2.93h-0.586v2.93h0.586zM25 8h-1v10h1v-10zM12.448 22.328h-0.586v0.586h0.586v-0.586zM20 8h-2v10h2v-10zM22 8h-1v10h1v-10zM21.463 22.914h0.586v-2.93h-0.586v2.93zM7.062 23.5h2.93v-0.586h-2.344v-0.586h-0.586v1.172zM7.062 20.57h0.586v-0.586h-0.586v0.586zM8.234 21.742h1.172v-0.586h-1.172v0.586zM13.034 21.156v0.586h1.172v-0.586h-1.172zM7.648 19.398v0.586h1.758v-0.586h-1.758zM8 8h-1v10h1v-10zM30 4h-28c-1.104 0-2 0.896-2 2v20c0 1.104 0.896 2 2 2h28c1.104 0 2-0.896 2-2v-20c0-1.104-0.896-2-2-2zM30 26h-28v-20h28v20zM6 8h-2v16h2v-16zM7.648 22.328h0.586v-0.586h-0.586v0.586zM14.792 19.984h-0.586v1.172h0.586v-1.172zM12.448 19.398v0.586h1.758v-0.586h-1.758zM9.992 21.156v-1.172h-0.586v1.172h0.586zM11.862 20.57h0.586v-0.586h-0.586v0.586zM11 8h-1v10h1v-10zM14.792 21.742h-0.586v1.172h0.586v-1.172zM14.206 23.5v-0.586h-1.758v0.586h1.758zM28 8h-2v16h2v-16z"></path>{" "}
                </g>
              </svg>
              Cetak Barcode Produk
            </Link>
          </li>
        </ul>
      </Dropdown>
    </div>
  );
}
