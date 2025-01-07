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
      </Routes>
    </Router>
  );
}

export default App;
