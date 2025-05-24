import DatePicker from "../../form/date-picker";
import Label from "../../form/Label";
import Select from "../../form/Select";
import Button from "../../ui/button/Button";

type FilterState = {
  pembayaran: string;
  pengiriman: string;
  admin: string;
  bank: string;
  kurir: string;
  pickup: string;
  salesChannels: string;
  kategoriCustomer: string;
  gudang: string;
  produk: string;
  printLabel: string;
  tanggal: string;
};

type Props = {
  filter: FilterState;
  setFilter: React.Dispatch<React.SetStateAction<FilterState>>;
  onFilter: () => void;
};
export default function FilterOrder({ filter, setFilter, onFilter }: Props) {
  const paymentOptions = [
    { value: "semua", label: "Semua" },
    { value: "belum-bayar", label: "Belum Bayar" },
    { value: "cicilan", label: "Cicilan" },
    { value: "lunas", label: "Lunas" },
  ];

  const deliveryOptions = [
    { value: "semua", label: "Semua" },
    { value: "belum-diproses", label: "Belum Diproses" },
    { value: "belum-ada-resi", label: "Belum Ada Resi" },
    { value: "dalam-pengiriman", label: "Dalam Pengiriman" },
    { value: "sampai-tujuan", label: "Sampai Tujuan" },
  ];

  const adminOptions = [
    { value: "semua", label: "Semua" },
    { value: "privor-storefront", label: "privor storefront" },
    { value: "fina-harya-muslikhak", label: "fina harya muslikhak" },
  ];

  const bankOptions = [
    { value: "semua", label: "Semua" },
    { value: "cash", label: "Cash" },
  ];

  const kurirOptions = [
    { value: "semua", label: "Semua" },
    { value: "jne", label: "JNE" },
    { value: "pos", label: "POS" },
  ];

  const pickupOptions = [
    { value: "semua", label: "Semua" },
    { value: "siap-kirim", label: "Siap Kirim" },
    { value: "pickup-request", label: "Pickup Request" },
    { value: "dikirim", label: "Dikirim" },
  ];

  const salesChannelsOptions = [
    { value: "semua", label: "Semua" },
    { value: "shopee", label: "Shopee" },
    { value: "tokopedia", label: "Tokopedia" },
  ];
  const WarehouseOptions = [
    { value: "semua", label: "Semua" },
    { value: "gudang-utama", label: "Gudang Utama" },
  ];
  const ProdukOptions = [
    { value: "semua", label: "Semua" },
    { value: "produk-sendiri", label: "Produk Sendiri" },
    { value: "supplier-lain", label: "Supplier Lain" },
    { value: "produk-preorder", label: "Produk Pre-Order" },
  ];
  const printLabelOptions = [
    { value: "semua", label: "Semua" },
    { value: "printed", label: "Printed" },
    { value: "unprinted", label: "Unprinted" },
  ];

  const tanggalOptions = [
    { value: "order", label: "Order" },
    { value: "bayar", label: "Bayar" },
  ];

  const filters = [
    { label: "Pembayaran", name: "pembayaran", options: paymentOptions },
    { label: "Pengiriman", name: "pengiriman", options: deliveryOptions },
    { label: "Admin", name: "admin", options: adminOptions },
    { label: "Bank", name: "bank", options: bankOptions },
    { label: "Kurir", name: "kurir", options: kurirOptions },
    { label: "Pickup", name: "pickup", options: pickupOptions },
    { label: "Kurir", name: "kurir", options: kurirOptions },
    {
      label: "Sales Channels",
      name: "sales-channels",
      options: salesChannelsOptions,
    },
    {
      label: "Kategori Customer",
      name: "kategori-customer",
      options: salesChannelsOptions,
    },
    { label: "Gudang", name: "gudang", options: WarehouseOptions },
    { label: "Produk", name: "produk", options: ProdukOptions },
  ];

  const toggleFilters = [
    { label: "Print Label", name: "printLabel", options: printLabelOptions },
    { label: "Tanggal", name: "tanggal", options: tanggalOptions },
  ];

  const handleSelectChange = (field: string, value: string) => {
    setFilter((prev) => ({ ...prev, [field]: value }));
  };

  const resetFilters = () => {
    setFilter({
      pembayaran: "",
      pengiriman: "",
      admin: "",
      bank: "",
      kurir: "",
      pickup: "",
      salesChannels: "",
      kategoriCustomer: "",
      gudang: "",
      produk: "",
      printLabel: "semua",
      tanggal: "order",
    });
    const newUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, newUrl);
    window.location.reload();
  };

  const saveFilter = () => {
    const filterData = JSON.stringify(
      localStorage.getItem("orderFilter") || {}
    );
    localStorage.setItem("orderFilter", filterData);
  };

  return (
    <div
      className={`rounded-2xl mt-5 mb-5 border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] `}>
      <div className="p-3 border-t border-gray-100 dark:border-gray-800 ">
        <div className="py-2 px-4 flex items-center justify-between">
          <h3 className="text-start text-xl font-semibold ">Filter Order</h3>
          <p
            onClick={resetFilters}
            className="text-md font-semibold hover:underline cursor-pointer text-blue-600">
            Reset Filter
          </p>
        </div>

        <hr className="my-4 border-gray-300" />
        <div className="flex flex-col md:flex-row gap-8 px-3">
          <div className="flex-1 space-y-6 flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filters.map(({ label, name, options }) => (
                <div key={name} className="w-full relative">
                  <Label className="text-left font-bold mb-1 block">
                    {label}
                  </Label>
                  <div className="relative">
                    <Select
                      options={options}
                      placeholder={`Pilih ${label}`}
                      onChange={(value) => handleSelectChange(name, value)}
                      className="w-full h-10 pr-10 rounded-md border border-gray-300 dark:bg-dark-900"
                    />
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20">
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
              ))}
            </div>
          </div>
          {/* Kanan */}
          <div className="flex flex-col gap-6 min-w-[300px]">
            {toggleFilters.map(({ label, name, options }) => (
              <div key={name} className="flex flex-col gap-2">
                <Label className="text-left font-bold">{label}</Label>
                <div className="flex gap-2 border border-gray-300 dark:border-gray-700 rounded-lg p-2">
                  {options.map(({ value, label: optionLabel }) => (
                    <Button
                      key={value}
                      onClick={() =>
                        setFilter((prev) => ({ ...prev, [name]: value }))
                      }
                      className={`rounded-full px-4 py-1 text-sm ${
                        name in filter &&
                        filter[name as keyof FilterState] === value
                          ? "bg-blue-600 text-white"
                          : "bg-white text-black"
                      }`}
                      variant={
                        name in filter &&
                        filter[name as keyof FilterState] === value
                          ? "primary"
                          : "outline"
                      }>
                      {optionLabel}
                    </Button>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <Label className="text-left font-bold">Range Tanggal</Label>
              <DatePicker
                id="date-picker"
                placeholder="Select a date"
                onChange={(dates, currentDateString) => {
                  // Handle your logic
                  console.log({ dates, currentDateString });
                }}
              />
            </div>
          </div>
        </div>
        <hr className="mt-4 border-gray-300 dark:border-brand-500" />
      </div>
      <div className="flex gap-3 justify-end pb-3 pr-3">
        <Button onClick={saveFilter}>Simpan Filter</Button>

        <Button onClick={onFilter}>Gunakan Filter</Button>
      </div>
    </div>
  );
}
