import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ResumePage from "./pages/ResumePage";
import BaseLayout from "./components/BaseLayout";
import StockGdmUpdate from "./pages/StockGdmUpdate";
import StockDetailCabang from "./pages/StockDetailCabang";
import Sales from "./pages/Sales";
import Skupage from "./pages/SkuPage";
import Karyawan from "./pages/KaryawanPage";
import UserList from "./pages/UserPage";
import AbsensiHarian from "./pages/AbsensiHarian";
import Kunjungan from "./pages/KunjunganPage";
import DashboardDirut from "./pages/DashboardDirut";
import DashboardGm from "./pages/DahsboardGm";
import DashboardSm from "./pages/DashboardSm";
import DashboardDm from "./pages/DashboardDm";
import DashboardPs from "./pages/DashboardPs";
import DetailKunjungan from "./pages/DetailKunjunganPage";
import AbsensiPs from "./pages/AbsensiPS";
import FormAbsen from "./pages/FormAbsen";
import KunjunganPs from "./pages/KunjunganPS";
import FormKunjungan from "./pages/FormKunjungan";

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
      </Routes>
    </Router>
  );
}

export default App;
