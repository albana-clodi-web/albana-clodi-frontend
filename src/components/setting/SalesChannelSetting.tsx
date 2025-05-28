import { useState } from "react";
// import Button from "../ui/button/Button";
import PageMeta from "../common/PageMeta";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { IoSettings } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";
import Button from "../ui/button/Button";
import { TbCirclePlus } from "react-icons/tb";
import ModalChannel from "./modal/ModalChannel";

export default function SalesChannelSetting() {
  //   const [shippingLabel, setShippingLabel] = useState(false);
  //   const [autoDownload, setAutoDownload] = useState(false);
  //   const [autoConnect, setAutoConnect] = useState(false);
  //   const [downloadError, setDownloadError] = useState(false);
  //   const [autoSync, setAutoSync] = useState(false);

  //   const [channelName, setChannelName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const channels = [
    {
      name: "Shopedia",
      isActive: true,
    },
    {
      name: "Bukalapak",
      isActive: true,
    },
    {
      name: "Zilingo",
      isActive: true,
    },
    {
      name: "Lazada",
      isActive: true,
    },
    {
      name: "JD.ID",
      isActive: true,
    },
    {
      name: "Zalora",
      isActive: true,
    },
    {
      name: "Blibli",
      isActive: true,
    },
    {
      name: "WhatsApp",
      isActive: true,
    },
    {
      name: "Instagram",
      isActive: true,
    },
    {
      name: "Facebook",
      isActive: true,
    },
    {
      name: "Offline Store",
      isActive: true,
    },
    {
      name: "Website Live",
      isActive: true,
    },
  ];

  return (
    <div className="w-full mx-auto">
      <PageMeta title="ALBANA GROSIR" description="Pengaturan Sales Channel" />

      <div className="space-y-6">
        <div className="flex items-center justify-end py-2">
          <Button
            className="bg-green-600 hover:bg-green-800"
            onClick={() => {
              setShowModal(true);
            }}
            startIcon={<TbCirclePlus className="size-5" />}>
            Tambah Channel
          </Button>

          {showModal && (
            <ModalChannel changeModal={() => setShowModal(false)} />
          )}
        </div>
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] mt-5">
        <div className="max-w-full overflow-x-auto">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 bg-gray-200 dark:bg-black dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-semibold text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  Nama
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-semibold text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  Keterangan
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-semibold text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  Status
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-semibold text-gray-500 text-end text-theme-sm dark:text-gray-400">
                  <div className="flex justify-end items-center">
                    <IoSettings size={15} className="mx-2" />
                    Action
                  </div>
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {channels.map((channel) => (
                <TableRow key={channel.name}>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {channel.name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    Marketplace {channel.name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <span className="inline-flex text-xs leading-5 font-semibold ">
                      {channel.isActive ? (
                        <div className="bg-green-100 rounded-full px-3 py-1">
                          <span className="text-green-800 ">Active</span>
                        </div>
                      ) : (
                        <div className="bg-red-100 rounded-full px-3 py-1">
                          <span className="text-red-800 ">Inactive</span>
                        </div>
                      )}
                    </span>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-end text-theme-sm dark:text-gray-400">
                    <div className="flex gap-5 justify-end">
                      <CiEdit
                        size={30}
                        className="text-amber-500 cursor-pointer"
                        onClick={() => {
                          setShowModal(true);
                        }}
                      />
                      <TiDelete
                        size={30}
                        className="text-red-600 cursor-pointer"
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
