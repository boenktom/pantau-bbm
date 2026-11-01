const products = [
  { id: "pertalite", name: "Pertalite", brand: "Pertamina", type: "Bensin RON 90", price: 10000 },
  { id: "pertamax", name: "Pertamax", brand: "Pertamina", type: "Bensin RON 92", price: 12500 },
  { id: "pertamax-turbo", name: "Pertamax Turbo", brand: "Pertamina", type: "Bensin RON 98", price: 13900 },
  { id: "dexlite", name: "Dexlite", brand: "Pertamina", type: "Diesel CN 51", price: 13900 },
  { id: "pertamina-dex", name: "Pertamina Dex", brand: "Pertamina", type: "Diesel CN 53", price: 14100 },
  { id: "solar", name: "Solar", brand: "Pertamina", type: "Diesel B35 (subsidi)", price: 6800 },
  { id: "bp-regular", name: "BP Regular 92", brand: "BP", type: "Bensin RON 92", price: 12800 },
  { id: "bp-ultimate", name: "BP Ultimate 95", brand: "BP", type: "Bensin RON 95", price: 13700 },
  { id: "bp-diesel", name: "BP Diesel", brand: "BP", type: "Diesel CN 52", price: 14000 },
  { id: "vivo-optima", name: "Vivo Optima", brand: "Vivo", type: "Bensin RON 90", price: 10300 },
  { id: "vivo-revvo", name: "Vivo Revvo", brand: "Vivo", type: "Bensin RON 95", price: 13400 },
  { id: "vivo-diesel", name: "Vivo Diesel", brand: "Vivo", type: "Diesel CN 51", price: 13700 },
];

const stations = [
  { id: "P-15101", name: "SPBU Pertamina 34-15101", location: "Jakarta Pusat", address: "Jl. Veteran III No. 10, Gambir", brand: "Pertamina", products: ["pertalite", "pertamax", "solar"] },
  { id: "P-15210", name: "SPBU Pertamina 34-15210", location: "Jakarta Selatan", address: "Jl. Tebet Raya No. 45, Tebet", brand: "Pertamina", products: ["pertalite", "pertamax", "pertamax-turbo"] },
  { id: "P-15501", name: "SPBU Pertamina 34-15501", location: "Jakarta Barat", address: "Jl. Puri Indah Raya No. 8, Kembangan", brand: "Pertamina", products: ["pertalite", "pertamax", "solar"] },
  { id: "P-15502", name: "SPBU Pertamina 34-15502", location: "Jakarta Timur", address: "Jl. Raya Kalimalang No. 45, Duren Sawit", brand: "Pertamina", products: ["pertamax", "pertamax-turbo", "dexlite"] },
  { id: "P-15104", name: "SPBU Pertamina 34-15104", location: "Jakarta Utara", address: "Jl. Yos Sudarso No. 75, Tanjung Priok", brand: "Pertamina", products: ["pertalite", "pertamax", "solar"] },
  { id: "P-15302", name: "SPBU Pertamina 34-15302", location: "Bekasi", address: "Jl. Ahmad Yani No. 88", brand: "Pertamina", products: ["pertamax", "dexlite", "solar"] },
  { id: "P-15305", name: "SPBU Pertamina 34-15305", location: "Bekasi", address: "Jl. Raya Narogong KM 3, Bantargebang", brand: "Pertamina", products: ["pertalite", "pertamax", "solar"] },
  { id: "P-15308", name: "SPBU Pertamina 34-15308", location: "Bekasi", address: "Jl. Raya Cikarang No. 15, Cikarang Selatan", brand: "Pertamina", products: ["pertalite", "pertamax", "dexlite"] },
  { id: "P-15401", name: "SPBU Pertamina 34-15401", location: "Depok", address: "Jl. Margonda Raya No. 120", brand: "Pertamina", products: ["pertalite", "pertamax-turbo", "pertamina-dex"] },
  { id: "P-15802", name: "SPBU Pertamina 34-15802", location: "Tangerang", address: "Jl. Merdeka No. 25", brand: "Pertamina", products: ["pertalite", "dexlite", "solar"] },
  { id: "P-15805", name: "SPBU Pertamina 34-15805", location: "Tangerang Selatan", address: "Jl. Raya Ciputat No. 20, Ciputat", brand: "Pertamina", products: ["pertalite", "pertamax", "solar"] },
  { id: "P-10120", name: "SPBU Pertamina 34-10120", location: "Bogor", address: "Jl. Raya Pajajaran No. 60", brand: "Pertamina", products: ["pertamax", "pertamina-dex", "solar"] },
  { id: "BP-01", name: "SPBU BP Gatot Subroto", location: "Jakarta Selatan", address: "Jl. Gatot Subroto Kav. 12", brand: "BP", products: ["bp-regular", "bp-ultimate"] },
  { id: "BP-02", name: "SPBU BP Sudirman", location: "Jakarta Pusat", address: "Jl. Jend. Sudirman Kav. 52", brand: "BP", products: ["bp-regular", "bp-ultimate", "bp-diesel"] },
  { id: "BP-03", name: "SPBU BP BSD", location: "Tangerang Selatan", address: "Jl. Pahlawan Seribu, BSD", brand: "BP", products: ["bp-regular", "bp-diesel"] },
  { id: "BP-04", name: "SPBU BP Bekasi Barat", location: "Bekasi", address: "Jl. Raya Kalimalang No. 200", brand: "BP", products: ["bp-regular", "bp-ultimate"] },
  { id: "BP-06", name: "SPBU BP Bekasi Timur", location: "Bekasi", address: "Jl. Raya Kalimalang No. 320, Tambun", brand: "BP", products: ["bp-regular", "bp-ultimate", "bp-diesel"] },
  { id: "BP-05", name: "SPBU BP Cakung", location: "Jakarta Timur", address: "Jl. Raya Cakung-Cilincing KM 2.5", brand: "BP", products: ["bp-regular", "bp-ultimate", "bp-diesel"] },
  { id: "BP-07", name: "SPBU BP Pluit", location: "Jakarta Utara", address: "Jl. Pluit Selatan Raya No. 33", brand: "BP", products: ["bp-regular", "bp-ultimate", "bp-diesel"] },
  { id: "BP-08", name: "SPBU BP Daan Mogot", location: "Jakarta Barat", address: "Jl. Daan Mogot KM 12, Kalideres", brand: "BP", products: ["bp-regular", "bp-diesel"] },
  { id: "BP-09", name: "SPBU BP Margonda", location: "Depok", address: "Jl. Margonda Raya No. 350, Depok", brand: "BP", products: ["bp-regular", "bp-ultimate"] },
  { id: "BP-10", name: "SPBU BP Ahmad Yani Bogor", location: "Bogor", address: "Jl. Ahmad Yani No. 150, Bogor", brand: "BP", products: ["bp-regular", "bp-ultimate", "bp-diesel"] },
  { id: "BP-11", name: "SPBU BP Tangerang", location: "Tangerang", address: "Jl. Jend. Sudirman No. 55, Tangerang", brand: "BP", products: ["bp-regular", "bp-diesel"] },
  { id: "V-01", name: "SPBU Vivo Kemang", location: "Jakarta Selatan", address: "Jl. Kemang Raya No. 30", brand: "Vivo", products: ["vivo-optima", "vivo-revvo"] },
  { id: "V-02", name: "SPBU Vivo Kelapa Gading", location: "Jakarta Utara", address: "Jl. Boulevard Raya No. 88, Kelapa Gading", brand: "Vivo", products: ["vivo-optima", "vivo-revvo", "vivo-diesel"] },
  { id: "V-03", name: "SPBU Vivo Gading Serpong", location: "Tangerang", address: "Jl. Gading Serpong Boulevard No. 10", brand: "Vivo", products: ["vivo-revvo", "vivo-diesel"] },
  { id: "V-04", name: "SPBU Vivo Bekasi", location: "Bekasi", address: "Jl. Raya Mayor Oking No. 88, Cibitung", brand: "Vivo", products: ["vivo-optima", "vivo-revvo", "vivo-diesel"] },
  { id: "V-05", name: "SPBU Vivo Menteng", location: "Jakarta Pusat", address: "Jl. HOS Cokroaminoto No. 90, Menteng", brand: "Vivo", products: ["vivo-optima", "vivo-revvo"] },
  { id: "V-06", name: "SPBU Vivo Cengkareng", location: "Jakarta Barat", address: "Jl. Lingkar Luar Barat Kamal Raya No. 15, Cengkareng", brand: "Vivo", products: ["vivo-optima", "vivo-revvo", "vivo-diesel"] },
  { id: "V-07", name: "SPBU Vivo Cakung", location: "Jakarta Timur", address: "Jl. Raya Bekasi KM 20, Cakung", brand: "Vivo", products: ["vivo-optima", "vivo-diesel"] },
  { id: "V-08", name: "SPBU Vivo Depok", location: "Depok", address: "Jl. Arif Rahman Hakim No. 8, Beji", brand: "Vivo", products: ["vivo-optima", "vivo-revvo", "vivo-diesel"] },
  { id: "V-09", name: "SPBU Vivo Bogor", location: "Bogor", address: "Jl. Sholeh Iskandar No. 25, Tanah Sareal", brand: "Vivo", products: ["vivo-optima", "vivo-revvo"] },
  { id: "V-10", name: "SPBU Vivo Bintaro", location: "Tangerang Selatan", address: "Jl. Bintaro Utama Sektor 3A, Bintaro", brand: "Vivo", products: ["vivo-optima", "vivo-revvo"] },
  { id: "P-10401", name: "SPBU Pertamina 34-10401", location: "Jakarta Pusat", address: "Jl. Salemba Raya No. 28, Salemba", brand: "Pertamina", products: ["pertalite", "pertamax", "solar"] },
  { id: "P-10402", name: "SPBU Pertamina 34-10402", location: "Jakarta Pusat", address: "Jl. Matraman Raya No. 15, Matraman", brand: "Pertamina", products: ["pertalite", "pertamax", "pertamax-turbo"] },
  { id: "P-10403", name: "SPBU Pertamina 34-10403", location: "Jakarta Pusat", address: "Jl. Pramuka Raya No. 12, Matraman", brand: "Pertamina", products: ["pertalite", "dexlite", "solar"] },
  { id: "BP-12", name: "SPBU BP Salemba", location: "Jakarta Pusat", address: "Jl. Salemba Raya No. 55, Salemba", brand: "BP", products: ["bp-regular", "bp-ultimate", "bp-diesel"] },
  { id: "V-11", name: "SPBU Vivo Matraman", location: "Jakarta Pusat", address: "Jl. Matraman Dalam No. 8, Matraman", brand: "Vivo", products: ["vivo-optima", "vivo-revvo"] },
  { id: "P-10404", name: "SPBU Pertamina 34-10404", location: "Jakarta Pusat", address: "Jl. KH Mas Mansyur No. 45, Tanah Abang", brand: "Pertamina", products: ["pertalite", "pertamax", "solar"] },
  { id: "P-10405", name: "SPBU Pertamina 34-10405", location: "Jakarta Pusat", address: "Jl. Gunung Sahari Raya No. 12, Sawah Besar", brand: "Pertamina", products: ["pertalite", "pertamax", "dexlite"] },
  { id: "BP-13", name: "SPBU BP Thamrin", location: "Jakarta Pusat", address: "Jl. MH Thamrin No. 10, Gondangdia", brand: "BP", products: ["bp-regular", "bp-ultimate", "bp-diesel"] },
  { id: "V-12", name: "SPBU Vivo Tanah Abang", location: "Jakarta Pusat", address: "Jl. KH Mas Mansyur No. 20, Tanah Abang", brand: "Vivo", products: ["vivo-optima", "vivo-revvo"] },
  { id: "P-15211", name: "SPBU Pertamina 34-15211", location: "Jakarta Selatan", address: "Jl. Fatmawati Raya No. 32, Cilandak", brand: "Pertamina", products: ["pertalite", "pertamax", "pertamax-turbo"] },
  { id: "P-15212", name: "SPBU Pertamina 34-15212", location: "Jakarta Selatan", address: "Jl. Pasar Minggu Raya No. 18, Pasar Minggu", brand: "Pertamina", products: ["pertalite", "pertamax", "solar"] },
  { id: "BP-14", name: "SPBU BP Pondok Indah", location: "Jakarta Selatan", address: "Jl. Metro Pondok Indah Kav. 5, Kebayoran Lama", brand: "BP", products: ["bp-regular", "bp-ultimate"] },
  { id: "V-13", name: "SPBU Vivo Pasar Minggu", location: "Jakarta Selatan", address: "Jl. Ragunan Raya No. 55, Pasar Minggu", brand: "Vivo", products: ["vivo-optima", "vivo-revvo", "vivo-diesel"] },
  { id: "P-15503", name: "SPBU Pertamina 34-15503", location: "Jakarta Barat", address: "Jl. Panjang No. 20, Kebon Jeruk", brand: "Pertamina", products: ["pertalite", "pertamax", "solar"] },
  { id: "P-15504", name: "SPBU Pertamina 34-15504", location: "Jakarta Barat", address: "Jl. Raya Cengkareng No. 8, Cengkareng", brand: "Pertamina", products: ["pertalite", "dexlite", "solar"] },
  { id: "BP-15", name: "SPBU BP Puri Kembangan", location: "Jakarta Barat", address: "Jl. Puri Kembangan Raya No. 88, Kembangan", brand: "BP", products: ["bp-regular", "bp-ultimate", "bp-diesel"] },
  { id: "V-14", name: "SPBU Vivo Kebon Jeruk", location: "Jakarta Barat", address: "Jl. Arjuna Utara No. 12, Kebon Jeruk", brand: "Vivo", products: ["vivo-optima", "vivo-revvo"] },
  { id: "P-15505", name: "SPBU Pertamina 34-15505", location: "Jakarta Timur", address: "Jl. Raya Bogor KM 24, Kramat Jati", brand: "Pertamina", products: ["pertalite", "pertamax", "solar"] },
  { id: "P-15506", name: "SPBU Pertamina 34-15506", location: "Jakarta Timur", address: "Jl. Pemuda No. 30, Rawamangun", brand: "Pertamina", products: ["pertamax", "pertamax-turbo", "dexlite"] },
  { id: "BP-16", name: "SPBU BP Pondok Kopi", location: "Jakarta Timur", address: "Jl. Raya Kalimalang No. 120, Duren Sawit", brand: "BP", products: ["bp-regular", "bp-ultimate", "bp-diesel"] },
  { id: "V-15", name: "SPBU Vivo Jatinegara", location: "Jakarta Timur", address: "Jl. Jatinegara Barat No. 40, Jatinegara", brand: "Vivo", products: ["vivo-optima", "vivo-diesel"] },
  { id: "P-15105", name: "SPBU Pertamina 34-15105", location: "Jakarta Utara", address: "Jl. Raya Cilincing No. 5, Cilincing", brand: "Pertamina", products: ["pertalite", "pertamax", "solar"] },
  { id: "P-15106", name: "SPBU Pertamina 34-15106", location: "Jakarta Utara", address: "Jl. Danau Sunter Selatan No. 12, Sunter", brand: "Pertamina", products: ["pertalite", "pertamax", "pertamax-turbo"] },
  { id: "BP-17", name: "SPBU BP Sunter", location: "Jakarta Utara", address: "Jl. Yos Sudarso No. 120, Sunter", brand: "BP", products: ["bp-regular", "bp-ultimate", "bp-diesel"] },
  { id: "V-16", name: "SPBU Vivo Ancol", location: "Jakarta Utara", address: "Jl. RE Martadinata No. 22, Ancol", brand: "Vivo", products: ["vivo-optima", "vivo-revvo", "vivo-diesel"] },
  { id: "P-15310", name: "SPBU Pertamina 34-15310", location: "Bekasi", address: "Jl. Sultan Agung KM 8, Kota Bekasi", brand: "Pertamina", products: ["pertalite", "pertamax", "solar"] },
  { id: "P-15311", name: "SPBU Pertamina 34-15311", location: "Bekasi", address: "Jl. Raya Setu No. 29, Cibitung", brand: "Pertamina", products: ["pertalite", "pertamax", "dexlite"] },
  { id: "BP-18", name: "SPBU BP Harapan Indah", location: "Bekasi", address: "Jl. Boulevard Harapan Indah, Medan Satria", brand: "BP", products: ["bp-regular", "bp-ultimate"] },
  { id: "V-17", name: "SPBU Vivo Cikarang", location: "Bekasi", address: "Jl. Raya Cikarang-Cibarusah No. 12, Cikarang Selatan", brand: "Vivo", products: ["vivo-optima", "vivo-revvo", "vivo-diesel"] },
  { id: "P-15402", name: "SPBU Pertamina 34-15402", location: "Depok", address: "Jl. Raya Bogor KM 30, Cimanggis", brand: "Pertamina", products: ["pertalite", "pertamax", "solar"] },
  { id: "P-15403", name: "SPBU Pertamina 34-15403", location: "Depok", address: "Jl. Ir. H. Juanda No. 45, Sukmajaya", brand: "Pertamina", products: ["pertalite", "pertamax-turbo", "pertamina-dex"] },
  { id: "BP-19", name: "SPBU BP Cinere", location: "Depok", address: "Jl. Raya Cinere No. 88, Cinere", brand: "BP", products: ["bp-regular", "bp-ultimate", "bp-diesel"] },
  { id: "V-18", name: "SPBU Vivo Sawangan", location: "Depok", address: "Jl. Raya Sawangan No. 12, Sawangan", brand: "Vivo", products: ["vivo-optima", "vivo-revvo"] },
  { id: "P-15806", name: "SPBU Pertamina 34-15806", location: "Tangerang", address: "Jl. Maulana Hasanuddin No. 12, Cipondoh", brand: "Pertamina", products: ["pertalite", "pertamax", "solar"] },
  { id: "P-15807", name: "SPBU Pertamina 34-15807", location: "Tangerang", address: "Jl. Raya Ciledug No. 22, Ciledug", brand: "Pertamina", products: ["pertalite", "dexlite", "solar"] },
  { id: "BP-20", name: "SPBU BP Karawaci", location: "Tangerang", address: "Jl. Imam Bonjol No. 120, Karawaci", brand: "BP", products: ["bp-regular", "bp-diesel"] },
  { id: "V-19", name: "SPBU Vivo Batuceper", location: "Tangerang", address: "Jl. Raya Batuceper No. 5, Batuceper", brand: "Vivo", products: ["vivo-optima", "vivo-revvo", "vivo-diesel"] },
  { id: "P-15808", name: "SPBU Pertamina 34-15808", location: "Tangerang Selatan", address: "Jl. Raya Pamulang No. 12, Pamulang", brand: "Pertamina", products: ["pertalite", "pertamax", "solar"] },
  { id: "P-15809", name: "SPBU Pertamina 34-15809", location: "Tangerang Selatan", address: "Jl. Raya Serpong No. 45, Serpong", brand: "Pertamina", products: ["pertalite", "pertamax", "pertamax-turbo"] },
  { id: "BP-21", name: "SPBU BP Alam Sutera", location: "Tangerang Selatan", address: "Jl. Jalur Sutera Boulevard Kav. 28, Serpong Utara", brand: "BP", products: ["bp-regular", "bp-ultimate", "bp-diesel"] },
  { id: "V-20", name: "SPBU Vivo Ciputat", location: "Tangerang Selatan", address: "Jl. Ir. H. Juanda No. 12, Ciputat", brand: "Vivo", products: ["vivo-optima", "vivo-revvo"] },
  { id: "P-10121", name: "SPBU Pertamina 34-10121", location: "Bogor", address: "Jl. Raya Tajur No. 12, Bogor Timur", brand: "Pertamina", products: ["pertalite", "pertamax", "solar"] },
  { id: "P-10122", name: "SPBU Pertamina 34-10122", location: "Bogor", address: "Jl. Sholeh Iskandar No. 120, Bogor Barat", brand: "Pertamina", products: ["pertalite", "pertamax", "pertamina-dex"] },
  { id: "BP-22", name: "SPBU BP Yasmin", location: "Bogor", address: "Jl. KH Abdullah Bin Nuh No. 12, Bogor Barat", brand: "BP", products: ["bp-regular", "bp-ultimate", "bp-diesel"] },
  { id: "V-21", name: "SPBU Vivo Tajur", location: "Bogor", address: "Jl. Raya Tajur No. 120, Bogor Timur", brand: "Vivo", products: ["vivo-optima", "vivo-revvo", "vivo-diesel"] },
];
assignPhones(stations, 1000);

