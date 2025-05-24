import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import EmptyBox from "../../../../public/images/icons/empty_box.svg";
import TableCourierSelection from "./TableCourierSelect";
import { useState } from "react";
import ModalDiskon from "../modal/ModalDiskon";

export default function TableAddOrder() {
  const [showModal, setShowModal] = useState(false);
  const orders = []; // Ganti dengan data order Anda

  return (
    <div className="overflow-hidden bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader>
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                Nama
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                Harga
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                QTY
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                Subtotal
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <TableRow
                  key={index}
                  onClick={() => {
                    if (item.label === "M") setShowModal(true);
                  }}>
                  <TableCell className="px-4 py-3 text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                    {order.name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                    {order.harga}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                    {order.qty}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                    {order.Subtotal}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <td colSpan={8} className="py-5 px-3 ">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={EmptyBox}
                      className="w-auto h-20"
                      alt="box-empty"
                    />
                    <span className="text-gray-300">
                      Belum ada produk ditambahkan
                    </span>
                  </div>
                </td>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="border-t mt-6 pt-4 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-bold">Rp0</span>
        </div>
        <div className="flex justify-between items-center">
          <span>
            Ongkos Kirim -{" "}
            {/* <span className="text-blue-600 underline cursor-pointer">
              Ubah kurir
            </span> */}
          </span>
          <span className="font-bold">Rp0</span>
        </div>

        <div className="flex space-x-2">
          <button className="px-4 py-2 text-sm font-medium rounded-md border border-blue-500 text-blue-600 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Semua kurir
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-md border border-blue-400 text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
            Didukung Kurir
          </button>
        </div>

        <TableCourierSelection />
        <div className="flex flex-wrap gap-2 my-6">
          <div className="flex flex-wrap gap-2 mt-2">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-1 px-3 py-1.5 text-sm border border-green-500 text-green-600 hover:text-white rounded-md hover:bg-green-700 transition">
              <span className="text-lg font-bold">+</span> Diskon Order
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 text-sm border border-green-500 text-green-600 hover:text-white rounded-md hover:bg-green-700 transition">
              <span className="text-lg font-bold">+</span> Biaya Lain
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 text-sm border border-green-500 text-green-600 hover:text-white rounded-md hover:bg-green-700 transition">
              <span className="text-lg font-bold">+</span> Asuransi
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 text-sm border border-green-500 text-green-600 hover:text-white rounded-md hover:bg-green-700 transition">
              <span className="text-lg font-bold">+</span> Ongkir 1kg
            </button>
          </div>
        </div>
        {showModal && <ModalDiskon changeModal={() => setShowModal(false)} />}

        <div className="flex justify-between items-center font-semibold pt-4 border-t mt-4">
          <span>TOTAL</span>
          <span className="text-blue-700 text-xl md:text-3xl font-bold">
            Rp0
          </span>
        </div>
      </div>
    </div>
  );
}
