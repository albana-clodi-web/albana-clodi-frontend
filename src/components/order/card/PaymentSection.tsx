import { useState } from "react";
import DatePicker from "../../form/date-picker";
import Select from "../../form/Select";

export default function PaymentSection() {
  const [formData, setFormData] = useState({
    statusPembayaran: "lunas",
    tanggalBayar: new Date().toISOString().split("T")[0],
    bankPembayaran: "BRI",
  });

  const paymentOptions = [
    { value: "belum-bayar", label: "Belum Bayar" },
    { value: "cicilan", label: "Cicilan" },
    { value: "lunas", label: "Sudah Bayar(Lunas)" },
  ];

  const bankOptions = [
    { value: "BRI", label: "🏦 BRI - Suyati (0051-0101-3015-536)" },
    { value: "BCA", label: "🏦 BCA - Suyati (1234-5678-9012-3456)" },
  ];

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDateChange = (_dates: any, currentDateString: string) => {
    setFormData((prev) => ({
      ...prev,
      tanggalBayar: currentDateString,
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg border space-y-4 w-full max-w-2xl">
      <h2 className="text-lg font-semibold">Pembayaran</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Status Pembayaran
          </label>
          <Select
            options={paymentOptions}
            placeholder="Pilih Status pembayaran"
            value={formData.statusPembayaran}
            onChange={(val: string) =>
              handleSelectChange("statusPembayaran", val)
            }
            className="dark:bg-dark-900"
          />
        </div>

        <div>
          <DatePicker
            id="date-picker"
            label="Tanggal Bayar"
            placeholder="Select a date"
            value={formData.tanggalBayar}
            onChange={handleDateChange}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Bank Pembayaran
        </label>
        <Select
          options={bankOptions}
          placeholder="Pilih Bank pembayaran"
          value={formData.bankPembayaran} // ← bound value
          onChange={(val: string) => handleSelectChange("bankPembayaran", val)}
          className="dark:bg-dark-900"
        />
      </div>
    </div>
  );
}
