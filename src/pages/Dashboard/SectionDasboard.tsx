import { FaUserTimes } from "react-icons/fa";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosWallet } from "react-icons/io";
import Button from "../../components/ui/button/Button";
import IconsCourier from "../../icons/choose-courier.svg";
import { Link, useNavigate } from "react-router";

function SectionDasboard() {
  const navigate = useNavigate();
  const orders = [
    {
      id: 1,
      orderNumber: "#57700 - Rifdah Alkhonsa",
      amount: "Rp164.000",
      timeAgo: "12 jam lalu",
    },
    {
      id: 2,
      orderNumber: "#57701 - Ahmad Fauzi",
      amount: "Rp200.000",
      timeAgo: "8 jam lalu",
    },
    {
      id: 3,
      orderNumber: "#57702 - Siti Aisyah",
      amount: "Rp300.000",
      timeAgo: "5 jam lalu",
    },
  ];

  return (
    <div className="space-y-6 pl-3 lg:pl-3 ">
      <div className="px-4 py-1 bg-white rounded-xl shadow dark:bg-gray-800 dark:text-white">
        <h3 className="my-2 text-md font-semibold text-gray-800 dark:text-white">
          Keuntungan Paket
        </h3>
        <div className="p-2.5 border border-gray-300 rounded-lg mt-4 mb-2">
          <div className="flex justify-center gap-2.5 items-center">
            <div>
              <IoIosWallet className="text-blue-500 dark:text-white/90 size-6" />
            </div>
            <div className="mx-1">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                Kuota Order kamu: 900
              </h3>
              <span className="py-2 text-theme-xs font-medium text-gray-500 dark:text-white">
                Jumlah kuota utama & tambahan
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-2 my-3">
          <Button
            className="w-full h-9 border-blue-500 font-normal text-blue-400 py-2 rounded-lg"
            variant="outlineblue"
            onClick={() => console.log("Button clicked!")}>
            Lihat Detail
          </Button>
        </div>
      </div>

      <div className="px-4 py-1 bg-white rounded-xl shadow dark:bg-gray-800 dark:text-white">
        <div className="p-4 bg-red-50 dark:bg-red-800 rounded-lg mt-4">
          <div className="flex justify-between">
            <div className="mx-1">
              <h3 className="text-theme-sm font-medium text-gray-800 dark:text-white">
                Order Belum Bayar
              </h3>
              <span className="py-2 text-2xl font-bold text-red-400 dark:text-white">
                10
              </span>
            </div>
            <FaUserTimes className="text-red-400 dark:dark:text-white/90 size-6 my-3" />
          </div>
        </div>
        <div className="flex items-center justify-center h-48">
          <p className="text-theme-sm font-medium text-gray-500 dark:text-gray-300">
            Tidak ada order dalam tiga bulan
          </p>
        </div>
        <div className="flex items-center justify-end mt-2 font-semibold text-blue-600 my-2.5">
          <p className="text-theme-sm font-semibold">Lihat Semua</p>
          <IoIosArrowForward />
        </div>
      </div>

      <div className="px-4 py-1 bg-white rounded-xl shadow dark:bg-gray-800 dark:text-white">
        <div className="p-4 bg-yellow-50 dark:bg-yellow-800 rounded-lg mt-4">
          <div className="flex justify-between">
            <div className="mx-1">
              <h3 className="text-theme-sm font-medium text-gray-800 dark:text-white">
                Order Belum Diproses
              </h3>
              <span className="py-2 text-2xl font-bold text-yellow-500 dark:text-white">
                3
              </span>
            </div>
            <FaPeopleCarryBox className="text-yellow-500 size-6 dark:text-white/90 my-3" />
          </div>
        </div>

        {orders.map((order) => (
          <div key={order.id} className="w-full my-2">
            <div className="flex justify-between">
              <div className="my-2">
                <h4 className="text-theme-sm font-medium text-gray-800 dark:text-white">
                  {order.orderNumber}
                </h4>
                <p className="text-theme-xs text-gray-500 dark:text-gray-300">
                  {order.amount}
                </p>
              </div>
              <span className="text-theme-xs text-gray-400 dark:text-gray-500 my-2">
                {order.timeAgo}
              </span>
            </div>
            <hr className="border-gray-300 dark:border-gray-700 pt-2" />
          </div>
        ))}
        <div className="flex items-center justify-end mt-2 font-semibold text-blue-600 my-2.5">
          <Link to={"/order"}>
            <p className="text-theme-sm font-semibold">Lihat Semua</p>
          </Link>

          <IoIosArrowForward />
        </div>
      </div>

      <div className="px-4 py-3 bg-white rounded-xl shadow dark:bg-gray-800 dark:text-white">
        <h3 className="my-2 text-md font-semibold text-gray-800 dark:text-white">
          Atur Kurir Langganan Anda
        </h3>
        <div className="flex justify-center my-4">
          <img
            src={IconsCourier}
            alt="Ilustrasi Kurir"
            className="w-32 h-32 object-contain"
          />
        </div>
        <p className="text-theme-sm text-gray-500 dark:text-gray-300">
          Anda dapat mengaktifkan kurir apa saja yang digunakan di toko, dengan
          biaya kirim dan tracking otomatis.
        </p>
        <div className="flex items-center mt-4">
          <Button
            className="w-full h-9 bg-blue-500 text-white font-normal py-2 rounded-lg"
            onClick={() => navigate("/profile")}>
            Pilih Kurir
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SectionDasboard;
