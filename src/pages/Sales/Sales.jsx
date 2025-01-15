import React, { useEffect, useState } from "react";

function Sales() {
  const [ppgFile, setPpgFile] = useState(null);
  const [mpiFile, setMpiFile] = useState(null);

  const uploadSalesPPG = async () => {
    if (!ppgFile) return alert("Pilih file PPG terlebih dahulu.");
    const formData = new FormData();
    formData.append("file", ppgFile);

    try {
      const response = await fetch("http://localhost:3000/upload-salesppg", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Gagal mengupload file Sales PPG.");
    }
  };

  const uploadSalesMPI = async () => {
    if (!mpiFile) return alert("Pilih file MPI terlebih dahulu.");
    const formData = new FormData();
    formData.append("file", mpiFile);

    try {
      const response = await fetch("http://localhost:3000/upload-salesmpi", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Gagal mengupload file Sales MPI.");
    }
  };

  const processTransaksi = async () => {
    try {
      const response = await fetch("http://localhost:3000/process-transaksi", {
        method: "POST",
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Gagal memproses transaksi.");
    }
  };

  const downloadSalesData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/export-transaksi-excel",
        {
          method: "GET",
        }
      );
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "transaksi_gabungan.xlsx";
      link.click();
    } catch (error) {
      console.error(error);
      alert("Gagal mendownload data Sales.");
    }
  };

  const [searchDesc, setSearchDesc] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearchDesc = (e) => {
    setSearchDesc(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const search = (item) => {
    return (
      item.NAMA_PS.toLowerCase().includes(searchDesc.toLowerCase()) ||
      item[NAMA_OUTLET].toLowerCase().includes(searchDesc.toLowerCase()) ||
      item.ITEM_NAME.toLowerCase().includes(searchDesc.toLowerCase()) ||
      item.AREA.toLowerCase().includes(searchDesc.toLowerCase()) ||
      item.CAB_GDM.toLowerCase().includes(searchDesc.toLowerCase()) ||
      item.REG24.toLowerCase().includes(searchDesc.toLowerCase()) ||
      item[WE_EA].toLowerCase().includes(searchDesc.toLowerCase())
    );
  };

  useEffect(() => {
    const filtered = [
      {
        KODE_PPG: "A60727",
        KODE_MPI: "G@0481",
        BULAN: "Desember",
        TANGGAL: "2024-12-02",
        KODE_DISTRIBUTOR: "100767",
        KODE_OUTLET: "10533",
        KODE_PS: "678",
        DISTRO: "MPI",
        NO_FAKTUR: "98909",
        Kode_GDM_Reguler: "2MMPGLPSM",
        DISCOUNT: "0",
        DISC_DB: "-20",
        EKAT_SPC_GEN: "GEN",
        INVOICED_QTY: "-1935000",
        TOTAL_HNA: "0",
        V_disc_on_GDM: "-1935000",
        V_disc_off_GDM: "0",
        NETT_VAL: "0",
        NAMA_OUTLET: "RS PERMATA MADINA",
        ITEM_NAME: "METRA GLOVES LX EXAM POW. S-2MMPGLPSM",
        DIV_ITEM: "HC",
        PRINCIPAL: "MMP",
        P_PROGRAM: "MMP",
        Gugus: "HC",
        Net_Disc: "0",
        WE_EA: "WEST",
        REG24: "R3-ALFA",
        CAB: "JKT-01",
        NAMA_PS: "Ariska",
        AREA: "BDG DAGO_(B)",
        DIV_PS: "MIX",
        MARK_DESC: "RS SWASTA",
        GOV_PRV: "PRIVATE",
        AKD_AKL: "AKD",
         ret_jual: "retur",
        CAB_GDM: "JKT-01/JAKARTA RAWAMANGUN",
        CATEGORY: "MMP",
      },
      {
        KODE_PPG: "A60727",
        KODE_MPI: "G@0481",
        BULAN: "Desember",
        TANGGAL: "2024-12-01",
        KODE_DISTRIBUTOR: "100767",
        KODE_OUTLET: "10533",
        KODE_PS: "678",
        DISTRO: "MPI",
        NO_FAKTUR: "98909",
        Kode_GDM_Reguler: "2MMPGLPSM",
        DISCOUNT: "0",
        DISC_DB: "-20",
        EKAT_SPC_GEN: "GEN",
        INVOICED_QTY: "-1935000",
        TOTAL_HNA: "0",
        V_disc_on_GDM: "-1935000",
        V_disc_off_GDM: "0",
        NETT_VAL: "0",
        NAMA_OUTLET: "RS PERMATA MADINA",
        ITEM_NAME: "METRA GLOVES LX EXAM POW. S-2MMPGLPSM",
        DIV_ITEM: "HC",
        PRINCIPAL: "MMP",
        P_PROGRAM: "MMP",
        Gugus: "HC",
        Net_Disc: "0",
        WE_EA: "WEST",
        REG24: "R3-ALFA",
        CAB: "JKT-01",
        NAMA_PS: "Pamela",
        AREA: "BDG DAGO_(B)",
        DIV_PS: "MIX",
        MARK_DESC: "RS SWASTA",
        GOV_PRV: "PRIVATE",
        AKD_AKL: "AKD",
         ret_jual: "retur",
        CAB_GDM: "JKT-01/JAKARTA RAWAMANGUN",
        CATEGORY: "MMP",
      },
      {
        KODE_PPG: "A60727",
        KODE_MPI: "G@0481",
        BULAN: "Desember",
        TANGGAL: "2024-12-14",
        KODE_DISTRIBUTOR: "100767",
        KODE_OUTLET: "10533",
        KODE_PS: "678",
        DISTRO: "MPI",
        NO_FAKTUR: "98909",
        Kode_GDM_Reguler: "2MMPGLPSM",
        DISCOUNT: "0",
        DISC_DB:  "-20",
        EKAT_SPC_GEN:"GEN",
        INVOICED_QTY: "-1935000",
        TOTAL_HNA: "0",
        V_disc_on_GDM: "-1935000",
        V_disc_off_GDM: "0",
        NETT_VAL: "0",
        NAMA_OUTLET: "RS PERMATA MADINA",
        ITEM_NAME: "METRA GLOVES LX EXAM POW. S-2MMPGLPSM",
        DIV_ITEM: "HC",
        PRINCIPAL: "MMP",
        P_PROGRAM: "MMP",
        Gugus: "HC",
        Net_Disc: "0",
        WE_EA: "WEST",
        REG24: "R3-ALFA",
        CAB: "JKT-01",
        NAMA_PS: "Jessica",
        AREA: "BDG DAGO_(B)",
        DIV_PS: "MIX",
        MARK_DESC: "RS SWASTA",
        GOV_PRV: "PRIVATE",
        AKD_AKL: "AKD",
         ret_jual: "retur",
        CAB_GDM: "JKT-01/JAKARTA RAWAMANGUN",
        CATEGORY: "MMP",
      },
      {
        KODE_PPG: "A60483",
        KODE_MPI: "G@0063",
        BULAN: "Desember",
        TANGGAL: "2024-12-13",
        KODE_DISTRIBUTOR: "43046",
        KODE_OUTLET: "1065",
        KODE_PS: "145",
        DISTRO: "MPI",
        NO_FAKTUR: "150224006955",
        Kode_GDM_Reguler: "2PTRAD20F",
        DISCOUNT: "20",
        DISC_DB: "5",
        EKAT_SPC_GEN: "SPC",
        INVOICED_QTY: "5",
        TOTAL_HNA: "537500",
        V_disc_on_GDM: "107500",
        V_disc_off_GDM: "26875",
        NETT_VAL: "403125",
        NAMA_OUTLET: "RS ANUGRAH MEDICAL",
        ITEM_NAME: "ADVANTIME 15D20F.3/0 -2PTRAD20F",
        DIV_ITEM: "MC",
        PRINCIPAL: "PETERS",
        P_PROGRAM: "PETERS",
        Gugus: "MC",
        Net_Disc: "205",
        WE_EA: "WEST",
        REG24: "R1-SAFIR",
        CAB: "JKT-02",
        NAMA_PS: "Muhammad Ghafransyah Ikram",
        AREA: "PTN KHATULISTIWA_(F)",
        DIV_PS: "HC",
        MARK_DESC: "RS SWASTA",
        GOV_PRV: "PRIVATE",
        AKD_AKL: "AKD",
         ret_jual: "jual",
        CAB_GDM: "JKT-02/JAKARTA HARKIT",
        CATEGORY: "",
      },
      {
        KODE_PPG: "A60483",
        KODE_MPI: "G@0063",
        BULAN: "Desember",
        TANGGAL: "2024-12-13",
        KODE_DISTRIBUTOR: "43046",
        KODE_OUTLET: "1065",
        KODE_PS: "145",
        DISTRO: "MPI",
        NO_FAKTUR: "150224006955",
        Kode_GDM_Reguler: "2PTRAD20F",
        DISCOUNT: "20",
        DISC_DB: "5",
        EKAT_SPC_GEN: "SPC",
        INVOICED_QTY: "5",
        TOTAL_HNA: "537500",
        V_disc_on_GDM: "107500",
        V_disc_off_GDM: "26875",
        NETT_VAL: "403125",
        NAMA_OUTLET: "RS ANUGRAH MEDICAL",
        ITEM_NAME: "ADVANTIME 15D20F.3/0 -2PTRAD20F",
        DIV_ITEM: "MC",
        PRINCIPAL: "PETERS",
        P_PROGRAM: "PETERS",
        Gugus: "MC",
        Net_Disc: "205",
        WE_EA: "WEST",
        REG24: "R1-SAFIR",
        CAB: "JKT-02",
        NAMA_PS: "Shinta",
        AREA: "PTN KHATULISTIWA_(F)",
        DIV_PS: "HC",
        MARK_DESC: "RS SWASTA",
        GOV_PRV: "PRIVATE",
        AKD_AKL: "AKD",
         ret_jual: "jual",
        CAB_GDM: "JKT-02/JAKARTA HARKIT",
        CATEGORY: "",
      },
      {
        KODE_PPG: "A60483",
        KODE_MPI: "G@0063",
        BULAN: "Desember",
        TANGGAL: "2024-12-13",
        KODE_DISTRIBUTOR: "43046",
        KODE_OUTLET: "1065",
        KODE_PS: "145",
        DISTRO: "MPI",
        NO_FAKTUR: "150224006955",
        Kode_GDM_Reguler: "2PTRAD20F",
        DISCOUNT: "20",
        DISC_DB: "5",
        EKAT_SPC_GEN: "SPC",
        INVOICED_QTY: "5",
        TOTAL_HNA: "537500",
        V_disc_on_GDM: "107500",
        V_disc_off_GDM: "26875",
        NETT_VAL: "403125",
        NAMA_OUTLET: "RS ANUGRAH MEDICAL",
        ITEM_NAME: "ADVANTIME 15D20F.3/0 -2PTRAD20F",
        DIV_ITEM: "MC",
        PRINCIPAL: "PETERS",
        P_PROGRAM: "PETERS",
        Gugus: "MC",
        Net_Disc: "205",
        WE_EA: "WEST",
        REG24: "R1-SAFIR",
        CAB: "JKT-02",
        NAMA_PS: "Clara",
        AREA: "PTN KHATULISTIWA_(F)",
        DIV_PS: "HC",
        MARK_DESC: "RS SWASTA",
        GOV_PRV: "PRIVATE",
        AKD_AKL: "AKD",
         ret_jual: "jual",
        CAB_GDM: "JKT-02/JAKARTA HARKIT",
        CATEGORY: "",
      },
      {
        KODE_PPG: "A60367",
        KODE_MPI: "G@0228",
        BULAN: "Desember",
        TANGGAL: "2024-12-12",
        KODE_DISTRIBUTOR: "43046",
        KODE_OUTLET: "1065",
        KODE_PS: "345",
        DISTRO: "MPI",
        NO_FAKTUR: "150224006955",
        Kode_GDM_Reguler: "2VPSPST20",
        DISCOUNT: "22.5",
        DISC_DB: "2.5",
        EKAT_SPC_GEN: "SPC",
        INVOICED_QTY: "1",
        TOTAL_HNA: "1645000",
        V_disc_on_GDM: "370125",
        V_disc_off_GDM: "41125",
        NETT_VAL: "1233750",
        NAMA_OUTLET: "RS MELATI",
        ITEM_NAME: "STERICLIN FLT20CM/200M-2VPSPST20",
        DIV_ITEM: "HC",
        PRINCIPAL: "STERICLIN",
        P_PROGRAM: "STERICLIN",
        Gugus: "HC",
        Net_Disc: "0",
        WE_EA: "WEST",
        REG24: "R2-GAMMA",
        CAB: "JKT-03",
        NAMA_PS: "Rizky",
        AREA: "PTN KHATULISTIWA_(F)",
        DIV_PS: "HC",
        MARK_DESC: "RS SWASTA",
        GOV_PRV: "PRIVATE",
        AKD_AKL: "AKD",
         ret_jual: "jual",
        CAB_GDM: "JKT-03/JAKARTA SALEMBA",
        CATEGORY: "FLT",
      },
      {
        KODE_PPG: "A60367",
        KODE_MPI: "G@0228",
        BULAN: "Desember",
        TANGGAL: "2024-12-12",
        KODE_DISTRIBUTOR: "43046",
        KODE_OUTLET: "1065",
        KODE_PS: "345",
        DISTRO: "MPI",
        NO_FAKTUR: "150224006955",
        Kode_GDM_Reguler: "2VPSPST20",
        DISCOUNT: "22.5",
        DISC_DB: "2.5",
        EKAT_SPC_GEN: "SPC",
        INVOICED_QTY: "1",
        TOTAL_HNA: "1645000",
        V_disc_on_GDM: "370125",
        V_disc_off_GDM: "41125",
        NETT_VAL: "1233750",
        NAMA_OUTLET: "RS MELATI",
        ITEM_NAME: "STERICLIN FLT20CM/200M-2VPSPST20",
        DIV_ITEM: "HC",
        PRINCIPAL: "STERICLIN",
        P_PROGRAM: "STERICLIN",
        Gugus: "HC",
        Net_Disc: "0",
        WE_EA: "WEST",
        REG24: "R2-GAMMA",
        CAB: "JKT-03",
        NAMA_PS: "Sandria",
        AREA: "PTN KHATULISTIWA_(F)",
        DIV_PS: "HC",
        MARK_DESC: "RS SWASTA",
        GOV_PRV: "PRIVATE",
        AKD_AKL: "AKD",
         ret_jual: "jual",
        CAB_GDM: "JKT-03/JAKARTA SALEMBA",
        CATEGORY: "FLT",
      },
      {
        KODE_PPG: "A60367",
        KODE_MPI: "G@0228",
        BULAN: "Desember",
        TANGGAL: "2024-12-12",
        KODE_DISTRIBUTOR: "43046",
        KODE_OUTLET: "1065",
        KODE_PS: "345",
        DISTRO: "MPI",
        NO_FAKTUR: "150224006955",
        Kode_GDM_Reguler: "2VPSPST20",
        DISCOUNT: "22.5",
        DISC_DB: "2.5",
        EKAT_SPC_GEN: "SPC",
        INVOICED_QTY: "1",
        TOTAL_HNA: "1645000",
        V_disc_on_GDM: "370125",
        V_disc_off_GDM: "41125",
        NETT_VAL: "1233750",
        NAMA_OUTLET: "RS MELATI",
        ITEM_NAME: "STERICLIN FLT20CM/200M-2VPSPST20",
        DIV_ITEM: "HC",
        PRINCIPAL: "STERICLIN",
        P_PROGRAM: "STERICLIN",
        Gugus: "HC",
        Net_Disc: "0",
        WE_EA: "WEST",
        REG24: "R2-GAMMA",
        CAB: "JKT-03",
        NAMA_PS: "Alexa",
        AREA: "PTN KHATULISTIWA_(F)",
        DIV_PS: "HC",
        MARK_DESC: "RS SWASTA",
        GOV_PRV: "PRIVATE",
        AKD_AKL: "AKD",
         ret_jual: "jual",
        CAB_GDM: "JKT-03/JAKARTA SALEMBA",
        CATEGORY: "FLT",
      },
      {
        KODE_PPG: "A60367",
        KODE_MPI: "G@0228",
        BULAN: "Desember",
        TANGGAL: "2024-12-11",
        KODE_DISTRIBUTOR: "43046",
        KODE_OUTLET: "1065",
        KODE_PS: "345",
        DISTRO: "MPI",
        NO_FAKTUR: "150224006955",
        Kode_GDM_Reguler: "2VPSPST20",
        DISCOUNT: "22.5",
        DISC_DB: "2.5",
        EKAT_SPC_GEN: "SPC",
        INVOICED_QTY: "1",
        TOTAL_HNA: "1645000",
        V_disc_on_GDM: "370125",
        V_disc_off_GDM: "41125",
        NETT_VAL: "1233750",
        NAMA_OUTLET: "RS DELIMA",
        ITEM_NAME: "STERICLIN FLT20CM/200M-2VPSPST20",
        DIV_ITEM: "HC",
        PRINCIPAL: "STERICLIN",
        P_PROGRAM: "STERICLIN",
        Gugus: "HC",
        Net_Disc: "0",
        WE_EA: "EAST",
        REG24: "R4-RUBBY",
        CAB: "JKT-04",
        NAMA_PS: "Alya",
        AREA: "PTN KHATULISTIWA_(F)",
        DIV_PS: "HC",
        MARK_DESC: "RS SWASTA",
        GOV_PRV: "PRIVATE",
        AKD_AKL: "AKD",
         ret_jual: "jual",
        CAB_GDM: "JKT-04/JAKARTA FATMAWATI",
        CATEGORY: "FLT",
      },
      {
        KODE_PPG: "A60367",
        KODE_MPI: "G@0228",
        BULAN: "Desember",
        TANGGAL: "2024-12-11",
        KODE_DISTRIBUTOR: "43046",
        KODE_OUTLET: "1065",
        KODE_PS: "345",
        DISTRO: "MPI",
        NO_FAKTUR: "150224006955",
        Kode_GDM_Reguler: "2VPSPST20",
        DISCOUNT: "22.5",
        DISC_DB: "2.5",
        EKAT_SPC_GEN: "SPC",
        INVOICED_QTY: "1",
        TOTAL_HNA: "1645000",
        V_disc_on_GDM: "370125",
        V_disc_off_GDM: "41125",
        NETT_VAL: "1233750",
        NAMA_OUTLET: "RS DELIMA",
        ITEM_NAME: "STERICLIN FLT20CM/200M-2VPSPST20",
        DIV_ITEM: "HC",
        PRINCIPAL: "STERICLIN",
        P_PROGRAM: "STERICLIN",
        Gugus: "HC",
        Net_Disc: "0",
        WE_EA: "EAST",
        REG24: "R4-RUBBY",
        CAB: "JKT-04",
        NAMA_PS: "Camilia",
        AREA: "PTN KHATULISTIWA_(F)",
        DIV_PS: "HC",
        MARK_DESC: "RS SWASTA",
        GOV_PRV: "PRIVATE",
        AKD_AKL: "AKD",
         ret_jual: "jual",
        CAB_GDM: "JKT-04/JAKARTA FATMAWATI",
        CATEGORY: "FLT",
      },
      {
        KODE_PPG: "A60367",
        KODE_MPI: "G@0228",
        BULAN: "Desember",
        TANGGAL: "2024-12-11",
        KODE_DISTRIBUTOR: "43046",
        KODE_OUTLET: "1065",
        KODE_PS: "345",
        DISTRO: "MPI",
        NO_FAKTUR: "150224006955",
        Kode_GDM_Reguler: "2VPSPST20",
        DISCOUNT: "22.5",
        DISC_DB: "2.5",
        EKAT_SPC_GEN: "SPC",
        INVOICED_QTY: "1",
        TOTAL_HNA: "1645000",
        V_disc_on_GDM: "370125",
        V_disc_off_GDM: "41125",
        NETT_VAL: "1233750",
        NAMA_OUTLET: "RS DELIMA",
        ITEM_NAME: "STERICLIN FLT20CM/200M-2VPSPST20",
        DIV_ITEM: "HC",
        PRINCIPAL: "STERICLIN",
        P_PROGRAM: "STERICLIN",
        Gugus: "HC",
        Net_Disc: "0",
        WE_EA: "EAST",
        REG24: "R4-RUBBY",
        CAB: "JKT-04",
        NAMA_PS: "Vitri",
        AREA: "PTN KHATULISTIWA_(F)",
        DIV_PS: "HC",
        MARK_DESC: "RS SWASTA",
        GOV_PRV: "PRIVATE",
        AKD_AKL: "AKD",
         ret_jual: "jual",
        CAB_GDM: "JKT-04/JAKARTA FATMAWATI",
        CATEGORY: "FLT",
      },
      {
        KODE_PPG: "A60367",
        KODE_MPI: "G@0228",
        BULAN: "Desember",
        TANGGAL: "2024-12-10",
        KODE_DISTRIBUTOR: "43046",
        KODE_OUTLET: "1065",
        KODE_PS: "345",
        DISTRO: "MPI",
        NO_FAKTUR: "150224006955",
        Kode_GDM_Reguler: "2VPSPST20",
        DISCOUNT: "22.5",
        DISC_DB: "2.5",
        EKAT_SPC_GEN: "SPC",
        INVOICED_QTY: "1",
        TOTAL_HNA: "1645000",
        V_disc_on_GDM: "370125",
        V_disc_off_GDM: "41125",
        NETT_VAL: "1233750",
        NAMA_OUTLET: "RSUD BANDUNG",
        ITEM_NAME: "ADVANTIME 15D20F.3/0 -2PTRAD20F",
        DIV_ITEM: "MC",
        PRINCIPAL: "PETERS",
        P_PROGRAM: "PETERS",
        Gugus: "HC",
        Net_Disc: "0",
        WE_EA: "EAST",
        REG24: "R5-ONYX",
        CAB: "JKT-07",
        NAMA_PS: "Rizky",
        AREA: "PTN KHATULISTIWA_(F)",
        DIV_PS: "HC",
        MARK_DESC: "RS SWASTA",
        GOV_PRV: "PRIVATE",
        AKD_AKL: "AKD",
         ret_jual: "jual",
        CAB_GDM: "JKT-07/JAKARTA CENGKARENG",
        CATEGORY: "",
      },
      {
        KODE_PPG: "A60367",
        KODE_MPI: "G@0228",
        BULAN: "Desember",
        TANGGAL: "2024-12-10",
        KODE_DISTRIBUTOR: "43046",
        KODE_OUTLET: "1065",
        KODE_PS: "345",
        DISTRO: "MPI",
        NO_FAKTUR: "150224006955",
        Kode_GDM_Reguler: "2VPSPST20",
        DISCOUNT: "22.5",
        DISC_DB: "2.5",
        EKAT_SPC_GEN: "SPC",
        INVOICED_QTY: "1",
        TOTAL_HNA: "1645000",
        V_disc_on_GDM: "370125",
        V_disc_off_GDM: "41125",
        NETT_VAL: "1233750",
        NAMA_OUTLET: "RSUD BANDUNG",
        ITEM_NAME: "ADVANTIME 15D20F.3/0 -2PTRAD20F",
        DIV_ITEM: "MC",
        PRINCIPAL: "PETERS",
        P_PROGRAM: "PETERS",
        Gugus: "HC",
        Net_Disc: "0",
        WE_EA: "EAST",
        REG24: "R5-ONYX",
        CAB: "JKT-07",
        NAMA_PS: "Eby",
        AREA: "PTN KHATULISTIWA_(F)",
        DIV_PS: "HC",
        MARK_DESC: "RS SWASTA",
        GOV_PRV: "PRIVATE",
        AKD_AKL: "AKD",
         ret_jual: "jual",
        CAB_GDM: "JKT-07/JAKARTA CENGKARENG",
        CATEGORY: "",
      },
      {
        KODE_PPG: "A60367",
        KODE_MPI: "G@0228",
        BULAN: "Desember",
        TANGGAL: "2024-12-10",
        KODE_DISTRIBUTOR: "43046",
        KODE_OUTLET: "1065",
        KODE_PS: "345",
        DISTRO: "MPI",
        NO_FAKTUR: "150224006955",
        Kode_GDM_Reguler: "2VPSPST20",
        DISCOUNT: "22.5",
        DISC_DB: "2.5",
        EKAT_SPC_GEN: "SPC",
        INVOICED_QTY: "1",
        TOTAL_HNA: "1645000",
        V_disc_on_GDM: "370125",
        V_disc_off_GDM: "41125",
        NETT_VAL: "1233750",
        NAMA_OUTLET: "RSUD BANDUNG",
        ITEM_NAME: "ADVANTIME 15D20F.3/0 -2PTRAD20F",
        DIV_ITEM: "MC",
        PRINCIPAL: "PETERS",
        P_PROGRAM: "PETERS",
        Gugus: "HC",
        Net_Disc: "0",
        WE_EA: "EAST",
        REG24: "R5-ONYX",
        CAB: "JKT-07",
        NAMA_PS: "Lucy",
        AREA: "PTN KHATULISTIWA_(F)",
        DIV_PS: "HC",
        MARK_DESC: "RS SWASTA",
        GOV_PRV: "PRIVATE",
        AKD_AKL: "AKD",
         ret_jual: "jual",
        CAB_GDM: "JKT-07/JAKARTA CENGKARENG",
        CATEGORY: "",
      },
      {
        KODE_PPG: "A60367",
        KODE_MPI: "G@0228",
        BULAN: "Desember",
        TANGGAL: "2024-12-09",
        KODE_DISTRIBUTOR: "43046",
        KODE_OUTLET: "1065",
        KODE_PS: "345",
        DISTRO: "MPI",
        NO_FAKTUR: "150224006955",
        Kode_GDM_Reguler: "2VPSPST20",
        DISCOUNT: "22.5",
        DISC_DB: "2.5",
        EKAT_SPC_GEN: "SPC",
        INVOICED_QTY: "1",
        TOTAL_HNA: "1645000",
        V_disc_on_GDM: "370125",
        V_disc_off_GDM: "41125",
        NETT_VAL: "1233750",
        NAMA_OUTLET: "RSUD BANDUNG",
        ITEM_NAME: "ADVANTIME 15D20F.3/0 -2PTRAD20F",
        DIV_ITEM: "MC",
        PRINCIPAL: "PETERS",
        P_PROGRAM: "PETERS",
        Gugus: "HC",
        Net_Disc: "0",
        WE_EA: "EAST",
        REG24: "R6-SIGMA",
        CAB: "JKT-06",
        NAMA_PS: "Jelita",
        AREA: "PTN KHATULISTIWA_(F)",
        DIV_PS: "HC",
        MARK_DESC: "RS SWASTA",
        GOV_PRV: "PRIVATE",
        AKD_AKL: "AKD",
         ret_jual: "jual",
        CAB_GDM: "JKT-06/JAKARTA HALIM PERDANA KUSUMA",
        CATEGORY: "",
      },
      {
        KODE_PPG: "A60367",
        KODE_MPI: "G@0228",
        BULAN: "Desember",
        TANGGAL: "2024-12-09",
        KODE_DISTRIBUTOR: "43046",
        KODE_OUTLET: "1065",
        KODE_PS: "345",
        DISTRO: "MPI",
        NO_FAKTUR: "150224006955",
        Kode_GDM_Reguler: "2VPSPST20",
        DISCOUNT: "22.5",
        DISC_DB: "2.5",
        EKAT_SPC_GEN: "SPC",
        INVOICED_QTY: "1",
        TOTAL_HNA: "1645000",
        V_disc_on_GDM: "370125",
        V_disc_off_GDM: "41125",
        NETT_VAL: "1233750",
        NAMA_OUTLET: "RSUD BANDUNG",
        ITEM_NAME: "ADVANTIME 15D20F.3/0 -2PTRAD20F",
        DIV_ITEM: "MC",
        PRINCIPAL: "PETERS",
        P_PROGRAM: "PETERS",
        Gugus: "HC",
        Net_Disc: "0",
        WE_EA: "EAST",
        REG24: "R6-SIGMA",
        CAB: "JKT-06",
        NAMA_PS: "Metta",
        AREA: "PTN KHATULISTIWA_(F)",
        DIV_PS: "HC",
        MARK_DESC: "RS SWASTA",
        GOV_PRV: "PRIVATE",
        AKD_AKL: "AKD",
        ret_jual: "jual",
        CAB_GDM: "JKT-06/JAKARTA HALIM PERDANA KUSUMA",
        CATEGORY: "",
      },
      {
        KODE_PPG: "A60367",
        KODE_MPI: "G@0228",
        BULAN: "Desember",
        TANGGAL: "2024-12-09",
        KODE_DISTRIBUTOR: "43046",
        KODE_OUTLET: "1065",
        KODE_PS: "345",
        DISTRO: "MPI",
        NO_FAKTUR: "150224006955",
        Kode_GDM_Reguler: "2VPSPST20",
        DISCOUNT: "22.5",
        DISC_DB: "2.5",
        EKAT_SPC_GEN: "SPC",
        INVOICED_QTY: "1",
        TOTAL_HNA: "1645000",
        V_disc_on_GDM: "370125",
        V_disc_off_GDM: "41125",
        NETT_VAL: "1233750",
        NAMA_OUTLET: "RSUD BANDUNG",
        ITEM_NAME: "ADVANTIME 15D20F.3/0 -2PTRAD20F",
        DIV_ITEM: "MC",
        PRINCIPAL: "PETERS",
        P_PROGRAM: "PETERS",
        Gugus: "HC",
        Net_Disc: "0",
        WE_EA: "EAST",
        REG24: "R6-SIGMA",
        CAB: "JKT-06",
        NAMA_PS: "Dania",
        AREA: "PTN KHATULISTIWA_(F)",
        DIV_PS: "HC",
        MARK_DESC: "RS SWASTA",
        GOV_PRV: "PRIVATE",
        AKD_AKL: "AKD",
        ret_jual: "jual",
        CAB_GDM: "JKT-06/JAKARTA HALIM PERDANA KUSUMA",
        CATEGORY: "",
      },
    ]
      .filter((item) => search(item))
      .filter((item) => {
        const itemDate = new Date(item.TANGGAL);
        const start = new Date(startDate);
        const end = new Date(endDate);

        const isAfterStart = !startDate || itemDate >= start;
        const isBeforeEnd = !endDate || itemDate <= end;

        return isAfterStart && isBeforeEnd;
      });

    setFilteredData(filtered);
  }, [searchDesc, startDate, endDate]);

  return (
    <>
      <br />
      <br />
      <div className="flex flex-col sm:flex-row justify-between mb-4">
        {/* Pencarian berdasarkan DESC */}
        <div className="flex items-center mb-4 sm:mb-0">
          <label className="mr-2 ml-3">Search:</label>
          <input
            type="text"
            value={searchDesc}
            onChange={handleSearchDesc}
            className="input input-bordered"
            placeholder="Search"
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
      <div className="flex justify-center">
        {" "}
        <h2 className="text-center text-2xl font-semibold my-4">
          Detail Transaksi
        </h2>
      </div>
      {/*Tabel Detail Transaksi*/}
      <div className="overflow-x-auto bg-white shadow-md rounded-md">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-1 border font-bold">No</th>
              <th className="px-3 py-1 border font-bold">KODE_PPG</th>
              <th className="px-3 py-1 border font-bold">KODE_MPI</th>
              <th className="px-3 py-1 border font-bold">BULAN</th>
              <th className="px-3 py-1 border font-bold">TANGGAL</th>
              <th className="px-3 py-1 border font-bold">KODE_DISTRIBUTOR</th>
              <th className="px-3 py-1 border font-bold">KODE_OUTLET</th>
              <th className="px-3 py-1 border font-bold">KODE_PS</th>
              <th className="px-3 py-1 border font-bold">DISTRO</th>
              <th className="px-3 py-1 border font-bold">NO_FAKTUR</th>
              <th className="px-3 py-1 border font-bold">Kode GDM Reguler</th>
              <th className="px-3 py-1 border font-bold">DISCOUNT</th>
              <th className="px-3 py-1 border font-bold">DISC_DB</th>
              <th className="px-3 py-1 border font-bold">EKAT-SPC-GEN</th>
              <th className="px-3 py-1 border font-bold">INVOICED_QTY</th>
              <th className="px-3 py-1 border font-bold">TOTAL_HNA</th>
              <th className="px-3 py-1 border font-bold">V disc on GDM</th>
              <th className="px-3 py-1 border font-bold">V disc off GDM</th>
              <th className="px-3 py-1 border font-bold">NETT_VAL</th>
              <th className="px-3 py-1 border font-bold">NAMA OUTLET</th>
              <th className="px-3 py-1 border font-bold">ITEM_NAME</th>
              <th className="px-3 py-1 border font-bold">DIV_ITEM</th>
              <th className="px-3 py-1 border font-bold">PRINCIPAL</th>
              <th className="px-3 py-1 border font-bold">P_PROGRAM</th>
              <th className="px-3 py-1 border font-bold">Gugus</th>
              <th className="px-3 py-1 border font-bold">Net Disc</th>
              <th className="px-3 py-1 border font-bold">WE/EA</th>
              <th className="px-3 py-1 border font-bold">REG24</th>
              <th className="px-3 py-1 border font-bold">CAB</th>
              <th className="px-3 py-1 border font-bold">NAMA_PS</th>
              <th className="px-3 py-1 border font-bold">AREA</th>
              <th className="px-3 py-1 border font-bold">DIV_PS</th>
              <th className="px-3 py-1 border font-bold">MARK_DESC</th>
              <th className="px-3 py-1 border font-bold">GOV_PRV</th>
              <th className="px-3 py-1 border font-bold">AKD_AKL</th>
              <th className="px-3 py-1 border font-bold">ret/jual</th>
              <th className="px-3 py-1 border font-bold">CAB_GDM</th>
              <th className="px-3 py-1 border font-bold">CATEGORY</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-3 py-1 border">{index + 1}</td>
                <td className="px-3 py-1 border">{item.KODE_PPG}</td>
                <td className="px-3 py-1 border">{item.KODE_MPI}</td>
                <td className="px-3 py-1 border">{item.BULAN}</td>
                <td className="px-3 py-1 border">{item.TANGGAL}</td>
                <td className="px-3 py-1 border">{item.KODE_DISTRIBUTOR}</td>
                <td className="px-3 py-1 border">{item.KODE_OUTLET}</td>
                <td className="px-3 py-1 border">{item.KODE_PS}</td>
                <td className="px-3 py-1 border">{item.DISTRO}</td>
                <td className="px-3 py-1 border">{item.NO_FAKTUR}</td>
                <td className="px-3 py-1 border">{item.Kode_GDM_Reguler}</td>
                <td className="px-3 py-1 border">{item.DISCOUNT}</td>
                <td className="px-3 py-1 border">{item.DISC_DB}</td>
                <td className="px-3 py-1 border">{item.EKAT_SPC_GEN}</td>
                <td className="px-3 py-1 border">{item.INVOICED_QTY}</td>
                <td className="px-3 py-1 border">{item.TOTAL_HNA}</td>
                <td className="px-3 py-1 border">{item.V_disc_on_GDM}</td>
                <td className="px-3 py-1 border">{item.V_disc_off_GDM}</td>
                <td className="px-3 py-1 border">{item.NETT_VAL}</td>
                <td className="px-3 py-1 border">{item.NAMA_OUTLET}</td>
                <td className="px-3 py-1 border">{item.ITEM_NAME}</td>
                <td className="px-3 py-1 border">{item.DIV_ITEM}</td>
                <td className="px-3 py-1 border">{item.PRINCIPAL}</td>
                <td className="px-3 py-1 border">{item.P_PROGRAM}</td>
                <td className="px-3 py-1 border">{item.Gugus}</td>
                <td className="px-3 py-1 border">{item.Net_Disc}</td>
                <td className="px-3 py-1 border">{item.WE_EA}</td>
                <td className="px-3 py-1 border">{item.REG24}</td>
                <td className="px-3 py-1 border">{item.CAB}</td>
                <td className="px-3 py-1 border">{item.NAMA_PS}</td>
                <td className="px-3 py-1 border">{item.AREA}</td>
                <td className="px-3 py-1 border">{item.DIV_PS}</td>
                <td className="px-3 py-1 border">{item.MARK_DESC}</td>
                <td className="px-3 py-1 border">{item.GOV_PRV}</td>
                <td className="px-3 py-1 border">{item.AKD_AKL}</td>
                <td className="px-3 py-1 border">{item.ret_jual}</td>
                <td className="px-3 py-1 border">{item.CAB_GDM}</td>
                <td className="px-3 py-1 border">{item.CATEGORY}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <br />
      <br />
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {/* Tombol Upload Sales PPG */}
        <div>
          <button
            className="btn btn-outline"
            onClick={() => document.getElementById("upload_modal").showModal()}
          >
            Upload Sales PPG
          </button>
        </div>

        {/* Tombol Upload Sales MPI */}
        <div>
          <button
            className="btn btn-outline btn-primary"
            onClick={() =>
              document.getElementById("upload_modal_sales_mpi").showModal()
            }
          >
            Upload Sales MPI
          </button>
        </div>

        {/* Tombol Gabung Data Sales */}
        <div>
          <button
            className="btn btn-outline btn-secondary"
            onClick={processTransaksi}
          >
            Gabung Data Sales
          </button>
        </div>

        {/* Tombol Download Data Sales Gabungan */}
        <div>
          <button
            className="btn btn-outline btn-accent"
            onClick={downloadSalesData}
          >
            Download Data Sales Gabungan
          </button>
        </div>
      </div>

      {/* Modal Upload Sales PPG */}
      <dialog id="upload_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Upload Sales PPG</h3>
          <p className="py-4">Silakan unggah file yang sesuai:</p>
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pilih File</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                accept=".csv, .xlsx"
                onChange={(e) => setPpgFile(e.target.files[0])}
              />
            </div>
            <div className="modal-action">
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("upload_modal").close()}
              >
                Batal
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={uploadSalesPPG}
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </dialog>

      {/* Modal Upload Sales MPI */}
      <dialog
        id="upload_modal_sales_mpi"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Upload Sales MPI</h3>
          <p className="py-4">Silakan unggah file yang sesuai:</p>
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pilih File</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                accept=".csv, .xlsx"
                onChange={(e) => setMpiFile(e.target.files[0])}
              />
            </div>
            <div className="modal-action">
              <button
                type="button"
                className="btn"
                onClick={() =>
                  document.getElementById("upload_modal_sales_mpi").close()
                }
              >
                Batal
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={uploadSalesMPI}
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Sales;
