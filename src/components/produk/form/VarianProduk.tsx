import { TiDeleteOutline } from "react-icons/ti";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";
import DropzoneComponent from "./ImageProduk";

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

type Props = {
  varian: ProductVariant;
  setVarian: React.Dispatch<React.SetStateAction<ProductVariant[]>>;
  index: number;
  onDelete: (index: number) => void;
};

export default function VarianProduk({
  varian,
  setVarian,
  index,
  onDelete,
}: Props) {
  // function change value
  function onChange(
    index: number,
    value: number | string,
    label: keyof ProductVariant
  ) {
    console.log(varian);
    setVarian((prev) => {
      const updated = [...prev];
      const updatedVarian = { ...updated[index], [label]: value };
      updated[index] = updatedVarian;
      return updated;
    });
  }

  return (
    <div className="relative border rounded-2xl p-4 shadow-md mb-4 flex justify-evenly gap-6 whitespace-nowrap items-start">
      <DropzoneComponent />
      <div>
        <Label htmlFor="inputTwo">SKU</Label>
        <Input
          type="text"
          onChange={(val) => onChange(index, val.target.value, "SKU")}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Label htmlFor="inputTwo">Harga Beli</Label>
          <Input
            onChange={(val) =>
              onChange(index, val.target.value, "purchasePrice")
            }
            type="number"
            min="0"
            className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none border p-2 rounded"
          />
        </div>
        <hr />
        <div>
          <Label htmlFor="inputTwo">Harga Jual Normal</Label>
          <Input
            onChange={(val) =>
              onChange(index, val.target.value, "regularPrice")
            }
            type="number"
            min="0"
            className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none border p-2 rounded"
          />
        </div>
        <div>
          <Label htmlFor="inputTwo">Harga Jual Reseller</Label>
          <Input
            onChange={(val) =>
              onChange(index, val.target.value, "resellerPrice")
            }
            type="number"
            min="0"
            className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none border p-2 rounded"
          />
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <div>
          <Label htmlFor="inputTwo">Ukuran</Label>
          <Input
            onChange={(val) => onChange(index, val.target.value, "variant")}
            type="number"
            min="0"
            className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none border p-2 rounded"
          />
        </div>
        <div className=" mt-4">
          <Label htmlFor="inputTwo">Warna</Label>
          <Input
            type="text"
            onChange={(val) => onChange(index, val.target.value, "color")}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="inputTwo">Stok</Label>
        <Input
          onChange={(val) => onChange(index, val.target.value, "stock")}
          type="number"
          className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none border p-2 rounded"
        />
      </div>
      {index == 0 ? null : (
        <button
          onClick={() => onDelete(index)}
          className="absolute top-1 right-0 text-red-500 hover:text-red-700 transition-colors"
        >
          <TiDeleteOutline size={30} />
        </button>
      )}
    </div>
  );
}