const tanks = [];
let seed = 42;
function rand() {
  seed = (seed * 1103515245 + 12345) % 2147483648;
  return seed / 2147483648;
}

function assignPhones(list, area) {
  list.forEach((s, i) => {
    const mid = String(1200 + ((area + i * 37) % 7800)).padStart(4, "0");
    const tail = String(1100 + ((area * 13 + i * 91) % 8800)).padStart(4, "0");
    s.phone = `08${10 + ((area + i) % 9)}-${mid}-${tail}`;
  });
}

stations.forEach((st) => {
  st.products.forEach((pid) => {
    const capacity = Math.round((16 + rand() * 16) * 1000);
    tanks.push({
      stationId: st.id,
      productId: pid,
      capacity,
      level: Math.round(20 + rand() * 75),
    });
  });
});

const productById = Object.fromEntries(products.map((p) => [p.id, p]));
const stationById = Object.fromEntries(stations.map((s) => [s.id, s]));

function statusOf(level) {
  if (level < 15) return { key: "danger", label: "Kritis" };
  if (level < 30) return { key: "warn", label: "Menipis" };
  return { key: "ok", label: "Aman" };
}

const fmtIDR = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});
const fmtNum = new Intl.NumberFormat("id-ID");

let activeBrand = "semua";
let activeLocation = "semua";
let searchText = "";

function tankVisible(t) {
  const st = stationById[t.stationId];
  const p = productById[t.productId];
  if (activeBrand !== "semua" && st.brand !== activeBrand) return false;
  if (activeLocation !== "semua" && st.location !== activeLocation) return false;
  const q = `${st.name} ${st.location} ${st.address} ${p.name}`.toLowerCase();
  return q.includes(searchText);
}

function renderStats() {
  const visible = tanks.filter(tankVisible);
  const counts = { ok: 0, warn: 0, danger: 0 };
  visible.forEach((t) => counts[statusOf(t.level).key]++);
  document.getElementById("statStations").textContent = new Set(visible.map((t) => t.stationId)).size;
  document.getElementById("statAman").textContent = counts.ok;
  document.getElementById("statMenipis").textContent = counts.warn;
  document.getElementById("statKritis").textContent = counts.danger;
  const avg = visible.length ? Math.round(visible.reduce((a, t) => a + t.level, 0) / visible.length) : 0;
  document.getElementById("statAvg").textContent = avg + "%";
}

function renderTable() {
  const tbody = document.querySelector("#stockTable tbody");
  tbody.innerHTML = "";
  tanks.forEach((t) => {
    const st = stationById[t.stationId];
    const p = productById[t.productId];
    if (!tankVisible(t)) return;

    const status = statusOf(t.level);
    const liters = Math.round((t.capacity * t.level) / 100);
    const mapsUrl =
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(st.name + " " + st.address);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${st.name}<div class="tank-info">${st.address}</div></td>
      <td>${st.location}</td>
      <td><a class="maps-link" href="${mapsUrl}" target="_blank" rel="noopener" title="Buka di Google Maps">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 8.5c0 5.25 7 13 7 13s7-7.75 7-13C19 5.13 15.87 2 12 2zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>
        Peta</a></td>
      <td>${st.phone}</td>
      <td><span class="brand-tag ${st.brand}">${st.brand}</span></td>
      <td>${p.name}</td>
      <td class="num">${fmtNum.format(t.capacity)} L</td>
      <td class="num">${fmtNum.format(liters)} L</td>
      <td>
        <div class="tank-bar"><div class="tank-fill ${status.key}" style="width:${t.level}%"></div></div>
        <div class="tank-info">${t.level}%</div>
      </td>
      <td><span class="status-badge ${status.key}">${status.label}</span></td>
      <td class="num">${fmtIDR.format(p.price)}</td>`;
    tbody.appendChild(tr);
  });
  renderStats();
}

function renderProductCards() {
  const wrap = document.getElementById("productCards");
  wrap.innerHTML = "";
  products
    .filter((p) => activeBrand === "semua" || p.brand === activeBrand)
    .forEach((p) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <span class="pc-brand ${p.brand}">${p.brand}</span>
        <span class="pc-name">${p.name}</span>
        <span class="pc-type">${p.type}</span>
        <span class="pc-price">${fmtIDR.format(p.price)}<span style="font-weight:400;color:var(--muted)"> / liter</span></span>`;
      wrap.appendChild(card);
    });
}

