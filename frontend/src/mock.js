// MOCK DATA ONLY - belum terhubung backend
export const services = [
  {
    id: "cleaning",
    title: "Pembersihan & Perawatan Rutin",
    short: "Jaga kolam selalu jernih tanpa repot.",
    description:
      "Layanan pembersihan rutin untuk villa, rumah pribadi, dan resort di seluruh Bali. Termasuk cek kualitas air, vakum dasar kolam, brushing dinding, dan penambahan chemical yang tepat.",
    badges: ["Villa & Private Pool", "Jadwal fleksibel", "Kontrak bulanan"],
  },
  {
    id: "build",
    title: "Pembuatan Kolam Renang Baru",
    short: "Desain kolam renang tropis khas Bali.",
    description:
      "Dari desain hingga finishing, kami bangun kolam renang yang menyatu dengan arsitektur Bali: batu alam, decking kayu, hingga sistem sirkulasi yang efisien.",
    badges: ["Desain 3D opsional", "Garansi konstruksi", "Material premium"],
  },
  {
    id: "repair",
    title: "Perbaikan & Troubleshooting",
    short: "Atasi kebocoran dan air keruh sampai tuntas.",
    description:
      "Perbaikan kebocoran, masalah pompa & filter, air hijau/keruh, hingga renovasi tampilan kolam lama menjadi seperti baru kembali.",
    badges: ["Survey on-site", "Estimasi transparan", "Teknisi berpengalaman"],
  },
];

export const faqs = [
  {
    question: "Apakah layanan Yudi's Pool mencakup seluruh Bali?",
    answer:
      "Ya, kami melayani area Denpasar, Badung (Canggu, Seminyak, Kuta, Jimbaran), Gianyar (Ubud), dan sekitarnya. Untuk area di luar itu bisa didiskusikan terlebih dahulu.",
  },
  {
    question: "Berapa biaya pembersihan kolam renang rutin?",
    answer:
      "Untuk villa dan rumah pribadi biaya mulai dari kisaran X rupiah per kunjungan, tergantung ukuran kolam, kondisi awal, dan frekuensi kunjungan. Semua harga akan dijelaskan jelas sebelum pekerjaan dimulai.",
  },
  {
    question: "Apakah bisa hanya panggilan sekali, bukan langganan?",
    answer:
      "Bisa. Kami menyediakan layanan sekali datang (one-time service) maupun kontrak bulanan/taunan untuk villa dan resort.",
  },
  {
    question: "Berapa lama proses pembuatan kolam baru?",
    answer:
      "Rata-rata 6–10 minggu dari desain disetujui hingga kolam siap digunakan, tergantung ukuran, desain, dan kondisi lahan.",
  },
];

export const testimonials = [
  {
    name: "Made, Pemilik Villa di Canggu",
    role: "Villa Private Stay",
    quote:
      "Sejak pakai layanan Yudi's Pool, tamu villa kami selalu komentar air kolamnya jernih sekali. Timnya datang tepat waktu dan komunikatif.",
  },
  {
    name: "Sarah, Property Manager Ubud",
    role: "Manajer Properti",
    quote:
      "Kami mengelola beberapa villa di Ubud dan butuh partner yang bisa diandalkan. Yudi's Pool responnya cepat setiap ada masalah di kolam.",
  },
  {
    name: "Bapak Agus",
    role: "Rumah Pribadi di Denpasar",
    quote:
      "Kolam lama kami direnovasi total, sekarang tampak seperti kolam resort. Hasil rapi dan detail, sangat puas.",
  },
];

export const initialContactForm = {
  name: "",
  phone: "",
  whatsapp: "",
  serviceType: "cleaning",
  message: "",
  preferredTime: "",
};
