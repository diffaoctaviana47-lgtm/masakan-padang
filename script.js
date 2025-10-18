// === Website Masakan Padang ===

// Data resep
const resepPadang = [
  {
    nama: "Rendang Daging",
    kategori: "Daging",
    deskripsi: "Rendang adalah masakan daging khas Minangkabau yang dimasak lama dengan santan dan rempah.",
    bahan: [
      "1 kg daging sapi",
      "1 liter santan kental",
      "5 lembar daun jeruk",
      "2 batang serai",
      "Bumbu halus: cabai, bawang merah, bawang putih, jahe, kunyit, ketumbar"
    ],
    langkah: [
      "Tumis bumbu halus sampai harum.",
      "Masukkan daging dan aduk hingga berubah warna.",
      "Tuang santan, daun jeruk, dan serai.",
      "Masak hingga santan menyusut dan bumbu meresap sempurna."
    ]
  },
  {
    nama: "Sate Padang",
    kategori: "Daging",
    deskripsi: "Sate dengan bumbu kental dari tepung beras dan rempah khas Padang.",
    bahan: [
      "500 gram daging sapi",
      "Bumbu halus: cabai, bawang putih, bawang merah, kunyit, jahe, ketumbar",
      "Tepung beras untuk mengentalkan"
    ],
    langkah: [
      "Rebus daging hingga empuk, potong dadu.",
      "Tumis bumbu halus, tambahkan air rebusan daging dan tepung beras.",
      "Masak sampai kuah kental.",
      "Tusuk daging dan siram dengan bumbu."
    ]
  },
  {
    nama: "Ayam Pop",
    kategori: "Ayam",
    deskripsi: "Ayam khas Padang yang direbus lalu digoreng sebentar tanpa kulit.",
    bahan: [
      "1 ekor ayam kampung",
      "4 siung bawang putih",
      "2 cm jahe",
      "1 sdt garam",
      "Air kelapa"
    ],
    langkah: [
      "Rebus ayam dengan bumbu halus dan air kelapa sampai empuk.",
      "Goreng sebentar hingga sedikit kering.",
      "Sajikan dengan sambal bawang pedas."
    ]
  }
];

// Elemen
const listResep = document.getElementById("list-resep");
const searchInput = document.getElementById("search");
const kategoriSelect = document.getElementById("kategori");

// Tampilkan semua resep
function tampilkanResep(data) {
  listResep.innerHTML = "";
  data.forEach((r) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${r.nama}</h3>
      <p>${r.deskripsi}</p>
      <button class="btn-detail">Lihat Resep</button>
    `;
    card.querySelector(".btn-detail").addEventListener("click", () => bukaModal(r));
    listResep.appendChild(card);
  });
}

// Pencarian resep
searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const hasil = resepPadang.filter(r => r.nama.toLowerCase().includes(keyword));
  tampilkanResep(hasil);
});

// Filter kategori
kategoriSelect.addEventListener("change", () => {
  const kategori = kategoriSelect.value;
  if (kategori === "Semua") {
    tampilkanResep(resepPadang);
  } else {
    const hasil = resepPadang.filter(r => r.kategori === kategori);
    tampilkanResep(hasil);
  }
});

// Modal detail resep
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");

function bukaModal(resep) {
  modalContent.innerHTML = `
    <h2>${resep.nama}</h2>
    <p>${resep.deskripsi}</p>
    <h4>Bahan:</h4>
    <ul>${resep.bahan.map(b => `<li>${b}</li>`).join("")}</ul>
    <h4>Langkah:</h4>
    <ol>${resep.langkah.map(l => `<li>${l}</li>`).join("")}</ol>
  `;
  modal.style.display = "block";
}

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Jalankan awal
tampilkanResep(resepPadang);

