import React from "react";
import Logo from "../../../../public/images/logo/albana-clodi-logo.svg";
import { TPreviewProps, TProduct } from "../../../service/order/order.type";
import { formatDateTimeIndo } from "../../../utils/format-date.utils";
import { formatDate } from "@fullcalendar/core/index.js";
import { formatPrice } from "../../../utils/format-price.utils";
const rekening = [
  {
    bank: "BCA",
    number: "2141341341431",
    owner: "Nama Pemilik Rekening",
  },
  {
    bank: "BNI",
    number: "1234567890123",
    owner: "John Doe",
  },
  {
    bank: "Mandiri",
    number: "9876543210987",
    owner: "Jane Smith",
  },
];

const ThermalPreview: React.FC<TPreviewProps> = ({ features, data }) => {
  const has = (key: string) => features.includes(key);

  return (
    <div className="font-mono px-1 w-64 py-5 text-[10px] space-y-3">
      <div className="px-4 flex flex-col justify-center items-center text-center space-y-2">
        {has("Logo") && (
          <img src={Logo} alt="" className="w-2/3 filter grayscale" />
        )}
        {has("Nama Toko") && <div>ALBANA GROSIR</div>}
        {has("Keterangan Toko") && (
          <div>
            Mitra distributor lebih dari 200 brand. Menyediakan family fashion,
            mukena, tas, sandal, sepatu, perlengkapan bayi, dll.
          </div>
        )}
        {has("Alamat Toko") && (
          <div>
            Perum BTN Asabri Gedog Blok H-19 Kec.sananwetan Kota Blitar 66132
          </div>
        )}
      </div>
      <hr className="border-t border-black border-dashed my-2" />
      {has("Input Time") ? (
        <div>Date : {formatDateTimeIndo(data?.order_date ?? "")}</div>
      ) : (
        <div>Status : PAID {formatDate(data?.order_date ?? "")}</div>
      )}
      {has("Detail Invoice") && (
        <>
          <div>Invoice : {data?.order_code}</div>
          <div>13:46:32</div>
        </>
      )}
      <hr className="border-t border-black border-dashed my-2" />
      <div className="grid grid-cols-12 gap-2 text-center">
        <span className="col-span-5">Produk</span>
        <span>Qty</span>
        <span className="col-span-3">Harga</span>
        <span className="col-span-3">Subtotal</span>
      </div>
      <hr className="border-t border-black border-dashed my-2" />

      {data?.products?.flatMap((product: TProduct, i) => {
        const priceType = product.price_type;

        return product.product_variants.map((variant, j) => {
          const priceData = variant.productPrices?.[0] || {};

          const originalPrice =
            priceType === "reseller"
              ? priceData.reseller
              : priceType === "agent"
              ? priceData.agent
              : priceType === "customer" || priceType === "dropshipper"
              ? priceData.normal
              : priceData.normal || 0;

          const discountedPrice = originalPrice - data?.discount.nominal;
          const qty = 1;
          const subtotal = discountedPrice * qty;

          return (
            <div key={`${i}-${j}`} className="space-y-1">
              <div className="grid grid-cols-12 items-end">
                <span className="col-span-5">
                  {product.product_name} | {variant.sku}
                </span>
                <span>{qty}</span>
                <span className="col-span-3 text-right">
                  {formatPrice(discountedPrice ?? 0)}
                </span>
                <span className="col-span-3 text-right">
                  {formatPrice(subtotal ?? 0)}
                </span>
              </div>
              {has("SKU") && <div>KODE SKU: {variant.sku}</div>}
            </div>
          );
        });
      })}

      <hr className="border-t border-black border-dashed my-2" />
      <div className="flex justify-between">
        <span>{data?.shipping_name}</span>
        <span>{data?.weight}</span>
        <span>{formatPrice(data?.shipping_cost ?? 0)}</span>
      </div>
      {has("Diskon") && (
        <div className="flex justify-between">
          <span>Diskon</span>
          <span>{formatPrice(data?.discount.nominal || 0)}</span>
        </div>
      )}
      {has("Asuransi") && (
        <div className="flex justify-between">
          <span>Asuransi</span>
          <span>{formatPrice(data?.insurance_fee || 0)}</span>
        </div>
      )}
      {has("Biaya Tambahan") && (
        <div className="flex justify-between">
          <span>Biaya Tambahan</span>
          <span>{formatPrice(data?.packaging_fee || 0)}</span>
        </div>
      )}
      <hr className="border-t border-black border-dashed my-2" />
      <div className="flex justify-between">
        <span>Total</span>
        {has("Total Item") && (
          <span>
            {data?.products.reduce(
              (acc, p) => acc + p.product_variants.length,
              0
            )}
          </span>
        )}
        <span>{formatPrice(data?.final_price ?? 0)}</span>
      </div>
      <hr className="border-t border-black border-dashed my-2" />
      {has("Nomor Rekening") && (
        <>
          <div>Rekening Pembayaran</div>
          {rekening.map((account, index) => (
            <div key={index} className="space-y-1">
              <div>Bank: {account.bank}</div>
              <div>No.Rek: {account.number}</div>
              <div>A.n. {account.owner}</div>
            </div>
          ))}
          <div className="border-t border-dashed border-black my-2" />
        </>
      )}
      {has("Alamat Pengiriman") && (
        <>
          <div>Alamat Pengiriman:</div>
          <div className="space-y-1">
            <div>{data?.customer_info.address || "-"}</div>
            <div>Telp: {data?.customer_info.phone}</div>
          </div>
        </>
      )}
      <div>Kurir: {data?.shipping_name}</div>
      {has("Nomor Resi") && <div>No Resi: {data?.tracking_number}</div>}
      <div className="border-t border-dashed border-black my-2" />
      {has("Nama Admin") && (
        <>
          <div>
            <div>Admin:</div>
            <div>{data?.admin_name}</div>
          </div>
          <div className="border-t border-dashed border-black my-2" />
        </>
      )}
      {has("Gudang") && (
        <>
          <div>Gudang: {data?.delivery_place}</div>
          <div className="border-t border-dashed border-black my-2" />
        </>
      )}
      <div className="text-center">
        Terimakasih <br /> telah belanja di <br /> ALBANA GROSIR
      </div>
    </div>
  );
};

export default ThermalPreview;
