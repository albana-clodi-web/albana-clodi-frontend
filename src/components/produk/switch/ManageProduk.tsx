import ComponentCard from "../../common/ComponentCard";
import Switch from "../switch/Switch";

type SwitchKey = "varian" | "diskon";
interface ManageProduk {
  title: string;
  switchStates: Record<SwitchKey, boolean>;
  onSwitchChange: (key: SwitchKey, value: boolean) => void;
}

export default function ManageProduk({
  title,
  switchStates,
  onSwitchChange,
}: ManageProduk) {
  return (
    <ComponentCard title={title}>
      <div className="flex gap-4 flex-col ">
        <Switch
          label="Varian"
          defaultChecked={switchStates.varian}
          onChange={(val) => onSwitchChange("varian", val)}
        />
        <Switch
          label="Diskon"
          defaultChecked={switchStates.diskon}
          onChange={(val) => onSwitchChange("diskon", val)}
        />
      </div>
    </ComponentCard>
  );
}
