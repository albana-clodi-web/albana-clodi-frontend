import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import MonthlyGrossProfitChart from "../../components/ecommerce/MonthlyGrossProfitChart";
import StatisticSalersChart from "../../components/ecommerce/StatisticsSalerChart";
// import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
// import RecentOrders from "../../components/ecommerce/RecentOrders";
// import DemographicCard from "../../components/ecommerce/DemographicCard";
import PageMeta from "../../components/common/PageMeta";
import SliderDashboard from "../../components/Carausel/SliderDasboard.";
import SectionDasboard from "./SectionDasboard";

export default function Home() {
  return (
    <>
      <PageMeta title="ALBANA GROSIR" description="Dashboard" />
      <div className="mx-2">
        <h1 className="text-3xl font-medium text-gray-800 dark:text-white/90 lg:text-3xl">
          Dashboard
        </h1>
        <hr className="my-6 border-gray-300 dark:border-gray-700" />
      </div>

      <div className="flex flex-col gap-4 y-6 lg:flex-row lg:gap-3 lg:px-2 lg:py-4">
        {/* Dashboard Section */}
        <div className="flex-1">
          <div className="mb-6 flex items-center justify-between lg:mb-8">
            <SliderDashboard />
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 space-y-6 xl:col-span-7">
              <EcommerceMetrics />
              <MonthlyGrossProfitChart />
            </div>
            <div className="col-span-12">
              <StatisticSalersChart />
            </div>
          </div>
        </div>

        {/* Aside Section */}
        <div className="w-full lg:w-1/3">
          <SectionDasboard />
        </div>
      </div>
    </>
  );
}
