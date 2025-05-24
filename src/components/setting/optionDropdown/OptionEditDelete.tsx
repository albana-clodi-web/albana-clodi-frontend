import { useCallback, useEffect, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { Dropdown } from "../../ui/dropdown/Dropdown";
import Button from "../../ui/button/Button";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

type Props = {
  setStateEdit: () => void;
  setDelete: () => void;
};

export default function OptionEditDelete({ setStateEdit, setDelete }: Props) {
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

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="relative pt-5">
      <Button
        onClick={toggleDropdown}
        size={isMobile ? "sm" : "md"}
        variant="outline"
        startIcon={<AiOutlineBars className="size-5" />}
        className="dropdown-toggle"
      ></Button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
      >
        <ul className="flex flex-col gap-1 pb-3 border-b border-gray-200 dark:border-gray-800">
          <li
            className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors"
            onClick={setStateEdit}
          >
            <FaEdit className="text-blue-500" />
            <span className="text-gray-800 dark:text-white font-medium">
              Edit
            </span>
          </li>
          <li
            className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-900 cursor-pointer transition-colors"
            onClick={setDelete}
          >
            <FaTrashAlt className="text-red-500" />
            <span className="text-gray-800 dark:text-white font-medium">
              Delete
            </span>
          </li>
        </ul>
      </Dropdown>
    </div>
  );
}
