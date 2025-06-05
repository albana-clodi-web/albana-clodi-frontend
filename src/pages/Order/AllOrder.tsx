/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import OrderCard from "../../components/order/card/OrderCard";
import { TbFilterDiscount } from "react-icons/tb";
import Button from "../../components/ui/button/Button";
import { useNavigate, useLocation } from "react-router";
import SearchOrder from "../../components/order/filter/SearchOrder";
import FilterOrder from "../../components/order/filter/FilterOrder";
import FilterStatusOrder from "../../components/order/filter/FilterStatusOrder";
import { DownloadIcon } from "../../icons";
import { FaPlus } from "react-icons/fa6";
import OptionDropdownOrder from "../../components/order/dropdown/OptionDropdownOrder";
import OrderToolbar from "../../components/order/orderToolbar";
import { getOrders, OrderItem } from "../../service/order/index";
import { exportOrdersToExcel } from "../../service/order/order.service";
import toast from "react-hot-toast";

export type FilterState = {
  ordererCustomerId?: string;
  deliveryTargetCustomerId?: string;
  salesChannelId?: string;
  deliveryPlaceId?: string;
  orderDate?: string;
  orderStatus?: string;
  orderMonth?: string;
  orderYear?: string;
  startDate?: string;
  endDate?: string;
  customerCategory?: string;
  paymentStatus?: string;
  productId?: string;
  paymentMethodId?: string;
  search?: string;
  sort?: string;
  order?: "asc" | "desc";
};

