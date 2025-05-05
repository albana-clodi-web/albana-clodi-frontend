import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { MoreDotIcon } from "../../icons";
import { useState } from "react";

export default function MonthlyGrossProfitChart() {
  const options: ApexOptions = {
    colors: ["#FFB22C"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 180,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Outfit",
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      opacity: 1,
    },

    tooltip: {
      x: {
        show: false,
      },
      y: {
        formatter: (val: number) => `${val}`,
      },
    },
  };
  const series = [
    {
      name: "Sales",
      data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [showChartProGross, setShowChartProGross] = useState(true);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between">
        <div className="mb-2">
          <h3 className=" text-lg font-semibold text-gray-800 dark:text-white/90">
            Laba Kotor - Bulan Ini
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Total Laba Kotor: RP 30315000
          </p>
        </div>

        <div className="relative inline-block">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
          </button>
          <Dropdown
            isOpen={isOpen}
            onClose={closeDropdown}
            className="w-40 p-2">
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300">
              View More
            </DropdownItem>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300">
              Delete
            </DropdownItem>
          </Dropdown>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="-ml-5 min-w-[650px] xl:min-w-full pl-2">
          {showChartProGross && (
            <Chart
              options={{
                ...options,
                plotOptions: {
                  bar: { ...options.plotOptions?.bar, columnWidth: "70%" },
                },
              }}
              series={series}
              type="bar"
              height={300}
            />
          )}
        </div>
      </div>

      <div className="flex justify-end text-md pt-4 pb-2">
        <label
          htmlFor="toggleChartProfitGross"
          className="flex items-center text-gray-800 dark:text-white/90 cursor-pointer">
          <input
            id="toggleChartProfitGross"
            type="checkbox"
            className="hidden"
            checked={showChartProGross}
            onChange={() => setShowChartProGross(!showChartProGross)}
          />
          <span className="w-3 h-3 flex items-center justify-center border  bg-gray-400 rounded-full mr-2">
            {showChartProGross && (
              <div className="w-3 h-3 bg-[#FFB22C] rounded-full"></div>
            )}
          </span>
          <div
            className={
              showChartProGross
                ? "text-theme-sm ml-0.5"
                : "text-gray-400 text-theme-sm ml-0.5"
            }>
            Laba kotor
          </div>
        </label>
      </div>
    </div>
  );
}
