import { FilterState } from "../../service/product";
import Label from "../form/Label";
import Select from "../form/Select";
import Button from "./button/Button";

type Props = {
  setFilter: React.Dispatch<React.SetStateAction<FilterState>>;
  onFilter: () => void;
};

export default function FilterProduk({ setFilter, onFilter }: Props) {
  const kategoriOptions = [
    { value: "semua", label: "Semua" },
    { value: "uncategorized", label: "Uncategorized" },
    { value: "diarsipkan", label: "Diarsipkan" },
  ];

  const channelOptions = [{ value: "semua", label: "Semua Channel" }];

  const hargaOptions = [
    { value: "semua", label: "Semua" },
    { value: "belum-diatur", label: "Harga Belum Diatur" },
    { value: "harga-sama", label: "Harga Modal = Harga Jual" },
  ];

  const tipeOptions = [
    { value: "BARANG_STOK_SENDIRI", label: "Barang Stock Sendiri" },
    { value: "BARANG_SUPPLIER_LAIN", label: "Barang Suplier Lain" },
    { value: "BARANG_PRE_ORDER", label: "Barang Pre-Order" },
  ];

  const urutanOptions = [
    { value: "terbaru", label: "Terbaru" },
    { value: "terlama", label: "Terlama" },
    { value: "a-z", label: "A-Z" },
    { value: "z-a", label: "Z-A" },
    { value: "harga-termahal", label: "Harga Mahal ke Murah" },
    { value: "harga-termurah", label: "Harga Murah ke Mahal" },
    { value: "populer", label: "Populer" },
  ];

  const produkMarketplace = [{ value: "semua", label: "" }];

  const filters = [
    { label: "Kategori", name: "kategori", options: kategoriOptions },
    { label: "Channel", name: "channel", options: channelOptions },
    { label: "Harga", name: "harga", options: hargaOptions },
    { label: "Tipe", name: "type", options: tipeOptions },
    { label: "Urutan", name: "urutan", options: urutanOptions },
    {
      label: "Produk Marketplace",
      name: "marketplace",
      options: produkMarketplace,
    },
  ];

  const handleSelectChange = (field: string, value: string) => {
    setFilter((prev) => ({ ...prev, [field]: value }));
  };

  const resetFilters = () => {
    setFilter({
      kategori: "",
      channel: "",
      harga: "",
      type: "",
      urutan: "",
      produkMarketplace: "",
      order: "asc",
    });
    const newUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, newUrl);
    window.location.reload();
  };

  return (
    <div
      className={`rounded-2xl mt-5 mb-5 border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] `}
    >
      <div className="p-3 border-t border-gray-100 dark:border-gray-800 ">
        <div className="space-y-6 flex-col gap-5 ">
          <div className="flex flex-wrap gap-6 ">
            {filters.map(({ label, name, options }) => (
              <div
                key={name}
                className="flex-1 max-md:min-w-[200px]  sm:min-w-[400px]"
              >
                <Label className="text-left font-bold">{label}</Label>
                <Select
                  options={options}
                  placeholder={`Pilih ${label}`}
                  onChange={(value) => handleSelectChange(name, value)}
                  className="dark:bg-dark-900"
                />
              </div>
            ))}
          </div>
        </div>
        <hr className="mt-4 border-t-4 border-black dark:border-brand-500" />
      </div>
      <div className="flex gap-3 justify-end pb-3 pr-3">
        <Button onClick={resetFilters}>Reset Filter</Button>

        <Button onClick={onFilter}>Terapkan FIlter</Button>
      </div>
    </div>
  );
}
