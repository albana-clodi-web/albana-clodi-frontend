import Barcode from "react-barcode";
import { TProduct } from "../../service/order/order.type";
import { formatDateIndo } from "../../utils/format-date.utils";

interface OrderLabelProps {
  date: string;
  data: TProduct[];
  selectedShippingFields: string[];
}

const OrderLabel: React.FC<OrderLabelProps> = ({
  date,
  data,
  selectedShippingFields,
}) => {
  const has = (feature: string) => selectedShippingFields.includes(feature);

  const variantItems = data.flatMap(
    (item) =>
      item.product_variants?.map((variant) => {
        const priceType = item.price_type;
        const prices = variant.productPrices?.[0];

        let price = prices?.normal ?? 0;
        if (priceType === "reseller") price = prices?.reseller ?? price;
        else if (priceType === "agent") price = prices?.agent ?? price;
        else if (priceType === "customer" || priceType === "dropshipper")
          price = prices?.normal ?? price;

        return {
          name: `${item.product_name} | ${variant.sku}`,
          qty: 1,
          price,
          barcode: variant.barcode ?? "Tidak ada barcode",
        };
      }) ?? []
  );

  const totalQuantity = variantItems.length;

  return (
    <div>
      <div className="font-bold">
        Order
        {has("Tanggal Order") && <span> ( {formatDateIndo(date)} ) </span>}
      </div>
      {variantItems.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          {has("Item Produk") && (
            <div className="flex justify-between">
              <span>- {item.name}</span>
              <span>x {item.qty}</span>
            </div>
          )}
          {has("Barcode SKU") &&
            (!item.barcode || item.barcode === "Tidak ada barcode" ? (
              <div className="text-center">-</div>
            ) : (
              <Barcode
                value={item.barcode}
                width={1.5}
                height={30}
                fontSize={12}
                displayValue={has("Barcode SKU Text")}
              />
            ))}
          {has("Barcode SKU Text") && <div>{item.barcode}</div>}
        </div>
      ))}
      {has("Total Item") && (
        <div className="font-bold">
          Total Item: <span className="text-right">{totalQuantity}</span>
        </div>
      )}
    </div>
  );
};

export default OrderLabel;