export default function AllOrderPage() {
  const [selectedStatuses, setSelectedStatuses] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [filter, setFilter] = useState<boolean>(false);

  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [filterOrder, setFilterOrder] = useState<FilterState>({
    ordererCustomerId: "",
    deliveryTargetCustomerId: "",
    salesChannelId: "",
    deliveryPlaceId: "",
    orderDate: "",
    orderStatus: "",
    orderMonth: "",
    orderYear: "",
    startDate: "",
    endDate: "",
    customerCategory: "",
    paymentStatus: "",
    productId: "",
    paymentMethodId: "",
    search: "",
    sort: "",
    // order: "desc",
  });

  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchAndFilter = useCallback(
    (keyword: string, filter: FilterState) => {
      const params = new URLSearchParams();

      if (keyword) params.set("search", keyword.toLowerCase());

      Object.entries(filter).forEach(([key, value]) => {
        if (value && value !== "") {
          params.set(key, value);
        }
      });

      navigate(`?${params.toString()}`);
    },
    [navigate]
  );

  const handleStatusChange = (status: string) => {
    setSelectedStatuses(status);

    const newFilter = {
      ...filterOrder,
      paymentStatus: status || "",
    };

    setFilterOrder(newFilter);
    handleSearchAndFilter(keyword, newFilter);
  };

  useEffect(() => {
    async function fetchFilteredOrders() {
      setLoading(true);
      const params = new URLSearchParams(location.search);

      const filterFromURL: FilterState = {
        ordererCustomerId: params.get("ordererCustomerId") || "",
        deliveryTargetCustomerId: params.get("deliveryTargetCustomerId") || "",
        salesChannelId: params.get("salesChannelId") || "",
        deliveryPlaceId: params.get("deliveryPlaceId") || "",
        orderDate: params.get("orderDate") || "",
        orderStatus: params.get("orderStatus") || "",
        orderMonth: params.get("orderMonth") || "",
        orderYear: params.get("orderYear") || "",
        startDate: params.get("startDate") || "",
        endDate: params.get("endDate") || "",
        customerCategory: params.get("customerCategory") || "",
        paymentStatus: params.get("paymentStatus") || "",
        productId: params.get("productId") || "",
        paymentMethodId: params.get("paymentMethodId") || "",
        search: params.get("search") || "",
        sort: params.get("sort") || "",
        // order: (params.get("order") as "asc" | "desc") || "desc",
      };

      setFilterOrder(filterFromURL);
      setSelectedStatuses(filterFromURL.paymentStatus || "");

      const filteredParams = Object.fromEntries(
        Object.entries(filterFromURL).filter(
          ([_, value]) => value !== "" && value !== undefined
        )
      );

      const result = await getOrders(filteredParams);
      if (result.success && Array.isArray(result.responseObject)) {
        const filteredOrders = result.responseObject.filter(
          (order) => order.OrderDetail.paymentStatus !== "CANCEL"
        );
        setOrders(filteredOrders);
      } else {
        setOrders([]);
      }

      setLoading(false);
    }

    fetchFilteredOrders();
  }, [location.search, setLoading]);

  useEffect(() => {
    if (!location.search) {
      const savedFilter = localStorage.getItem("orderFilter");
      if (savedFilter) {
        const parsedFilter: FilterState = JSON.parse(savedFilter);
        setFilterOrder(parsedFilter);
        handleSearchAndFilter(keyword, parsedFilter);
      }
    }
  }, [handleSearchAndFilter, keyword, location.search]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMobile]);

  function handleExport() {
    toast.promise(exportOrdersToExcel(), {
      loading: "Mengunduh file...",
      success: "File berhasil diunduh!",
      error: "Gagal mengunduh file Excel.",
    });
  }

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  const [selectedOrderIds, setSelectedOrderIds] = useState<string[]>([]);

  const handleSelectAll = (checked: boolean) => {
    const currentPageIds = currentOrders.map((order) => order.id);
    if (checked) {
      setSelectedOrderIds((prev) => [
        ...prev,
        ...currentPageIds.filter((id) => !prev.includes(id)),
      ]);
    } else {
      setSelectedOrderIds((prev) =>
        prev.filter((id) => !currentPageIds.includes(id))
      );
    }
  };

  const isAllSelected = currentOrders.every((order) =>
    selectedOrderIds.includes(order.id)
  );

  const handleToggleSelect = (orderId: string) => {
    setSelectedOrderIds((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };

  const handleMassPrint = () => {
    if (selectedOrderIds.length === 0) return;

    const query = selectedOrderIds.join(",");
    navigate(`/order/print-label?ids=${query}`);
  };

  return (
    <div className="dark:border-gray-800 dark:bg-white/[0.0] dark:text-gray-400">
      <PageMeta
        title="ALBANA GROSIR"
        description="Pusat kontrol untuk semua transaksi dan pesanan pelanggan"
      />
      <PageBreadcrumb pageTitle="Halaman Order" />
      <hr className="my-6 border-gray-300 dark:border-gray-700" />

      <div className="py-2 bg-gray-50 dark:bg-white/[0]">
        <div
          className={`flex flex-wrap gap-2 ${
            window.innerWidth <= 768 ? "overflow-x-auto" : ""
          }`}
        >
          <FilterStatusOrder
            onChange={handleStatusChange}
            selectedStatuses={selectedStatuses}
          />
        </div>

        {/* Search and Filter Row */}
        <div className="flex flex-wrap items-center gap-2 mb-4 mt-3">
          <div className="relative">{/* <FilterOrderDropdown /> */}</div>
          <div className="flex-1">
            <SearchOrder
              onSearch={() => handleSearchAndFilter(keyword, filterOrder)}
              keyword={keyword}
              keywordChange={setKeyword}
            />
          </div>
          <div className="flex gap-2 ml-auto">
            <Link to={"/order/form_add_order"}>
              <div className="mx-auto w-full flex justify-start gap-3">
                <Button
                  size="md"
                  variant="primary"
                  className="flex-1"
                  startIcon={<FaPlus className="size-5 text-white" />}
                >
                  Tambah Order
                </Button>
              </div>
            </Link>
            <Button
              size="md"
              variant="outline"
              startIcon={<TbFilterDiscount className="size-5 text-blue-700" />}
              onClick={() => setFilter((prev) => !prev)}
            >
              Filter
            </Button>

            <Button
              size="md"
              variant="outline"
              onClick={handleExport}
              startIcon={<DownloadIcon className="size-5 text-blue-700" />}
            >
              Download
            </Button>
            <OptionDropdownOrder />
          </div>
        </div>

        <div className="mx-auto w-full text-center mt-2">
          {filter ? (
            <FilterOrder
              filter={filterOrder}
              setFilter={setFilterOrder}
              onFilter={() => handleSearchAndFilter(keyword, filterOrder)}
            />
          ) : null}

          {/* Info */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-2xl font-medium">
              {orders.length} order ditemukan
            </p>
            <div className="flex justify-between items-center bg-white dark:bg-white/[0] dark:border dark:border-gray-700 p-3.5 rounded-lg">
              <Link to="/profile">
                <span className="text-blue-600 dark:text-white/[0.3] text-md font-semibold">
                  Lihat Detail
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-6">
          {loading ? (
            <div className="text-center py-10">
              {" "}
              <div
                className={`flex flex-wrap gap-2 ${
                  isMobile ? "overflow-x-auto" : ""
                }`}
              ></div>
            </div>
          ) : (
            <OrderCard
              orders={currentOrders}
              selectedOrderIds={selectedOrderIds}
              onToggleSelect={handleToggleSelect}
            />
          )}
        </div>
        <OrderToolbar
          currentPage={currentPage}
          totalItems={orders.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onSelectAll={handleSelectAll}
          isAllSelected={isAllSelected}
          selectedCount={selectedOrderIds.length}
          onMassPrint={handleMassPrint} selectedOrderIds={[]}        />
      </div>
    </div>
  );
}
