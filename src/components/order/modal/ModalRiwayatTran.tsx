// import { useState } from "react";
import ReactDOM from "react-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

type Props = {
  changeModal: () => void;
};

export default function ModalRiwayatTran({ changeModal }: Props) {
  const historyFin = [
    {
      date: "2023-10-01",
      bank: "	BRI - 005101013015536",
      nominal: 50000,
      status: "Terbayar",
    },
  ];

  return ReactDOM.createPortal(
    <div className="fixed z-[100000] inset-0 overflow-y-auto">
      <div className="flex items-center justify-center max-h-screen px-4 text-center">
        <div className="fixed inset-0 bg-gray-500 opacity-40"></div>
        <div className="inline-block align-bottom bg-white rounded-lg px-7 pt-6 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-black mb-2">
              Riwayat Transaksi
            </h2>
            <div className="flex gap-2">
              <p className="text-lg font-semibold">
                Order ID <span className="text-blue-700">#57830</span>
              </p>
              <button
                onClick={changeModal}
                className="text-gray-400 hover:text-gray-700">
                <IoIosCloseCircleOutline size={30} />
              </button>
            </div>
          </div>
          <hr className="pt-0 pb-3 border-gray-300 dark:border-gray-700" />

          <div className="space-y-3 mb-7">
            <Table>
              {/* Table Header */}
              <TableHeader className="border-b border-gray-100 bg-gray-200 dark:bg-black dark:border-white/[0.05]">
                <TableRow>
                  <TableCell
                    isHeader
                    className="px-2 py-2 font-semibold  text-black text-start text-theme-md dark:text-gray-400">
                    Tanggal
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-2 py-2 font-semibold  text-black text-start text-theme-md dark:text-gray-400">
                    Bank
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-2 py-2 font-semibold  text-black text-start text-theme-md dark:text-gray-400">
                    Nominal
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-2 py-2 font-semibold  text-black text-start text-theme-md dark:text-gray-400">
                    Status
                  </TableCell>
                </TableRow>
              </TableHeader>

              {/* Table Body */}
              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {historyFin.map((historyFin, index) => (
                  <TableRow key={index}>
                    <TableCell className="px-2 py-4 text-black text-start text-theme-md dark:text-gray-400">
                      {historyFin.date}
                    </TableCell>
                    <TableCell className="px-2 py-4 text-black text-start text-theme-md dark:text-gray-400">
                      {historyFin.bank}
                    </TableCell>
                    <TableCell className="px-2 py-4 text-black text-start text-theme-md dark:text-gray-400">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(historyFin.nominal)}
                    </TableCell>
                    <TableCell className="px-2 py-4 text-black text-start text-theme-md dark:text-gray-400">
                      <div>
                        <span className="bg-green-500 text-white text-theme-sm px-3 py-1.5 rounded-2xl">
                          {historyFin.status}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
