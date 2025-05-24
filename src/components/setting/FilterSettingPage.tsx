import { TbFilterDiscount } from "react-icons/tb";
import Button from "../ui/button/Button";
import { CiSettings } from "react-icons/ci";
import { DollarLineIcon } from "../../icons";
import { Page } from "../../pages/SettingPage/SettingPage";

type Props = {
  setPage: (page: Page) => void;
  page: Page;
};
export default function FilterSettingPage({ setPage, page }: Props) {
  return (
    <div className="mx-auto w-full flex justify-start gap-3">
      <Button
        size="md"
        variant={page === "pengaturanUmum" ? "primary" : "outline"}
        className="flex-1/2"
        startIcon={<CiSettings className="size-5" />}
        onClick={() => setPage("pengaturanUmum")}
      >
        Pengaturan Umum
      </Button>
      <Button
        size="md"
        variant={page === "payment" ? "primary" : "outline"}
        className="flex-1/2"
        startIcon={<DollarLineIcon className="size-5" />}
        onClick={() => setPage("payment")}
      >
        Payment
      </Button>
      <Button
        size="md"
        variant="outline"
        className="flex-1/2"
        startIcon={<TbFilterDiscount className="size-5" />}
        onClick={() => ""}
      >
        Filter
      </Button>
      <Button
        size="md"
        variant="outline"
        className="flex-1/2"
        startIcon={<TbFilterDiscount className="size-5" />}
        onClick={() => ""}
      >
        Filter
      </Button>
      <Button
        size="md"
        variant="outline"
        className="flex-1/2"
        startIcon={<TbFilterDiscount className="size-5" />}
        onClick={() => ""}
      >
        Filter
      </Button>
    </div>
  );
}