const last7Days = [...Array(7)].map((_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - (6 - i));
  return d.toLocaleDateString("id-ID", { day: "numeric", month: "short" });
});

const trendHistory = {};
products.forEach((p) => {
  let level = 40 + rand() * 40;
  trendHistory[p.id] = [...Array(7)].map(() => {
    level = Math.min(98, Math.max(5, level + (rand() * 20 - 11)));
    return Math.round(level);
  });
  trendHistory[p.id][6] = avgLevelOf(p.id);
});

function avgLevelOf(pid) {
  const rel = tanks.filter((t) => t.productId === pid);
  return Math.round(rel.reduce((a, t) => a + t.level, 0) / rel.length);
}

let trendChart, priceChart, selectedTrendProduct = "pertamax";

function brandColor(brand) {
  if (brand === "Pertamina") return "#ff3b3b";
  if (brand === "BP") return "#00c853";
  return "#2196f3";
}

function renderTrendPicker() {
  const picker = document.getElementById("trendProductPicker");
  picker.innerHTML = "";
  products
    .filter((p) => activeBrand === "semua" || p.brand === activeBrand)
    .forEach((p) => {
      const chip = document.createElement("button");
      chip.className = "chip" + (p.id === selectedTrendProduct ? " active" : "");
      chip.textContent = p.name;
      chip.onclick = () => {
        selectedTrendProduct = p.id;
        renderTrendPicker();
        updateTrendChart();
      };
      picker.appendChild(chip);
    });
  if (!products.some((p) => p.id === selectedTrendProduct && (activeBrand === "semua" || p.brand === activeBrand))) {
    selectedTrendProduct = products.find((p) => activeBrand === "semua" || p.brand === activeBrand).id;
    renderTrendPicker();
  }
}

function updateTrendChart() {
  const p = productById[selectedTrendProduct];
  trendChart.data.labels = last7Days;
  trendChart.data.datasets = [
    {
      label: `Level tangki rata-rata ${p.name}`,
      data: trendHistory[p.id],
      borderColor: brandColor(p.brand),
      backgroundColor: brandColor(p.brand) + "33",
      fill: true,
      tension: 0.35,
      pointRadius: 4,
    },
  ];
  trendChart.update();
}

function renderCharts() {
  Chart.defaults.color = "#64748b";
  Chart.defaults.borderColor = "rgba(15, 23, 42, 0.08)";

  trendChart = new Chart(document.getElementById("trendChart"), {
    type: "line",
    data: { labels: last7Days, datasets: [] },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { y: { min: 0, max: 100, ticks: { callback: (v) => v + "%" } } },
      plugins: { legend: { display: false } },
    },
  });
  updateTrendChart();

  const sorted = [...products].sort((a, b) => a.price - b.price);
  priceChart = new Chart(document.getElementById("priceChart"), {
    type: "bar",
    data: {
      labels: sorted.map((p) => p.name),
      datasets: [
        {
          label: "Harga per liter (Rp)",
          data: sorted.map((p) => p.price),
          backgroundColor: sorted.map((p) => brandColor(p.brand) + "cc"),
          borderRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (c) => fmtIDR.format(c.parsed.y) + " / liter" } },
      },
      scales: { y: { ticks: { callback: (v) => "Rp" + (v / 1000) + "rb" } } },
    },
  });
}

function simulateConsumption() {
  tanks.forEach((t) => {
    if (t.level > 2 && Math.random() < 0.6) {
      t.level = Math.max(2, t.level - Math.round(Math.random() * 3));
    }
    if (t.level < 8) {
      t.level = 85 + Math.round(Math.random() * 14);
    }
  });
  products.forEach((p) => {
    trendHistory[p.id].push(avgLevelOf(p.id));
    if (trendHistory[p.id].length > 7) trendHistory[p.id].shift();
  });
  renderTable();
  updateTrendChart();
}

function tickClock() {
  document.getElementById("clock").textContent = new Date().toLocaleString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

document.querySelectorAll("#viewSpbu .tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    activeBrand = tab.dataset.brand;
    renderTable();
    renderProductCards();
    renderTrendPicker();
    updateTrendChart();
  });
});

document.getElementById("search").addEventListener("input", (e) => {
  searchText = e.target.value.toLowerCase();
  renderTable();
});

const locationSelect = document.getElementById("locationFilter");
[...new Set(stations.map((s) => s.location))].sort().forEach((loc) => {
  const opt = document.createElement("option");
  opt.value = loc;
  opt.textContent = loc;
  locationSelect.appendChild(opt);
});
locationSelect.addEventListener("change", (e) => {
  activeLocation = e.target.value;
  renderTable();
});

renderTable();
renderProductCards();
renderTrendPicker();
renderCharts();
tickClock();
setInterval(tickClock, 1000);
setInterval(simulateConsumption, 5000);

const spkluStations = [
  { id: "SK-01", name: "SPKLU Pertamina Green Gambir", location: "Jakarta Pusat", address: "Jl. Medan Merdeka Timur No. 1A, Gambir", operator: "Pertamina", connector: "CCS2, CHAdeMO", power: 50, price: 5200 },
  { id: "SK-02", name: "SPKLU PLN Monas", location: "Jakarta Pusat", address: "Jl. Medan Merdeka Barat, Gambir", operator: "PLN", connector: "CCS2", power: 25, price: 3500 },
  { id: "SK-03", name: "SPKLU Pertamina Green Senayan", location: "Jakarta Selatan", address: "Jl. Jend. Sudirman, Senayan", operator: "Pertamina", connector: "CCS2", power: 50, price: 5200 },
  { id: "SK-04", name: "SPKLU Revvo Pondok Indah", location: "Jakarta Selatan", address: "Jl. Metro Pondok Indah Kav. II", operator: "Revvo", connector: "CCS2", power: 60, price: 5500 },
  { id: "SK-05", name: "SPKLU Pertamina Green Puri Indah", location: "Jakarta Barat", address: "Jl. Puri Indah Raya No. 20, Kembangan", operator: "Pertamina", connector: "CHAdeMO", power: 50, price: 5200 },
  { id: "SK-06", name: "SPKLU PLN Central Park", location: "Jakarta Barat", address: "Jl. Letjen S. Parman No. 28, Tanjung Duren", operator: "PLN", connector: "Type 2 AC", power: 22, price: 2465 },
  { id: "SK-07", name: "SPKLU Pertamina Green Kalimalang", location: "Jakarta Timur", address: "Jl. Raya Kalimalang No. 100, Duren Sawit", operator: "Pertamina", connector: "CCS2", power: 50, price: 5200 },
  { id: "SK-08", name: "SPKLU PLN Cakung", location: "Jakarta Timur", address: "Jl. Raya Bekasi KM 21, Cakung", operator: "PLN", connector: "Type 2 AC", power: 22, price: 2465 },
  { id: "SK-09", name: "SPKLU Pertamina Green Pluit", location: "Jakarta Utara", address: "Jl. Pluit Indah Raya No. 10", operator: "Pertamina", connector: "CCS2", power: 25, price: 3500 },
  { id: "SK-10", name: "SPKLU Revvo PIK", location: "Jakarta Utara", address: "Jl. Pantai Indah Kapuk Boulevard No. 8", operator: "Revvo", connector: "CCS2", power: 60, price: 5500 },
  { id: "SK-11", name: "SPKLU Pertamina Green Bekasi", location: "Bekasi", address: "Jl. Ahmad Yani No. 120, Bekasi Selatan", operator: "Pertamina", connector: "CCS2", power: 50, price: 5200 },
  { id: "SK-12", name: "SPKLU PLN Summarecon Bekasi", location: "Bekasi", address: "Jl. Bulevar Ahmad Yani, Summarecon Mall Bekasi", operator: "PLN", connector: "Type 2 AC", power: 22, price: 2465 },
  { id: "SK-13", name: "SPKLU Pertamina Green Cinere", location: "Depok", address: "Jl. Cinere Raya No. 15", operator: "Pertamina", connector: "CCS2", power: 25, price: 3500 },
  { id: "SK-14", name: "SPKLU PLN Margonda", location: "Depok", address: "Jl. Margonda Raya No. 358, Depok", operator: "PLN", connector: "Type 2 AC", power: 22, price: 2465 },
  { id: "SK-15", name: "SPKLU Pertamina Green Botani Square", location: "Bogor", address: "Jl. Raya Pajajaran No. 40, Bogor", operator: "Pertamina", connector: "CCS2", power: 50, price: 5200 },
  { id: "SK-16", name: "SPKLU PLN Bogor", location: "Bogor", address: "Jl. Raya Semanggi No. 3, Bogor", operator: "PLN", connector: "CHAdeMO", power: 25, price: 3500 },
  { id: "SK-17", name: "SPKLU Pertamina Green Karawaci", location: "Tangerang", address: "Jl. Boulevard Diponegoro No. 88, Karawaci", operator: "Pertamina", connector: "CCS2", power: 50, price: 5200 },
  { id: "SK-18", name: "SPKLU PLN Tangerang", location: "Tangerang", address: "Jl. Jend. Sudirman No. 5, Tangerang", operator: "PLN", connector: "Type 2 AC", power: 22, price: 2465 },
  { id: "SK-19", name: "SPKLU Revvo BSD", location: "Tangerang Selatan", address: "Jl. Pahlawan Seribu, BSD", operator: "Revvo", connector: "CCS2", power: 60, price: 5500 },
  { id: "SK-20", name: "SPKLU Pertamina Green Bintaro", location: "Tangerang Selatan", address: "Jl. Bintaro Utama Sektor 3, Tangerang Selatan", operator: "Pertamina", connector: "CCS2", power: 50, price: 5200 },
  { id: "SK-21", name: "SPKLU PLN Tanah Abang", location: "Jakarta Pusat", address: "Jl. KH Mas Mansyur No. 30, Tanah Abang", operator: "PLN", connector: "Type 2 AC", power: 22, price: 2465 },
  { id: "SK-22", name: "SPKLU Pertamina Green Blok M", location: "Jakarta Selatan", address: "Jl. Bulungan No. 12, Kebayoran Baru", operator: "Pertamina", connector: "CCS2", power: 50, price: 5200 },
  { id: "SK-23", name: "SPKLU Revvo Puri Indah", location: "Jakarta Barat", address: "Jl. Puri Indah Boulevard No. 5, Kembangan", operator: "Revvo", connector: "CCS2", power: 60, price: 5500 },
  { id: "SK-24", name: "SPKLU Pertamina Green Pondok Gede", location: "Jakarta Timur", address: "Jl. Raya Pondok Gede No. 12, Pondok Gede", operator: "Pertamina", connector: "CCS2", power: 50, price: 5200 },
  { id: "SK-25", name: "SPKLU PLN Kelapa Gading", location: "Jakarta Utara", address: "Jl. Boulevard Raya No. 12, Kelapa Gading", operator: "PLN", connector: "Type 2 AC", power: 22, price: 2465 },
  { id: "SK-26", name: "SPKLU Revvo Summarecon", location: "Bekasi", address: "Jl. Bulevar Ahmad Yani No. 10, Summarecon Mall Bekasi", operator: "Revvo", connector: "CCS2", power: 60, price: 5500 },
  { id: "SK-27", name: "SPKLU Pertamina Green Margonda", location: "Depok", address: "Jl. Margonda Raya No. 200, Depok", operator: "Pertamina", connector: "CCS2", power: 50, price: 5200 },
  { id: "SK-28", name: "SPKLU PLN Batuceper", location: "Tangerang", address: "Jl. Raya Batuceper No. 12, Batuceper", operator: "PLN", connector: "Type 2 AC", power: 22, price: 2465 },
  { id: "SK-29", name: "SPKLU Pertamina Green Alam Sutera", location: "Tangerang Selatan", address: "Jl. Jalur Sutera Boulevard No. 12, Serpong Utara", operator: "Pertamina", connector: "CCS2", power: 50, price: 5200 },
  { id: "SK-30", name: "SPKLU Revvo Yasmin", location: "Bogor", address: "Jl. KH Abdullah Bin Nuh No. 12, Bogor Barat", operator: "Revvo", connector: "CCS2", power: 60, price: 5500 },
];
assignPhones(spkluStations, 2000);

