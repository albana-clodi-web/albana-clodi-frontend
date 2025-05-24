import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import NewOrderPage from "./pages/Order/NewOrderPage";
import AllOrderPage from "./pages/Order/AllOrder";
import CancelOrderPage from "./pages/Order/CancelOder";
import AllProdukPage from "./pages/Produk/AllProduk";
import AllCustomerPage from "./pages/Customer/AllCustomer";
import AllReportPage from "./pages/Laporan/AllReport";
import ProductFormPage from "./pages/Produk/ProductFormPage";
import PrintProductBarcode from "./pages/Produk/PrintProductBarcode";
import CategoryProduk from "./pages/Produk/CategoryProduk";
import CustomerFormPage from "./pages/Customer/CustomerFormPage";
import AllExpense from "./pages/Expenses/Allexpense";
import SettingPage from "./pages/SettingPage/SettingPage";
import AddOrderFomPage from "./components/order/form/AddOrderFormPage";
import UploadOrderPage from "./pages/Order/UploadOrderPage";
import EditOrderFomPage from "./components/order/form/EditOrderPage";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index path="/" element={<Home />} />

            {/* Order Page */}
            <Route path="/order" element={<AllOrderPage />} />
            <Route path="/order/sales_channel" element={<NewOrderPage />} />
            <Route path="/order/form_add_order" element={<AddOrderFomPage />} />
            <Route path="/order/canceled" element={<CancelOrderPage />} />
            <Route path="/order/import_order" element={<UploadOrderPage />} />
            <Route
              path="/order/edit_order/:id"
              element={<EditOrderFomPage />}
            />

            {/* Produk Page */}
            <Route path="/produk" element={<AllProdukPage />} />
            <Route path="/produk/form_produk" element={<ProductFormPage />} />
            <Route path="/produk/edit/:id" element={<ProductFormPage />} />
            <Route
              path="/produk/barcode_sku"
              element={<PrintProductBarcode />}
            />
            <Route
              path="/produk/kategori_produk"
              element={<CategoryProduk />}
            />

            {/* Customer Page */}
            <Route path="/customer" element={<AllCustomerPage />} />
            <Route
              path="/customer/form_customer"
              element={<CustomerFormPage />}
            />

            {/* Report Page */}
            <Route path="/report" element={<AllReportPage />} />

            {/* Produk Page */}
            <Route path="/expense" element={<AllExpense />} />

            {/* Setting Page */}
            <Route path="/setting" element={<SettingPage />} />
            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
