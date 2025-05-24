import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";
import Checkbox from "../form/input/Checkbox";
import { useCallback, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { getProducts } from "../../service/product";
import { type ArrayProduct } from "../../service/product";
import { Link } from "react-router";

export default function TableProduk() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState<ArrayProduct[] | null>(null);

  const [isChecked, setIsChecked] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string[]>([]);

  // Sync selectedItem when isChecked changes
  useEffect(() => {
    // setSelectedItem(isChecked ? products?.map((val) => val.id) : []);
    if (isChecked && products) {
      setSelectedItem(products.map((val) => val.product.id));
    } else {
      setSelectedItem([]);
    }
  }, [isChecked, products]);

  // Sync isChecked when selectedItem manually emptied
  useEffect(() => {
    if (selectedItem?.length === 0) {
      setIsChecked(false);
    }
  }, [selectedItem]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const result = await getProducts();
      if (result.success && result.responseObject) {
        setProducts(result.responseObject.data);
      } else {
        setMessage(result.message);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const checkboxHandler = useCallback((checked: boolean, id: string) => {
    setSelectedItem((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  }, []);

  console.log(loading);
  console.log(products);

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
            {products && products.length > 0 ? (
              products.map((produk, index) => (
                <TableRow key={index}>
                  <TableCell className="px-5 py-4 sm:px-5 text-start">
                    <Checkbox
                      id={produk.product.id}
                      checked={selectedItem.includes(produk.product.id)}
                      onChange={(checked) =>
                        checkboxHandler(checked, produk.product.id)
                      }
                    />
                  </TableCell>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 overflow-hidden rounded-full">
                        <img width={30} height={30} />
                      </div>
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {produk.product.name}
                        </span>
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          {produk.price.normal}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {produk.variant.stock}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <div className="flex -space-x-2">1</div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge size="sm" color={"success"}>
                      {produk.product.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {produk.product.description}
                  </TableCell>
                  <TableCell className="px-4 text-gray-500 text-theme-sm dark:text-gray-40">
                    <div>Tidak Ada Harga Grosir</div>
                  </TableCell>
                  <TableCell className="px-4 text-gray-500 text-theme-sm dark:text-gray-40">
                    <div className="flex gap-2 items-stretch">
                      <Link to={`/produk/edit/${produk.product.id}`}>
                        <FaEdit className="w-6 h-5 text-amber-500 cursor-pointer" />
                      </Link>

                      <AiFillDelete className="w-6 h-5  text-red-700 cursor-pointer" />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow className="">
                <TableCell
                  colSpan={8}
                  className="px-4 text-gray-500  dark:text-gray-40 text-center font-bold h-20 text-2xl"
                >
                  <div>{message}</div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