const skStatusMeta = { ok: "Tersedia", warn: "Digunakan", danger: "Nonaktif" };
spkluStations.forEach((s) => {
  const r = rand();
  s.status = r < 0.5 ? "ok" : r < 0.82 ? "warn" : "danger";
});

let skOp = "semua";
let skLoc = "semua";
let skQ = "";

function skVisible(s) {
  if (skOp !== "semua" && s.operator !== skOp) return false;
  if (skLoc !== "semua" && s.location !== skLoc) return false;
  const q = `${s.name} ${s.location} ${s.address} ${s.operator} ${s.connector}`.toLowerCase();
  return q.includes(skQ);
}

function renderSpklu() {
  const visible = spkluStations.filter(skVisible);
  const counts = { ok: 0, warn: 0, danger: 0 };
  visible.forEach((s) => counts[s.status]++);
  document.getElementById("skStatStations").textContent = visible.length;
  document.getElementById("skStatOk").textContent = counts.ok;
  document.getElementById("skStatWarn").textContent = counts.warn;
  document.getElementById("skStatDanger").textContent = counts.danger;
  document.getElementById("skStatPower").textContent = fmtNum.format(visible.reduce((a, s) => a + s.power, 0)) + " kW";

  const tbody = document.querySelector("#spkluTable tbody");
  tbody.innerHTML = "";
  visible.forEach((s) => {
    const mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(s.name + " " + s.address);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${s.name}<div class="tank-info">${s.address}</div></td>
      <td>${s.location}</td>
      <td><a class="maps-link" href="${mapsUrl}" target="_blank" rel="noopener" title="Buka di Google Maps">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 8.5c0 5.25 7 13 7 13s7-7.75 7-13C19 5.13 15.87 2 12 2zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>
        Peta</a></td>
      <td>${s.phone}</td>
      <td><span class="op-tag ${s.operator}">${s.operator}</span></td>
      <td>${s.connector}</td>
      <td class="num">${s.power} kW</td>
      <td class="num">${fmtIDR.format(s.price)}<span class="unit">/kWh</span></td>
      <td><span class="status-badge ${s.status}">${skStatusMeta[s.status]}</span></td>`;
    tbody.appendChild(tr);
  });
}

document.querySelectorAll("#viewSpklu .tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll("#viewSpklu .tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    skOp = tab.dataset.op;
    renderSpklu();
  });
});

const skLocationSelect = document.getElementById("skLocationFilter");
[...new Set(spkluStations.map((s) => s.location))].sort().forEach((loc) => {
  const opt = document.createElement("option");
  opt.value = loc;
  opt.textContent = loc;
  skLocationSelect.appendChild(opt);
});
skLocationSelect.addEventListener("change", (e) => {
  skLoc = e.target.value;
  renderSpklu();
});

document.getElementById("skSearch").addEventListener("input", (e) => {
  skQ = e.target.value.toLowerCase();
  renderSpklu();
});

const viewMeta = {
  spbu: {
    subtitle: "Pantau Stok & Harga Bahan Bakar — Pertamina, BP & Vivo",
    logo: "&#9981;",
  },
  spklu: {
    subtitle: "Pantau Stasiun Pengisian Kendaraan Listrik Umum — Pertamina, PLN & Revvo",
    logo: "&#9889;",
  },
  bengkel: {
    subtitle: "Bengkel Mobil Jabodetabek — Sebagian Buka Sampai 22.00, Sebagian Tutup 17.00",
    logo: "&#128295;",
  },
  splu: {
    subtitle: "SPLU Jabodetabek — Stok LPG 3 kg, Bright Gas & Blue Gas",
    logo: "&#128293;",
  },
  motor: {
    subtitle: "Bengkel Motor Jabodetabek — Sebagian Buka Sampai 22.00, Sebagian Tutup 17.00",
    logo: "&#127949;",
  },
  charger: {
    subtitle: "Charger Motor Listrik Jabodetabek — Swap Baterai & Charging AC",
    logo: "&#128267;",
  },
  transit: {
    subtitle: "Jadwal Angkutan Umum Jabodetabek — LRT, MRT, KRL, TransJakarta (BRT, Non-BRT, Feeder), Mikrotrans, TransJabodetabek, RoyalTrans & Whoosh",
    logo: "&#128646;",
  },
};
document.querySelectorAll(".view-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".view-btn").forEach((b) => b.classList.toggle("active", b === btn));
    const v = btn.dataset.view;
    document.getElementById("viewSpbu").classList.toggle("hidden", v !== "spbu");
    document.getElementById("viewSpklu").classList.toggle("hidden", v !== "spklu");
    document.getElementById("viewBengkel").classList.toggle("hidden", v !== "bengkel");
    document.getElementById("viewSplu").classList.toggle("hidden", v !== "splu");
    document.getElementById("viewMotor").classList.toggle("hidden", v !== "motor");
    document.getElementById("viewCharger").classList.toggle("hidden", v !== "charger");
    document.getElementById("viewTransit").classList.toggle("hidden", v !== "transit");
    document.getElementById("subtitle").textContent = viewMeta[v].subtitle;
    document.getElementById("logo").innerHTML = viewMeta[v].logo;
  });
});

function simulateSpklu() {
  const s = spkluStations[Math.floor(Math.random() * spkluStations.length)];
  const r = Math.random();
  s.status = r < 0.55 ? "ok" : r < 0.85 ? "warn" : "danger";
  if (!document.getElementById("viewSpklu").classList.contains("hidden")) renderSpklu();
}
setInterval(simulateSpklu, 5000);
renderSpklu();

const bengkelStations = [
  { id: "BK-01", name: "Auto2000 Senen", location: "Jakarta Pusat", address: "Jl. Senen Raya No. 42", open: 6.5, close: 22, services: "Ganti Oli, Tune Up" },
  { id: "BK-02", name: "Honda Car Service Menteng", location: "Jakarta Pusat", address: "Jl. HOS Cokroaminoto No. 120", open: 7, close: 22, services: "Ganti Oli, Servis AC" },
  { id: "BK-03", name: "Daihatsu Tebet", location: "Jakarta Selatan", address: "Jl. Tebet Raya No. 78", open: 6.5, close: 22, services: "Ganti Oli, Tune Up, Spooring" },
  { id: "BK-04", name: "Mitsubishi TB Simatupang", location: "Jakarta Selatan", address: "Jl. TB Simatupang Kav. 18", open: 7, close: 22, services: "Ganti Oli, Servis AC, Tambal Ban" },
  { id: "BK-05", name: "Suzuki Puri Indah", location: "Jakarta Barat", address: "Jl. Puri Indah Raya No. 45, Kembangan", open: 7, close: 22, services: "Ganti Oli, Tune Up" },
  { id: "BK-06", name: "Bosch Car Service Cengkareng", location: "Jakarta Barat", address: "Jl. Peta Selatan No. 22", open: 6.5, close: 22, services: "Ganti Oli, Tambal Ban" },
  { id: "BK-07", name: "Toyota Kalimalang", location: "Jakarta Timur", address: "Jl. Raya Kalimalang No. 150, Duren Sawit", open: 6.5, close: 22, services: "Ganti Oli, Spooring" },
  { id: "BK-08", name: "Hyundai Cakung", location: "Jakarta Timur", address: "Jl. Raya Bekasi KM 19, Cakung", open: 7, close: 22, services: "Ganti Oli, Servis AC" },
  { id: "BK-09", name: "Mitsubishi Kelapa Gading", location: "Jakarta Utara", address: "Jl. Boulevard Barat No. 5, Kelapa Gading", open: 7, close: 22, services: "Ganti Oli, Tune Up" },
  { id: "BK-10", name: "Honda Pluit", location: "Jakarta Utara", address: "Jl. Pluit Sakti Raya No. 15", open: 6.5, close: 22, services: "Ganti Oli, Tambal Ban" },
  { id: "BK-11", name: "Daihatsu Bekasi Timur", location: "Bekasi", address: "Jl. Raya Kalimalang No. 400, Tambun", open: 6.5, close: 22, services: "Ganti Oli, Tune Up, Servis AC" },
  { id: "BK-12", name: "Auto2000 Summarecon Bekasi", location: "Bekasi", address: "Jl. Bulevar Ahmad Yani No. 2, Summarecon Mall Bekasi", open: 7, close: 22, services: "Ganti Oli, Spooring" },
  { id: "BK-13", name: "Suzuki Margonda", location: "Depok", address: "Jl. Margonda Raya No. 500, Depok", open: 6.5, close: 22, services: "Ganti Oli, Servis AC" },
  { id: "BK-14", name: "Mitsubishi Botani Square", location: "Bogor", address: "Jl. Raya Pajajaran No. 75, Bogor", open: 7, close: 22, services: "Ganti Oli, Tune Up" },
  { id: "BK-15", name: "Auto2000 Karawaci", location: "Tangerang", address: "Jl. Boulevard Diponegoro No. 120, Karawaci", open: 6.5, close: 22, services: "Ganti Oli, Tambal Ban" },
  { id: "BK-16", name: "Honda Bintaro", location: "Tangerang Selatan", address: "Jl. Bintaro Utama Sektor 9 No. 30", open: 7, close: 22, services: "Ganti Oli, Tune Up, Spooring" },
  { id: "BK-17", name: "Suzuki Ciledug", location: "Tangerang Selatan", address: "Jl. Ciledug Raya No. 55", open: 8, close: 17, services: "Ganti Oli, Tune Up" },
  { id: "BK-18", name: "Daihatsu Cibinong", location: "Bogor", address: "Jl. Raya Mayor Oking No. 12, Cibinong", open: 8, close: 17, services: "Ganti Oli, Servis AC" },
  { id: "BK-19", name: "Toyota Tambun Selatan", location: "Bekasi", address: "Jl. Raya Tambun No. 150", open: 8, close: 17, services: "Ganti Oli, Tambal Ban" },
  { id: "BK-20", name: "Suzuki Cimanggis", location: "Depok", address: "Jl. Raya Bogor KM 27, Cimanggis", open: 8, close: 17, services: "Ganti Oli, Tune Up" },
  { id: "BK-21", name: "Mazda Cempaka Putih", location: "Jakarta Pusat", address: "Jl. Cempaka Putih Raya No. 12", open: 7, close: 22, services: "Ganti Oli, Tune Up" },
  { id: "BK-22", name: "Wuling Pasar Minggu", location: "Jakarta Selatan", address: "Jl. Raya Pasar Minggu No. 12", open: 7, close: 22, services: "Ganti Oli, Servis AC" },
  { id: "BK-23", name: "Nissan Daan Mogot", location: "Jakarta Barat", address: "Jl. Daan Mogot KM 11, Kalideres", open: 6.5, close: 22, services: "Ganti Oli, Spooring" },
  { id: "BK-24", name: "Isuzu Pulogadung", location: "Jakarta Timur", address: "Jl. Raya Pulogadung No. 12", open: 7, close: 22, services: "Ganti Oli, Tune Up" },
  { id: "BK-25", name: "Mazda Sunter", location: "Jakarta Utara", address: "Jl. Danau Sunter Utara No. 12", open: 6.5, close: 22, services: "Ganti Oli, Servis AC" },
  { id: "BK-26", name: "Wuling Harapan Indah", location: "Bekasi", address: "Jl. Boulevard Harapan Indah No. 12, Medan Satria", open: 7, close: 22, services: "Ganti Oli, Tune Up" },
  { id: "BK-27", name: "Hyundai Margonda", location: "Depok", address: "Jl. Margonda Raya No. 300, Depok", open: 6.5, close: 22, services: "Ganti Oli, Servis AC" },
  { id: "BK-28", name: "Mitsubishi Serpong", location: "Tangerang", address: "Jl. Raya Serpong KM 7, Serpong", open: 7, close: 22, services: "Ganti Oli, Spooring" },
  { id: "BK-29", name: "Toyota Pamulang", location: "Tangerang Selatan", address: "Jl. Raya Pamulang No. 12, Pamulang", open: 6.5, close: 22, services: "Ganti Oli, Tune Up" },
  { id: "BK-30", name: "Honda Yasmin", location: "Bogor", address: "Jl. KH Abdullah Bin Nuh No. 12, Bogor Barat", open: 7, close: 22, services: "Ganti Oli, Tambal Ban" },
];
assignPhones(bengkelStations, 3000);

let bkLoc = "semua";
let bkQ = "";

function bkVisible(s) {
  if (bkLoc !== "semua" && s.location !== bkLoc) return false;
  return `${s.name} ${s.location} ${s.address} ${s.services}`.toLowerCase().includes(bkQ);
}

function fmtHour(t) {
  const h = Math.floor(t);
  const m = String(Math.round((t - h) * 60)).padStart(2, "0");
  return String(h).padStart(2, "0") + "." + m;
}

function bengkelIsOpen(s) {
  const now = new Date();
  const t = now.getHours() + now.getMinutes() / 60;
  return t >= s.open && t < s.close;
}

function renderBengkel() {
  const visible = bengkelStations.filter(bkVisible);
  const openCount = visible.filter(bengkelIsOpen).length;
  document.getElementById("bkStatTotal").textContent = visible.length;
  document.getElementById("bkStatOpen").textContent = openCount;
  document.getElementById("bkStatClosed").textContent = visible.length - openCount;
  document.getElementById("bkStatAreas").textContent = new Set(visible.map((s) => s.location)).size;

  const tbody = document.querySelector("#bengkelTable tbody");
  tbody.innerHTML = "";
  visible.forEach((s) => {
    const isOpen = bengkelIsOpen(s);
    const mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(s.name + " " + s.address);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${s.name}<div class="tank-info">${s.address}</div></td>
      <td>${s.location}</td>
      <td><a class="maps-link" href="${mapsUrl}" target="_blank" rel="noopener" title="Buka di Google Maps">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 8.5c0 5.25 7 13 7 13s7-7.75 7-13C19 5.13 15.87 2 12 2zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>
        Peta</a></td>
      <td>${s.phone}</td>
      <td>${s.services}</td>
      <td>${fmtHour(s.open)} – ${fmtHour(s.close)}</td>
      <td><span class="status-badge ${isOpen ? "ok" : "danger"}">${isOpen ? "Buka" : "Tutup"}</span></td>`;
    tbody.appendChild(tr);
  });
}

