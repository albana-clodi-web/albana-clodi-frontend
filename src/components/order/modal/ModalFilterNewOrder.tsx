import ReactDOM from "react-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Button from "../../ui/button/Button";
import Select from "../../form/Select";
import Label from "../../form/Label";

type Props = {
  changeModal: () => void;
};

export default function ModalFilterNewOrder({ changeModal }: Props) {
  const handleFilter = () => {
    // Handle filter logic here
    console.log("Applying filter...");
  };

  const handleReset = () => {
    // Handle reset logic here
    console.log("Resetting filter...");
  };

  const StatusPaymentOptions = [
    { value: "all", label: "Semua Status" },
    { value: "waiting-payment", label: "Menunggu Pembayaran" },
    { value: "confirmed", label: "Konfirmasi" },
  ];

  const UserOptions = [
    { value: "all", label: "Semua Status" },
    { value: "waiting-payment", label: "Menunggu Pembayaran" },
    { value: "confirmed", label: "Konfirmasi" },
  ];

  const SalesChannelOptions = [
    { value: "privor", label: "Privor" },
    { value: "storefront", label: "Storefront" },
    { value: "quick-order", label: "Quick Order" },
    { value: "shopee", label: "Shopee" },
    { value: "bukalapak", label: "Bukalapak" },
    { value: "tokopedia", label: "Tokopedia" },
    { value: "lazada", label: "Lazada" },
    { value: "tiktok-shop", label: "TikTok Shop" },
    { value: "bestforless", label: "BestforLess" },
  ];

  return ReactDOM.createPortal(
    <div className="fixed z-[100000] inset-0 overflow-y-auto ">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-40"></div>
        <div className="bg-white rounded-xl shadow-lg z-50 w-full max-w-4xl p-6 relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Filter</h2>
            <button
              onClick={changeModal}
              className="text-gray-500 hover:text-gray-500">
              <IoIosCloseCircleOutline size={28} />
            </button>
          </div>
          <hr className="pt-0 pb-3 border-gray-300 dark:border-gray-700" />

          {/* Form */}
          <div className="space-y-2">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="relative">
                <Label
                  htmlFor="pengirimanDari"
                  className="font-semibold text-md">
                  Keterangan
                </Label>
                <Select
                  options={StatusPaymentOptions}
                  onChange={""}
                  placeholder="Pilih Pengirim"
                  className="w-full h-10 pr-10 rounded-md border border-gray-300 dark:bg-dark-900"
                />
                <span className="pointer-events-none absolute right-3 bottom-1 -translate-y-1/2 text-gray-400">
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

              <div className="relative">
                <Label
                  htmlFor="pengirimanDari"
                  className="font-semibold text-md">
                  Kategori Pemesan
                </Label>
                <Select
                  options={UserOptions}
                  onChange={""}
                  placeholder="Pilih Kategori Pemesan"
                  className="w-full h-10 pr-10 rounded-md border border-gray-300 dark:bg-dark-900"
                />
                <span className="pointer-events-none absolute right-3 bottom-1 -translate-y-1/2 text-gray-400">
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

              <div className="relative">
                <Label
                  htmlFor="pengirimanDari"
                  className="font-semibold text-md">
                  Kanal Penjualan
                </Label>
                <Select
                  options={SalesChannelOptions}
                  onChange={""}
                  placeholder="Pilih Kanal Penjualan"
                  className="w-full h-10 pr-10 rounded-md border border-gray-300 dark:bg-dark-900"
                />
                <span className="pointer-events-none absolute right-3 bottom-1 -translate-y-1/2 text-gray-400">
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
          <hr className="my-5 border-gray-300 dark:border-gray-700" />
          <div className="flex items-center justify-start gap-3 px-2 mt-6">
            <Button size="sm" variant="outline" onClick={handleReset}>
              Kembali
            </Button>
            <Button size="sm" onClick={handleFilter}>
              Gunakan Filter
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
