import React, { useState } from 'react';
import { Camera, ShieldCheck, Loader2, AlertCircle, RotateCcw } from 'lucide-react';

const SkinCheck = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  // FIX #5 (tambahan): State untuk menampilkan error ke user
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
      setError(null);
    }
  };

  // FIX #5: Tombol hapus kini juga mereset state `image` agar file lama tidak ikut terkirim
  const handleHapus = () => {
    setPreview(null);
    setImage(null);
    setResult(null);
    setError(null);
  };

  const uploadToAI = async () => {
    if (!image) return;
    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append('file', image);

    try {
      // FIX #3: Tambah path endpoint yang benar /analyze-skin
      const response = await fetch('https://rizmanxx-rsba-backend.hf.space/analyze-skin', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      // Cek apakah backend mengembalikan error
      if (data.status === 'Error') {
        throw new Error(data.message || 'Analisis gagal di server');
      }

      setResult(data);
    } catch (err) {
      console.error("Gagal menganalisis:", err);
      // FIX #5: Tampilkan pesan error yang informatif ke user
      setError('Tidak dapat terhubung ke server analisis. Pastikan koneksi internet Anda stabil dan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Skrining Visual Awal</h2>
          <p className="text-slate-600 mt-2">Gunakan AI untuk mendeteksi kondisi kulit secara cepat melalui foto.</p>
        </div>

        <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-8 text-center">
          {!preview ? (
            <label className="cursor-pointer flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Camera size={32} />
              </div>
              <span className="text-slate-700 font-medium">Klik untuk unggah foto kondisi kulit</span>
              <span className="text-slate-400 text-sm mt-1">Format: JPG, PNG, WEBP</span>
              <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
            </label>
          ) : (
            <div className="space-y-6">
              <img src={preview} alt="Preview" className="max-h-64 mx-auto rounded-2xl shadow-md object-cover" />
              <div className="flex justify-center gap-4">
                {/* FIX #5: Gunakan handleHapus yang juga mereset state image */}
                <button
                  onClick={handleHapus}
                  className="px-6 py-2 text-slate-600 font-medium flex items-center gap-2 hover:text-red-600 transition-colors"
                >
                  <RotateCcw size={16} /> Hapus
                </button>
                <button 
                  onClick={uploadToAI}
                  disabled={loading}
                  className="bg-blue-600 text-white px-8 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? <Loader2 className="animate-spin" size={20} /> : <ShieldCheck size={20} />}
                  {loading ? 'Menganalisis...' : 'Mulai Analisis AI'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Pesan Error */}
        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3">
            <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {/* Hasil Analisis */}
        {result && (
          <div className="mt-8 p-6 bg-emerald-50 border border-emerald-100 rounded-2xl">
            <h4 className="font-bold text-emerald-800 text-lg mb-2">Hasil Analisis Visual:</h4>
            <div className="flex items-center gap-2 text-emerald-700 mb-4">
              <div className="px-3 py-1 bg-emerald-200 rounded-full text-xs font-bold uppercase">Terdeteksi: {result.analisis}</div>
            </div>
            <p className="text-emerald-900 text-sm italic">"{result.rekomendasi}"</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkinCheck;