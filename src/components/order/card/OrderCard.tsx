import { useState } from "react";
import { FaPrint, FaTruck, FaEdit } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import ModalRiwayatTran from "../modal/ModalRiwayatTran";
import { FaTruckFast } from "react-icons/fa6";
import { BiSolidPackage } from "react-icons/bi";
import { LuPackageCheck } from "react-icons/lu";
import { Link } from "react-router";
import DropdownCancelOrder from "../dropdown/DropdownCancelOrder";

export default function OrderCard() {
  const [showModal, setShowModal] = useState(false);

  const TrackingProgress = [
    {
      icon: <BiSolidPackage className="text-green-500 w-4 h-4" />,
      status: "pending",
    },
    {
      icon: <FaTruck className="text-gray-400 w-4 h-4" />,
      status: "pending",
    },
    {
      icon: <FaTruckFast className="text-gray-400 w-4 h-4" />,
      status: "pending",
    },
    {
      icon: <LuPackageCheck className="text-gray-400 w-4 h-4" />,
      status: "complated",
    },
  ];

  const orderCustumer = [
    {
      id: "#57799",
      date: "Senin, 12 Mei 2025 15:29:48",
      status: "pending",
      customer: "Hana (Ibu Warti)",
      statusCustumer: "DROPSHIPPER",
      admin: "fina harya muslikhah",
      note: "orchid dress mocca XL set pashmina, shabira dress taupe XXL set khimar",
      payment: {
        total: "Rp. 894.700",
        status: "Paid",
        method: "BCA",
        date: "12 Mei 2025",
      },
      courier: {
        name: "shopee",
        ongkir: "Rp. 20.000",
        tracking: "-",
      },
      products: [
        "Abaya Tsanum By Ihya Allsize Do (1x)",
        "Allea Tunik By Batul Hijab XS-XL Tunik Only (1x)",
        "Allea Tunik By Batul Hijab XXL (1x)",
      ],
    },
    {
      id: "#57800",
      date: "Selasa, 13 Mei 2025 10:15:30",
      status: "complated",
      customer: "Rina (Ibu Sari)",
      statusCustumer: "RESELLER",
      admin: "dina kartika putri",
      note: "khimar basic black XL, tunic floral pink L",
      payment: {
        total: "Rp. 450.000",
        status: "Unpaid",
        method: "Mandiri (13 May 2025)",
      },
      courier: {
        name: "jne",
        ongkir: "Rp. 20.000",
        tracking: "JNE123456789",
      },
      products: ["Khimar Basic Black XL (1x)", "Tunic Floral Pink L (1x)"],
    },
  ];
  return (
    <>
      {orderCustumer.map((order) => (
        <div
          key={order.id}
          className="max-w-full mx-auto mt-4 p-5 bg-white shadow-lg rounded-xl border">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-md text-blue-600 font-semibold">{order.id}</p>
              <p className="text-sm text-gray-400">dari App ({order.date})</p>
            </div>
            <div className="flex items-center space-x-4">
              {TrackingProgress.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`p-2 rounded-full border-2 cursor-pointer ${
                      step.status === "completed"
                        ? "border-green-500 bg-green-500"
                        : "border-gray-300"
                    }  hover:border-green-500 transition duration-300`}
                    title={`Status pengiriman: ${step.status}`}>
                    {step.icon}
                  </div>
                  {index < TrackingProgress.length - 1 && (
                    <div className="w-10 h-1 bg-gray-300 mx-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <hr className="my-4 border-gray-300 dark:border-gray-700" />

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {/* Pemesan & Dikirim */}
            <div className="space-y-3">
              <div>
                <p className="font-normal text-gray-500">Pemesan</p>
                <p className="text-xl font-semibold">{order.customer}</p>
                <p className="text-sm text-purple-600">
                  {order.statusCustumer}
                </p>
              </div>
              <div>
                <p className="font-normal text-gray-500">Dikirim kepada</p>
                <p className="text-theme-xl font-semibold">{order.customer}</p>
                <p className="text-sm text-purple-600">
                  {order.statusCustumer}
                </p>
              </div>
              <div>
                <p className="font-normal text-gray-500">Admin</p>
                <p className="text-xl font-semibold">{order.admin}</p>
              </div>
              <div>
                <p className="font-normal text-gray-500">Catatan</p>
                <p className="text-md font-light text-gray-dark">
                  {order.note}
                </p>
              </div>
            </div>

            {/* Status Bayar */}
            <div className="space-y-2">
              <div>
                <p className="font-semibold">Status Bayar & Total bayar</p>
                <div className="border rounded-lg p-4 my-2">
                  <p className="text-2xl font-semibold mb-2 mr-2">
                    {order.payment.total}
                  </p>
                  <span className="bg-green-600 text-white text-xs px-3 py-1.5 rounded">
                    Paid
                  </span>
                  <span className="bg-gray-600 text-white text-xs ml-2 px-2 py-1.5 rounded">
                    {order.payment.method} ({order.payment.date})
                  </span>
                  <button
                    onClick={() => setShowModal(true)}
                    className="text-blue-700 text-md font-bold cursor-pointer mt-5 hover:underline flex items-center">
                    Lihat Riwayat
                    <IoIosArrowForward className="mx-1 font-bold" />
                  </button>
                </div>

                {showModal && (
                  <ModalRiwayatTran changeModal={() => setShowModal(false)} />
                )}
              </div>

              {/* Kurir */}
              <p className="font-semibold my-2">Kurir</p>
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-4 rounded">
                    <FaTruck className="text-blue-500 text-2xl" />
                  </div>
                  <div>
                    <p className="text-md font-semibold">
                      {order.courier.name}
                    </p>
                    {order.courier.ongkir && (
                      <p className="text-md font-semibold">
                        {order.courier.ongkir}
                      </p>
                    )}
                    <p className="text-md text-gray-500">
                      Resi: {order.courier.tracking}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Produk */}
            <div className="mt-6 ml-2">
              <p className="font-semibold text-gray-500 text-sm">
                Produk (total {order.products.length} item)
              </p>
              <ul className="mt-1 text-blue-700 font-semibold space-y-1">
                {order.products.map((product, index) => (
                  <li key={index}>
                    <a href="#" className="text-blue-700 hover:underline">
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-300 dark:border-gray-700" />

          {/* Actions */}
          <div className="mt-6 flex justify-between gap-2">
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="check1"
                className="w-6 h-10 mr-2 border-blue-600 rounded-full"
              />
              <button className="flex items-center gap-2 border border-blue-600 px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-100 text-sm">
                <FaPrint /> Print
              </button>
            </div>

            <div className="flex gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                Update Resi
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
                Tandai diterima
              </button>
              <div className="flex gap-2">
                <Link to="/order/edit_order/:id">
                  <button className="flex items-center gap-2 border border-blue-600 px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-100 text-sm">
                    <FaEdit /> Edit Order
                  </button>
                </Link>

                <DropdownCancelOrder />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
