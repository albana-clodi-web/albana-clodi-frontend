import { useRef, useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import { Link } from "react-router";
import { FaFilter } from "react-icons/fa";
import Button from "../../components/ui/button/Button";
import Alert from "../../components/ui/alert/Alert";
import NewOrderTable from "../../components/order/table/NewOrderTable";
import ModalFilterNewOrder from "../../components/order/modal/ModalFilterNewOrder";

export default function NewOrderPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <PageMeta
        title="ALBANA GROSIR"
        description="Pusat kontrol untuk semua transaksi dan pesanan pelanggan"
      />
      <PageBreadcrumb pageTitle="Pesanan Baru" />
      <hr className="my-6 border-gray-300 dark:border-gray-700" />
      <div className="flex justify-between items-center mb-4">
        <form>
          <div className="relative">
            <span className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2">
              <svg
                className="fill-gray-500 dark:fill-gray-400"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z"
                  fill=""
                />
              </svg>
            </span>
            <input
              ref={inputRef}
              type="text"
              placeholder="Cari Order Barang"
              className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
            />
          </div>
        </form>
        <Button
          size="md"
          variant="outlineblue"
          className="font-semibold"
          onClick={() => setShowModal(true)}>
          Filter
          <FaFilter />
        </Button>

        {showModal && (
          <ModalFilterNewOrder changeModal={() => setShowModal(false)} />
        )}
      </div>
      <div className="flex justify-end items-center mt-6">
        <div className="flex justify-between items-center bg-white p-3.5 rounded-lg">
          <p className="text-md font-light">
            Sisa kuota order:{" "}
            <span className="text-green-600 font-semibold">826</span>
          </p>
          <span className="text-gray-400 mx-2">|</span>
          <Link to="/profile">
            <span className="text-blue-600 text-md font-semibold">
              Lihat Detail
            </span>
          </Link>
        </div>
      </div>

      <div className="my-3">
        <Alert
          variant="warning"
          title="Yakin mau konfirmasi orderan?"
          message="Segera integrasikan produkmu dengan produk di database."
          showLink={false}
        />
      </div>
      <NewOrderTable />
    </div>
  );
}
