import React from "react";
import Logo from "../../../../public/images/logo/albana-clodi-logo.svg";
import Fragile from "../../../../public/images/icons/fragile.png";
import Barcode from "react-barcode";
import OrderLabel from "../ListOrderBarcode";
import { TPreviewProps } from "../../../service/order/order.type";

const ShippingPreview: React.FC<TPreviewProps> = ({ features, data }) => {
  const has = (key: string) => features.includes(key);

  return (
    <div className="grid grid-cols-12 gap-4 gap-x-8 p-5 text-sm">
      {/* Logo dan Shop Info */}
      {(has("Shop Logo") || has("Shop Info")) && (
        <div className="col-span-2 flex flex-col i-center justify-center items-center text-center space-y-2">
          {has("Shop Logo") && (
            <img src={Logo} alt="Logo" className="w-20 h-20 center" />
          )}
          {has("Shop Info") && (
            <>
              <div>ALBANA GROSIR</div>
              <div>
                Mitra distributor lebih dari 200 brand. Menyediakan family
                fashion, mukena, tas, sandal, sepatu, perlengkapan bayi, dll.
              </div>
            </>
          )}
        </div>
      )}
      {/* PO dan Detail Tujuan */}
      <div className="col-span-3 flex flex-col justify-between">
        <div className="space-y-5">
          {has("No. PO") && <div className="text-lg">{data?.order_code}</div>}

          <div className="space-y-2">
            <div className="font-semibold text-base">Kepada</div>
            <div className="text-base">{data?.customer_info.name}</div>
            <div>{data?.customer_info.address}</div>
            <div>Telp. {data?.customer_info.phone}</div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <div className="font-bold">Pengirim</div>
            <div>ALBANA GROSIR</div>
            <div>085648487917</div>
          </div>

          {has("Warehouse") && (
            <div className="space-y-2">
              <div className="font-bold">Warehouse</div>
              <div>{data?.delivery_place ?? ""}</div>
            </div>
          )}

          {has("Nama Admin") && (
            <div className="space-y-2">
              <div className="font-bold">Admin</div>
              <div>{data?.admin_name ?? ""}</div>
            </div>
          )}
        </div>
      </div>
      <div></div>
      {/* Detail & Pembelian dan Resi  */}
      <div className="col-span-4 space-y-5">
        <div className="space-y-1">
          {has("Barcode PO") && (
            <div className="flex justify-end">
              <Barcode
                value={data?.order_code ?? ""}
                height={35}
                width={2}
                displayValue={false}
              />
            </div>
          )}
          {has("Detail Order") && (
            <OrderLabel
              date={data?.order_date || "-"}
              data={data?.products || []}
              selectedShippingFields={features}
            />
          )}
        </div>
        {(has("Ekspedisi") ||
          has("Nominal Ekspedisi") ||
          has("No Resi") ||
          has("Barcode No Resi")) && (
          <div className="flex flex-col gap-2">
            {(has("Ekspedisi") || has("Nominal Ekspedisi")) && (
              <div className="border font-semibold border-black p-3 w-fit space-y-1">
                {has("Ekspedisi") && (
                  <div>
                    {data?.shipping_name ?? ""} ({data?.weight ?? "-"} Kg)
                  </div>
                )}
                {has("Nominal Ekspedisi") && (
                  <div>Biaya Kirim : Rp{data?.shipping_cost ?? "-"}</div>
                )}
              </div>
            )}

            {(has("No Resi") || has("Barcode No Resi")) && (
              <div className="border font-semibold border-black p-3 w-fit">
                {has("No Resi") && (
                  <div>NO RESI : {data?.tracking_number ?? "-"}</div>
                )}
                {has("Barcode No Resi") && (
                  <Barcode
                    value={data?.tracking_number ?? ""}
                    height={50}
                    width={2}
                    displayValue={false}
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>
      {/* Fragile */}
      {has("Fragile Sign") && (
        <div className="col-span-2 flex flex-col justify-center items-center text-center">
          <img src={Fragile} alt="Fragile" className="w-32" />
          <div className="font-bold text-3xl">FRAGILE</div>
          <div>JANGAN DIBANTING!!!!</div>
        </div>
      )}
    </div>
  );
};

export default ShippingPreview;
