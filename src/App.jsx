import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import BaseLayout from "./components/BaseLayout";
import ResumePage from "./pages/Stock/ResumePage";
import StockGdmUpdate from "./pages/Stock/StockGdmUpdate";
import StockDetailCabang from "./pages/Stock/StockDetailCabang";
import Sales from "./pages/Sales/Sales";
import Skupage from "./pages/SkuPage";
import Karyawan from "./pages/KaryawanPage";
import UserList from "./pages/UserPage";
import AbsensiHarian from "./pages/Absensi/AbsensiHarian";
import Kunjungan from "./pages/Kunjungan/KunjunganPage";
import DashboardDirut from "./pages/Dashboard/DashboardDirut";
import DashboardGm from "./pages/Dashboard/DahsboardGm";
import DashboardSm from "./pages/Dashboard/DashboardSm";
import DashboardDm from "./pages/Dashboard/DashboardDm";
import DashboardPs from "./pages/Dashboard/DashboardPs";
import DetailKunjungan from "./pages/Kunjungan/DetailKunjunganPage";
import AbsensiPs from "./pages/Absensi/AbsensiPS";
import FormAbsen from "./pages/Absensi/FormAbsen";
import KunjunganPs from "./pages/Kunjungan/KunjunganPS";
import FormKunjungan from "./pages/Kunjungan/FormKunjungan";
import DaftarPE from "./pages/PE/DaftarPE";
import PEProductSpecialist from "./pages/PE/PEProductSpecialist";
import FormPE from "./pages/PE/FormPE";
import DaftarOutlet from "./pages/Outlet/DaftarOutlet";
import DaftarPS from "./pages/PS/DaftarPS";
import SalesUpdate from "./pages/Sales/SalesUpdate";
import SalesUpdatePs from "./pages/Sales/SalesUpdatePs";
import SalesHistoryPs from "./pages/Sales/SalesHistoryPs";
import SalesHistory from "./pages/Sales/SalesHistory";
import SalesTarget from "./pages/Sales/SalesTarget";
import SalesReport from "./pages/Sales/SalesReport";
import UploadStock from "./pages/Stock/UploadStockPage";
import SalesUpdateGm from "./pages/Sales/SalesUpdateGm";
import SalesUpdateSm from "./pages/Sales/SalesUpdateSm";
import SalesUpdateDm from "./pages/Sales/SalesUpdateDm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route
          path="/resume"
          element={
            <BaseLayout>
              <ResumePage />
            </BaseLayout>
          }
        />

        <Route
          path="/stockgdm"
          element={
            <BaseLayout>
              <StockGdmUpdate />
            </BaseLayout>
          }
        />

        <Route
          path="/sales"
          element={
            <BaseLayout>
              <Sales />
            </BaseLayout>
          }
        />

        <Route
          path="/stockdetail"
          element={
            <BaseLayout>
              <StockDetailCabang />
            </BaseLayout>
          }
        />

        <Route
          path="/sku"
          element={
            <BaseLayout>
              <Skupage />
            </BaseLayout>
          }
        />

        <Route
          path="/karyawan"
          element={
            <BaseLayout>
              <Karyawan />
            </BaseLayout>
          }
        />

        <Route
          path="/user"
          element={
            <BaseLayout>
              <UserList />
            </BaseLayout>
          }
        />

        <Route
          path="/absensi"
          element={
            <BaseLayout>
              <AbsensiHarian />
            </BaseLayout>
          }
        />

        <Route
          path="/absensi_ps"
          element={
            <BaseLayout>
              <AbsensiPs />
            </BaseLayout>
          }
        />

        <Route
          path="/kunjungan"
          element={
            <BaseLayout>
              <Kunjungan />
            </BaseLayout>
          }
        />

        <Route
          path="/dashboard_dirut"
          element={
            <BaseLayout>
              <DashboardDirut />
            </BaseLayout>
          }
        />

        <Route
          path="/dashboard_gm"
          element={
            <BaseLayout>
              <DashboardGm />
            </BaseLayout>
          }
        />

        <Route
          path="/dashboard_sm"
          element={
            <BaseLayout>
              <DashboardSm />
            </BaseLayout>
          }
        />

        <Route
          path="/dashboard_dm"
          element={
            <BaseLayout>
              <DashboardDm />
            </BaseLayout>
          }
        />
        <Route
          path="/dashboard_ps"
          element={
            <BaseLayout>
              <DashboardPs />
            </BaseLayout>
          }
        />

        <Route
          path="/detail_kunjungan"
          element={
            <BaseLayout>
              <DetailKunjungan />
            </BaseLayout>
          }
        />

        <Route
          path="/form_absen"
          element={
            <BaseLayout>
              <FormAbsen />
            </BaseLayout>
          }
        />

        <Route
          path="/kunjungan_ps"
          element={
            <BaseLayout>
              <KunjunganPs />
            </BaseLayout>
          }
        />

        <Route
          path="/form_kunjungan"
          element={
            <BaseLayout>
              <FormKunjungan />
            </BaseLayout>
          }
        />

        <Route
          path="/daftar_pe"
          element={
            <BaseLayout>
              <DaftarPE />
            </BaseLayout>
          }
        />

        <Route
          path="/daftar_pe_ps"
          element={
            <BaseLayout>
              <PEProductSpecialist />
            </BaseLayout>
          }
        />

        <Route
          path="/form_pe"
          element={
            <BaseLayout>
              <FormPE />
            </BaseLayout>
          }
        />

        <Route
          path="/daftar_outlet"
          element={
            <BaseLayout>
              <DaftarOutlet />
            </BaseLayout>
          }
        />

        <Route
          path="/daftar_ps"
          element={
            <BaseLayout>
              <DaftarPS />
            </BaseLayout>
          }
        />

        <Route
          path="/sales_update"
          element={
            <BaseLayout>
              <SalesUpdate />
            </BaseLayout>
          }
        />

        <Route
          path="/sales_update_ps"
          element={
            <BaseLayout>
              <SalesUpdatePs />
            </BaseLayout>
          }
        />

        <Route
          path="/sales_history_ps"
          element={
            <BaseLayout>
              <SalesHistoryPs />
            </BaseLayout>
          }
        />
        <Route
          path="/sales_history"
          element={
            <BaseLayout>
              <SalesHistory />
            </BaseLayout>
          }
        />
        <Route
          path="/sales_target"
          element={
            <BaseLayout>
              <SalesTarget />
            </BaseLayout>
          }
        />
        <Route
          path="/sales_report"
          element={
            <BaseLayout>
              <SalesReport />
            </BaseLayout>
          }
        />
        <Route
          path="/upload_stock"
          element={
            <BaseLayout>
              <UploadStock />
            </BaseLayout>
          }
        />

        <Route
          path="/sales_update_gm"
          element={
            <BaseLayout>
              <SalesUpdateGm />
            </BaseLayout>
          }
        />

        <Route
          path="/sales_update_sm"
          element={
            <BaseLayout>
              <SalesUpdateSm />
            </BaseLayout>
          }
        />

        <Route
          path="/sales_update_dm"
          element={
            <BaseLayout>
              <SalesUpdateDm />
            </BaseLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
