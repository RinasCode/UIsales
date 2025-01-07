import React, { useState } from "react";

function Skupage() {
  const [searchDesc, setSearchDesc] = useState(""); // State untuk pencarian DESC
  const [startDate, setStartDate] = useState(""); // State untuk tanggal awal
  const [endDate, setEndDate] = useState(""); // State untuk tanggal akhir
  const [currentPage, setCurrentPage] = useState(1); // Halaman saat ini
  const [itemsPerPage] = useState(5); // Jumlah item per halaman

  const handleSearchDesc = (e) => {
    setSearchDesc(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const filterByDesc = (desc) => {
    return desc.toLowerCase().includes(searchDesc.toLowerCase());
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const allData = [
    {
      Kode_Produk_Principal: "2ALKCID10",
      KODE_PPG: "A60463",
      KODE_MPI: "G@0262",
      NAMA_ITEM: "ALKACIDE 1L-2ALKCID10",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM",
      Tanggal_masa_berlaku_NIE: "19/09/2027",
      Master_Box: "BOTOL @1Liter",
      Box: "@1Liter",
      Isi_per_satuan_jual: "1 LITER/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 26.5,
      Lebar_Master_Box: 20.5,
      Tinggi_Master_Box: 27,
      Berat_Master_Box: 7,
      Panjang_Box: 44,
      Lebar_Box: 34.1,
      Tinggi_Box: 45,
      Berat_Box: 1.17,
      Harga_Jual_ke_Distributor: 2632500,
      Harga_Price_List: 2925000,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-CID",
      ed: "5 TAHUN",
      GROUP_PRODUCT: "DISINFECTANT",
      group: "INSTR DISINFECTANT",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKCID10",
      hc_mc: "HC",
      imam: "2ALKCID10",
      STOCK: 1,
      kode_ekat23: "A60463",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "SPC",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60463",
      group_category: "ALKAPHARM",
    },
    {
      Kode_Produk_Principal: "2ALKTSP01",
      KODE_PPG: "A60503",
      KODE_MPI: "G@0286",
      NAMA_ITEM: "SEPTALKAN SPRAY 750ML-2ALKTSP01",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM",
      Tanggal_masa_berlaku_NIE: "19/09/2027",
      Master_Box: "12 BOTOL",
      Box: "750ml",
      Isi_per_satuan_jual: "750 ml/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 32,
      Lebar_Master_Box: 27,
      Tinggi_Master_Box: 29,
      Berat_Master_Box: 11,
      Panjang_Box: 26.6,
      Lebar_Box: 22.5,
      Tinggi_Box: 24.2,
      Berat_Box: 916,
      Harga_Jual_ke_Distributor: 256950,
      Harga_Price_List: 285500,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-TSP",
      ed: "5 TAHUN",
      GROUP_PRODUCT: "SURFACE SPRAY",
      group: "SURF CLEAN",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKTSP01",
      hc_mc: "HC",
      imam: "2ALKTSP01",
      STOCK: 1,
      kode_ekat23: "A60503",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "GEN",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60503",
      group_category: "ALKAPHARM",
    },
    {
      Kode_Produk_Principal: "2ALKCID10",
      KODE_PPG: "A60463",
      KODE_MPI: "G@0262",
      NAMA_ITEM: "ALKACIDE 1L-2ALKCID10",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM",
      Tanggal_masa_berlaku_NIE: "19/09/2027",
      Master_Box: "BOTOL @1Liter",
      Box: "@1Liter",
      Isi_per_satuan_jual: "1 LITER/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 26.5,
      Lebar_Master_Box: 20.5,
      Tinggi_Master_Box: 27,
      Berat_Master_Box: 7,
      Panjang_Box: 44,
      Lebar_Box: 34.1,
      Tinggi_Box: 45,
      Berat_Box: 1.17,
      Harga_Jual_ke_Distributor: 2632500,
      Harga_Price_List: 2925000,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-CID",
      ed: "5 TAHUN",
      GROUP_PRODUCT: "DISINFECTANT",
      group: "INSTR DISINFECTANT",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKCID10",
      hc_mc: "HC",
      imam: "2ALKCID10",
      STOCK: 1,
      kode_ekat23: "A60463",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "SPC",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60463",
      group_category: "ALKAPHARM",
    },
    {
      Kode_Produk_Principal: "2ALKTSP01",
      KODE_PPG: "A60503",
      KODE_MPI: "G@0286",
      NAMA_ITEM: "SEPTALKAN SPRAY 750ML-2ALKTSP01",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM",
      Tanggal_masa_berlaku_NIE: "19/09/2027",
      Master_Box: "12 BOTOL",
      Box: "750ml",
      Isi_per_satuan_jual: "750 ml/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 32,
      Lebar_Master_Box: 27,
      Tinggi_Master_Box: 29,
      Berat_Master_Box: 11,
      Panjang_Box: 26.6,
      Lebar_Box: 22.5,
      Tinggi_Box: 24.2,
      Berat_Box: 916,
      Harga_Jual_ke_Distributor: 256950,
      Harga_Price_List: 285500,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-TSP",
      ed: "15 TAHUN",
      GROUP_PRODUCT: "SURFACE SPRAY",
      group: "SURF CLEAN",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKTSP01",
      hc_mc: "HC",
      imam: "2ALKTSP01",
      STOCK: 1,
      kode_ekat23: "A60503",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "GEN",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60503",
      group_category: "ALKAPHARM",
    },
    {
      Kode_Produk_Principal: "2ALKCID10",
      KODE_PPG: "A60463",
      KODE_MPI: "G@0262",
      NAMA_ITEM: "ALKACIDE 1L-2ALKCID10",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM",
      Tanggal_masa_berlaku_NIE: "19/09/2027",
      Master_Box: "BOTOL @1Liter",
      Box: "@1Liter",
      Isi_per_satuan_jual: "1 LITER/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 26.5,
      Lebar_Master_Box: 20.5,
      Tinggi_Master_Box: 27,
      Berat_Master_Box: 7,
      Panjang_Box: 44,
      Lebar_Box: 34.1,
      Tinggi_Box: 45,
      Berat_Box: 1.17,
      Harga_Jual_ke_Distributor: 2632500,
      Harga_Price_List: 2925000,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-CID",
      ed: "25 TAHUN",
      GROUP_PRODUCT: "DISINFECTANT",
      group: "INSTR DISINFECTANT",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKCID10",
      hc_mc: "HC",
      imam: "2ALKCID10",
      STOCK: 1,
      kode_ekat23: "A60463",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "SPC",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60463",
      group_category: "ALKAPHARM",
    },
    {
      Kode_Produk_Principal: "2ALKTSP01",
      KODE_PPG: "A60503",
      KODE_MPI: "G@0286",
      NAMA_ITEM: "SEPTALKAN SPRAY 750ML-2ALKTSP01 sample 1",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM sample",
      Tanggal_masa_berlaku_NIE: "19/09/2025",
      Master_Box: "12 BOTOL",
      Box: "750ml",
      Isi_per_satuan_jual: "750 ml/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 32,
      Lebar_Master_Box: 27,
      Tinggi_Master_Box: 29,
      Berat_Master_Box: 11,
      Panjang_Box: 26.6,
      Lebar_Box: 22.5,
      Tinggi_Box: 24.2,
      Berat_Box: 916,
      Harga_Jual_ke_Distributor: 256950,
      Harga_Price_List: 285500,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-TSP",
      ed: "15 TAHUN",
      GROUP_PRODUCT: "SURFACE SPRAY",
      group: "SURF CLEAN",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKTSP01",
      hc_mc: "HC",
      imam: "2ALKTSP01",
      STOCK: 1,
      kode_ekat23: "A60503",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "GEN",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60503",
      group_category: "ALKAPHARM",
    },
    {
      Kode_Produk_Principal: "2ALKCID10",
      KODE_PPG: "A60463",
      KODE_MPI: "G@0262",
      NAMA_ITEM: "ALKACIDE 1L-2ALKCID10 sample 2",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM sample",
      Tanggal_masa_berlaku_NIE: "19/09/2025",
      Master_Box: "BOTOL @1Liter",
      Box: "@1Liter",
      Isi_per_satuan_jual: "1 LITER/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 26.5,
      Lebar_Master_Box: 20.5,
      Tinggi_Master_Box: 27,
      Berat_Master_Box: 7,
      Panjang_Box: 44,
      Lebar_Box: 34.1,
      Tinggi_Box: 45,
      Berat_Box: 1.17,
      Harga_Jual_ke_Distributor: 2632500,
      Harga_Price_List: 2925000,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-CID",
      ed: "5 TAHUN",
      GROUP_PRODUCT: "DISINFECTANT",
      group: "INSTR DISINFECTANT",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKCID10",
      hc_mc: "HC",
      imam: "2ALKCID10",
      STOCK: 1,
      kode_ekat23: "A60463",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "SPC",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60463",
      group_category: "ALKAPHARM",
    },
    {
      Kode_Produk_Principal: "2ALKTSP01",
      KODE_PPG: "A60503",
      KODE_MPI: "G@0286",
      NAMA_ITEM: "SEPTALKAN SPRAY 750ML-2ALKTSP01",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM",
      Tanggal_masa_berlaku_NIE: "19/09/2027",
      Master_Box: "12 BOTOL",
      Box: "750ml",
      Isi_per_satuan_jual: "750 ml/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 32,
      Lebar_Master_Box: 27,
      Tinggi_Master_Box: 29,
      Berat_Master_Box: 11,
      Panjang_Box: 26.6,
      Lebar_Box: 22.5,
      Tinggi_Box: 24.2,
      Berat_Box: 916,
      Harga_Jual_ke_Distributor: 256950,
      Harga_Price_List: 285500,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-TSP",
      ed: "5 TAHUN",
      GROUP_PRODUCT: "SURFACE SPRAY",
      group: "SURF CLEAN",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKTSP01",
      hc_mc: "HC",
      imam: "2ALKTSP01",
      STOCK: 1,
      kode_ekat23: "A60503",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "GEN",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60503",
      group_category: "ALKAPHARM",
    },
    {
      Kode_Produk_Principal: "2ALKCID10",
      KODE_PPG: "A60463",
      KODE_MPI: "G@0262",
      NAMA_ITEM: "ALKACIDE 1L-2ALKCID10",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM",
      Tanggal_masa_berlaku_NIE: "19/09/2027",
      Master_Box: "BOTOL @1Liter",
      Box: "@1Liter",
      Isi_per_satuan_jual: "1 LITER/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 26.5,
      Lebar_Master_Box: 20.5,
      Tinggi_Master_Box: 27,
      Berat_Master_Box: 7,
      Panjang_Box: 44,
      Lebar_Box: 34.1,
      Tinggi_Box: 45,
      Berat_Box: 1.17,
      Harga_Jual_ke_Distributor: 2632500,
      Harga_Price_List: 2925000,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-CID",
      ed: "5 TAHUN",
      GROUP_PRODUCT: "DISINFECTANT",
      group: "INSTR DISINFECTANT",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKCID10",
      hc_mc: "HC",
      imam: "2ALKCID10",
      STOCK: 1,
      kode_ekat23: "A60463",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "SPC",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60463",
      group_category: "ALKAPHARM",
    },
    {
      Kode_Produk_Principal: "2ALKTSP01",
      KODE_PPG: "A60503",
      KODE_MPI: "G@0286",
      NAMA_ITEM: "SEPTALKAN SPRAY 750ML-2ALKTSP01",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM",
      Tanggal_masa_berlaku_NIE: "19/09/2027",
      Master_Box: "12 BOTOL",
      Box: "750ml",
      Isi_per_satuan_jual: "750 ml/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 32,
      Lebar_Master_Box: 27,
      Tinggi_Master_Box: 29,
      Berat_Master_Box: 11,
      Panjang_Box: 26.6,
      Lebar_Box: 22.5,
      Tinggi_Box: 24.2,
      Berat_Box: 916,
      Harga_Jual_ke_Distributor: 256950,
      Harga_Price_List: 285500,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-TSP",
      ed: "5 TAHUN",
      GROUP_PRODUCT: "SURFACE SPRAY",
      group: "SURF CLEAN",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKTSP01",
      hc_mc: "HC",
      imam: "2ALKTSP01",
      STOCK: 1,
      kode_ekat23: "A60503",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "GEN",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60503",
      group_category: "ALKAPHARM",
    },
    {
      Kode_Produk_Principal: "2ALKCID10",
      KODE_PPG: "A60463",
      KODE_MPI: "G@0262",
      NAMA_ITEM: "ALKACIDE 1L-2ALKCID10",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM",
      Tanggal_masa_berlaku_NIE: "19/09/2027",
      Master_Box: "BOTOL @1Liter",
      Box: "@1Liter",
      Isi_per_satuan_jual: "1 LITER/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 26.5,
      Lebar_Master_Box: 20.5,
      Tinggi_Master_Box: 27,
      Berat_Master_Box: 7,
      Panjang_Box: 44,
      Lebar_Box: 34.1,
      Tinggi_Box: 45,
      Berat_Box: 1.17,
      Harga_Jual_ke_Distributor: 2632500,
      Harga_Price_List: 2925000,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-CID",
      ed: "5 TAHUN",
      GROUP_PRODUCT: "DISINFECTANT",
      group: "INSTR DISINFECTANT",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKCID10",
      hc_mc: "HC",
      imam: "2ALKCID10",
      STOCK: 1,
      kode_ekat23: "A60463",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "SPC",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60463",
      group_category: "ALKAPHARM",
    },
    {
      Kode_Produk_Principal: "2ALKTSP01",
      KODE_PPG: "A60503",
      KODE_MPI: "G@0286",
      NAMA_ITEM: "SEPTALKAN SPRAY 750ML-2ALKTSP01",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM",
      Tanggal_masa_berlaku_NIE: "19/09/2027",
      Master_Box: "12 BOTOL",
      Box: "750ml",
      Isi_per_satuan_jual: "750 ml/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 32,
      Lebar_Master_Box: 27,
      Tinggi_Master_Box: 29,
      Berat_Master_Box: 11,
      Panjang_Box: 26.6,
      Lebar_Box: 22.5,
      Tinggi_Box: 24.2,
      Berat_Box: 916,
      Harga_Jual_ke_Distributor: 256950,
      Harga_Price_List: 285500,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-TSP",
      ed: "80 TAHUN",
      GROUP_PRODUCT: "SURFACE SPRAY",
      group: "SURF CLEAN",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKTSP01",
      hc_mc: "HC",
      imam: "2ALKTSP01",
      STOCK: 1,
      kode_ekat23: "A60503",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "GEN",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60503",
      group_category: "ALKAPHARM",
    },
    {
      Kode_Produk_Principal: "2ALKCID10",
      KODE_PPG: "A60463",
      KODE_MPI: "G@0262",
      NAMA_ITEM: "ALKACIDE 1L-2ALKCID10",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM",
      Tanggal_masa_berlaku_NIE: "19/09/2027",
      Master_Box: "BOTOL @1Liter",
      Box: "@1Liter",
      Isi_per_satuan_jual: "1 LITER/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 26.5,
      Lebar_Master_Box: 20.5,
      Tinggi_Master_Box: 27,
      Berat_Master_Box: 7,
      Panjang_Box: 44,
      Lebar_Box: 34.1,
      Tinggi_Box: 45,
      Berat_Box: 1.17,
      Harga_Jual_ke_Distributor: 2632500,
      Harga_Price_List: 2925000,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-CID",
      ed: "80 TAHUN",
      GROUP_PRODUCT: "DISINFECTANT",
      group: "INSTR DISINFECTANT",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKCID10",
      hc_mc: "HC",
      imam: "2ALKCID10",
      STOCK: 1,
      kode_ekat23: "A60463",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "SPC",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60463",
      group_category: "ALKAPHARM",
    },
    {
      Kode_Produk_Principal: "2ALKTSP01",
      KODE_PPG: "A60503",
      KODE_MPI: "G@0286",
      NAMA_ITEM: "SEPTALKAN SPRAY 750ML-2ALKTSP01",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM",
      Tanggal_masa_berlaku_NIE: "19/09/2027",
      Master_Box: "12 BOTOL",
      Box: "750ml",
      Isi_per_satuan_jual: "750 ml/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 32,
      Lebar_Master_Box: 27,
      Tinggi_Master_Box: 29,
      Berat_Master_Box: 11,
      Panjang_Box: 26.6,
      Lebar_Box: 22.5,
      Tinggi_Box: 24.2,
      Berat_Box: 916,
      Harga_Jual_ke_Distributor: 256950,
      Harga_Price_List: 285500,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-TSP",
      ed: "80 TAHUN",
      GROUP_PRODUCT: "SURFACE SPRAY",
      group: "SURF CLEAN",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKTSP01",
      hc_mc: "HC",
      imam: "2ALKTSP01",
      STOCK: 1,
      kode_ekat23: "A60503",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "GEN",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60503",
      group_category: "ALKAPHARM",
    },
    {
      Kode_Produk_Principal: "2ALKCID10",
      KODE_PPG: "A60463",
      KODE_MPI: "G@0262",
      NAMA_ITEM: "ALKACIDE 1L-2ALKCID10",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM",
      Tanggal_masa_berlaku_NIE: "19/09/2027",
      Master_Box: "BOTOL @1Liter",
      Box: "@1Liter",
      Isi_per_satuan_jual: "1 LITER/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 26.5,
      Lebar_Master_Box: 20.5,
      Tinggi_Master_Box: 27,
      Berat_Master_Box: 7,
      Panjang_Box: 44,
      Lebar_Box: 34.1,
      Tinggi_Box: 45,
      Berat_Box: 1.17,
      Harga_Jual_ke_Distributor: 2632500,
      Harga_Price_List: 2925000,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-CID",
      ed: "80 TAHUN",
      GROUP_PRODUCT: "DISINFECTANT",
      group: "INSTR DISINFECTANT",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKCID10",
      hc_mc: "HC",
      imam: "2ALKCID10",
      STOCK: 1,
      kode_ekat23: "A60463",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "SPC",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60463",
      group_category: "ALKAPHARM",
    },
    {
      Kode_Produk_Principal: "2ALKTSP01",
      KODE_PPG: "A60503",
      KODE_MPI: "G@0286",
      NAMA_ITEM: "SEPTALKAN SPRAY 750ML-2ALKTSP01",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM",
      Tanggal_masa_berlaku_NIE: "19/09/2027",
      Master_Box: "12 BOTOL",
      Box: "750ml",
      Isi_per_satuan_jual: "750 ml/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 32,
      Lebar_Master_Box: 27,
      Tinggi_Master_Box: 29,
      Berat_Master_Box: 11,
      Panjang_Box: 26.6,
      Lebar_Box: 22.5,
      Tinggi_Box: 24.2,
      Berat_Box: 916,
      Harga_Jual_ke_Distributor: 256950,
      Harga_Price_List: 285500,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-TSP",
      ed: "80 TAHUN",
      GROUP_PRODUCT: "SURFACE SPRAY",
      group: "SURF CLEAN",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKTSP01",
      hc_mc: "HC",
      imam: "2ALKTSP01",
      STOCK: 1,
      kode_ekat23: "A60503",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "GEN",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60503",
      group_category: "ALKAPHARM",
    },
    {
      Kode_Produk_Principal: "2ALKCID10",
      KODE_PPG: "A60463",
      KODE_MPI: "G@0262",
      NAMA_ITEM: "ALKACIDE 1L-2ALKCID10",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM",
      Tanggal_masa_berlaku_NIE: "19/09/2027",
      Master_Box: "BOTOL @1Liter",
      Box: "@1Liter",
      Isi_per_satuan_jual: "1 LITER/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 26.5,
      Lebar_Master_Box: 20.5,
      Tinggi_Master_Box: 27,
      Berat_Master_Box: 7,
      Panjang_Box: 44,
      Lebar_Box: 34.1,
      Tinggi_Box: 45,
      Berat_Box: 1.17,
      Harga_Jual_ke_Distributor: 2632500,
      Harga_Price_List: 2925000,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-CID",
      ed: "15 TAHUN",
      GROUP_PRODUCT: "DISINFECTANT",
      group: "INSTR DISINFECTANT",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKCID10",
      hc_mc: "HC",
      imam: "2ALKCID10",
      STOCK: 1,
      kode_ekat23: "A60463",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "SPC",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60463",
      group_category: "ALKAPHARM",
    },
    {
      Kode_Produk_Principal: "2ALKTSP01",
      KODE_PPG: "A60503",
      KODE_MPI: "G@0286",
      NAMA_ITEM: "SEPTALKAN SPRAY 750ML-2ALKTSP01",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM",
      Tanggal_masa_berlaku_NIE: "19/09/2027",
      Master_Box: "12 BOTOL",
      Box: "750ml",
      Isi_per_satuan_jual: "750 ml/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 32,
      Lebar_Master_Box: 27,
      Tinggi_Master_Box: 29,
      Berat_Master_Box: 11,
      Panjang_Box: 26.6,
      Lebar_Box: 22.5,
      Tinggi_Box: 24.2,
      Berat_Box: 916,
      Harga_Jual_ke_Distributor: 256950,
      Harga_Price_List: 285500,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-TSP",
      ed: "15 TAHUN",
      GROUP_PRODUCT: "SURFACE SPRAY",
      group: "SURF CLEAN",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKTSP01",
      hc_mc: "HC",
      imam: "2ALKTSP01",
      STOCK: 1,
      kode_ekat23: "A60503",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "GEN",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60503",
      group_category: "ALKAPHARM",
    },
    {
      Kode_Produk_Principal: "2ALKCID10",
      KODE_PPG: "A60463",
      KODE_MPI: "G@0262",
      NAMA_ITEM: "ALKACIDE 1L-2ALKCID10",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM",
      Tanggal_masa_berlaku_NIE: "19/09/2027",
      Master_Box: "BOTOL @1Liter",
      Box: "@1Liter",
      Isi_per_satuan_jual: "1 LITER/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 26.5,
      Lebar_Master_Box: 20.5,
      Tinggi_Master_Box: 27,
      Berat_Master_Box: 7,
      Panjang_Box: 44,
      Lebar_Box: 34.1,
      Tinggi_Box: 45,
      Berat_Box: 1.17,
      Harga_Jual_ke_Distributor: 2632500,
      Harga_Price_List: 2925000,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-CID",
      ed: "5 TAHUN",
      GROUP_PRODUCT: "DISINFECTANT",
      group: "INSTR DISINFECTANT",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKCID10",
      hc_mc: "HC",
      imam: "2ALKCID10",
      STOCK: 1,
      kode_ekat23: "A60463",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "SPC",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60463",
      group_category: "ALKAPHARM",
    },
    {
      Kode_Produk_Principal: "2ALKTSP01",
      KODE_PPG: "A60503",
      KODE_MPI: "G@0286",
      NAMA_ITEM: "SEPTALKAN SPRAY 750ML-2ALKTSP01",
      Satuan_Penjualan: "BOTOL",
      PRODUSEN: "ALKAPHARM",
      Tanggal_masa_berlaku_NIE: "19/09/2027",
      Master_Box: "12 BOTOL",
      Box: "750ml",
      Isi_per_satuan_jual: "750 ml/BOTOL",
      Psikotropik_Prekursor_OOT: "",
      Red_Blue_Green_Natural_No_Dot: "",
      Suhu_Penyimpanan: "20°C - 25°C",
      Alamat_Lokasi_Pengambilan_Barang: "Kav. DPR, Bojongsari Depok",
      Panjang_Master_Box: 32,
      Lebar_Master_Box: 27,
      Tinggi_Master_Box: 29,
      Berat_Master_Box: 11,
      Panjang_Box: 26.6,
      Lebar_Box: 22.5,
      Tinggi_Box: 24.2,
      Berat_Box: 916,
      Harga_Jual_ke_Distributor: 256950,
      Harga_Price_List: 285500,
      kemasan: "BOTOL",
      GROUPCODE: "ALK-TSP",
      ed: "5 TAHUN",
      GROUP_PRODUCT: "SURFACE SPRAY",
      group: "SURF CLEAN",
      PRINC2: "ALKAPHARM",
      GDM_ORI: "2ALKTSP01",
      hc_mc: "HC",
      imam: "2ALKTSP01",
      STOCK: 1,
      kode_ekat23: "A60503",
      EKAT_REG: "REG",
      DISC_EKAT_GEN_SPC: "GEN",
      GUGUS: "HC",
      as: 1,
      PRICE_LIST: "A60503",
      group_category: "ALKAPHARM",
    }
  ];

  // Filter data sesuai pencarian DESC dan tanggal
  const filteredData = allData.filter((item) => {
    return (
      filterByDesc(item.NAMA_ITEM) &&
      (startDate === "" ||
        new Date(item.Tanggal_masa_berlaku_NIE) >= new Date(startDate)) &&
      (endDate === "" ||
        new Date(item.Tanggal_masa_berlaku_NIE) <= new Date(endDate))
    );
  });

  // Menentukan data yang akan ditampilkan berdasarkan halaman
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Menghitung jumlah halaman
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <br />
      <br />
      <div className="flex flex-col sm:flex-row justify-between mb-4">
        {/* Pencarian berdasarkan DESC */}
        <div className="flex items-center mb-4 sm:mb-0">
          <label className="mr-2">Search by Item Name:</label>
          <input
            type="text"
            value={searchDesc}
            onChange={handleSearchDesc}
            className="input input-bordered"
            placeholder="Search by item name"
          />
        </div>

        {/* Filter per tanggal */}
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="mb-4 sm:mb-0">
            <label className="mr-2">Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              className="input input-bordered"
            />
          </div>
          <div>
            <label className="mr-2">End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              className="input input-bordered"
            />
          </div>
        </div>
      </div>

      {/* Judul "Stock GDM Update" */}
      <h2 className="text-center text-2xl font-bold mb-4">STOCK GDM UPDATE</h2>

      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-center">
                No
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Kode Produk (Principal)
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Kode PPG
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Kode MPI
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Nama Item
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Satuan Penjualan
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Produsen
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Tanggal Masa Berlaku NIE
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Master Box
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Box
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Isi per Satuan Jual
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Psikotropik/Prekursor/OOT
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Red/Blue/Green/Natural/No Dot
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Suhu Penyimpanan
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Alamat/Lokasi Pengambilan Barang
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Panjang Master Box
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Lebar Master Box
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Tinggi Master Box
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Berat Master Box
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Panjang Box
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Lebar Box
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Tinggi Box
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Berat Box
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Harga Jual ke Distributor
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Harga Price List
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Kemasan
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                GroupCode
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                ED
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Group Product
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Principal 2
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                GDM ORI
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                HC-MC
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Imam
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Stock
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Kode Ekat23
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                EKAT/REG
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Disc Ekat Gen/Spc
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Gugus
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                As
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Price List
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Group Category
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index} className="bg-white">
                
                <td className="border border-gray-300 px-4 py-2 text-center">{index+1}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.Kode_Produk_Principal}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.KODE_PPG}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.KODE_MPI}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.NAMA_ITEM}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.Satuan_Penjualan}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.PRODUSEN}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.Tanggal_masa_berlaku_NIE}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.Master_Box}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.Box}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.Isi_per_satuan_jual}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.psikotropik}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.redBlueGreenNatural}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.Suhu_Penyimpanan}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.alamatLokasiPengambilan}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.Panjang_Box}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.Lebar_Master_Box}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.Tinggi_Master_Box}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.Berat_Master_Box}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.Panjang_Box}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.Lebar_Box}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.Tinggi_Box}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.Berat_Box}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.Harga_Jual_ke_Distributor}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.Harga_Price_List}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.kemasan}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.GROUPCODE}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.ed}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.GROUP_PRODUCT}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.principal2}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.GDM_ORI}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.hc_mc}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.imam}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.STOCK}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.kode_ekat23}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.EKAT_REG}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.DISC_EKAT_GEN_SPC}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.GUGUS}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.as}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.PRICE_LIST}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.group_category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <nav>
          <ul className="flex space-x-2">
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  onClick={() => paginate(number)}
                  className={`px-4 py-2 border ${
                    currentPage === number
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Skupage;
