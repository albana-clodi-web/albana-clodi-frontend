import { useCallback, useEffect, useRef, useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { BoxIcon, DownloadIcon } from "../../icons";
import OptionDropdown from "../../components/produk/OptionDropdown";
import TableProduk from "../../components/produk/TableProduk";
import { TbFilterDiscount } from "react-icons/tb";
import { Link } from "react-router";
import FilterProduk from "../../components/produk/FilterProduk";
import SearchProduk from "../../components/produk/input/SearchProduk";
import { useNavigate } from "react-router";
import { downloadProductExel } from "../../service/product";

type FilterState = {
  kategori: string;
  channel: string;
  harga: string;
  type: string | null;
  urutan: string;
  produkMarketplace: string;
  order: "desc" | "asc";
};

export default function AllProdukPage() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [filter, setFilter] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  const isSearch = useRef(false);
  const firstLoadBrowser = useRef(true);
  const [filterProduk, setFilterProduk] = useState<FilterState>({
    kategori: "",
    channel: "",
    harga: "",
    type: "",
    urutan: "",
    produkMarketplace: "",
    order: "desc",
  });

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
  }, []);

  // Download Exel
  async function downloadExel() {
    const data = await downloadProductExel();
    return data;
  }

  // Handle Search and Filter Query
  const handleSearchAndFilter = useCallback(
    (keyword: string, filter: FilterState) => {
      const params = new URLSearchParams();
      isSearch.current = true;
      // for search
      params.set("keyword", keyword.toLowerCase());
      // for filter
      params.set("kategori", filter.kategori);
      params.set("channel", filter.channel);
      params.set("harga", filter.harga);
      if (filter.type) {
        params.set("tipe", filter.type);
      }
      params.set("urutan", filter.urutan);
      params.set("produkMarketplace", filter.produkMarketplace);

      navigate(`?${params.toString()}`);
    },
    [navigate]
  );

  return (
    <div>
      <PageMeta
        title="ALBANA GROSIR"
        description="Pusat kontrol untuk semua transaksi dan pesanan pelanggan"
      />
      <PageBreadcrumb pageTitle="Halaman Produk" />

      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div
          className={`mb-4 flex justify-between items-center ${
            isMobile ? "gap-x-5" : "gap-x-2"
          }`}
        >
          <div className="flex-1">
            <SearchProduk
              onSearch={() => handleSearchAndFilter(keyword, filterProduk)}
              keyword={keyword}
              keywordChange={setKeyword}
            />
          </div>
          {/* Button Add Product */}
          {!isMobile ? (
            <Link to={"/produk/form_produk"}>
              <Button
                size={isMobile ? "sm" : "md"}
                variant="primary"
                startIcon={<BoxIcon className="size-5" />}
              >
                Tambah Produk
              </Button>
            </Link>
          ) : null}

          {/* Option Produk */}
          <OptionDropdown />
        </div>
        {/* When display mobile is open change button layout*/}{" "}
        <Link to={"/produk/form_produk"}>
          <div className="mx-auto w-full flex justify-start gap-3 mb-2">
            {isMobile ? (
              <Button
                size={isMobile ? "sm" : "md"}
                variant="primary"
                className="flex-1"
                startIcon={<BoxIcon className="size-5" />}
              >
                Tambah Produk
              </Button>
            ) : null}
          </div>
        </Link>
        <div className="mx-auto w-full flex justify-start gap-3">
          <Button
            size="md"
            variant="outline"
            className="flex-1/2"
            startIcon={<DownloadIcon className="size-5" />}
            onClick={() => downloadExel()}
          >
            Export Data
          </Button>
          <Button
            size="md"
            variant="outline"
            className="flex-1/2"
            startIcon={<TbFilterDiscount className="size-5" />}
            onClick={() => setFilter((prev) => !prev)}
          >
            Filter
          </Button>
        </div>
        <div className="mx-auto w-full text-center mt-2">
          {filter ? (
            <FilterProduk
              setFilter={setFilterProduk}
              onFilter={() => handleSearchAndFilter(keyword, filterProduk)}
            />
          ) : null}

          <TableProduk
            search={keyword}
            isSearch={isSearch.current}
            setIsSearch={isSearch}
            firstLoadBrowser={firstLoadBrowser.current}
            setLoadBrowser={firstLoadBrowser}
            optionFilter={filterProduk}
          />
        </div>
      </div>
    </div>
  );
}
