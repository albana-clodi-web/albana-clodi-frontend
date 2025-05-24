import { useEffect, useState } from "react";
import { Dropdown } from "../../ui/dropdown/Dropdown";

import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function DropdownCancelOrder() {
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
      <button
        onClick={toggleDropdown}
        size={isMobile ? "sm" : "md"}
        className="border border-blue-600 py-2.5 px-2 rounded-lg text-blue-600">
        <IoIosArrowDown />
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-2 flex w-[150px] flex-col rounded-2xl border border-gray-200 bg-white p-1 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark">
        <ul className="flex flex-col items-center justify-center border-gray-200 dark:border-gray-800">
          <li className="flex items-center py-2 font-medium text-red-500 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300">
            <IoClose size={20} />
            Cancel Order
          </li>
        </ul>
      </Dropdown>
    </div>
  );
}
