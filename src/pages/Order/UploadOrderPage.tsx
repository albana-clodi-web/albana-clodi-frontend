import React, { useState } from "react";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import FileInput from "../../components/form/input/FileInput";
import Label from "../../components/form/Label";
import Button from "../../components/ui/button/Button";
import OrderPageBreadcrumb from "./OrderPageBreadcrumb";
import { FiUpload, FiDownload } from "react-icons/fi";

export default function UploadOrderPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Silakan pilih file terlebih dahulu.");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Gagal mengunggah file.");
      }

      alert("Upload berhasil!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Terjadi kesalahan saat upload.");
    } finally {
      setUploading(false);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch("/api/template");

      if (!response.ok) throw new Error("Gagal mengunduh template.");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "template_order.xlsx";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error("Download error:", error);
      alert("Gagal mengunduh template.");
    }
  };

  return (
    <div>
      <PageMeta
        title="ALBANA GROSIR"
        description="Pusat kontrol untuk semua transaksi dan pesanan pelanggan"
      />
      <OrderPageBreadcrumb pageTitle="Upload Order" />
      <hr className="border-1 border-gray-200" />

      <div className="my-5">
        <div className="max-w-3xl bg-blue-100 text-blue-800 p-3 rounded-md text-sm mb-6">
          🛈 Order yang berhasil diproses akan otomatis mengurangi kuota order
          kamu.
        </div>
      </div>

      <div className="max-w-3xl bg-gray-50 p-6 rounded-md border border-gray-200">
        <ComponentCard title="File Input">
          <div>
            <Label>Upload file</Label>
            <FileInput onChange={handleFileChange} className="custom-class" />
          </div>
        </ComponentCard>

        <div className="flex items-center my-4">
          <input
            id="reduce-stock"
            type="checkbox"
            checked
            readOnly
            className="mr-2"
          />
          <label htmlFor="reduce-stock" className="text-sm text-gray-700">
            Upload order akan mengurangi stok
          </label>
        </div>

        <Button
          onClick={handleUpload}
          disabled={uploading}
          className="bg-green-600 hover:bg-green-700 text-white px-6 text-sm font-medium flex items-center gap-2">
          <FiUpload className="text-lg" />
          {uploading ? "Uploading..." : "Upload"}
        </Button>

        <p className="text-sm text-gray-600 mt-6 flex items-center">
          Silakan gunakan format file Excel berikut ini:
          <Button
            onClick={handleDownload}
            className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-medium flex items-center gap-2">
            <FiDownload className="text-lg" />
            Download
          </Button>
        </p>
      </div>
    </div>
  );
}
