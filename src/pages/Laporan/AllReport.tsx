import { useEffect, useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Carousel from "../../components/laporan/Caraousel";
import CardReport from "../../components/laporan/card/CardReport";
import { FaLifeRing, FaPlaneDeparture } from "react-icons/fa";
import { GiMoneyStack, GiProfit, GiTakeMyMoney } from "react-icons/gi";
import { BiCalculator, BiSolidDiscount } from "react-icons/bi";
import { LuPackageOpen } from "react-icons/lu";
import StatisticsChart from "../../components/ecommerce/StatisticsSalerChart";
import {
  getPaymentTransaction,
  getReport,
  PaymentTransaction,
  ProductSold,
  ProductSolds,
  type ReportAll,
} from "../../service/report";
import FilterReport from "../../components/laporan/filter/FilterReport";
import PaymentTransactions from "../../components/laporan/PaymentTransactionTable";
import ProductSoldChart from "../../components/laporan/SalesChart";

export default function AllReportPage() {
  // const inputRef = useRef<HTMLInputElement>(null);
  const [report, setReport] = useState<ReportAll | null>(null);
  const [paymentTransaction, setPaymentTransaction] = useState<
    PaymentTransaction[] | null
  >(null);
  const [productSold, setProductSold] = useState<ProductSold | null>(null);
  const [totalProductSold, setTotalProductSold] = useState<number>(0);
  const [message, setMessage] = useState("");

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  // Untuk "By Month"
  const [month, setMonth] = useState(String(new Date().getMonth() + 1));
  const [year, setYear] = useState(String(new Date().getFullYear()));

  useEffect(() => {
    const fetchReport = async () => {
      const result = await getReport({ year, month, endDate, startDate });
      if (result.success && result.responseObject) {
        setReport(result.responseObject);
        setMessage(result.message);
      } else {
        setMessage(result.message);
      }
    };
    fetchReport();
  }, [year, month, endDate, startDate]);

  useEffect(() => {
    const fetchPaymentTransaction = async () => {
      const result = await getPaymentTransaction({
        year,
        month,
        endDate,
        startDate,
      });
      if (result.success && result.responseObject) {
        setPaymentTransaction(result.responseObject.payment_methods);
        setMessage(result.message);
      } else {
        setMessage(result.message);
      }
    };
    const fetchProductSold = async () => {
      const resultProduct = await ProductSolds({
        year,
        month,
        endDate,
        startDate,
      });
      if (resultProduct.success && resultProduct.responseObject) {
        setProductSold(resultProduct.responseObject.produk_terjual_per_hari);
        setTotalProductSold(resultProduct.responseObject.totalProductsSold);
        setMessage(resultProduct.message);
      } else {
        setMessage(resultProduct.message);
      }
    };
    fetchProductSold();
    fetchPaymentTransaction();
  }, [year, month, endDate, startDate]);
  console.log(message);

  return (
    <div>
      <PageMeta
        title="ALBANA GROSIR"
        description="Pusat kontrol untuk semua transaksi dan pesanan pelanggan"
      />
      <PageBreadcrumb pageTitle="Laporan" />

      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <FilterReport
          month={month}
          year={year}
          setYear={setYear}
          setMonth={setMonth}
          setEndDate={setEndDate}
          setStartDate={setStartDate}
        />
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
          {report?.reportExpenses.filterInfo}
        </h2>
        <Carousel>
          {/* Slide 1 */}
          <div className="py-3 mr-5">
            <div className="grid gap-6 md:grid-cols-4">
              <CardReport
                icon={<FaLifeRing size={30} />}
                title="Penjualan Kotor"
                result={`Rp ${
                  report?.reportOrders?.penjualan_kotor.toLocaleString(
                    "id-ID"
                  ) ?? 0
                }`}
                iconColor="bg-brand-100 text-brand-600"
              />
              <CardReport
                icon={<GiProfit size={30} />}
                title="Laba Kotor"
                result={`Rp ${
                  report?.reportOrders?.laba_kotor.toLocaleString("id-ID") ?? 0
                }`}
                iconColor="bg-green-100 text-green-600"
              />
              <CardReport
                icon={<GiTakeMyMoney size={30} />}
                title="Penjualan Bersih"
                result={`Rp ${
                  report?.reportOrders?.penjualan_bersih.toLocaleString(
                    "id-ID"
                  ) ?? 0
                }`}
                iconColor="bg-amber-100 text-amber-600"
              />
              <CardReport
                icon={<GiMoneyStack size={30} />}
                title="Laba Bersih"
                result={`Rp ${
                  report?.reportOrders?.laba_kotor.toLocaleString("id-ID") ?? 0
                }`}
                iconColor="bg-yellow-100 text-yellow-600"
              />
              <CardReport
                icon={<BiCalculator size={30} />}
                title="Pengeluaran"
                result={`Rp ${
                  report?.reportExpenses?.totalExpenses.toLocaleString(
                    "id-ID"
                  ) ?? 0
                }`}
                iconColor="bg-red-100 text-red-600"
              />
              {/* Row 2 */}
              <CardReport
                icon={<BiSolidDiscount size={30} />}
                title="Total Item Terjual"
                result={`${report?.reportOrders?.total_item_terjual ?? 0}`}
                iconColor="bg-red-100 text-red-600"
              />
              <CardReport
                icon={<LuPackageOpen size={30} />}
                title="Total Order"
                result={`${report?.reportOrders?.total_orders ?? 0}`}
                iconColor="bg-cyan-100 text-cyan-600"
              />
              <CardReport
                icon={<FaPlaneDeparture size={30} />}
                title="Biaya Lain"
                result={`${report?.reportOrders?.total_transactions ?? 0}`}
                iconColor="bg-blue-100 text-blue-600"
              />
            </div>
          </div>

          {/* Slide 2 */}
          <div className="py-3">
            <div className="grid gap-6 md:grid-cols-4">
              <CardReport
                icon={<LuPackageOpen size={30} />}
                title="Ongkir"
                result="Rp 1.052.000"
                iconColor="bg-cyan-100 text-cyan-600"
              />
              <CardReport
                icon={<BiCalculator size={30} />}
                title="Pengeluaran"
                result={`Rp ${
                  report?.reportExpenses?.totalExpenses.toLocaleString(
                    "id-ID"
                  ) ?? 0
                }`}
                iconColor="bg-red-100 text-red-600"
              />
              <CardReport
                icon={<FaPlaneDeparture size={30} />}
                title="Biaya Lain"
                result="Rp 1.052.000"
                iconColor="bg-blue-100 text-blue-600"
              />
            </div>
          </div>
        </Carousel>

        <div className="grid grid-cols-12 gap-4 md:gap-6 mt-10">
          <div className="col-span-12">
            <ProductSoldChart
              productsSold={productSold}
              totalProductsSold={totalProductSold}
              month={month}
              year={year}
            />
          </div>
          <div className="col-span-12">
            <StatisticsChart />
          </div>
          <div className="col-span-12 xl:col-span-7">
            <PaymentTransactions data={paymentTransaction} />
          </div>
        </div>
      </div>
    </div>
  );
}
