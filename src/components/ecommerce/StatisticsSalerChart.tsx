import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
// import ChartTab from "../common/ChartTab";

import { useState } from "react";

export default function StatisticsSalerChart() {
  const [showChartSaler, setShowChartSaler] = useState(true);
  const options: ApexOptions = {
    legend: {
      show: false, // Hide legend
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#465FFF", "#9CB9FF"], // Define line colors
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 310,
      type: "line", // Set the chart type to 'line'
      toolbar: {
        show: false, // Hide chart toolbar
      },
    },
    stroke: {
      curve: "straight", // Define the line style (straight, smooth, or step)
      width: [2, 2], // Line width for each dataset
    },

    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    markers: {
      size: 0, // Size of the marker points
      strokeColors: "#fff", // Marker border color
      strokeWidth: 2,
      hover: {
        size: 6, // Marker size on hover
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false, // Hide grid lines on x-axis
        },
      },
      yaxis: {
        lines: {
          show: true, // Show grid lines on y-axis
        },
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
    tooltip: {
      enabled: true, // Enable tooltip
      x: {
        // Format for x-axis tooltip
      },
    },
    xaxis: {
      type: "category", // Category-based x-axis
      categories: Array.from({ length: 30 }, (_, i) => (i + 1).toString()), // Days 1 to 30
      axisBorder: {
        show: false, // Hide x-axis border
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
      tooltip: {
        enabled: false, // Disable tooltip for x-axis points
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px", // Adjust font size for y-axis labels
          colors: ["#6B7280"], // Color of the labels
        },
      },
      title: {
        text: "", // Remove y-axis title
        style: {
          fontSize: "0px",
        },
      },
    },
  };

  const currentYear = new Date().getFullYear();
  const series = [
    {
      date: Array.from({ length: 12 }, (_, i) => {
        const month = (i + 1).toString().padStart(2, "0");
        return `${currentYear}-${month}-01`; // Generate dates dynamically for the current year
      }),
      name: "Penjualan Item",
      data: [180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235],
    },
  ];
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Penjualan -Bulan ini
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Produk Terjual : 23 Produk
          </p>
        </div>
        {/* <div className="flex items-start w-full gap-3 sm:justify-end">
          <ChartTab />
        </div> */}
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="-ml-5 min-w-[650px] xl:min-w-full pl-2">
          {showChartSaler && (
            <Chart options={options} series={series} type="area" height={300} />
          )}
        </div>
      </div>

      <div className="flex justify-end text-md pt-4 pb-2">
        <label
          htmlFor="toggleChartSaler"
          className="flex items-center text-gray-800 dark:text-white/90 cursor-pointer">
          <input
            id="toggleChartSaler"
            type="checkbox"
            className="hidden"
            checked={showChartSaler}
            onChange={() => setShowChartSaler(!showChartSaler)}
          />
          <span className="w-3 h-3 flex items-center justify-center border  bg-gray-400 rounded-full mr-2">
            {showChartSaler && (
              <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
            )}
          </span>
          <div
            className={
              showChartSaler
                ? "text-theme-sm ml-0.5"
                : "text-gray-400 text-theme-sm ml-0.5"
            }>
            Penjualan item
          </div>
        </label>
      </div>
    </div>
  );
}
