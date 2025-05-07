import PageMeta from "../../components/common/PageMeta";
import FormProduk from "../../components/produk/form/FormProduk";
import ProdukPageBreadcrumb from "../../components/produk/ProdukPageBreadcrumb";

export default function ProductFormPage() {
  return (
    <div>
      <PageMeta
        title="ALBANA GROSIR"
        description="Pusat kontrol untuk semua transaksi dan pesanan pelanggan"
      />
      <ProdukPageBreadcrumb pageTitle="Tambah Produk" />
      <div className=" min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        {/* For Form Produk */}
        <FormProduk />
      </div>
    </div>
  );
}
