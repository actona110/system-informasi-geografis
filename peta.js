// Koordinat Banyuwangi
const banyuwangiCoords = [-8.2191, 114.3691];

// Inisialisasi peta dengan lokasi Banyuwangi
const map = L.map("map").setView(banyuwangiCoords, 12);

// Tambahkan layer peta
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Tambahkan marker default di pusat Banyuwangi
const marker = L.marker(banyuwangiCoords)
  .bindPopup("Kota Banyuwangi")
  .addTo(map);

// Event handler untuk tombol kontrol
document.getElementById("zoomIn").addEventListener("click", () => {
  map.zoomIn();
});

document.getElementById("zoomOut").addEventListener("click", () => {
  map.zoomOut();
});

document.getElementById("centerMap").addEventListener("click", () => {
  map.setView(banyuwangiCoords, 12);
});

// Update koordinat saat mengklik peta
map.on("click", (e) => {
  const { lat, lng } = e.latlng;
  document.getElementById(
    "coordinates"
  ).textContent = `Koordinat: ${lat.toFixed(6)}, ${lng.toFixed(6)}`;

  // Pindahkan marker ke lokasi yang diklik
  marker.setLatLng([lat, lng]);
});
