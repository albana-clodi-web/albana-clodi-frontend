import { useEffect, useRef, useState } from "react";
import { FaBluetooth } from "react-icons/fa";
import {
  SettingFeatureValue,
  TPrintSetting,
  SettingOptionValue,
  TReceiptData,
} from "../../service/order/order.type";
import { SettingOptionCard } from "../../components/print-label/card/SettingOptionCard";
import { SettingFeatureCard } from "../../components/print-label/card/SettingFeatureCard";
import PageMeta from "../../components/common/PageMeta";
import PageTitle from "../../components/common/PageTitle";
import Button from "../../components/ui/button/Button";
import { PreviewOutput } from "../../components/print-label/preview/PreviewOutput";
import { getReceiptByOrderId } from "../../service/order";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

export default function PrintSettingsPage() {
  const { id: id } = useParams<{ id: string }>();
  const [selectedFeature, setselectedFeature] = useState("shipping");
  const [selectedOption, setselectedOption] = useState<SettingOptionValue>({});
  const [receiptData, setReceiptData] = useState<TReceiptData | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrintReact = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `${selectedFeature} - ALBANA GROSIR`,
  });

  const options: TPrintSetting[] = [
    { id: "shipping", label: "Shipping Label" },
    { id: "invoice", label: "Invoice" },
    {
      id: "thermal-56",
      label: "Invoice Thermal (56mm)",
      icon: <FaBluetooth className="inline ml-1 text-sm" />,
    },
  ];

  const features: SettingFeatureValue = {
    shipping: [
      "Detail Order",
      "Fragile Sign",
      "Shop Logo",
      "Shop Info",
      "No. PO",
      "Tanggal Order",
      "No Resi",
      "Barcode No Resi",
      "Ekspedisi",
      "Nominal Ekspedisi",
      "Total Item",
      "Pembulatan Berat",
      "Nama Admin",
      "Barcode PO",
      "Barcode SKU",
      "Barcode SKU Text",
      "Item Produk",
      "Catatan",
      "Warehouse",
    ],
    invoice: [
      "Invoice Note",
      "SKU",
      "Kolom Berat",
      "Total Item",
      "Pembulatan Berat",
      "Nama Admin",
      "Nama Ekspedisi",
      "Nomor Rekening",
      "Alamat Pengiriman",
      "Diskon",
      "Asuransi",
      "Biaya Tambahan",
      "Rincian Biaya Cicilan",
    ],
    "thermal-56": [
      "Logo",
      "Invoice Note",
      "Nama Toko",
      "Keterangan Toko",
      "Alamat Toko",
      "SKU",
      "Nomor Rekening",
      "Detail Invoice",
      "Alamat Pengiriman",
      "Nomor Resi",
      "Input Time",
      "Total Item",
      "Pembulatan Berat",
      "Nama Admin",
      "Diskon",
      "Asuransi",
      "Biaya Tambahan",
      "Gudang",
    ],
  };

  const toggleOption = (item: string) => {
    setselectedOption((prev) => {
      const current = prev[selectedFeature] || [];
      const newOptions = current.includes(item)
        ? current.filter((i) => i !== item)
        : [...current, item];

      return {
        ...prev,
        [selectedFeature]: newOptions,
      };
    });
  };

  const availableFeatures = features[selectedFeature] || [];
  const selectedFeatures = selectedOption[selectedFeature] || [];

  useEffect(() => {
    async function fetchReceipt() {
      if (!id) return;
      const response = await getReceiptByOrderId(id);
      if (response.success) {
        setReceiptData(response.responseObject);
      }
    }

    fetchReceipt();
  }, [id]);


  return (
    <div className="p-5 md:p-10 space-y-5">
      <PageMeta
        title="ALBANA GROSIR"
        description="Pusat kontrol untuk semua transaksi dan pesanan pelanggan"
      />
      <PageTitle title="Pengaturan Cetak" />

      <div className="flex justify-end items-center gap-2">
        <Button variant="outline">Simpan</Button>
        <Button variant="primary" onClick={handlePrintReact}>
          Cetak
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SettingOptionCard
          options={options}
          selectedOption={selectedFeature}
          onChange={setselectedFeature}
        />
        <SettingFeatureCard
          features={availableFeatures}
          selectedFeatures={selectedFeatures}
          onToggle={toggleOption}
          className="md:col-span-2"
        />
      </div>

      <div id="print-area" ref={componentRef} >
        <PreviewOutput
          selectedFeature={selectedFeature}
          selectedFeatures={selectedFeatures}
          data={receiptData ?? undefined}
          className={selectedFeature === "thermal-56" ? "inline-block" : ""}
        />
      </div>
    </div>
  );
}
