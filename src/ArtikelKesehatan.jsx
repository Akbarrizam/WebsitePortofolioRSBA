import React, { useState } from 'react';
import { Calendar, User, ArrowRight, X, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ArtikelKesehatan = () => {
  const [artikelDipilih, setArtikelDipilih] = useState(null);

  const dataArtikel = [
    {
      id: 1,
      kategori: "Kesehatan Umum",
      judul: "Waspada Gejala Demam Berdarah (DBD) di Musim Hujan",
      ringkasan: "Kenali fase kritis demam berdarah dan langkah pencegahan 3M Plus untuk melindungi keluarga Anda dari gigitan nyamuk Aedes aegypti.",
      tanggal: "15 April 2026",
      penulis: "dr. Agus Dahana, Sp.PD",
      waktuBaca: "5 menit",
      gambar: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=300&fit=crop&auto=format",
      isi: [
        {
          subjudul: "Apa itu Demam Berdarah Dengue (DBD)?",
          paragraf: "Demam Berdarah Dengue (DBD) adalah penyakit infeksi yang disebabkan oleh virus dengue dan ditularkan melalui gigitan nyamuk Aedes aegypti betina. Penyakit ini menjadi salah satu masalah kesehatan utama di Indonesia, terutama saat musim hujan ketika genangan air menjadi tempat berkembang biak nyamuk."
        },
        {
          subjudul: "Gejala yang Perlu Diwaspadai",
          paragraf: "Gejala DBD biasanya muncul 4–10 hari setelah gigitan nyamuk. Waspadai tanda-tanda berikut: demam tinggi mendadak hingga 40°C yang berlangsung 2–7 hari, nyeri kepala hebat terutama di belakang mata, nyeri sendi dan otot, mual dan muntah, munculnya ruam kemerahan di kulit, serta perdarahan ringan seperti mimisan atau gusi berdarah."
        },
        {
          subjudul: "Fase Kritis yang Harus Dipahami",
          paragraf: "DBD memiliki 3 fase: Fase Demam (hari 1–3), Fase Kritis (hari 4–5) saat demam turun namun trombosit terus menurun — ini fase paling berbahaya, dan Fase Pemulihan (hari 6–7). Jangan salah mengira penurunan demam sebagai tanda kesembuhan. Segera ke dokter jika demam turun namun kondisi memburuk."
        },
        {
          subjudul: "Pencegahan 3M Plus",
          paragraf: "Langkah pencegahan yang terbukti efektif: (1) Menguras tempat penampungan air minimal seminggu sekali, (2) Menutup rapat tempat penyimpanan air, (3) Mendaur ulang barang bekas yang bisa menampung air. Plus: gunakan lotion anti nyamuk, pasang kelambu, dan pelihara ikan pemakan jentik di kolam."
        },
        {
          subjudul: "Kapan Harus ke Dokter?",
          paragraf: "Segera ke Unit Gawat Darurat RS Budi Asih jika Anda atau anggota keluarga mengalami demam tinggi lebih dari 2 hari, muntah terus-menerus, nyeri perut hebat, perdarahan dari hidung/gusi, atau penurunan kesadaran. Penanganan dini sangat menentukan kesembuhan."
        }
      ]
    },
    {
      id: 2,
      kategori: "Gizi & Nutrisi",
      judul: "Panduan Pola Makan Sehat untuk Menjaga Gula Darah",
      ringkasan: "Mengatur asupan karbohidrat dan memilih makanan kaya serat sangat penting bagi penderita diabetes maupun untuk pencegahan sejak dini.",
      tanggal: "12 April 2026",
      penulis: "Ahli Gizi RSBA",
      waktuBaca: "4 menit",
      gambar: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=300&fit=crop&auto=format",
      isi: [
        {
          subjudul: "Mengapa Pola Makan Penting bagi Gula Darah?",
          paragraf: "Kadar gula darah yang tidak terkontrol dalam jangka panjang dapat menyebabkan komplikasi serius seperti kerusakan ginjal, mata, dan saraf. Kabar baiknya, pola makan yang tepat adalah senjata utama untuk mengelola dan bahkan mencegah diabetes tipe 2."
        },
        {
          subjudul: "Pilih Karbohidrat yang Tepat",
          paragraf: "Bukan berarti Anda harus menghindari karbohidrat sepenuhnya. Pilihlah karbohidrat kompleks seperti nasi merah, roti gandum utuh, oatmeal, dan ubi jalar. Makanan ini dicerna lebih lambat sehingga tidak menyebabkan lonjakan gula darah yang drastis."
        },
        {
          subjudul: "Perbanyak Serat",
          paragraf: "Serat larut yang ditemukan pada sayuran hijau, kacang-kacangan, apel, dan pepaya terbukti membantu memperlambat penyerapan gula ke dalam darah. Targetkan konsumsi serat minimal 25–30 gram per hari untuk hasil optimal."
        },
        {
          subjudul: "Batasi Makanan Ini",
          paragraf: "Hindari atau batasi: minuman manis (teh kemasan, jus buah kemasan, soda), makanan olahan tinggi gula (kue, biskuit, permen), nasi putih berlebihan, dan makanan berminyak. Ganti dengan air putih, buah segar, dan makanan yang dipanggang atau dikukus."
        },
        {
          subjudul: "Tips Praktis Sehari-hari",
          paragraf: "Makan dengan porsi kecil namun sering (5–6 kali sehari) lebih baik daripada 3 kali makan besar. Jangan melewatkan sarapan. Gunakan metode 'Piring Sehat': ½ piring sayuran, ¼ protein (ikan/ayam/tahu), ¼ karbohidrat kompleks. Konsultasikan selalu dengan ahli gizi RS Budi Asih untuk program diet personal."
        }
      ]
    },
    {
      id: 3,
      kategori: "Tumbuh Kembang",
      judul: "Pentingnya Imunisasi Dasar Lengkap Bagi Anak",
      ringkasan: "Jadwal imunisasi dasar yang wajib diberikan pada tahun pertama kehidupan anak untuk membangun sistem kekebalan tubuh yang optimal.",
      tanggal: "08 April 2026",
      penulis: "dr. Dana Sumanti, Sp.A",
      waktuBaca: "5 menit",
      gambar: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop&auto=format",
      isi: [
        {
          subjudul: "Mengapa Imunisasi Itu Penting?",
          paragraf: "Imunisasi adalah cara paling efektif dan aman untuk melindungi anak dari penyakit berbahaya yang dapat mengancam jiwa. Vaksin bekerja dengan merangsang sistem kekebalan tubuh anak untuk mengenali dan melawan penyakit tertentu tanpa anak harus sakit terlebih dahulu."
        },
        {
          subjudul: "Jadwal Imunisasi Dasar (0–12 Bulan)",
          paragraf: "Jadwal resmi dari Kementerian Kesehatan RI: Lahir: Hepatitis B & Polio 0. Usia 1 bulan: BCG (TBC) & Polio 1. Usia 2 bulan: DPT-HB-Hib 1 & Polio 2. Usia 3 bulan: DPT-HB-Hib 2 & Polio 3. Usia 4 bulan: DPT-HB-Hib 3 & Polio 4. Usia 9 bulan: Campak. Usia 12 bulan: PCV (Pneumokokus)."
        },
        {
          subjudul: "Efek Samping yang Normal",
          paragraf: "Wajar jika anak mengalami demam ringan, kemerahan, atau bengkak di area suntikan selama 1–2 hari setelah imunisasi. Ini tanda sistem imun sedang bekerja. Kompres dengan air hangat dan berikan parasetamol sesuai dosis jika demam. Segera konsultasi ke dokter jika demam sangat tinggi (>39°C) atau anak tampak sangat tidak nyaman."
        },
        {
          subjudul: "Imunisasi Tambahan yang Direkomendasikan",
          paragraf: "Selain imunisasi wajib, dr. Dana Sumanti, Sp.A merekomendasikan vaksin tambahan seperti: Rotavirus (mencegah diare berat), Varisela (cacar air), Influenza (flu) setiap tahun, Tifoid, dan MMR lanjutan. Diskusikan dengan dokter anak Anda untuk program imunisasi yang lengkap."
        },
        {
          subjudul: "Layanan Imunisasi di RS Budi Asih",
          paragraf: "Poli Anak RS Budi Asih menyediakan layanan imunisasi dasar dan lanjutan setiap hari Senin, Rabu, dan Jumat pukul 09.00–13.00 WIB bersama dr. Dana Sumanti, Sp.A. Bawa buku KIA anak Anda setiap kunjungan untuk pencatatan riwayat imunisasi yang lengkap."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Pusat Edukasi</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">Berita & Artikel Kesehatan</h2>
            <p className="text-slate-600">
              Dapatkan informasi medis terpercaya dan tips kesehatan terkini yang ditulis langsung oleh tenaga ahli medis kami.
            </p>
          </div>
        </div>

        {/* Grid Artikel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataArtikel.map((artikel) => (
            <div key={artikel.id} className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer flex flex-col">
              
              {/* Gambar Thumbnail */}
              <div className="w-full h-48 bg-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={artikel.gambar}
                  alt={artikel.judul}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.classList.add('bg-gradient-to-br', 'from-blue-100', 'to-blue-200');
                  }}
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-700 shadow-sm">
                  {artikel.kategori}
                </div>
              </div>

              {/* Konten Artikel */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{artikel.tanggal}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>{artikel.waktuBaca}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                  {artikel.judul}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                  {artikel.ringkasan}
                </p>

                <div className="flex items-center justify-between mt-auto border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <User size={13} />
                    <span>{artikel.penulis}</span>
                  </div>
                  <button
                    onClick={() => setArtikelDipilih(artikel)}
                    className="flex items-center text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors group/btn"
                  >
                    Baca Selengkapnya
                    <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MODAL ARTIKEL ===== */}
      <AnimatePresence>
        {artikelDipilih && (
          <>
            {/* Overlay gelap */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setArtikelDipilih(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Panel Artikel */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 60, scale: 0.97 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="fixed inset-x-4 top-8 bottom-8 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-50 bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header Modal */}
              <div className="relative flex-shrink-0">
                <img
                  src={artikelDipilih.gambar}
                  alt={artikelDipilih.judul}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <button
                  onClick={() => setArtikelDipilih(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-4 left-5 right-5">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {artikelDipilih.kategori}
                  </span>
                  <h2 className="text-white font-extrabold text-xl mt-2 leading-snug">
                    {artikelDipilih.judul}
                  </h2>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-5 px-6 py-4 border-b border-slate-100 text-sm text-slate-500 flex-shrink-0">
                <div className="flex items-center gap-1.5">
                  <User size={15} className="text-blue-500" />
                  <span className="font-medium text-slate-700">{artikelDipilih.penulis}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={15} />
                  <span>{artikelDipilih.tanggal}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={15} />
                  <span>{artikelDipilih.waktuBaca}</span>
                </div>
              </div>

              {/* Isi Artikel — scrollable */}
              <div className="overflow-y-auto flex-1 px-6 py-6 space-y-6">
                {artikelDipilih.isi.map((bagian, i) => (
                  <div key={i}>
                    <h3 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                      <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {bagian.subjudul}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm pl-8">
                      {bagian.paragraf}
                    </p>
                  </div>
                ))}

                {/* CTA di bawah artikel */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mt-4">
                  <p className="text-blue-900 font-bold text-sm mb-1">Butuh konsultasi lebih lanjut?</p>
                  <p className="text-blue-700 text-xs mb-3">Hubungi dokter spesialis kami melalui WhatsApp atau kunjungi RS Budi Asih.</p>
                  <a
                    href="https://wa.me/6281336311425?text=Halo%20RS%20Budi%20Asih%2C%20saya%20ingin%20konsultasi."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition"
                  >
                    Chat WhatsApp Sekarang
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ArtikelKesehatan;