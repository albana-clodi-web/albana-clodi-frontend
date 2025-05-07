import ComponentCard from "../../common/ComponentCard";
import Switch from "./Switch";

interface ManageProduk {
  title: string;
}

export default function ManagePrivorAndStorefront({ title }: ManageProduk) {
  const handleSwitchChange = (checked: boolean) => {
    console.log("Switch is now:", checked ? "ON" : "OFF");
  };
  return (
    <ComponentCard title={title}>
      <div className="flex gap-4 flex-col ">
        <Switch
          label="Publish"
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
        <Switch
          label="Tampilkan Stock"
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
      </div>
    </ComponentCard>
  );
}
