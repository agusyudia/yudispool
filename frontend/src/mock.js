// MOCK DATA ONLY - belum terhubung backend
// Data bilingual: id (Bahasa Indonesia) & en (English)

export const servicesByLang = {
  id: [
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
  ],
  en: [
    {
      id: "cleaning",
      title: "Regular Cleaning & Maintenance",
      short: "Keep your pool crystal clear without the hassle.",
      description:
        "Scheduled cleaning service for villas, private homes, and resorts across Bali. Includes water quality check, vacuuming, wall brushing, and proper chemical balancing.",
      badges: ["Villas & Private Pools", "Flexible schedule", "Monthly contracts"],
    },
    {
      id: "build",
      title: "New Pool Construction",
      short: "Tropical Bali-style pool design & build.",
      description:
        "From design to finishing, we build pools that blend with Bali architecture: natural stone, wooden decking, and efficient circulation systems.",
      badges: ["Optional 3D design", "Construction warranty", "Premium materials"],
    },
    {
      id: "repair",
      title: "Repair & Troubleshooting",
      short: "Fix leaks and cloudy water completely.",
      description:
        "Leak fixing, pump & filter issues, green/cloudy water treatment, and full renovation of old pools to look like new.",
      badges: ["On-site survey", "Transparent estimation", "Experienced technicians"],
    },
  ],
};

export const faqsByLang = {
  id: [
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
  ],
  en: [
    {
      question: "Do you cover all areas in Bali?",
      answer:
        "Yes, we serve Denpasar, Badung (Canggu, Seminyak, Kuta, Jimbaran), Gianyar (Ubud), and nearby areas. For locations beyond these, we can discuss case by case.",
    },
    {
      question: "How much is regular pool cleaning?",
      answer:
        "For villas and private homes, pricing starts from a certain amount per visit, depending on pool size, current condition, and visit frequency. All prices are clearly explained before any work starts.",
    },
    {
      question: "Can I order a one-time service only?",
      answer:
        "Yes. We offer one-time service as well as monthly/yearly contracts for villas and resorts.",
    },
    {
      question: "How long does it take to build a new pool?",
      answer:
        "On average 6–10 weeks from design approval until the pool is ready to use, depending on size, design, and land conditions.",
    },
  ],
};

export const testimonialsByLang = {
  id: [
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
  ],
  en: [
    {
      name: "Made, Villa Owner in Canggu",
      role: "Private Villa Stay",
      quote:
        "Since working with Yudi's Pool, our guests always mention how clear the pool water is. The team is punctual and communicative.",
    },
    {
      name: "Sarah, Ubud Property Manager",
      role: "Property Manager",
      quote:
        "We manage several villas in Ubud and need a reliable partner. Yudi's Pool responds quickly whenever there is a pool issue.",
    },
    {
      name: "Mr. Agus",
      role: "Private Home in Denpasar",
      quote:
        "Our old pool was completely renovated and now looks like a resort pool. Very neat and detailed work, we are very satisfied.",
    },
  ],
};

export const initialContactForm = {
  name: "",
  phone: "",
  whatsapp: "",
  serviceType: "cleaning",
  message: "",
  preferredTime: "",
};
