import React from "react";
import { PrintSetting } from "../../../service/order/order.type";

interface Props {
  options: PrintSetting[];
  selectedOption: string;
  onChange: (optionId: string) => void;
  className?: string;
}

export const SettingOptionCard: React.FC<Props> = ({ options, selectedOption, onChange, className }) => {
  return (
    <div className={`bg-white p-5 rounded-lg shadow ${className}`}>
      <h3 className="font-semibold mb-3">Pengaturan Cetak</h3>
      <div className="space-y-2">
        {options.map((opt) => (
          <label key={opt.id} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="format"
              value={opt.id}
              checked={selectedOption === opt.id}
              onChange={() => onChange(opt.id)}
              className="accent-blue-600"
            />
            <span className="flex items-center">
              {opt.label}
              {opt.icon && opt.icon}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