const bkLocationSelect = document.getElementById("bkLocationFilter");
[...new Set(bengkelStations.map((s) => s.location))].sort().forEach((loc) => {
  const opt = document.createElement("option");
  opt.value = loc;
  opt.textContent = loc;
  bkLocationSelect.appendChild(opt);
});
bkLocationSelect.addEventListener("change", (e) => {
  bkLoc = e.target.value;
  renderBengkel();
});

document.getElementById("bkSearch").addEventListener("input", (e) => {
  bkQ = e.target.value.toLowerCase();
  renderBengkel();
});

renderBengkel();
setInterval(renderBengkel, 30000);

const spluProducts = [
  { id: "lpg3", name: "LPG 3 kg", price: 19900 },
  { id: "bg55", name: "Bright Gas 5,5 kg", price: 98500 },
  { id: "bg12", name: "Bright Gas 12 kg", price: 213000 },
  { id: "bluegas", name: "Blue Gas 3 kg", price: 62500 },
  { id: "bluegas55", name: "Blue Gas 5,5 kg", price: 105000 },
];

const spluStations = [
  { id: "SPLU-01", name: "SPLU Pertamina Senen", location: "Jakarta Pusat", address: "Jl. Senen Raya No. 60", products: ["lpg3", "bg55", "bg12", "bluegas"] },
  { id: "SPLU-02", name: "SPLU Pertamina Kebayoran", location: "Jakarta Selatan", address: "Jl. Melawai Raya No. 12", products: ["lpg3", "bg55", "bg12", "bluegas"] },
  { id: "SPLU-03", name: "SPLU Pertamina Grogol", location: "Jakarta Barat", address: "Jl. Prof. Dr. Latumeten No. 25", products: ["lpg3", "bg55", "bluegas55"] },
  { id: "SPLU-04", name: "SPLU Pertamina Jatinegara", location: "Jakarta Timur", address: "Jl. Jatinegara Timur No. 30", products: ["lpg3", "bg55", "bg12", "bluegas55"] },
  { id: "SPLU-05", name: "SPLU Pertamina Sunter", location: "Jakarta Utara", address: "Jl. Sunter Permai Raya No. 8", products: ["lpg3", "bg12"] },
  { id: "SPLU-06", name: "SPLU Pertamina Bekasi", location: "Bekasi", address: "Jl. Raya Bekasi KM 17", products: ["lpg3", "bg55", "bg12", "bluegas"] },
  { id: "SPLU-07", name: "SPLU Pertamina Cibubur", location: "Depok", address: "Jl. Alternatif Cibubur No. 45", products: ["lpg3", "bg55", "bluegas55"] },
  { id: "SPLU-08", name: "SPLU Pertamina Bogor", location: "Bogor", address: "Jl. Raya Sukabumi No. 10", products: ["lpg3", "bg55", "bg12", "bluegas"] },
  { id: "SPLU-09", name: "SPLU Pertamina Tangerang", location: "Tangerang", address: "Jl. Raya Serpong KM 3", products: ["lpg3", "bg55", "bluegas55"] },
  { id: "SPLU-10", name: "SPLU Pertamina BSD", location: "Tangerang Selatan", address: "Jl. BSD Raya Utama No. 5", products: ["lpg3", "bg55", "bg12", "bluegas"] },
  { id: "SPLU-11", name: "SPLU Pertamina Cakung", location: "Jakarta Timur", address: "Jl. Raya Cakung-Cilincing KM 4", products: ["lpg3", "bluegas55"] },
  { id: "SPLU-12", name: "SPLU Pertamina Tambun", location: "Bekasi", address: "Jl. Raya Tambun No. 88", products: ["lpg3", "bg12"] },
  { id: "SPLU-13", name: "SPLU Pertamina Tanah Abang", location: "Jakarta Pusat", address: "Jl. KH Mas Mansyur No. 12, Tanah Abang", products: ["lpg3", "bg55", "bluegas"] },
  { id: "SPLU-14", name: "SPLU Pertamina Pasar Minggu", location: "Jakarta Selatan", address: "Jl. Raya Pasar Minggu No. 12", products: ["lpg3", "bg55", "bg12", "bluegas55"] },
  { id: "SPLU-15", name: "SPLU Pertamina Kembangan", location: "Jakarta Barat", address: "Jl. Puri Kembangan Raya No. 12", products: ["lpg3", "bg55", "bluegas"] },
  { id: "SPLU-16", name: "SPLU Pertamina Rawamangun", location: "Jakarta Timur", address: "Jl. Pemuda No. 12, Rawamangun", products: ["lpg3", "bg55", "bg12"] },
  { id: "SPLU-17", name: "SPLU Pertamina Tanjung Priok", location: "Jakarta Utara", address: "Jl. Yos Sudarso No. 12, Tanjung Priok", products: ["lpg3", "bg12", "bluegas55"] },
  { id: "SPLU-18", name: "SPLU Pertamina Cikarang", location: "Bekasi", address: "Jl. Raya Cikarang No. 12, Cikarang Selatan", products: ["lpg3", "bg55", "bluegas"] },
  { id: "SPLU-19", name: "SPLU Pertamina Cimanggis", location: "Depok", address: "Jl. Raya Bogor KM 27, Cimanggis", products: ["lpg3", "bg55", "bg12", "bluegas"] },
  { id: "SPLU-20", name: "SPLU Pertamina Cipondoh", location: "Tangerang", address: "Jl. Maulana Hasanuddin No. 12, Cipondoh", products: ["lpg3", "bg55", "bluegas55"] },
  { id: "SPLU-21", name: "SPLU Pertamina Pamulang", location: "Tangerang Selatan", address: "Jl. Raya Pamulang No. 12, Pamulang", products: ["lpg3", "bg55", "bg12", "bluegas"] },
  { id: "SPLU-22", name: "SPLU Pertamina Cibinong", location: "Bogor", address: "Jl. Raya Cibinong No. 12, Cibinong", products: ["lpg3", "bg55", "bluegas"] },
];
assignPhones(spluStations, 4000);

const spluStock = [];
spluStations.forEach((st) => {
  st.products.forEach((pid) => {
    spluStock.push({
      stationId: st.id,
      productId: pid,
      stock: Math.round(pid === "lpg3" ? 40 + rand() * 160 : 15 + rand() * 65),
    });
  });
});

const spluStationById = Object.fromEntries(spluStations.map((s) => [s.id, s]));
const spluProductById = Object.fromEntries(spluProducts.map((p) => [p.id, p]));

let slProd = "semua";
let slLoc = "semua";
let slQ = "";

function slVisible(r) {
  const st = spluStationById[r.stationId];
  const p = spluProductById[r.productId];
  if (slProd !== "semua" && r.productId !== slProd) return false;
  if (slLoc !== "semua" && st.location !== slLoc) return false;
  const q = `${st.name} ${st.location} ${st.address} ${p.name}`.toLowerCase();
  return q.includes(slQ);
}

function spluStatusOf(stock) {
  if (stock < 20) return { key: "danger", label: "Kritis" };
  if (stock < 50) return { key: "warn", label: "Menipis" };
  return { key: "ok", label: "Aman" };
}

