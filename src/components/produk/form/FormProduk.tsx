import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import Select from "../../form/Select";
import Radio from "../../form/input/Radio";
import ManageProduk from "../switch/ManageProduk";
import ManagePrivorAndStorefront from "../switch/ManagePrivorAndStorefront";
import VarianProduk from "./VarianProduk";
// import GrosirProduk from "./GrosirProduk";
import Button from "../button/Button";
import GrosirProduk from "./GrosirProduk";
import { GiWeight } from "react-icons/gi";
import { CiDiscount1 } from "react-icons/ci";

type WholesaleProduct = {
  lowerLimitItem: number;
  upperLimitItem: number;
  unitPrice: number;
  wholesalerPrice: number;
};

type ProductVariant = {
  image: string;
  SKU: string;
  purchasePrice: number | null;
  regularPrice: number | null;
  resellerPrice: number | null;
  wholesalePrices: WholesaleProduct[];
  variant?: string;
  color?: string;
  stock: number | null;
};

export default function FormProduk() {
  // State For Select Kategori Produk
  const [selectedValue, setSelectedValue] = useState<string>("option1");
  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  // State for set product condition
  const [switchStates, setSwitchStates] = useState({
    varian: false,
    diskon: false,
    grosir: false,
  });

  const handleSwitchChange = (
    key: keyof typeof switchStates,
    value: boolean
  ) => {
    setSwitchStates((prev) => ({ ...prev, [key]: value }));
  };

  // Select Option
  const options = [
    { value: "marketing", label: "Marketing" },
    { value: "template", label: "Template" },
    { value: "development", label: "Development" },
  ];
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  // State For Grosir Produk
  const [wholesaleProducts, setWholesaleProducts] = useState<
    WholesaleProduct[]
  >(
    Array.from({ length: 5 }, () => ({
      lowerLimitItem: 0,
      upperLimitItem: 0,
      unitPrice: 0,
      wholesalerPrice: 0,
    }))
  );

  // State For Add Variant
  const [varian, setVarian] = useState<ProductVariant[]>(
    Array.from({ length: 1 }, () => ({
      image: "",
      SKU: "",
      purchasePrice: null,
      regularPrice: null,
      resellerPrice: null,
      wholesalePrices: wholesaleProducts,
      stock: null,
    }))
  );

  const addVariantComponent = () => {
    setVarian((prevVariant) => [
      ...prevVariant,
      {
        image: "",
        SKU: "",
        purchasePrice: null,
        regularPrice: null,
        resellerPrice: null,
        wholesalePrices: wholesaleProducts,
        stock: null,
      },
    ]);
  };

  const deleteVariant = (index: number) => {
    setVarian((prevVariant) => prevVariant.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="flex gap-4 max-xl:flex-col">
        <div className="flex flex-col gap-y-5">
          <ComponentCard title="Informasi Produk" className="md:min-w-[780px]">
            <div className="space-y-6">
              <div>
                <Label htmlFor="inputTwo">Nama Produk</Label>
                <Input
                  type="text"
                  id="inputTwo"
                  placeholder="Isi Nama Produk"
                />
              </div>
              <div>
                <Label>Kategori</Label>
                <Select
                  options={options}
                  placeholder="Pilih Kategori Produk"
                  onChange={handleSelectChange}
                  className="dark:bg-dark-900"
                />
              </div>
              <div>
                <Label>Jenis Produk</Label>
                <div className="flex flex-wrap items-center gap-8">
                  <div
                    className={`${
                      selectedValue === "option1"
                        ? "border-brand-500 bg-brand-900/25 text-brand-500"
                        : "border-gray-300 text-gray-600"
                    } w-50 h-20 border-2 rounded-2xl flex-1`}
                  >
                    <Radio
                      id="radio1"
                      name="group1"
                      value="option1"
                      checked={selectedValue === "option1"}
                      onChange={handleRadioChange}
                      label="Barang Stock Sendiri"
                      className="p-2 w-50 h-20"
                    />
                  </div>

                  <div
                    className={`${
                      selectedValue === "option2"
                        ? "border-brand-500 bg-brand-900/25 text-brand-500"
                        : "border-gray-300 text-gray-600"
                    } w-50 h-20 border-2 rounded-2xl flex-1`}
                  >
                    <Radio
                      id="radio2"
                      name="group1"
                      value="option2"
                      checked={selectedValue === "option2"}
                      onChange={handleRadioChange}
                      label="Barang Suplier Lain"
                      className="p-2 w-50 h-20"
                    />
                  </div>

                  <div
                    className={`${
                      selectedValue === "option3"
                        ? "border-brand-500 bg-brand-900/25 text-brand-500"
                        : "border-gray-300 text-gray-600"
                    } w-50 h-20 border-2 rounded-2xl flex-1`}
                  >
                    <Radio
                      id="radio3"
                      name="group1"
                      value="option3"
                      checked={selectedValue === "option3"}
                      onChange={handleRadioChange}
                      label="Barang Pre-Order"
                      className="p-2 w-50 h-20"
                    />
                  </div>
                </div>
              </div>
              <div>
                <Label>Deskripsi Produk</Label>
                <textarea
                  id="productDescription"
                  placeholder="Tulis deskripsi produk di sini..."
                  className="w-full h-32 mt-2 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-dark-900 dark:text-white dark:border-gray-700 resize-none"
                />
              </div>
              <div className="flex gap-5">
                <div>
                  {" "}
                  <Label>Berat</Label>
                  <div className="relative">
                    <Input
                      placeholder="Berat (kg)"
                      type="number"
                      min="0"
                      className="pl-[62px] appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none border p-2 rounded"
                    />
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                      <GiWeight className="size-6" />
                    </span>
                  </div>
                </div>
                {switchStates.diskon ? (
                  <div>
                    {" "}
                    <Label>Diskon</Label>
                    <div className="relative">
                      <Input
                        placeholder="Diskon (10%)"
                        type="number"
                        min="0"
                        className="pl-[62px] appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none border p-2 rounded"
                      />
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                        <CiDiscount1 className="size-6" />
                      </span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </ComponentCard>
        </div>
        {/* Manage Produk */}
        <div className="flex flex-col gap-7 flex-1">
          <ManageProduk
            title="Atur Produk"
            switchStates={switchStates}
            onSwitchChange={handleSwitchChange}
          />
          <ManagePrivorAndStorefront title="Atur Privor & Storefront" />

          <Button
            className="hover:bg-black"
            onClick={() => {
              console.log(varian);
            }}
          >
            Tambah Produk
          </Button>
        </div>
      </div>
      <div className="overflow-auto">
        <div className=" p-4 mt-5 bg-brand-900 rounded-2xl max-w-full lg:max-w-[791px] min-w-[791px]">
          <div className="grid grid-cols-5 ml-15 content-center text-sky-50 ">
            {" "}
            <h2>Gambar</h2>
            <h2>Spesifikasi</h2>
            <h2>Harga</h2>
            <h2>Variant</h2>
            <h2>Stok</h2>
          </div>
        </div>

        {/* Variant Produk */}
        {varian.map((row, index) => (
          <ComponentCard
            key={index + 1}
            title={`Variant ${index + 1}`}
            className="mt-5 max-lg:max-w-full lg:max-w-[791px] min-w-[791px] relative"
          >
            <VarianProduk
              varian={row}
              setVarian={setVarian}
              index={index}
              onDelete={deleteVariant}
            />
            <GrosirProduk
              variantIndex={index}
              rows={row.wholesalePrices}
              setRows={setWholesaleProducts}
              setVarian={setVarian}
            />
          </ComponentCard>
        ))}
        {switchStates.varian ? (
          <Button className="mt-5" onClick={addVariantComponent}>
            Tambah Varian
          </Button>
        ) : null}
      </div>
    </div>
  );
}
