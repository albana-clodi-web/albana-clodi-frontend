import ReactDOM from "react-dom";
import Label from "../../form/Label";
import Select from "../../form/Select";
import Button from "../../ui/button/Button";
import DatePicker from "../../form/date-picker";

type Props = {
  changeModal: () => void;
  setFilter?: () => void;
};

const optionsCustomers = [
  { value: "customer", label: "Customer" },
  { value: "reseller", label: "Reseller" },
  { value: "agent", label: "Agent" },
  { value: "member", label: "Member" },
  { value: "dropshiper", label: "Dropshiper" },
];

export default function ModalCustomerKategory({ changeModal }: Props) {
  function handleChange(value: string) {
    console.log(value);
  }

  function addFilter() {
    changeModal();
  }

  return ReactDOM.createPortal(
    <div className="fixed z-[100000] inset-0 overflow-y-auto ">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 max-md:gap-4">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="md:flex sm:items-start sm:flex-wrap gap-4 max-md:flex-col ma">
            <div className="mx-auto w-full flex items-center justify-between h-12 rounded-full sm:mx-0 sm:h-10 ">
              <section className="font-bold text-2xl">Filter</section>
              <Button size="sm">Reset Filter</Button>
            </div>

            <div className="flex-auto max-md:mt-3">
              <Label>Pilih Tanggal</Label>
              <DatePicker
                id="date-picker"
                placeholder=""
                onChange={(dates, currentDateString) => {
                  // Handle your logic
                  console.log({ dates, currentDateString });
                }}
              />
            </div>

            {/* Customer Filter */}
            <div className="flex-auto max-md:mt-3">
              <Label>Kategori Customer</Label>
              <Select
                options={optionsCustomers}
                placeholder="Pilih Kategori Customer"
                onChange={handleChange}
                className="dark:bg-dark-900"
              />
            </div>

            <div className="flex-auto max-md:mt-3">
              <Label>Cari Bedasarkan</Label>
              <Select
                options={optionsCustomers}
                placeholder="Pilih Kategori Customer"
                onChange={handleChange}
                className="dark:bg-dark-900"
              />
            </div>

            <div className="flex-auto max-md:mt-3">
              <Label>Status Customer</Label>
              <Select
                options={optionsCustomers}
                placeholder="Pilih Kategori Customer"
                onChange={handleChange}
                className="dark:bg-dark-900"
              />
            </div>
          </div>
          <div className="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-brand-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-brand-300 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                onClick={() => addFilter()}>
                Tambah
              </button>
            </span>
            <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                onClick={changeModal}>
                Cancel
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