function renderSplu() {
  const visible = spluStock.filter(slVisible);
  const counts = { ok: 0, warn: 0, danger: 0 };
  visible.forEach((r) => counts[spluStatusOf(r.stock).key]++);
  document.getElementById("slStatStations").textContent = new Set(visible.map((r) => r.stationId)).size;
  document.getElementById("slStatOk").textContent = counts.ok;
  document.getElementById("slStatWarn").textContent = counts.warn;
  document.getElementById("slStatDanger").textContent = counts.danger;
  document.getElementById("slStatTotal").textContent = fmtNum.format(visible.reduce((a, r) => a + r.stock, 0));

  const tbody = document.querySelector("#spluTable tbody");
  tbody.innerHTML = "";
  visible.forEach((r) => {
    const st = spluStationById[r.stationId];
    const p = spluProductById[r.productId];
    const status = spluStatusOf(r.stock);
    const mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(st.name + " " + st.address);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${st.name}<div class="tank-info">${st.address}</div></td>
      <td>${st.location}</td>
      <td><a class="maps-link" href="${mapsUrl}" target="_blank" rel="noopener" title="Buka di Google Maps">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 8.5c0 5.25 7 13 7 13s7-7.75 7-13C19 5.13 15.87 2 12 2zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>
        Peta</a></td>
      <td>${st.phone}</td>
      <td>${p.name}</td>
      <td class="num">${fmtNum.format(r.stock)} <span class="unit">tabung</span></td>
      <td><span class="status-badge ${status.key}">${status.label}</span></td>
      <td class="num">${fmtIDR.format(p.price)}<span class="unit">/tabung</span></td>`;
    tbody.appendChild(tr);
  });
}

document.querySelectorAll("#viewSplu .tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll("#viewSplu .tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    slProd = tab.dataset.prod;
    renderSplu();
  });
});

const slLocationSelect = document.getElementById("slLocationFilter");
[...new Set(spluStations.map((s) => s.location))].sort().forEach((loc) => {
  const opt = document.createElement("option");
  opt.value = loc;
  opt.textContent = loc;
  slLocationSelect.appendChild(opt);
});
slLocationSelect.addEventListener("change", (e) => {
  slLoc = e.target.value;
  renderSplu();
});

document.getElementById("slSearch").addEventListener("input", (e) => {
  slQ = e.target.value.toLowerCase();
  renderSplu();
});

function simulateSplu() {
  spluStock.forEach((r) => {
    if (r.stock > 3 && Math.random() < 0.6) {
      r.stock = Math.max(3, r.stock - Math.round(Math.random() * 4));
    }
    if (r.stock < 8) {
      r.stock = (r.productId === "lpg3" ? 120 : 45) + Math.round(Math.random() * 40);
    }
  });
  if (!document.getElementById("viewSplu").classList.contains("hidden")) renderSplu();
}

renderSplu();
setInterval(simulateSplu, 5000);

const motorStations = [
  { id: "MT-01", name: "AHASS Cempaka Putih", location: "Jakarta Pusat", address: "Jl. Cempaka Putih Tengah No. 30", open: 6.5, close: 22, services: "Servis Rutin, Ganti Oli" },
  { id: "MT-02", name: "Yamaha Senen", location: "Jakarta Pusat", address: "Jl. Senen Raya No. 88", open: 7, close: 22, services: "Servis Rutin, Tambal Ban" },
  { id: "MT-03", name: "Suzuki Tebet", location: "Jakarta Selatan", address: "Jl. Tebet Raya No. 55", open: 6.5, close: 22, services: "Servis Rutin, Servis CVT, Ganti Oli" },
  { id: "MT-04", name: "AHASS Kemang", location: "Jakarta Selatan", address: "Jl. Kemang Raya No. 8", open: 7, close: 22, services: "Ganti Oli, Tambal Ban" },
  { id: "MT-05", name: "Yamaha Grogol", location: "Jakarta Barat", address: "Jl. Prof. Dr. Latumeten No. 60", open: 6.5, close: 22, services: "Servis Rutin, Servis CVT" },
  { id: "MT-06", name: "Kawasaki Puri Kembangan", location: "Jakarta Barat", address: "Jl. Puri Kembangan No. 12", open: 7, close: 22, services: "Servis Rutin, Ganti Oli" },
  { id: "MT-07", name: "AHASS Cakung", location: "Jakarta Timur", address: "Jl. Raya Bekasi KM 18, Cakung", open: 6.5, close: 22, services: "Servis Rutin, Tambal Ban" },
  { id: "MT-08", name: "Suzuki Jatinegara", location: "Jakarta Timur", address: "Jl. Jatinegara Barat No. 25", open: 7, close: 22, services: "Servis Rutin, Servis CVT, Ganti Oli" },
  { id: "MT-09", name: "Yamaha Sunter", location: "Jakarta Utara", address: "Jl. Sunter Agung Utara No. 40", open: 6.5, close: 22, services: "Servis Rutin, Ganti Oli" },
  { id: "MT-10", name: "AHASS Bekasi", location: "Bekasi", address: "Jl. Raya Bekasi KM 21", open: 6.5, close: 22, services: "Servis Rutin, Servis CVT" },
  { id: "MT-11", name: "Yamaha Margonda", location: "Depok", address: "Jl. Margonda Raya No. 420", open: 7, close: 22, services: "Servis Rutin, Ganti Oli" },
  { id: "MT-12", name: "Suzuki Pajajaran", location: "Bogor", address: "Jl. Raya Pajajaran No. 95, Bogor", open: 6.5, close: 22, services: "Servis Rutin, Tambal Ban" },
  { id: "MT-13", name: "AHASS Serpong", location: "Tangerang", address: "Jl. Raya Serpong KM 5", open: 6.5, close: 22, services: "Servis Rutin, Ganti Oli" },
  { id: "MT-14", name: "Yamaha Bintaro", location: "Tangerang Selatan", address: "Jl. Jombang Raya No. 18, Bintaro", open: 7, close: 22, services: "Servis Rutin, Servis CVT, Tambal Ban" },
  { id: "MT-15", name: "Suzuki Ciledug", location: "Tangerang Selatan", address: "Jl. Ciledug Raya No. 20", open: 8, close: 17, services: "Servis Rutin, Ganti Oli" },
  { id: "MT-16", name: "Yamaha Cibinong", location: "Bogor", address: "Jl. Raya Cibinong No. 8", open: 8, close: 17, services: "Servis Rutin, Tambal Ban" },
  { id: "MT-17", name: "AHASS Tambun", location: "Bekasi", address: "Jl. Raya Tambun No. 200", open: 8, close: 17, services: "Servis Rutin, Ganti Oli" },
  { id: "MT-18", name: "Suzuki Cimanggis", location: "Depok", address: "Jl. Raya Bogor KM 28, Cimanggis", open: 8, close: 17, services: "Servis Rutin, Servis CVT" },
  { id: "MT-19", name: "Kawasaki Senen", location: "Jakarta Pusat", address: "Jl. Senen Raya No. 12", open: 7, close: 22, services: "Servis Rutin, Ganti Oli" },
  { id: "MT-20", name: "AHASS Pasar Minggu", location: "Jakarta Selatan", address: "Jl. Raya Pasar Minggu No. 12", open: 6.5, close: 22, services: "Servis Rutin, Servis CVT" },
  { id: "MT-21", name: "Suzuki Kembangan", location: "Jakarta Barat", address: "Jl. Puri Kembangan Raya No. 12", open: 7, close: 22, services: "Servis Rutin, Tambal Ban" },
  { id: "MT-22", name: "Yamaha Rawamangun", location: "Jakarta Timur", address: "Jl. Pemuda No. 12, Rawamangun", open: 6.5, close: 22, services: "Servis Rutin, Ganti Oli" },
  { id: "MT-23", name: "AHASS Tanjung Priok", location: "Jakarta Utara", address: "Jl. Yos Sudarso No. 12, Tanjung Priok", open: 7, close: 22, services: "Servis Rutin, Servis CVT" },
  { id: "MT-24", name: "Kawasaki Cikarang", location: "Bekasi", address: "Jl. Raya Cikarang No. 12, Cikarang Selatan", open: 6.5, close: 22, services: "Servis Rutin, Ganti Oli" },
  { id: "MT-25", name: "AHASS Cimanggis", location: "Depok", address: "Jl. Raya Bogor KM 27, Cimanggis", open: 7, close: 22, services: "Servis Rutin, Tambal Ban" },
  { id: "MT-26", name: "Yamaha Cipondoh", location: "Tangerang", address: "Jl. Maulana Hasanuddin No. 12, Cipondoh", open: 6.5, close: 22, services: "Servis Rutin, Ganti Oli" },
  { id: "MT-27", name: "AHASS Pamulang", location: "Tangerang Selatan", address: "Jl. Raya Pamulang No. 12, Pamulang", open: 7, close: 22, services: "Servis Rutin, Servis CVT" },
  { id: "MT-28", name: "Kawasaki Cibinong", location: "Bogor", address: "Jl. Raya Cibinong No. 12, Cibinong", open: 6.5, close: 22, services: "Servis Rutin, Ganti Oli" },
];
assignPhones(motorStations, 5000);

let mtLoc = "semua";
let mtQ = "";

function mtVisible(s) {
  if (mtLoc !== "semua" && s.location !== mtLoc) return false;
  return `${s.name} ${s.location} ${s.address} ${s.services}`.toLowerCase().includes(mtQ);
}

function renderMotor() {
  const visible = motorStations.filter(mtVisible);
  const openCount = visible.filter(bengkelIsOpen).length;
  document.getElementById("mtStatTotal").textContent = visible.length;
  document.getElementById("mtStatOpen").textContent = openCount;
  document.getElementById("mtStatClosed").textContent = visible.length - openCount;
  document.getElementById("mtStatAreas").textContent = new Set(visible.map((s) => s.location)).size;

  const tbody = document.querySelector("#motorTable tbody");
  tbody.innerHTML = "";
  visible.forEach((s) => {
    const isOpen = bengkelIsOpen(s);
    const mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(s.name + " " + s.address);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${s.name}<div class="tank-info">${s.address}</div></td>
      <td>${s.location}</td>
      <td><a class="maps-link" href="${mapsUrl}" target="_blank" rel="noopener" title="Buka di Google Maps">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 8.5c0 5.25 7 13 7 13s7-7.75 7-13C19 5.13 15.87 2 12 2zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>
        Peta</a></td>
      <td>${s.phone}</td>
      <td>${s.services}</td>
      <td>${fmtHour(s.open)} – ${fmtHour(s.close)}</td>
      <td><span class="status-badge ${isOpen ? "ok" : "danger"}">${isOpen ? "Buka" : "Tutup"}</span></td>`;
    tbody.appendChild(tr);
  });
}

const mtLocationSelect = document.getElementById("mtLocationFilter");
[...new Set(motorStations.map((s) => s.location))].sort().forEach((loc) => {
  const opt = document.createElement("option");
  opt.value = loc;
  opt.textContent = loc;
  mtLocationSelect.appendChild(opt);
});
mtLocationSelect.addEventListener("change", (e) => {
  mtLoc = e.target.value;
  renderMotor();
});

document.getElementById("mtSearch").addEventListener("input", (e) => {
  mtQ = e.target.value.toLowerCase();
  renderMotor();
});

renderMotor();
setInterval(renderMotor, 30000);

const emChargers = [
  { id: "EM-01", name: "Charger Motor SWAP Cempaka Putih", location: "Jakarta Pusat", address: "Jl. Cempaka Putih Raya No. 20", operator: "SWAP", type: "Swap Baterai", price: 25000, unit: "swap" },
  { id: "EM-02", name: "Charger Motor Volta Senen", location: "Jakarta Pusat", address: "Jl. Senen Raya No. 45", operator: "Volta", type: "Swap Baterai", price: 25000, unit: "swap" },
  { id: "EM-03", name: "Charger Motor SWAP Tebet", location: "Jakarta Selatan", address: "Jl. Tebet Raya No. 40", operator: "SWAP", type: "Swap Baterai", price: 25000, unit: "swap" },
  { id: "EM-04", name: "Charger Motor ALVA Kemang", location: "Jakarta Selatan", address: "Jl. Kemang Raya No. 15", operator: "ALVA", type: "Charging AC", price: 2100, unit: "kWh" },
  { id: "EM-05", name: "Charger Motor Volta Grogol", location: "Jakarta Barat", address: "Jl. Prof. Dr. Latumeten No. 30", operator: "Volta", type: "Swap Baterai", price: 25000, unit: "swap" },
  { id: "EM-06", name: "Charger Motor SWAP Puri Indah", location: "Jakarta Barat", address: "Jl. Puri Indah Raya No. 10", operator: "SWAP", type: "Swap Baterai", price: 25000, unit: "swap" },
  { id: "EM-07", name: "Charger Motor Smoot Cakung", location: "Jakarta Timur", address: "Jl. Raya Bekasi KM 19, Cakung", operator: "Smoot", type: "Charging AC", price: 2100, unit: "kWh" },
  { id: "EM-08", name: "Charger Motor SWAP Jatinegara", location: "Jakarta Timur", address: "Jl. Jatinegara Timur No. 10", operator: "SWAP", type: "Swap Baterai", price: 25000, unit: "swap" },
  { id: "EM-09", name: "Charger Motor SWAP Sunter", location: "Jakarta Utara", address: "Jl. Sunter Permai Raya No. 25", operator: "SWAP", type: "Swap Baterai", price: 25000, unit: "swap" },
  { id: "EM-10", name: "Charger Motor ALVA PIK", location: "Jakarta Utara", address: "Jl. Pantai Indah Kapuk No. 20", operator: "ALVA", type: "Charging AC", price: 2100, unit: "kWh" },
  { id: "EM-11", name: "Charger Motor SWAP Summarecon", location: "Bekasi", address: "Jl. Bulevar Ahmad Yani, Summarecon Mall Bekasi", operator: "SWAP", type: "Swap Baterai", price: 25000, unit: "swap" },
  { id: "EM-12", name: "Charger Motor Volta Bekasi Timur", location: "Bekasi", address: "Jl. Raya Kalimalang No. 350, Tambun", operator: "Volta", type: "Swap Baterai", price: 25000, unit: "swap" },
  { id: "EM-13", name: "Charger Motor Smoot Margonda", location: "Depok", address: "Jl. Margonda Raya No. 450", operator: "Smoot", type: "Charging AC", price: 2100, unit: "kWh" },
  { id: "EM-14", name: "Charger Motor SWAP Botani Square", location: "Bogor", address: "Jl. Raya Pajajaran No. 40, Bogor", operator: "SWAP", type: "Swap Baterai", price: 25000, unit: "swap" },
  { id: "EM-15", name: "Charger Motor Volta Karawaci", location: "Tangerang", address: "Jl. Boulevard Diponegoro No. 100, Karawaci", operator: "Volta", type: "Swap Baterai", price: 25000, unit: "swap" },
  { id: "EM-16", name: "Charger Motor SWAP BSD", location: "Tangerang Selatan", address: "Jl. BSD Raya Utama No. 8", operator: "SWAP", type: "Swap Baterai", price: 25000, unit: "swap" },
  { id: "EM-17", name: "Charger Motor Volta Tanah Abang", location: "Jakarta Pusat", address: "Jl. KH Mas Mansyur No. 12, Tanah Abang", operator: "Volta", type: "Swap Baterai", price: 25000, unit: "swap" },
  { id: "EM-18", name: "Charger Motor SWAP Blok M", location: "Jakarta Selatan", address: "Jl. Bulungan No. 12, Kebayoran Baru", operator: "SWAP", type: "Swap Baterai", price: 25000, unit: "swap" },
  { id: "EM-19", name: "Charger Motor ALVA Kembangan", location: "Jakarta Barat", address: "Jl. Puri Kembangan Raya No. 12", operator: "ALVA", type: "Charging AC", price: 2100, unit: "kWh" },
  { id: "EM-20", name: "Charger Motor SWAP Rawamangun", location: "Jakarta Timur", address: "Jl. Pemuda No. 12, Rawamangun", operator: "SWAP", type: "Swap Baterai", price: 25000, unit: "swap" },
  { id: "EM-21", name: "Charger Motor Smoot Tanjung Priok", location: "Jakarta Utara", address: "Jl. Yos Sudarso No. 12, Tanjung Priok", operator: "Smoot", type: "Charging AC", price: 2100, unit: "kWh" },
  { id: "EM-22", name: "Charger Motor ALVA Cikarang", location: "Bekasi", address: "Jl. Raya Cikarang No. 12, Cikarang Selatan", operator: "ALVA", type: "Charging AC", price: 2100, unit: "kWh" },
  { id: "EM-23", name: "Charger Motor SWAP Cimanggis", location: "Depok", address: "Jl. Raya Bogor KM 27, Cimanggis", operator: "SWAP", type: "Swap Baterai", price: 25000, unit: "swap" },
  { id: "EM-24", name: "Charger Motor Smoot Cipondoh", location: "Tangerang", address: "Jl. Maulana Hasanuddin No. 12, Cipondoh", operator: "Smoot", type: "Charging AC", price: 2100, unit: "kWh" },
  { id: "EM-25", name: "Charger Motor Volta Pamulang", location: "Tangerang Selatan", address: "Jl. Raya Pamulang No. 12, Pamulang", operator: "Volta", type: "Swap Baterai", price: 25000, unit: "swap" },
  { id: "EM-26", name: "Charger Motor SWAP Cibinong", location: "Bogor", address: "Jl. Raya Cibinong No. 12, Cibinong", operator: "SWAP", type: "Swap Baterai", price: 25000, unit: "swap" },
];
assignPhones(emChargers, 6000);

