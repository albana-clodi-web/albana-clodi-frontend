import { useState } from "react";
import Switch from "../../form/switch/Switch";

export default function ShippingSection() {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleSwitchChange = (checked: boolean) => {
    console.log("Switch is now:", checked ? "ON" : "OFF");
  };

  return (
    <div className="bg-gray-white p-5 rounded-lg border border-gray-200 max-w-2xl">
      <h3 className="font-semibold text-lg mb-2">Shipping</h3>
      <label className="text-sm font-medium text-gray-700 mb-1 block">
        Nomor Resi
      </label>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder=""
          className="flex-1 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">
            Kirim <strong>Notifikasi Resi</strong> otomatis
          </span>
          <Switch
            label="Default"
            defaultChecked={true}
            onChange={handleSwitchChange}
          />
        </div>
      </div>
    </div>
  );
}
