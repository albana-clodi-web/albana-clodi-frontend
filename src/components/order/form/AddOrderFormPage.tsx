import PageMeta from "../../common/PageMeta.tsx";
import OrderPageBreadcrumb from "../../../pages/Order/OrderPageBreadcrumb.tsx";
import ComponentCard from "../../common/ComponentCard.tsx";
import Label from "../../form/Label.tsx";
import Input from "../../form/input/InputField.tsx";
import Select from "../../form/Select.tsx";
import DatePicker from "../../form/date-picker.tsx";
import TableAddOrder from "../table/TableAddOrder.tsx";
import Button from "../../ui/button/Button.tsx";
import { IoIosSave } from "react-icons/io";
import { useState } from "react";
import ModalAddCustomer from "../modal/ModalAddcustomer.tsx";

export default function AddOrderFomPage() {
  const [showModal, setShowModal] = useState(false);

  const salesChannelsOptions = [
    { value: "shopee", label: "Shopee" },
    { value: "tokopedia", label: "Tokopedia" },
  ];

  const senderOptions = [
    {
      value: "fina albanaa | Sanan Wetan, Kota Blitar",
      label: "fina albanaa | Sanan Wetan, Kota Blitar",
    },
  ];

  const paymentOptions = [
    { value: "belum-bayar", label: "Belum Bayar" },
    { value: "cicilan", label: "Cicilan" },
    { value: "lunas", label: "Sudah Bayar(Lunas)" },
  ];

  function handleSelectChange(value: string): void {
    throw new Error("Function not implemented.");
  }

  // const handleSelectChange = (field: string, value: string) => {
  //   // setFilter((prev) => ({ ...prev, [field]: value }));
  // };

  return (
    <div>
      <PageMeta
        title="ALBANA GROSIR"
        description="Pusat kontrol untuk semua transaksi dan pesanan pelanggan"
      />
      <OrderPageBreadcrumb pageTitle="Tambah Order" />
      <hr className="border-1 border-gray-200" />

      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Form kiri */}
          <ComponentCard title="Informasi Order" className="max-h-8/12">
            <div className="space-y-6">
              <div>
                <Label htmlFor="namaPemesan" className="font-semibold text-md">
                  Nama Pemesan
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="namaPemesan"
                    placeholder="Cari customer"
                    className="w-full"
                  />
                  <button
                    onClick={() => setShowModal(true)}
                    className="btn-secondary border p-2 text-sm rounded-lg">
                    <span className="px-1">+</span>
                    Customer
                  </button>
                </div>
              </div>

              <div>
                <Label
                  htmlFor="dikirimKepada"
                  className="font-semibold text-md">
                  Dikirim Kepada
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="namaPemesan"
                    placeholder="Cari customer"
                    className="w-full "
                  />
                  <button
                    onClick={() => setShowModal(true)}
                    className="btn-secondary border p-2 text-sm rounded-md">
                    <span className="px-1">+</span>
                    Customer
                  </button>
                </div>
              </div>
              {showModal && (
                <ModalAddCustomer changeModal={() => setShowModal(false)} />
              )}

              <div className="relative">
                <Label
                  htmlFor="pengirimanDari"
                  className="font-semibold text-md">
                  Pengiriman Dari
                </Label>
                <Select
                  options={senderOptions}
                  onChange={handleSelectChange}
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

              <div>
                <DatePicker
                  id="date-picker"
                  label="Tanggal Order"
                  placeholder="Select a date"
                  onChange={(dates, currentDateString) => {
                    // Handle your logic
                    console.log({ dates, currentDateString });
                  }}
                />
              </div>

              <div className="relative">
                <Label className="font-semibold text-md">Sales Channel</Label>
                <Select
                  options={salesChannelsOptions}
                  placeholder="Pilih sales Channels"
                  onChange={handleSelectChange}
                  className="dark:bg-dark-900"
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

              <div>
                <Label htmlFor="note" className="font-semibold text-md">
                  Catatan
                </Label>
                <textarea
                  id="note"
                  className="input h-30 w-full border border-gray-400 rounded-lg bg-gray-100"
                />
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Add To Print Label
                  </label>
                </div>
              </div>
            </div>
          </ComponentCard>

          {/* Detail Order */}
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-2xl border p-4 border-gray-200 bg-white dark:border-gray-800 dark:bg-hite/[0.03]">
              <Input placeholder="Cari produk" className="w-full my-2" />
            </div>

            <ComponentCard title="Orderan">
              <TableAddOrder />
            </ComponentCard>

            {/* Status Pembayaran */}
            <ComponentCard title="Pembayaran">
              <div className="w-full relative">
                <label className="text-left font-semibold mb-1 block">
                  Status Pembayaran
                </label>
                <div className="relative my-4">
                  <Select
                    onChange={(value) =>
                      handleSelectChange("paymentStatus", value)
                    }
                    options={[...paymentOptions]}
                    className="w-full h-10 pr-10 pl-3 rounded-md border border-gray-300 dark:bg-dark-900 dark:text-white text-sm appearance-none"
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
            </ComponentCard>

            {/* Tombol Aksi */}
            <div className="flex flex-wrap justify-end gap-4 pt-2">
              <button className="flex items-center gap-1 px-3 py-1.5 text-sm border border-blue-600 text-blue-600 hover:text-white rounded-md hover:bg-blue-600 transition">
                Simpan dan tambah order baru
              </button>
              <Button>
                Simpan order
                <span>
                  <IoIosSave size={20} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
