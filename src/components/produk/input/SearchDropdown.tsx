import React, { useEffect, useRef, useState } from "react";

type OptionDataProduk = {
  id: number;
  name: string;
};

type Props = {
  options: OptionDataProduk[];
  label: keyof OptionDataProduk;
  id: string | number;
  selectedVal: string | number;
  handleChange: (value: string) => void;
  setListProduk: React.Dispatch<React.SetStateAction<OptionDataProduk[]>>;
};

export default function SearchableDropdown({
  options,
  label,
  id,
  selectedVal,
  handleChange,
  setListProduk,
}: Props) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSelect = (option: OptionDataProduk) => {
    setQuery("");
    setIsOpen(false);
    setListProduk((prev) =>
      prev.some((item) => item.id === option.id) ? prev : [...prev, option]
    );
    handleChange(String(option[label]));
  };

  const displayValue = query || selectedVal || "";

  const filteredOptions = options.filter((option) =>
    String(option[label]).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative cursor-default" ref={wrapperRef}>
      <div className="control">
        <div className="">
          <input
            className="w-full px-[10px] pr-[52px] py-[8px] text-base leading-[1.5] bg-white border border-[#ccc] box-border cursor-default outline-none transition-all duration-200 ease-in-out rounded-lg dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
            type="text"
            placeholder="Masukkan Nama Produk"
            value={displayValue}
            name="searchTerm"
            onChange={(e) => {
              setQuery(e.target.value);
              handleChange("");
              setIsOpen(true);
            }}
            onClick={() => setIsOpen(true)}
          />
        </div>
        <div
          className={`absolute top-[14px] right-[10px] mt-[0.3rem] block w-0 h-0 border-[5px] border-solid border-t-[#999] border-x-transparent border-b-0 content-['']   ${
            isOpen ? "open" : ""
          }`}
        ></div>
      </div>

      <div
        className={`options  bg-white border border-gray-300 shadow-sm box-border mt-[-1px] max-h-[200px] overflow-y-auto absolute top-full w-full z-[1000] overflow-touch ${
          isOpen ? "open" : "hidden"
        }`}
      >
        {filteredOptions.map((option, index) => {
          return (
            <div
              onClick={() => handleSelect(option)}
              className={`option box-border cursor-pointer block p-2 hover:text-[#333333] hover:bg-[#f2f9fc] dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30${
                option[label] === selectedVal
                  ? "selected bg-[#f2f9fc] text-[#333333]"
                  : ""
              }`}
              key={`${id}-${index}`}
            >
              {option[label]}
            </div>
          );
        })}
      </div>
    </div>
  );
}