const emStatusMeta = { ok: "Tersedia", warn: "Digunakan", danger: "Nonaktif" };
emChargers.forEach((s) => {
  const r = rand();
  s.status = r < 0.5 ? "ok" : r < 0.82 ? "warn" : "danger";
});

let emOp = "semua";
let emLoc = "semua";
let emQ = "";

function emVisible(s) {
  if (emOp !== "semua" && s.operator !== emOp) return false;
  if (emLoc !== "semua" && s.location !== emLoc) return false;
  return `${s.name} ${s.location} ${s.address} ${s.operator} ${s.type}`.toLowerCase().includes(emQ);
}

function renderEm() {
  const visible = emChargers.filter(emVisible);
  const counts = { ok: 0, warn: 0, danger: 0 };
  visible.forEach((s) => counts[s.status]++);
  document.getElementById("emStatStations").textContent = visible.length;
  document.getElementById("emStatOk").textContent = counts.ok;
  document.getElementById("emStatWarn").textContent = counts.warn;
  document.getElementById("emStatDanger").textContent = counts.danger;

  const tbody = document.querySelector("#emTable tbody");
  tbody.innerHTML = "";
  visible.forEach((s) => {
    const mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(s.name + " " + s.address);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${s.name}<div class="tank-info">${s.address}</div></td>
      <td>${s.location}</td>
      <td><a class="maps-link" href="${mapsUrl}" target="_blank" rel="noopener" title="Buka di Google Maps">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 8.5c0 5.25 7 13 7 13s7-7.75 7-13C19 5.13 15.87 2 12 2zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>
        Peta</a></td>
      <td>${s.phone}</td>
      <td><span class="op-tag ${s.operator}">${s.operator}</span></td>
      <td>${s.type}</td>
      <td class="num">${fmtIDR.format(s.price)}<span class="unit">/${s.unit}</span></td>
      <td><span class="status-badge ${s.status}">${emStatusMeta[s.status]}</span></td>`;
    tbody.appendChild(tr);
  });
}

document.querySelectorAll("#viewCharger .tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll("#viewCharger .tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    emOp = tab.dataset.op;
    renderEm();
  });
});

const emLocationSelect = document.getElementById("emLocationFilter");
[...new Set(emChargers.map((s) => s.location))].sort().forEach((loc) => {
  const opt = document.createElement("option");
  opt.value = loc;
  opt.textContent = loc;
  emLocationSelect.appendChild(opt);
});
emLocationSelect.addEventListener("change", (e) => {
  emLoc = e.target.value;
  renderEm();
});

document.getElementById("emSearch").addEventListener("input", (e) => {
  emQ = e.target.value.toLowerCase();
  renderEm();
});

function simulateEm() {
  const s = emChargers[Math.floor(Math.random() * emChargers.length)];
  const r = Math.random();
  s.status = r < 0.55 ? "ok" : r < 0.85 ? "warn" : "danger";
  if (!document.getElementById("viewCharger").classList.contains("hidden")) renderEm();
}

renderEm();
setInterval(simulateEm, 5000);

const transitRoutes = [
  { id: "TR-01", mode: "LRT", name: "LRT Jabodebek — Lin Cibubur", route: "Cawang – Cibubur – Harjamukti", area: "Jakarta Timur", first: 5, last: 23.55, headway: "10 menit" },
  { id: "TR-02", mode: "LRT", name: "LRT Jabodebek — Lin Bekasi", route: "Cawang – Tambun – Metland Telaga Murni", area: "Bekasi", first: 5, last: 23.55, headway: "10 menit" },
  { id: "TR-03", mode: "LRT", name: "LRT Jakarta", route: "Velodrome – Kelapa Gading", area: "Jakarta Pusat", first: 5.5, last: 23, headway: "10 menit", status: "danger", note: "Operasional dihentikan sementara" },
  { id: "TR-04", mode: "MRT", name: "MRT Jakarta — Lin Utara–Selatan", route: "Lebak Bulus – Bundaran HI", area: "Jakarta Selatan", first: 5, last: 23.5, headway: "5 menit" },
  { id: "TR-05", mode: "MRT", name: "MRT Jakarta Fase 2A", route: "Bundaran HI – Kota", area: "Jakarta Pusat", first: null, last: null, headway: "—", status: "danger", note: "Dalam pembangunan" },
  { id: "TR-06", mode: "KRL", name: "KRL Commuter — Lin Bogor", route: "Jakarta Kota – Depok – Bogor", area: "Bogor", first: 4, last: 24, headway: "5 menit" },
  { id: "TR-07", mode: "KRL", name: "KRL Commuter — Lin Bekasi", route: "Jakarta Kota – Tambun – Bekasi", area: "Bekasi", first: 4, last: 24, headway: "5 menit" },
  { id: "TR-08", mode: "KRL", name: "KRL Commuter — Lin Tangerang", route: "Duri – Tangerang", area: "Tangerang", first: 4, last: 23, headway: "20 menit" },
  { id: "TR-09", mode: "KRL", name: "KRL Commuter — Lin Rangkasbitung", route: "Tanah Abang – Serpong – Rangkasbitung", area: "Tangerang Selatan", first: 4, last: 23.5, headway: "15 menit" },
  { id: "TR-10", mode: "KRL", name: "KRL Commuter — Lin Loop Cikarang", route: "Cikarang – Kampung Bandan – Jakarta Kota", area: "Bekasi", first: 4, last: 24, headway: "10 menit" },
  { id: "TR-11", mode: "TransJakarta", name: "TransJakarta Koridor 1", route: "Blok M – Kota", area: "Jakarta Selatan", first: 5, last: 23, headway: "5–10 menit" },
  { id: "TR-12", mode: "TransJakarta", name: "TransJakarta Koridor 2", route: "Pulogadung – Harmoni", area: "Jakarta Timur", first: 5, last: 23, headway: "5–10 menit" },
  { id: "TR-13", mode: "TransJakarta", name: "TransJakarta Koridor 3", route: "Kalideres – Pasar Baru", area: "Jakarta Barat", first: 5, last: 23, headway: "5–10 menit" },
  { id: "TR-14", mode: "TransJakarta", name: "TransJakarta Koridor 4", route: "Pulo Gadung – Dukuh Atas", area: "Jakarta Timur", first: 5, last: 23, headway: "5–10 menit" },
  { id: "TR-15", mode: "TransJakarta", name: "TransJakarta Koridor 5", route: "Kampung Melayu – Ancol", area: "Jakarta Utara", first: 5, last: 23, headway: "5–10 menit" },
  { id: "TR-16", mode: "TransJakarta", name: "TransJakarta Koridor 6", route: "Ragunan – Monas", area: "Jakarta Selatan", first: 5, last: 23, headway: "10 menit" },
  { id: "TR-17", mode: "TransJakarta", name: "TransJakarta Koridor 7", route: "Kampung Rambutan – Kampung Melayu", area: "Jakarta Timur", first: 5, last: 23, headway: "10 menit" },
  { id: "TR-18", mode: "TransJakarta", name: "TransJakarta Koridor 8", route: "Lebak Bulus – Harmoni", area: "Jakarta Selatan", first: 5, last: 23, headway: "5–10 menit" },
  { id: "TR-19", mode: "TransJakarta", name: "TransJakarta Koridor 9", route: "Pinang Ranti – Pluit", area: "Jakarta Timur", first: 5, last: 23, headway: "5–10 menit" },
  { id: "TR-20", mode: "TransJakarta", name: "TransJakarta Koridor 10", route: "Tanjung Priok – PGC", area: "Jakarta Utara", first: 5, last: 23, headway: "10 menit" },
  { id: "TR-21", mode: "TransJakarta", name: "TransJakarta Koridor 13", route: "Ciledug – Tendean", area: "Jakarta Selatan", first: 5.5, last: 22.3, headway: "10 menit" },
  { id: "TR-22", mode: "TransJakarta", name: "TransJakarta Koridor 14", route: "JIS – Senen", area: "Jakarta Utara", first: 5, last: 23, headway: "10 menit" },
  { id: "TR-23", mode: "JakLingko", name: "Jak Lingko JAK 1", route: "Tanah Abang – Petojo Loop", area: "Jakarta Pusat", first: 5, last: 22, headway: "10–15 menit" },
  { id: "TR-24", mode: "JakLingko", name: "Jak Lingko JAK 4", route: "Tanah Abang – Pasar Rumput", area: "Jakarta Pusat", first: 5, last: 22, headway: "10–15 menit" },
  { id: "TR-25", mode: "JakLingko", name: "Jak Lingko JAK 6", route: "Pasar Minggu – Pancoran", area: "Jakarta Selatan", first: 5, last: 22, headway: "10–15 menit" },
  { id: "TR-26", mode: "JakLingko", name: "Jak Lingko JAK 10", route: "Grogol – Kapuk Muara", area: "Jakarta Barat", first: 5, last: 22, headway: "10–15 menit" },
  { id: "TR-27", mode: "JakLingko", name: "Jak Lingko JAK 44", route: "Kampung Melayu – Cililitan", area: "Jakarta Timur", first: 5, last: 22, headway: "10–15 menit" },
  { id: "TR-28", mode: "JakLingko", name: "Jak Lingko JAK 45", route: "Cibubur – Depok", area: "Depok", first: 5, last: 22, headway: "10–15 menit" },
  { id: "TR-29", mode: "JakLingko", name: "Jak Lingko JAK 75", route: "Cikarang – Tambun", area: "Bekasi", first: 5, last: 22, headway: "10–15 menit" },
  { id: "TR-30", mode: "JakLingko", name: "Jak Lingko JAK 108", route: "Tangerang – Karawaci", area: "Tangerang", first: 5, last: 22, headway: "10–15 menit" },
  { id: "TR-31", mode: "Whoosh", name: "Whoosh — Halim–Padalarang", route: "Stasiun Halim – Karawang – Padalarang", area: "Jakarta Timur", first: 6, last: 21, headway: "30–60 menit" },
  { id: "TR-32", mode: "Whoosh", name: "Whoosh — Halim–Tegalluar", route: "Stasiun Halim – Karawang – Padalarang – Tegalluar", area: "Jakarta Timur", first: 5.83, last: 20.5, headway: "30–60 menit" },
  { id: "TR-33", mode: "TransJabodetabek", name: "TransJabodetabek B11 — Summarecon Bekasi–Blok M", route: "Summarecon Bekasi – Bekasi Barat – Blok M", area: "Bekasi", first: 5, last: 22, headway: "15–30 menit" },
  { id: "TR-34", mode: "TransJabodetabek", name: "TransJabodetabek B12 — Harapan Indah–Tanjung Priok", route: "Harapan Indah – Cakung – Tanjung Priok", area: "Bekasi", first: 5, last: 22, headway: "15–30 menit" },
  { id: "TR-35", mode: "TransJabodetabek", name: "TransJabodetabek D11 — Terminal Depok–Bundaran Senayan", route: "Terminal Depok – Margonda – Bundaran Senayan", area: "Depok", first: 5, last: 22, headway: "15–30 menit" },
  { id: "TR-36", mode: "TransJabodetabek", name: "TransJabodetabek S11 — Alam Sutera–Blok M", route: "Alam Sutera – Serpong Utara – Blok M", area: "Tangerang Selatan", first: 5, last: 22, headway: "15–30 menit" },
  { id: "TR-37", mode: "TransJabodetabek", name: "TransJabodetabek S12 — BSD–Grogol", route: "BSD Sektor 1 – Serpong – Grogol", area: "Tangerang Selatan", first: 5, last: 22, headway: "15–30 menit" },
  { id: "TR-38", mode: "TransJabodetabek", name: "TransJabodetabek T11 — TangCity–Kalideres", route: "TangCity – Cikokol – Kalideres", area: "Tangerang", first: 5, last: 22, headway: "15–30 menit" },
  { id: "TR-39", mode: "TransJabodetabek", name: "TransJabodetabek P11 — Baranangsiang–Blok M", route: "Terminal Baranangsiang – Ciawi – Blok M", area: "Bogor", first: 5, last: 22, headway: "15–30 menit" },
  { id: "TR-40", mode: "TransJabodetabek", name: "TransJabodetabek P12 — Cibinong–Kampung Rambutan", route: "Cibinong – Sukaraja – Kampung Rambutan", area: "Bogor", first: 5, last: 22, headway: "15–30 menit" },
  { id: "TR-41", mode: "NonBRT", name: "Non-BRT 1A — Pantai Maju–Balai Kota", route: "Pantai Maju – Penjaringan – Balai Kota", area: "Jakarta Utara", first: 5, last: 22, headway: "10–20 menit" },
  { id: "TR-42", mode: "NonBRT", name: "Non-BRT 1C — Pesanggrahan–Blok M", route: "Pesanggrahan – Kebayoran Lama – Blok M", area: "Jakarta Selatan", first: 5, last: 22, headway: "10–20 menit" },
  { id: "TR-43", mode: "NonBRT", name: "Non-BRT 1P — Senen–Pantai Indah Kapuk", route: "Senen – Gunung Sahari – Pantai Indah Kapuk", area: "Jakarta Pusat", first: 5, last: 22, headway: "10–20 menit" },
  { id: "TR-44", mode: "NonBRT", name: "Non-BRT 5C — Cililitan (PGC)–Juanda", route: "PGC Cililitan – Matraman – Juanda", area: "Jakarta Timur", first: 5, last: 22, headway: "10–20 menit" },
  { id: "TR-45", mode: "NonBRT", name: "Non-BRT 3E — Cengkareng–Grogol", route: "Cengkareng – Daan Mogot – Grogol", area: "Jakarta Barat", first: 5, last: 22, headway: "10–20 menit" },
  { id: "TR-46", mode: "Feeder", name: "Feeder Kebon Jeruk–Palmerah", route: "Kebon Jeruk – Kemanggisan – Palmerah", area: "Jakarta Barat", first: 5, last: 22, headway: "10–15 menit" },
  { id: "TR-47", mode: "Feeder", name: "Feeder Pondok Kelapa–Kampung Melayu", route: "Pondok Kelapa – Duren Sawit – Kampung Melayu", area: "Jakarta Timur", first: 5, last: 22, headway: "10–15 menit" },
  { id: "TR-48", mode: "Feeder", name: "Feeder Pejaten–Pasar Minggu", route: "Pejaten – Tanjung Barat – Pasar Minggu", area: "Jakarta Selatan", first: 5, last: 22, headway: "10–15 menit" },
  { id: "TR-49", mode: "Feeder", name: "Feeder Semper–Tanjung Priok", route: "Semper – Cilincing – Tanjung Priok", area: "Jakarta Utara", first: 5, last: 22, headway: "10–15 menit" },
  { id: "TR-50", mode: "Feeder", name: "Feeder Cibubur–Cawang", route: "Cibubur – Pasar Rebo – Cawang", area: "Jakarta Timur", first: 5, last: 22, headway: "10–15 menit" },
  { id: "TR-51", mode: "Mikrotrans", name: "Mikrotrans JAK 02 — Duren Sawit–Pondok Kelapa", route: "Duren Sawit – Pondok Kelapa", area: "Jakarta Timur", first: 5, last: 22, headway: "10–15 menit" },
  { id: "TR-52", mode: "Mikrotrans", name: "Mikrotrans JAK 07 — Mampang–Tegal Parang", route: "Mampang Prapatan – Tegal Parang", area: "Jakarta Selatan", first: 5, last: 22, headway: "10–15 menit" },
  { id: "TR-53", mode: "Mikrotrans", name: "Mikrotrans JAK 11 — Kebon Jeruk–Grogol", route: "Kebon Jeruk – Tomang – Grogol", area: "Jakarta Barat", first: 5, last: 22, headway: "10–15 menit" },
  { id: "TR-54", mode: "Mikrotrans", name: "Mikrotrans JAK 24 — Senen–Tanah Abang", route: "Senen – Cideng – Tanah Abang", area: "Jakarta Pusat", first: 5, last: 22, headway: "10–15 menit" },
  { id: "TR-55", mode: "Mikrotrans", name: "Mikrotrans JAK 30 — Tanjung Priok–Semper", route: "Tanjung Priok – Kebon Bawang – Semper", area: "Jakarta Utara", first: 5, last: 22, headway: "10–15 menit" },
  { id: "TR-56", mode: "Royaltrans", name: "RoyalTrans — Blok M–Bandara Soekarno-Hatta", route: "Blok M – Senayan – Bandara Soekarno-Hatta", area: "Tangerang", first: 4, last: 23, headway: "30 menit" },
  { id: "TR-57", mode: "Royaltrans", name: "RoyalTrans — Kelapa Gading–Bandara Soekarno-Hatta", route: "Kelapa Gading – Cempaka Putih – Bandara Soekarno-Hatta", area: "Jakarta Utara", first: 4, last: 23, headway: "30 menit" },
  { id: "TR-58", mode: "Royaltrans", name: "RoyalTrans — Summarecon Bekasi–Bandara Soekarno-Hatta", route: "Summarecon Bekasi – Tol Lingkar Luar – Bandara Soekarno-Hatta", area: "Bekasi", first: 4, last: 23, headway: "30 menit" },
  { id: "TR-59", mode: "Royaltrans", name: "RoyalTrans — Bintaro–Blok M", route: "Bintaro Sektor 7 – Lebak Bulus – Blok M", area: "Tangerang Selatan", first: 5, last: 22, headway: "30 menit" },
];

const trModeNames = { LRT: "LRT", MRT: "MRT", KRL: "KRL Commuter", TransJakarta: "TransJakarta", NonBRT: "Non-BRT", Feeder: "Feeder", Mikrotrans: "Mikrotrans", TransJabodetabek: "TransJabodetabek", Royaltrans: "RoyalTrans", JakLingko: "Jak Lingko", Whoosh: "Whoosh" };
const trStatusMeta = { ok: "Beroperasi", warn: "Di Luar Jam Operasional", danger: "Tidak Beroperasi" };

let trMode = "semua";
let trLoc = "semua";
let trQ = "";

function trStatusOf(s) {
  if (s.status === "danger") return "danger";
  return bengkelIsOpen({ open: s.first, close: s.last }) ? "ok" : "warn";
}

function trVisible(s) {
  if (trMode !== "semua" && s.mode !== trMode) return false;
  if (trLoc !== "semua" && s.area !== trLoc) return false;
  return `${s.name} ${s.route} ${s.area} ${s.mode}`.toLowerCase().includes(trQ);
}

function renderTransit() {
  const visible = transitRoutes.filter(trVisible);
  const counts = { ok: 0, warn: 0, danger: 0 };
  visible.forEach((s) => counts[trStatusOf(s)]++);
  document.getElementById("trStatTotal").textContent = visible.length;
  document.getElementById("trStatOk").textContent = counts.ok;
  document.getElementById("trStatWarn").textContent = counts.warn;
  document.getElementById("trStatDanger").textContent = counts.danger;
  document.getElementById("trStatAreas").textContent = new Set(visible.map((s) => s.area)).size;

  const tbody = document.querySelector("#transitTable tbody");
  tbody.innerHTML = "";
  visible.forEach((s) => {
    const st = trStatusOf(s);
    const jam = s.first == null ? "—" : `${fmtHour(s.first)} – ${fmtHour(s.last)}`;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${s.name}<div class="tank-info">${s.route}${s.note ? " — " + s.note : ""}</div></td>
      <td><span class="op-tag ${s.mode}">${trModeNames[s.mode]}</span></td>
      <td>${s.area}</td>
      <td>${jam}</td>
      <td>${s.headway}</td>
      <td><span class="status-badge ${st}">${trStatusMeta[st]}</span></td>`;
    tbody.appendChild(tr);
  });
}

