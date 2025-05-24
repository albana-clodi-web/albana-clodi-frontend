import React from "react";

interface Props {
  features: string[];
  selectedFeatures: string[];
  onToggle: (feature: string) => void;
  className?: string;
}

export const SettingFeatureCard: React.FC<Props> = ({
  features,
  selectedFeatures,
  onToggle,
  className = "",
}) => {
  return (
    <div className={`bg-white p-5 rounded-lg shadow ${className}`}>
      <h3 className="font-semibold mb-3">Pengaturan</h3>
      {features.length === 0 ? (
        <p className="text-gray-500 italic">Tidak ada fitur untuk format ini.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-2">
          {features.map((feature) => (
            <label key={feature} className="inline-flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-blue-600"
                checked={selectedFeatures.includes(feature)}
                onChange={() => onToggle(feature)}
              />
              <span>{feature}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
