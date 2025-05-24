import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

export default function NewOrderTable() {
  const orders = []; // Ganti dengan data order Anda

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] mt-5">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 bg-gray-200 dark:bg-black dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-black text-start text-sm md:text-theme-md dark:text-gray-400 w-1">
                No
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                Order ID
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                Pemesan & Tgl Pesan
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                Produk
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                Tagihan
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                Pembayaran
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                Keterangan
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell className="py-4 px-3 sm:px-6 text-start text-gray-500">
                    {index + 1}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                    {order.id}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                    {order.customer} - {order.orderDate}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                    {order.product}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                    {order.bill}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                    {order.payment}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-black text-start text-sm md:text-theme-md dark:text-gray-400">
                    {order.notes}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <td colSpan={8} className="py-4 px-3 text-center">
                  <span className="text-blue-500 hover:underline cursor-pointer">
                    Tampilkan 0 orderan baru
                  </span>
                </td>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
