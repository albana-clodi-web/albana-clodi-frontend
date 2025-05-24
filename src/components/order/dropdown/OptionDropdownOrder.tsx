import { useEffect, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { Dropdown } from "../../ui/dropdown/Dropdown";
import Button from "../../ui/button/Button";
import { Link } from "react-router";
import { FiUpload } from "react-icons/fi";

export default function OptionDropdownOrder() {
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
        variant="outlineblue"
        startIcon={<AiOutlineBars className="size-5" />}
        className="dropdown-toggle"></Button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-2 flex w-[200px] flex-col rounded-2xl border border-gray-200 bg-white p-1 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark">
        <ul className="flex flex-col items-center justify-center gap-1 pb-3 border-gray-200 dark:border-gray-800">
          <li>
            <Link
              to="/order/import_order"
              className="flex items-center py-2 mt-3 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300">
              <FiUpload size={20} />
              Upload Order
            </Link>
          </li>
        </ul>
      </Dropdown>
    </div>
  );
}
