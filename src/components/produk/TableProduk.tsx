import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";
import Checkbox from "../form/input/Checkbox";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

interface Order {
  id: number;
  user: {
    image: string;
    name: string;
    role: string;
  };
  projectName: string;
  team: {
    images: string[];
  };
  status: string;
  budget: string;
  grosir: boolean;
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Lindsey Curtis",
      role: "Web Designer",
    },
    projectName: "Agency Website",
    team: {
      images: [
        "/images/user/user-22.jpg",
        "/images/user/user-23.jpg",
        "/images/user/user-24.jpg",
      ],
    },
    budget: "3.9K",
    status: "Active",
    grosir: false,
  },
  {
    id: 2,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Lindsey Curtis",
      role: "Web Designer",
    },
    projectName: "Sepatu Baru",
    team: {
      images: [
        "/images/user/user-22.jpg",
        "/images/user/user-23.jpg",
        "/images/user/user-24.jpg",
      ],
    },
    budget: "3.9K",
    status: "Active",
    grosir: false,
  },
];
export default function TableProduk() {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedItem, setSelectItems] = useState<number[]>([]);

  // State for Checkbox and Multiple Checkbox
  useEffect(() => {
    if (isChecked) {
      setSelectItems(tableData.map((val) => val.id));
    } else {
      setSelectItems([]);
    }
  }, [isChecked]);

  function checkboxHandler(checked: boolean, id: number) {
    if (checked) {
      setSelectItems((prev) => [...prev, id]);
    } else {
      setSelectItems((prev) => prev.filter((item) => item !== id));
    }
  }

  // State for button Filter

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell className="px-5 py-5">
                <Checkbox checked={isChecked} onChange={setIsChecked} />
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-extrabold text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Produk & Harga
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-extrabold text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Stock
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-extrabold text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Varian
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-extrabold text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Kategori
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-extrabold text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Keterangan
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-extrabold text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Grosir
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-extrabold text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Aksi
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="px-5 py-4 sm:px-5 text-start">
                  <Checkbox
                    id={order.id.toString()}
                    checked={selectedItem.includes(order.id)}
                    onChange={(checked) => checkboxHandler(checked, order.id)}
                  />
                </TableCell>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        width={30}
                        height={30}
                        src={order.user.image}
                        alt={order.user.name}
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {order.user.name}
                      </span>
                      <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                        {order.user.role}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.projectName}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <div className="flex -space-x-2">
                    {order.team.images.map((teamImage, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
                      >
                        <img
                          width={24}
                          height={24}
                          src={teamImage}
                          alt={`Team member ${index + 1}`}
                          className="w-full size-6"
                        />
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                      order.status === "Active"
                        ? "success"
                        : order.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {order.budget}
                </TableCell>
                <TableCell className="px-4 text-gray-500 text-theme-sm dark:text-gray-40">
                  {order.grosir ? "Ada Harga Grosir" : "Tidak Ada Harga Grosir"}
                </TableCell>
                <TableCell className="px-4 text-gray-500 text-theme-sm dark:text-gray-40">
                  <div className="flex gap-2 items-stretch">
                    <FaEdit className="w-6 h-5 text-amber-500" />
                    <AiFillDelete className="w-6 h-5  text-red-700" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
