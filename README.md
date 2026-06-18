# 🏥 RS Budi Asih Trenggalek — Website Resmi

Website portofolio resmi **Rumah Sakit Budi Asih Trenggalek**, dibangun dengan teknologi web modern untuk memberikan informasi pelayanan kesehatan yang lengkap dan mudah diakses oleh masyarakat.

---

## 🌐 Live Demo

> Setelah deploy, URL Vercel akan tersedia di sini.
  website-portofolio-rsba.vercel.app

---

## 📋 Fitur Utama

| Fitur | Deskripsi |
|---|---|
| 🌀 **Splash Screen** | Animasi loading dengan logo RS saat halaman pertama dibuka |
| ⌨️ **Typewriter Hero** | Teks judul muncul seperti diketik satu per satu |
| 📱 **Responsive Mobile** | Hamburger menu untuk tampilan HP yang nyaman |
| 🔢 **Counter Statistik** | Angka berhitung otomatis saat di-scroll ke section |
| ⬆️ **Scroll to Top** | Tombol kembali ke atas yang muncul otomatis |
| 💬 **WhatsApp Floating** | Tombol chat WhatsApp langsung ke RS |
| 🗓️ **Jadwal Dokter** | Jadwal lengkap dokter spesialis RS Budi Asih |
| 🏥 **Poliklinik** | Daftar lengkap poli yang tersedia |
| 📰 **Artikel Kesehatan** | Artikel dengan modal popup berisi konten lengkap |
| 🗺️ **Google Maps** | Peta lokasi RS langsung dari footer |
| 📸 **Instagram** | Link ke akun Instagram resmi RS |
| 🔍 **SEO Optimized** | Meta tags, Open Graph, dan favicon |

---

## 🛠️ Teknologi yang Digunakan

- **React 18** — Library UI utama
- **Vite** — Build tool & development server
- **Tailwind CSS** — Styling utility-first
- **Framer Motion** — Animasi dan transisi
- **Lucide React** — Icon library
- **PWA (Progressive Web App)** — Bisa diinstall di HP

---

## 📁 Struktur Folder

```
rs-budi-asih/
├── public/                  # Aset publik (gambar, logo)
│   ├── RSBA.webp            # Foto gedung RS (hero section)
│   └── RSBA 1.jpg           # Logo RS Budi Asih
├── src/
│   ├── App.jsx              # Komponen utama & halaman
│   ├── main.jsx             # Entry point React
│   ├── index.css            # Global CSS
│   ├── AlurPendaftaran.jsx  # Alur pendaftaran pasien
│   ├── ArtikelKesehatan.jsx # Artikel & modal konten lengkap
│   ├── FAQ.jsx              # Pertanyaan yang sering ditanya
│   ├── JadwalDokter.jsx     # Jadwal dokter spesialis
│   ├── Poliklinik.jsx       # Daftar poliklinik
│   └── Testimoni.jsx        # Testimoni pasien
├── index.html               # HTML utama + SEO meta tags
├── package.json             # Daftar dependensi
├── tailwind.config.js       # Konfigurasi Tailwind CSS
├── vite.config.js           # Konfigurasi Vite & PWA
└── .gitignore               # File yang diabaikan Git
```

---

## 🚀 Cara Menjalankan Lokal

### Prasyarat
Pastikan sudah menginstall:
- [Node.js](https://nodejs.org/) versi 18 ke atas
- npm (sudah termasuk bersama Node.js)

### Langkah-langkah

**1. Clone atau download project ini**
```bash
git clone https://github.com/USERNAME/rs-budi-asih.git
cd rs-budi-asih
```

**2. Install semua dependensi**
```bash
npm install
```

**3. Jalankan development server**
```bash
npm run dev
```

**4. Buka browser** dan akses:
```
http://localhost:5173
```

---

## 📦 Build untuk Production

Untuk membuat versi siap deploy (menghasilkan folder `dist/`):

```bash
npm run build
```

Untuk preview hasil build sebelum deploy:

```bash
npm run preview
```

---

## ☁️ Deploy ke Vercel

### Cara Otomatis (Direkomendasikan)

1. Push project ke **GitHub**
2. Login ke [vercel.com](https://vercel.com) dengan akun GitHub
3. Klik **"Add New Project"** → Pilih repository ini
4. Vercel otomatis mendeteksi Vite → Klik **Deploy**
5. ✅ Website live dalam ~1 menit!

### Pengaturan Build di Vercel
| Setting | Value |
|---|---|
| Framework Preset | `Vite` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

---

## 📞 Kontak RS Budi Asih

| | |
|---|---|
| 📍 **Alamat** | Jl. Mayjend Sungkono No. 79, Trenggalek, Jawa Timur |
| 📱 **WhatsApp / Telepon** | 0813-3631-1425 |
| 📸 **Instagram** | [@rs.budiasihtrenggalek](https://www.instagram.com/rs.budiasihtrenggalek/) |

---

## 📄 Lisensi

© 2025 RS Budi Asih Trenggalek. All rights reserved.