document.querySelectorAll("#viewTransit .tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll("#viewTransit .tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    trMode = tab.dataset.mode;
    renderTransit();
  });
});

const trLocationSelect = document.getElementById("trLocationFilter");
[...new Set(transitRoutes.map((s) => s.area))].sort().forEach((loc) => {
  const opt = document.createElement("option");
  opt.value = loc;
  opt.textContent = loc;
  trLocationSelect.appendChild(opt);
});
trLocationSelect.addEventListener("change", (e) => {
  trLoc = e.target.value;
  renderTransit();
});

document.getElementById("trSearch").addEventListener("input", (e) => {
  trQ = e.target.value.toLowerCase();
  renderTransit();
});

renderTransit();
setInterval(renderTransit, 30000);

// Mobile card layout: label each cell with its column name from the table header.
function labelTableCells(table) {
  const heads = Array.from(table.querySelectorAll("thead th")).map((th) => th.textContent.trim());
  table.querySelectorAll("tbody tr").forEach((tr) => {
    Array.from(tr.children).forEach((td, i) => {
      if (heads[i] && !td.hasAttribute("data-label")) td.setAttribute("data-label", heads[i]);
    });
  });
}

["stockTable", "spkluTable", "spluTable", "bengkelTable", "motorTable", "emTable", "transitTable"].forEach((id) => {
  const table = document.getElementById(id);
  const tbody = table && table.querySelector("tbody");
  if (!tbody) return;
  labelTableCells(table);
  new MutationObserver(() => labelTableCells(table)).observe(tbody, { childList: true });
});

