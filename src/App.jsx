import React, { useEffect, useState, useRef } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Stethoscope, 
  Bed, 
  Activity, 
  HeartPulse, 
  Microscope,
  ShieldCheck,
  Menu,
  X,
  ChevronUp,
  Users,
  Award,
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import JadwalDokter from './JadwalDokter.jsx';
import Poliklinik from './Poliklinik.jsx';
import AlurPendaftaran from './AlurPendaftaran.jsx';
import Testimoni from './Testimoni.jsx';
import FAQ from './FAQ.jsx';
import ArtikelKesehatan from './ArtikelKesehatan.jsx';

// =============================================
// HOOK: Animated Counter (berhitung saat scroll)
// =============================================
const useCountUp = (target, duration = 2000, startCounting = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [startCounting, target, duration]);
  return count;
};

// =============================================
// KOMPONEN: Stat Card dengan Counter Animasi
// =============================================
const StatCard = ({ icon, target, suffix, label, delay }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(target, 2000, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center text-white hover:bg-white/20 transition-all duration-300 group"
    >
      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-4xl font-black mb-1">
        {count}{suffix}
      </div>
      <p className="text-blue-100 text-sm font-medium uppercase tracking-wider">{label}</p>
    </motion.div>
  );
};

// =============================================
// KOMPONEN UTAMA
// =============================================
const RSBudiAsihWeb = () => {
  // --- State ---
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [splashDone, setSplashDone] = useState(false);

  // === LOADING SCREEN ===
  useEffect(() => {
    const t = setTimeout(() => setSplashDone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  // === SCROLL TO TOP BUTTON ===
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // === TYPEWRITER EFFECT ===
  const fullText = 'Mengutamakan Kesembuhan dan Kenyamanan Anda.';
  const [displayed, setDisplayed] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (!splashDone) return;
    const startDelay = setTimeout(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        i++;
        setDisplayed(fullText.slice(0, i));
        if (i >= fullText.length) clearInterval(typingInterval);
      }, 60);
      return () => clearInterval(typingInterval);
    }, 500);
    return () => clearTimeout(startDelay);
  }, [splashDone]);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(blink);
  }, []);

  const renderTyped = (text) => {
    const keyword = 'Kesembuhan';
    const idx = text.indexOf(keyword);
    if (idx === -1) return <>{text}</>;
    return (
      <>
        {text.slice(0, idx)}
        <span className="text-blue-700">{text.slice(idx, idx + keyword.length)}</span>
        {text.slice(idx + keyword.length)}
      </>
    );
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Fasilitas', href: '#fasilitas' },
    { label: 'Poliklinik', href: '#poli' },
    { label: 'Jadwal Dokter', href: '#jadwal' },
  ];

  // =============================================
  // RENDER: SPLASH SCREEN
  // =============================================
  if (!splashDone) {
    return (
      <div className="fixed inset-0 bg-blue-700 flex flex-col items-center justify-center z-[9999]">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center gap-6"
        >
          <motion.img
            src="RSBA 1.jpg"
            alt="Logo RS Budi Asih"
            className="h-24 w-auto object-contain bg-white rounded-2xl p-3 shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="text-center">
            <h1 className="text-white font-black text-4xl tracking-tight">RS BUDI ASIH</h1>
            <p className="text-blue-200 text-sm tracking-[0.3em] uppercase mt-1">Trenggalek</p>
          </div>
          {/* Loading bar */}
          <div className="w-48 h-1.5 bg-white/20 rounded-full overflow-hidden mt-4">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </div>
          <p className="text-blue-200 text-xs mt-1">Memuat halaman...</p>
        </motion.div>
      </div>
    );
  }

  // =============================================
  // RENDER: HALAMAN UTAMA
  // =============================================
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">

      {/* ===== SCROLL TO TOP BUTTON ===== */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl shadow-blue-600/30 flex items-center justify-center transition-colors"
            aria-label="Scroll ke atas"
          >
            <ChevronUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ===== WHATSAPP FLOATING BUTTON ===== */}
      <a
        href="https://wa.me/6281336311425?text=Halo%20RS%20Budi%20Asih%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20kesehatan."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-xl shadow-green-500/30 transition-all duration-300 hover:scale-105 group"
        aria-label="Chat WhatsApp"
      >
        {/* Ikon WhatsApp SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.845L.057 23.286a.75.75 0 0 0 .918.919l5.44-1.471A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.953-1.354l-.355-.21-3.676.994.994-3.595-.229-.372A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
        </svg>
        <span className="text-sm font-bold pr-1">Chat WA</span>
      </a>

      {/* ===== NAVBAR ===== */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="RSBA 1.jpg" alt="Logo RS Budi Asih" className="h-12 w-auto object-contain" />
              <div>
                <h1 className="text-blue-800 font-bold text-xl leading-none">RS BUDI ASIH</h1>
                <p className="text-slate-500 text-[10px] tracking-widest uppercase">Trenggalek</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 font-medium text-slate-600">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="hover:text-blue-700 transition relative group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <a href="tel:081336311425">
                <button className="bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-red-700 transition shadow-lg shadow-red-200">
                  <Phone size={16} /> Gawat Darurat
                </button>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition"
                  >
                    {link.label}
                  </a>
                ))}
                <a href="tel:03557911XX" onClick={() => setMenuOpen(false)}>
                  <button className="w-full mt-2 bg-red-600 text-white px-5 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition">
                    <Phone size={16} /> Gawat Darurat
                  </button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section id="beranda" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <motion.div className="flex-1 text-center lg:text-left" {...fadeInUp}>
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 underline decoration-blue-200">
              Pelayanan Kesehatan Terpercaya
            </span>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              {renderTyped(displayed)}
              <span
                className="inline-block w-[3px] h-[0.9em] bg-blue-600 ml-1 align-middle"
                style={{ opacity: cursorVisible ? 1 : 0, transition: 'opacity 0.1s' }}
              />
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0">
              Rumah Sakit Budi Asih hadir dengan fasilitas modern dan tenaga medis profesional 
              untuk memberikan pelayanan terbaik bagi warga Trenggalek dan sekitarnya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#jadwal" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 inline-block text-center">
                Lihat Jadwal Dokter
              </a>
              <a
                href="https://wa.me/6281336311425?text=Halo%20RS%20Budi%20Asih%2C%20saya%20ingin%20konsultasi%20online."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition text-center"
              >
                Konsultasi Online
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full aspect-[4/3] bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
              <img src="RSBA.webp" alt="Gedung RS Budi Asih" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Terakreditasi</p>
                  <p className="text-lg font-bold text-slate-800">Paripurna</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== KEUNGGULAN ===== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Clock className="text-blue-600" />, title: "Layanan 24 Jam", desc: "UGD dan Farmasi siap melayani Anda setiap saat tanpa henti." },
              { icon: <Stethoscope className="text-blue-600" />, title: "Dokter Spesialis", desc: "Didukung oleh jajaran dokter spesialis yang ahli di bidangnya." },
              { icon: <HeartPulse className="text-blue-600" />, title: "Peralatan Modern", desc: "Teknologi medis terkini untuk diagnosa yang lebih akurat." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATISTIK COUNTER ===== */}
      <section className="py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 relative overflow-hidden">
        {/* Dekorasi latar */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-blue-200 uppercase tracking-widest text-sm font-bold mb-3">Dipercaya Ribuan Pasien</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">RS Budi Asih dalam Angka</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard icon={<Users size={28} className="text-white" />} target={15000} suffix="+" label="Pasien / Tahun" delay={0} />
            <StatCard icon={<Stethoscope size={28} className="text-white" />} target={20} suffix="+" label="Dokter Spesialis" delay={0.1} />
            <StatCard icon={<Award size={28} className="text-white" />} target={15} suffix="+" label="Tahun Berdiri" delay={0.2} />
            <StatCard icon={<Calendar size={28} className="text-white" />} target={365} suffix="" label="Hari Beroperasi" delay={0.3} />
          </div>
        </div>
      </section>

      {/* ===== FASILITAS UNGGULAN ===== */}
      <section id="fasilitas" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Fasilitas & Layanan Medis</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Kami menyediakan berbagai kelas perawatan dan fasilitas penunjang medis yang lengkap untuk kenyamanan Anda.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "VVIP & VIP Melati", icon: <Bed />, tag: "Rawat Inap" },
              { name: "Unit Gawat Darurat", icon: <Activity />, tag: "24 Jam" },
              { name: "Laboratorium Klinis", icon: <Microscope />, tag: "Penunjang" },
              { name: "Ruang Bersalin (VK)", icon: <HeartPulse />, tag: "Kebidanan" },
              { name: "High Care Unit (HCU)", icon: <Activity />, tag: "Intensif" },
              { name: "Fisioterapi", icon: <Activity />, tag: "Rehabilitasi" },
              { name: "Radiologi & USG", icon: <Microscope />, tag: "Diagnostik" },
              { name: "Apotek / Farmasi", icon: <Clock />, tag: "24 Jam" },
            ].map((fac, i) => (
              <motion.div
                key={i}
                className="group p-6 rounded-2xl border border-slate-100 hover:bg-blue-700 hover:text-white transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              >
                <div className="text-blue-600 group-hover:text-blue-100 mb-4 transition-colors">{fac.icon}</div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-200">{fac.tag}</span>
                <h4 className="text-lg font-bold mt-1">{fac.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Poliklinik />
      <JadwalDokter />
      <AlurPendaftaran />
      <Testimoni />
      <FAQ />
      <ArtikelKesehatan />

      {/* ===== FOOTER ===== */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img src="RSBA 1.jpg" alt="Logo RS Budi Asih" className="h-12 w-auto object-contain bg-white rounded p-1" />
                <h3 className="text-xl font-bold">RS Budi Asih</h3>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Menjadi rumah sakit pilihan utama masyarakat Trenggalek dengan mengedepankan profesionalisme dan kasih sayang.
              </p>
              {/* Sosial Media */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/rs.budiasihtrenggalek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Instagram RS Budi Asih"
                >
                  {/* Instagram SVG Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
                <div>
                  <p className="text-white text-xs font-semibold">@rs.budiasihtrenggalek</p>
                  <p className="text-slate-500 text-[10px]">Ikuti kami di Instagram</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Layanan Populer</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="hover:text-white cursor-pointer transition">Poli Anak</li>
                <li className="hover:text-white cursor-pointer transition">Poli Kebidanan & Kandungan</li>
                <li className="hover:text-white cursor-pointer transition">Poli Penyakit Dalam</li>
                <li className="hover:text-white cursor-pointer transition">Check Up Kesehatan</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Kontak Kami</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-blue-500 shrink-0" />
                  <span>Jl. Mayjend Sungkono No. 79, Trenggalek, Jawa Timur</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-blue-500 shrink-0" />
                  <span>0813-3631-1425</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Lokasi</h4>
              <div className="w-full h-40 bg-slate-800 rounded-xl overflow-hidden grayscale contrast-125 opacity-50 hover:opacity-100 hover:grayscale-0 transition duration-500">
                <iframe
                  src="https://maps.google.com/maps?q=RS%20Budi%20Asih%20Trenggalek&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} RS Budi Asih Trenggalek. All rights reserved.</p>
            <a
              href="https://www.instagram.com/rs.budiasihtrenggalek/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-pink-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
              @rs.budiasihtrenggalek
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RSBudiAsihWeb;