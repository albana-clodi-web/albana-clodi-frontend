import Select from "../../form/Select";

interface FilterOrderDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const filterOptions = [
  { value: "code", label: "Order Code" },
  { value: "customerName", label: "Nama Customer" },
  { value: "productName", label: "Nama Produk" },
  { value: "receiptNumber", label: "No Resi" },
  { value: "phoneNumber", label: "Telp Customer" },
  // { value: "sku", label: "SKU" },
  // { value: "shipperTrackingId", label: "Shipper Tracking ID" },
];

function FilterOrderDropdown(props: FilterOrderDropdownProps) {
  const { value, onChange } = props;

  const handleSelectChange = (selectedValue: string) => {
    onChange(selectedValue);
  };

  return (
    <div className="flex flex-wrap items-center gap-2 mb-3 mt-3">
      <div className="relative w-full max-w-md">
        <div>
          <Select
            defaultValue={value}
            options={filterOptions}
            onChange={handleSelectChange}
            className="max-w-md rounded-lg"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path
                d="M6 8l4 4 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default FilterOrderDropdown;
