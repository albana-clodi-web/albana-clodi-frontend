import { TiDeleteOutline } from "react-icons/ti";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";
import DropzoneComponent from "./ImageProduk";

export type ProductPrice = {
  normal: number;
  buy: number;
  reseller: number;
  agent: number;
  member: number;
};

type ProductWholesaler = {
  lowerLimitItem: number;
  upperLimitItem: number;
  unitPrice: number;
  wholesalerPrice: number;
};

export type ProductVariant = {
  imageUrl: string;
  image?: File;
  sku: string;
  productPrices: ProductPrice;
  productWholesalers: ProductWholesaler[];
  barcode?: string;
  size?: string;
  color?: string;
  stock: number | null;
};

type Props = {
  setVarian: React.Dispatch<React.SetStateAction<ProductVariant[]>>;
  index: number;
  onDelete: (index: number) => void;
};

export default function VarianProduk({ setVarian, index, onDelete }: Props) {
  function onChange(
    index: number,
    value: number | string | File,
    label: keyof ProductVariant | keyof ProductPrice
  ) {
    setVarian((prev) => {
      const updated = [...prev];
      const currentVariant = { ...updated[index] };
      if (label in currentVariant.productPrices) {
        const updatedPrice = {
          ...currentVariant.productPrices,
          [label]: value,
        };
        currentVariant.productPrices = updatedPrice;
        updated[index] = currentVariant;
      } else {
        const updatedVarian = { ...updated[index], [label]: value };
        updated[index] = updatedVarian;
      }
      return updated;
    });
  }

  return (
    <div className="relative border rounded-2xl p-4 shadow-md mb-4 flex justify-evenly gap-6 whitespace-nowrap items-start">
      <DropzoneComponent index={index} onChange={onChange} />
      <div>
        <Label htmlFor="inputTwo">SKU</Label>
        <Input
          type="text"
          placeholder="SKU45"
          onChange={(val) => onChange(index, val.target.value, "sku")}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Label htmlFor="inputTwo">Harga Beli</Label>
          <Input
            onChange={(val) => onChange(index, val.target.value, "buy")}
            type="number"
            min="0"
            placeholder="5000"
            className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none border p-2 rounded"
          />
        </div>
        <hr />
        <div>
          <Label htmlFor="inputTwo">Harga Jual Normal</Label>
          <Input
            onChange={(val) => onChange(index, val.target.value, "normal")}
            type="number"
            min="0"
            placeholder="40000"
            className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none border p-2 rounded"
          />
        </div>
        <div>
          <Label htmlFor="inputTwo">Harga Jual Reseller</Label>
          <Input
            onChange={(val) => onChange(index, val.target.value, "reseller")}
            type="number"
            min="0"
            placeholder="13000"
            className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none border p-2 rounded"
          />
        </div>
        <div>
          <Label htmlFor="inputTwo">Harga Jual Agent</Label>
          <Input
            onChange={(val) => onChange(index, val.target.value, "agent")}
            type="number"
            min="0"
            placeholder="15000"
            className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none border p-2 rounded"
          />
        </div>
        <div>
          <Label htmlFor="inputTwo">Harga Jual Member</Label>
          <Input
            onChange={(val) => onChange(index, val.target.value, "member")}
            type="number"
            min="0"
            placeholder="20000"
            className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none border p-2 rounded"
          />
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <div>
          <Label htmlFor="inputTwo">Ukuran</Label>
          <Input
            onChange={(val) => onChange(index, val.target.value, "size")}
            type="string"
            placeholder="XL"
            className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none border p-2 rounded"
          />
        </div>
        <div className=" mt-4">
          <Label htmlFor="inputTwo">Warna</Label>
          <Input
            type="text"
            placeholder="Merah"
            onChange={(val) => onChange(index, val.target.value, "color")}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="inputTwo">Stok</Label>
        <Input
          onChange={(val) => onChange(index, val.target.value, "stock")}
          type="number"
          placeholder="20"
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
