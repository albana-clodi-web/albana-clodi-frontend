import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import ModalCurierPayment from "../modal/ModalCurierPayment";

export default function TableCourierSelection() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourier, setSelectedCourier] = useState(null);

  const courier = [
    {
      label: "FREE",
      action: "Ambil di Toko",
      category: "Manual",
      eta: "- days",
      tarif: "Rp0",
    },
    {
      label: "M",
      action: "Nama Kurir",
      category: "Manual",
      eta: "- days",
      tarif: "Rp-",
    },
  ];

  const handleRowClick = (item) => {
    if (item.label === "M") {
      setSelectedCourier(item);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourier(null);
  };

  const handleSaveCourier = (data) => {
    console.log("Data kurir disimpan:", data);
    setShowModal(false);
    setSelectedCourier(null);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-white/[0.05] dark:bg-white/[0.03] mt-5">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="bg-gray-200 dark:bg-black dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                Kurir
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                Kategori
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                ETA
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                Tarif
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {courier.length > 0 ? (
              courier.map((item, index) => (
                <TableRow
                  key={index}
                  onClick={() => handleRowClick(item)}
                  className="hover:border-3 hover:border-blue-500 dark:hover:bg-white/[0.03] transition cursor-pointer">
                  <TableCell className="px-4 py-3 text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="bg-yellow-300 text-white text-xs font-bold rounded px-2 py-0.5">
                        {item.label}
                      </span>
                      <span>{item.action}</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                    {item.category}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                    {item.eta}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-blue-600 text-sm md:text-theme-md font-medium hover:underline">
                    {item.tarif}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <td colSpan={4} className="py-4 px-3 text-center">
                  <span className="text-blue-500 hover:underline cursor-pointer">
                    Tampilkan 0 orderan baru
                  </span>
                </td>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Modal */}
      {showModal && (
        <ModalCurierPayment
          isOpen={showModal}
          onClose={handleCloseModal}
          onSave={handleSaveCourier}
        />
      )}
    </div>
  );
}
