import { TReceiptData } from "../../../service/order/order.type";
import InvoicePreview from "./InvoicePreview";
import ShippingPreview from "./ShippingPreview";
import ThermalPreview from "./ThermalPreview";

interface PreviewOutputProps {
  selectedFeature: string;
  selectedFeatures: string[];
  data?: TReceiptData;
  className?: string;
}

export const PreviewOutput: React.FC<PreviewOutputProps> = ({
  selectedFeature,
  selectedFeatures,
  data,
  className = "",
}) => {
  const renderPreview = () => {
    switch (selectedFeature) {
      case "shipping":
        return <ShippingPreview features={selectedFeatures} data={data} />;
      case "invoice":
        return <InvoicePreview features={selectedFeatures} data={data} />;
      case "thermal-56":
        return <ThermalPreview features={selectedFeatures} data={data} />;
      default:
    }
  };

  return (
    <div className={`bg-white border border-black ${className}`}>
      {renderPreview()}
    </div>
  );
};
