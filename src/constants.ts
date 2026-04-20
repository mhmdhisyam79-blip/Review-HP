import type { Review } from './types';

export const REVIEWS: Review[] = [
  {
    id: 's24-ultra',
    brand: 'Samsung',
    model: 'Galaxy S24 Ultra',
    price: 'Rp 21.999.000',
    rating: 4.8,
    image: 'https://picsum.photos/seed/s24ultra/800/600',
    summary: 'HP paling lengkap dari Samsung dengan AI pintar dan kamera zoom yang luar biasa.',
    pros: ['Layar paling terang di kelasnya', 'Fitur AI sangat berguna', 'Kamera Zoom stabil', 'S-Pen masih yang terbaik'],
    cons: ['Harga cukup tinggi', 'Desain sangat besar dan kotak'],
    specs: {
      screen: '6.8" Dynamic AMOLED 2X, 120Hz',
      processor: 'Snapdragon 8 Gen 3 for Galaxy',
      ram: '12GB',
      storage: '256GB / 512GB / 1TB',
      camera: '200MP Main + 50MP Periscope + 10MP Tele + 12MP Ultra',
      battery: '5000mAh, 45W charging'
    },
    publishedAt: '2026-03-15',
    content: 'Samsung Galaxy S24 Ultra adalah puncak dari teknologi smartphone Samsung tahun ini. Dengan integrasi Galaxy AI, HP ini bukan sekadar alat komunikasi, tapi asisten pintar yang beneran bantu produktivitas.'
  },
  {
    id: 'iphone-15-pro',
    brand: 'Apple',
    model: 'iPhone 15 Pro Max',
    price: 'Rp 22.499.000',
    rating: 4.7,
    image: 'https://picsum.photos/seed/iphone15/800/600',
    summary: 'Material Titanium yang ringan dan performa gaming setara konsol.',
    pros: ['Bodi Titanium ringan', 'Tombol Action kustomisasi', 'Performa A17 Pro gila-gilaan', 'Video ProRes berkualitas pro'],
    cons: ['Masih 60Hz di varian standar (tapi Pro ini 120Hz)', 'Lama penuh saat ngecas'],
    specs: {
      screen: '6.7" Super Retina XDR OLED, 120Hz',
      processor: 'A17 Pro (3nm)',
      ram: '8GB',
      storage: '256GB / 512GB / 1TB',
      camera: '48MP Main + 12MP Tele 5x + 12MP Ultra',
      battery: '4441mAh, USB-C'
    },
    publishedAt: '2025-12-10',
    content: 'Pindah ke USB-C adalah game changer buat iPhone. iPhone 15 Pro Max menawarkan keseimbangan terbaik antara performa dan kenyamanan genggam berkat material Titanium.'
  },
  {
    id: 'xiaomi-14',
    brand: 'Xiaomi',
    model: 'Xiaomi 14',
    price: 'Rp 11.999.000',
    rating: 4.6,
    image: 'https://picsum.photos/seed/xiaomi14/800/600',
    summary: 'Flagship compact terbaik dengan lensa Leica yang memukau.',
    pros: ['Ukuran compact enak digenggam', 'Kamera Leica Summilux juara', 'Performa stabil', 'Pengisian daya kencang 90W'],
    cons: ['HyperOS butuh penyesuaian', 'Lensa ultra-wide biasa saja'],
    specs: {
      screen: '6.36" LTPO OLED, 1.5K, 120Hz',
      processor: 'Snapdragon 8 Gen 3',
      ram: '12GB',
      storage: '256GB',
      camera: '50MP Main + 50MP Tele 3.2x + 50MP Ultra',
      battery: '4610mAh, 90W Wired'
    },
    publishedAt: '2026-04-01',
    content: 'Xiaomi 14 membuktikan bahwa HP flagship tidak harus besar. Kolaborasi dengan Leica membawa karakter warna foto yang unik dan artistik.'
  }
];
