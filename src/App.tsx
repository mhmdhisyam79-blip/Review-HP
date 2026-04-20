import { useState, useMemo, type ReactNode } from 'react';
import { 
  Smartphone, 
  Search, 
  Star, 
  Cpu, 
  Camera, 
  Battery, 
  TrendingUp, 
  Filter,
  ArrowRight,
  ChevronLeft,
  Calendar,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS } from './constants';
import type { Review } from './types';

export default function App() {
  const [selectedReviewId, setSelectedReviewId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBrand, setFilterBrand] = useState<string | 'All'>('All');

  const selectedReview = useMemo(() => 
    REVIEWS.find(r => r.id === selectedReviewId), 
  [selectedReviewId]);

  const filteredReviews = useMemo(() => {
    return REVIEWS.filter(r => {
      const matchSearch = r.model.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          r.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchBrand = filterBrand === 'All' || r.brand === filterBrand;
      return matchSearch && matchBrand;
    });
  }, [searchQuery, filterBrand]);

  const brands = useMemo(() => 
    ['All', ...new Set(REVIEWS.map(r => r.brand))], 
  []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      {/* Header Navigation */}
      <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-50 flex items-center shrink-0">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <div 
              className="text-2xl font-bold tracking-tighter text-slate-900 cursor-pointer group"
              onClick={() => setSelectedReviewId(null)}
            >
              SOBAT<span className="text-brand group-hover:opacity-80">HP</span>
            </div>
            <nav className="hidden md:flex gap-6 text-sm font-semibold text-slate-600">
              <button 
                className={`py-5 border-b-2 transition-all ${!selectedReviewId ? 'text-brand border-brand' : 'border-transparent hover:text-slate-900'}`}
                onClick={() => setSelectedReviewId(null)}
              >
                Terbaru
              </button>
              <button className="border-transparent border-b-2 hover:text-slate-900 py-5 transition-all">Smartphone</button>
              <button className="border-transparent border-b-2 hover:text-slate-900 py-5 transition-all">Trending</button>
            </nav>
          </div>

          <div className="flex items-center gap-4 flex-1 justify-end">
            <div className="hidden sm:block relative max-w-xs w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Cari HP..." 
                className="bg-slate-100 border-none rounded-full px-10 py-2 text-sm w-full focus:ring-2 focus:ring-brand focus:bg-white transition-all outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors">
              Masuk
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-8 overflow-hidden">
        <AnimatePresence mode="wait">
          {!selectedReview ? (
            <motion.div 
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col lg:flex-row gap-8"
            >
              {/* Featured / Hero Review */}
              <section 
                className="lg:flex-[2] bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl transition-all duration-500"
                onClick={() => setSelectedReviewId(REVIEWS[0].id)}
              >
                <div className="relative aspect-video lg:aspect-auto lg:h-[400px] overflow-hidden">
                  <img 
                    src={REVIEWS[0].image} 
                    alt={REVIEWS[0].model}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-8 text-white">
                    <span className="bg-brand text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded w-max mb-3 shadow-lg shadow-brand/40">
                      Pilihan Editor
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight leading-tight">
                      Review {REVIEWS[0].brand} {REVIEWS[0].model}: {REVIEWS[0].summary}
                    </h1>
                    <div className="flex items-center gap-4 text-xs font-medium opacity-80">
                      <span>Oleh Tim SobatHP</span>
                      <span>•</span>
                      <span>{new Date(REVIEWS[0].publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-black text-slate-900 leading-none">{REVIEWS[0].rating}</span>
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Rating</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Kesimpulan Singkat</h2>
                    <p className="text-slate-600 leading-relaxed mb-8">
                      {REVIEWS[0].content.substring(0, 200)}...
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Chipset</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 line-clamp-1">{REVIEWS[0].specs.processor}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Layar</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 line-clamp-1">{REVIEWS[0].specs.screen}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Baterai</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 line-clamp-1">{REVIEWS[0].specs.battery}</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sidebar: Sub-Reviews */}
              <aside className="lg:flex-1 flex flex-col gap-6">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center justify-between">
                  Review Terbaru
                  <div className="h-px bg-slate-200 flex-1 ml-4" />
                </div>
                
                <div className="flex flex-col gap-4">
                  {filteredReviews.slice(1).map((review) => (
                    <motion.div
                      key={review.id}
                      whileHover={{ x: 4 }}
                      onClick={() => setSelectedReviewId(review.id)}
                      className="bg-white p-4 rounded-xl border border-slate-200 flex gap-4 hover:shadow-md transition-all cursor-pointer group"
                    >
                      <div className="w-24 h-24 bg-slate-100 rounded-lg shrink-0 overflow-hidden">
                        <img 
                          src={review.image} 
                          alt={review.model} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex flex-col justify-between py-1">
                        <div>
                          <h3 className="font-bold text-slate-900 group-hover:text-brand transition-colors line-clamp-2 text-sm leading-tight">
                            {review.brand} {review.model}: {review.summary}
                          </h3>
                          <div className="flex items-center gap-1 mt-1 text-brand font-bold text-xs italic">
                            {review.rating} / 10
                          </div>
                        </div>
                        <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                          {new Date(review.publishedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Comparison CTA */}
                <div className="mt-auto bg-slate-900 rounded-xl p-6 text-white text-center shadow-xl overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                  <h4 className="font-bold mb-2 relative z-10">Bandingkan HP</h4>
                  <p className="text-[11px] text-slate-400 mb-4 relative z-10 leading-relaxed">
                    Pilih 2 HP dan lihat mana yang terbaik untuk Anda sesuai budget.
                  </p>
                  <button className="w-full py-2 bg-brand text-white hover:bg-white hover:text-brand transition-all rounded-lg font-bold text-sm relative z-10">
                    Mulai Bandingkan
                  </button>
                </div>
              </aside>
            </motion.div>
          ) : (
            /* Review Detail View */
            <motion.div 
              key="detail"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-8"
            >
              <button 
                onClick={() => setSelectedReviewId(null)}
                className="flex items-center gap-2 text-slate-500 hover:text-brand font-bold text-xs uppercase tracking-widest transition-all group"
              >
                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" size={16} /> 
                Kembali
              </button>

              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xl">
                <div className="relative h-[300px] sm:h-[450px]">
                  <img 
                    src={selectedReview.image} 
                    alt={selectedReview.model}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent flex flex-col justify-end p-8 sm:p-12 text-white">
                    <div className="text-brand text-xs font-black uppercase tracking-[0.3em] mb-4">Ulasan Mendalam</div>
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-4">{selectedReview.model}</h1>
                    <div className="flex flex-wrap items-center gap-6">
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                        <Star className="text-yellow-400 fill-yellow-400" size={20} />
                        <span className="font-black text-xl">{selectedReview.rating}</span>
                        <span className="text-[10px] text-white/60 font-bold uppercase tracking-tighter mt-1">/ 10</span>
                      </div>
                      <div className="text-2xl font-light tracking-tight italic opacity-80">{selectedReview.price}</div>
                    </div>
                  </div>
                </div>

                <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2 space-y-10">
                    <div className="prose prose-slate max-w-none">
                      <h2 className="text-2xl font-bold mb-6 text-slate-900 border-l-4 border-brand pl-4">Analisis Kami</h2>
                      <p className="text-slate-600 text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-brand">
                        {selectedReview.content}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-green-200 transition-colors group">
                        <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                          <CheckCircle2 size={24} />
                        </div>
                        <h3 className="text-slate-900 font-bold mb-4 uppercase tracking-widest text-[10px]">Kelebihan Utama</h3>
                        <ul className="space-y-3">
                          {selectedReview.pros.map((pro, i) => (
                            <li key={i} className="text-slate-600 text-sm flex items-start gap-3">
                              <span className="text-green-500 mt-0.5">•</span> {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-red-200 transition-colors group">
                        <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                          <XCircle size={24} />
                        </div>
                        <h3 className="text-slate-900 font-bold mb-4 uppercase tracking-widest text-[10px]">Kekurangan</h3>
                        <ul className="space-y-3">
                          {selectedReview.cons.map((con, i) => (
                            <li key={i} className="text-slate-600 text-sm flex items-start gap-3">
                              <span className="text-red-400 mt-0.5">•</span> {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-slate-900 rounded-2xl p-8 text-white sticky top-24 shadow-2xl">
                      <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                        <span className="w-8 h-px bg-slate-700" /> Spesifikasi Teknik
                      </h3>
                      <div className="space-y-8">
                        <SpecItemDark icon={<Smartphone size={18} />} label="Layar Utama" value={selectedReview.specs.screen} />
                        <SpecItemDark icon={<Cpu size={18} />} label="Prosesor" value={selectedReview.specs.processor} />
                        <SpecItemDark icon={<TrendingUp size={18} />} label="RAM / ROM" value={`${selectedReview.specs.ram} / ${selectedReview.specs.storage}`} />
                        <SpecItemDark icon={<Camera size={18} />} label="Modul Kamera" value={selectedReview.specs.camera} />
                        <SpecItemDark icon={<Battery size={18} />} label="Baterai & Charge" value={selectedReview.specs.battery} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="h-12 bg-slate-900 text-slate-400 text-[10px] flex items-center justify-between px-4 sm:px-8 shrink-0 shrink-0">
        <div className="flex gap-4 uppercase font-bold tracking-widest overflow-hidden whitespace-nowrap">
          <span className="hidden sm:inline">© 2026 SOBATHP INDONESIA</span>
          <a href="#" className="hover:text-white transition-colors">Privasi</a>
          <a href="#" className="hover:text-white transition-colors">Kontak</a>
          <a href="#" className="hover:text-white transition-colors">Iklan</a>
        </div>
        <div className="flex items-center gap-4 uppercase font-bold tracking-widest">
          <span className="hidden md:inline shrink-0">Gadget / Tech / Reviews</span>
          <div className="flex gap-4">
            <TrendingUp size={14} className="hover:text-brand cursor-pointer transition-colors" />
            <Search size={14} className="hover:text-brand cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function SpecItemDark({ icon, label, value }: { icon: ReactNode, label: string, value: string }) {
  return (
    <div className="flex gap-4 items-start group">
      <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-brand group-hover:border-brand/40 transition-all">
        {icon}
      </div>
      <div>
        <div className="text-[9px] uppercase font-bold text-slate-500 tracking-widest mb-1">{label}</div>
        <div className="text-xs font-bold text-white leading-tight group-hover:text-brand transition-colors">{value}</div>
      </div>
    </div>
  );
}


