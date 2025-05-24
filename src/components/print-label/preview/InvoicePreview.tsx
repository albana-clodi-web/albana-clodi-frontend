import React from "react";
import Logo from "../../../../public/images/logo/albana-clodi-logo.svg";
import { TPreviewProps } from "../../../service/order/order.type";
import { formatDateIndo } from "../../../utils/format-date.utils";
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

const InvoicePreview: React.FC<TPreviewProps> = ({ features, data }) => {
  const has = (key: string) => features.includes(key);

  return (
    <div className="text-sm w-full">
      <div className="grid grid-cols-12 gap-4 gap-x-8 p-5">
        <div className="col-span-9 flex items-start gap-5">
          <img src={Logo} alt="" className="w-20" />
          <div>
            <div className="font-bold text-2xl">ALBANA GROSIR</div>
            <div>
              Mitra distributor lebih dari 200 brand. Menyediakan family
              fashion, mukena, tas, sandal, sepatu, perlengkapan bayi, dll.
            </div>
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-3">
          <div className="space-y-1">
            <div className="font-bold">Tanggal :</div>
            <div>{formatDateIndo(data?.order_date ?? "")}</div>
          </div>
          <div className="space-y-1">
            <div className="font-bold">Nomor Invoice :</div>
            <div>{data?.order_code}</div>
          </div>
          {has("Nama Admin") && (
            <div className="space-y-1">
              <div className="font-bold">Admin :</div>
              <div>{data?.admin_name}</div>
            </div>
          )}
        </div>
        <div className="col-span-9 space-y-1">
          <div className="font-bold">
            Kepada <span>{data?.customer_info.name}</span>
          </div>
          <div>
            Terima kasih telah berbelanja di ALBANA GROSIR. Berikut adalah
            rincian orderan Anda:
          </div>
        </div>
        <div className="col-span-3 font-bold">
          <span className="text-green-500">PAID</span> ({" "}
          {formatDateIndo(data?.order_date ?? "")} )
        </div>
      </div>
      {/* tabel orderan  */}
      <table className="w-full border border-black">
        <thead className="bg-black text-white">
          <tr>
            <th className="text-left p-2">Nama Produk</th>
            <th className="p-2"></th>
            <th className="p-2">Jumlah</th>
            <th className="p-2">{has("Kolom Berat") ? "Berat" : ""}</th>
            <th className="p-2">Harga</th>
            <th className="p-2">Subtotal</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {/* List Order  */}
          {(data?.products ?? []).flatMap((product) => {
            const priceType = product.price_type;
            const discountPercent = data?.discount?.persen || 0;

            return product.product_variants.map((variant) => {
              const priceData = variant.productPrices?.[0] || {};
              const originalPrice =
                priceType === "reseller"
                  ? priceData.reseller
                  : priceType === "agent"
                  ? priceData.agent
                  : priceType === "customer" || priceType === "dropshipper"
                  ? priceData.normal
                  : priceData.normal || 0;

              const discountedPrice =
                originalPrice - (data?.discount?.nominal ?? 0);
              const qty = 1;
              const subtotal = discountedPrice * qty;

              return (
                <tr key={variant.id}>
                  <td className="p-2">
                    <div className="flex gap-2">
                      <span>
                        {product.product_name} | {variant.sku}
                      </span>
                      {discountPercent > 0 && (
                        <span className="text-sm text-red-500">
                          ( Diskon {discountPercent}% )
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="text-end">{has("SKU") ? variant.sku : ""}</td>

                  <td className="text-center">{qty}</td>

                  <td className="text-center">
                    {has("Kolom Berat") ? variant.weight || "-" : ""}
                  </td>

                  <td className="text-center justify-center flex items-center gap-4">
                    <span className="line-through text-gray-400">
                      Rp {formatPrice(originalPrice)}
                    </span>
                    <span className="text-red-500">
                      Rp {formatPrice(discountedPrice)}
                    </span>
                  </td>

                  <td className="text-end px-2">
                    Rp {subtotal.toLocaleString("id-ID")}
                  </td>
                </tr>
              );
            });
          })}
          {/* Extra Info */}
          <tr className="border-t">
            <td colSpan={5} className="p-2 font-medium">
              {has("Ekspedisi") ? data?.shipping_name : "Ekspedisi"}
            </td>
            <td className="text-end px-2">
              {formatPrice(data?.shipping_cost ?? 0)}
            </td>
          </tr>
          {has("Diskon") && (
            <tr>
              <td colSpan={5} className="p-2 font-medium">
                Diskon
              </td>
              <td className="text-end px-2">
                {formatPrice(data?.discount?.nominal || 0)}
              </td>
            </tr>
          )}
          {has("Asuransi") && (
            <tr>
              <td colSpan={5} className="p-2 font-medium">
                Asuransi
              </td>
              <td className="text-end px-2">
                {formatPrice(data?.insurance_fee || 0)}
              </td>
            </tr>
          )}
          {has("Biaya Tambahan") && (
            <tr>
              <td colSpan={5} className="p-2 font-medium">
                Biaya Tambahan
              </td>
              <td className="text-end px-2">
                {formatPrice(data?.packaging_fee || 0)}
              </td>
            </tr>
          )}
          <tr className="border-b font-bold">
            <td colSpan={2} className="p-2">
              TOTAL
            </td>
            {has("Total Item") && (
              <td className="p-2 text-center">
                {data?.products.reduce(
                  (acc, p) => acc + p.product_variants.length,
                  0
                )}
              </td>
            )}
            <td colSpan={4} className="text-right px-2 text-bold">
              {formatPrice(data?.final_price ?? 0)}
            </td>
          </tr>
          {/* Rekening  */}
          {has("Nomor Rekening") && (
            <tr>
              <td className="p-2 grid grid-cols-3">
                <div>Rekening Pembayaran</div>
                <div className="col-span-2 flex flex-col gap-3">
                  {rekening.map((rek, index) => (
                    <div key={index} className="space-y-1">
                      <div className="text-lg font-bold">{rek.bank}</div>
                      <div>
                        No Rekening <span>{rek.number}</span>
                      </div>
                      <div>A.n. {rek.owner}</div>
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          )}
          {/* Alamat Pengiriman  */}
          {has("Alamat Pengiriman") && (
            <tr>
              <td className="p-2 grid grid-cols-3">
                <div>Alamat Pengiriman :</div>
                <div className="col-span-2 space-y-1">
                  <div className="font-bold text-lg">
                    {data?.customer_info.name}
                  </div>
                  <div>{data?.customer_info.address}</div>
                  <div>{data?.customer_info.phone}</div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InvoicePreview;
