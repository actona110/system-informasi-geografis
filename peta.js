// Inisialisasi peta
const map = L.map("map").setView([-6.2, 106.816666], 13);

// Tambahkan layer peta
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Tambahkan marker default
const marker = L.marker([-6.2, 106.816666]).bindPopup("Jakarta").addTo(map);

// Event handler untuk tombol kontrol
document.getElementById("zoomIn").addEventListener("click", () => {
  map.zoomIn();
});

document.getElementById("zoomOut").addEventListener("click", () => {
  map.zoomOut();
});

document.getElementById("centerMap").addEventListener("click", () => {
  map.setView([-6.2, 106.816666], 13);
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
