// import { useRef } from "react";
import PageMeta from "../../components/common/PageMeta";
import CancelOrderCard from "../../components/order/card/CancelOrderCard";
import FilterBarCancelOrder from "../../components/order/filter/FilterBarCancelOrder";
import OrderPageBreadcrumb from "./OrderPageBreadcrumb";

export default function CancelOrderPage() {
  return (
    <div>
      <PageMeta
        title="ALBANA GROSIR"
        description="Pusat kontrol untuk semua transaksi dan pesanan pelanggan"
      />
      <OrderPageBreadcrumb pageTitle="Cancel Order" />
      <div>
        <FilterBarCancelOrder />
      </div>
      <div>
        <CancelOrderCard />
      </div>
    </div>
  );
}
