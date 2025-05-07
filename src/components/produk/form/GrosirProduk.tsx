import ComponentCard from "../../common/ComponentCard";
import Input from "../../form/input/InputField";
import { TiMinusOutline } from "react-icons/ti";

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
  rows: WholesaleProduct[];
  setRows: React.Dispatch<React.SetStateAction<WholesaleProduct[]>>;
  setVarian: React.Dispatch<React.SetStateAction<ProductVariant[]>>;
  variantIndex: number;
};

export default function GrosirProduk({
  rows,
  setRows,
  setVarian,
  variantIndex,
}: Props) {
  const handleChange = (
    index: number,
    field: keyof WholesaleProduct,
    value: string
  ) => {
    const numberValue = value === "" ? "" : Number(value);

    setVarian((prev) => {
      const updated = [...prev];
      const variant = { ...updated[variantIndex] };
      const newRows = [...variant.wholesalePrices];
      newRows[index] = { ...newRows[index], [field]: numberValue };
      variant.wholesalePrices = newRows;
      updated[variantIndex] = variant;
      return updated;
    });
  };

  const handleBlur = (index: number, field: keyof WholesaleProduct) => {
    const num = Number(rows[index][field]);
    if (num < 0) {
      const newRows = [...rows];
      newRows[index][field] = Math.abs(num);
      setRows(newRows);
    }
  };
  return (
    <ComponentCard title="Harga Grosir">
      <div className="space-y-5 sm:space-y-6">
        {rows.map((row, index) => (
          <div key={index} className="flex gap-4 mb-4">
            <div className="flex flex-col gap-2 mr-10 w-80">
              {index === 0 && (
                <h1 className="text-base font-extrabold text-gray-800 dark:text-white/90">
                  Rentang Jumlah Barang
                </h1>
              )}
              <div className="flex">
                <Input
                  type="number"
                  min="0"
                  value={
                    row.lowerLimitItem === 0
                      ? ""
                      : row.lowerLimitItem.toString()
                  }
                  onChange={(e) => {
                    const val = e.target.value;
                    const parsed = val === "" ? 0 : parseInt(val);
                    handleChange(index, "lowerLimitItem", String(parsed));
                  }}
                  onBlur={() => handleBlur(index, "lowerLimitItem")}
                  className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none border p-2 rounded"
                />
                <TiMinusOutline className="w-16 h-9 text-gray-500" />
                <Input
                  type="number"
                  min="0"
                  value={
                    row.upperLimitItem === 0
                      ? ""
                      : row.upperLimitItem.toString()
                  }
                  onChange={(e) => {
                    const val = e.target.value;
                    const parsed = val === "" ? 0 : parseInt(val);
                    handleChange(index, "upperLimitItem", String(parsed));
                  }}
                  onBlur={() => handleBlur(index, "upperLimitItem")}
                  className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none border p-2 rounded"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-auto">
              {index === 0 && (
                <h1 className="text-base font-extrabold text-gray-800 dark:text-white/90">
                  Harga Satuan
                </h1>
              )}
              <Input
                type="number"
                min="0"
                value={row.unitPrice === 0 ? "" : row.unitPrice.toString()}
                onChange={(e) => {
                  const val = e.target.value;
                  const parsed = val === "" ? 0 : parseInt(val);
                  handleChange(index, "unitPrice", String(parsed));
                }}
                onBlur={() => handleBlur(index, "unitPrice")}
                className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none border p-2 rounded"
                placeholder="Rp.0"
              />
            </div>
          </div>
        ))}
      </div>
    </ComponentCard>
  );
}
