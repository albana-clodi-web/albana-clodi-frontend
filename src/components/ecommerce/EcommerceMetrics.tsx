import { IoIosArrowForward } from "react-icons/io";
import { GiProfit } from "react-icons/gi";
import { GiBoxUnpacking } from "react-icons/gi";
import { BsBoxSeamFill } from "react-icons/bs";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { ArrowDownIcon, ArrowUpIcon } from "../../icons";
import Badge from "../ui/badge/Badge";

export default function EcommerceMetrics() {
  const metrics = [
    {
      label: "Laba Kotor",
      value: 4960000,
      change: 8.2,
      trend: "up",
      icon: <GiProfit className="text-green-600 size-6 dark:text-white/90" />,
    },
    {
      label: "Item Terjual",
      value: 413,
      change: 3.5,
      trend: "up",
      icon: (
        <GiBoxUnpacking className="text-blue-600 size-6 dark:text-white/90" />
      ),
    },
    {
      label: "Order Belum Diproses",
      value: 27,
      change: null,
      trend: null,
      icon: (
        <FaPeopleCarryBox className="text-yellow-500 size-6 dark:text-white/90" />
      ),
    },
    {
      label: "Order Hari Ini",
      value: 92,
      change: 2.3,
      trend: "down",
      icon: (
        <BsBoxSeamFill className="text-orange-600 size-6 dark:text-white/90" />
      ),
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-6">
      {metrics.map((item) => (
        <div
          key={item.label}
          className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 
                  dark:border-gray-800 dark:bg-white/[0.03] md:p-6 shadow-md hover:shadow-blue-300 dark:hover:bg-blue-200/[0.03]">
          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-xl ${
                  item.label === "Laba Kotor"
                    ? "bg-green-50 dark:bg-green-800"
                    : item.label === "Item Terjual"
                    ? "bg-blue-50 dark:bg-blue-800"
                    : item.label === "Order Belum Diproses"
                    ? "bg-yellow-50 dark:bg-yellow-800"
                    : "bg-orange-50 dark:bg-orange-800"
                }`}>
                {item.icon}
              </div>
              <IoIosArrowForward className="text-gray-500" />
            </div>

            <div className="flex items-end justify-between mt-3">
              <div>
                <span className="text-theme-sm text-gray-500 dark:text-gray-400">
                  {item.label}
                </span>
                <h4 className="mt-0.5 font-bold text-gray-800 text-theme-xl dark:text-white/90">
                  {item.label === "Laba Kotor"
                    ? `Rp ${item.value.toLocaleString("id-ID")}`
                    : item.value.toLocaleString()}
                </h4>
              </div>
              {item.change !== null && (
                <Badge color={item.trend === "up" ? "success" : "error"}>
                  {item.trend === "up" ? <ArrowUpIcon /> : <ArrowDownIcon />}
                  {item.change}%
                </Badge>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
