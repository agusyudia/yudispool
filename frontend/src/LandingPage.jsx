import React, { useMemo, useState } from "react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { toast } from "./components/ui/sonner";
import { servicesByLang, faqsByLang, testimonialsByLang, initialContactForm } from "./mock";
import { Sparkles, Phone, MapPin, Waves, Droplets, Leaf, CheckCircle2 } from "lucide-react";

export default function LandingPage() {
  const [lang, setLang] = useState("id");
  const [activeServiceId, setActiveServiceId] = useState("cleaning");
  const [form, setForm] = useState(initialContactForm);

  const services = servicesByLang[lang];
  const faqs = faqsByLang[lang];
  const testimonials = testimonialsByLang[lang];

  const activeService = useMemo(
    () => services.find((s) => s.id === activeServiceId) ?? services[0],
    [services, activeServiceId]
  );

  const handleChange = (field) => (eOrValue) => {
    const value = typeof eOrValue === "string" ? eOrValue : eOrValue.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // MOCK ONLY – belum terkoneksi backend
    toast("Permintaan terkirim (mock)", {
      description: "Tim Yudi's Pool akan menghubungi Anda segera.",
    });
    console.log("FORM MOCK SUBMIT", form);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="App">
      <div className="app-shell">
        {/* Header */}
        <header className="flex items-center justify-between gap-4 mb-10 sticky top-4 z-30 nav-blur px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center shadow-lg">
              <Waves className="text-sky-950" size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-sky-900/70">Yudi's Pool</p>
              <p className="text-sm font-medium text-sky-950">Bali Pool Specialist</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-xs text-sky-950/80">
            <button className="nav-link" onClick={() => scrollToSection("services")}>
              {lang === "id" ? "Layanan" : "Services"}
            </button>
            <button className="nav-link" onClick={() => scrollToSection("testimonials")}>
              {lang === "id" ? "Testimoni" : "Testimonials"}
            </button>
            <button className="nav-link" onClick={() => scrollToSection("faq")}>
              FAQ
            </button>
            <button className="nav-link" onClick={() => scrollToSection("contact")}>
              {lang === "id" ? "Kontak" : "Contact"}
            </button>
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden sm:inline-flex text-[11px] px-3 py-1 rounded-full border border-sky-200 bg-white/80 text-sky-900 hover:bg-sky-50"
              onClick={() => setLang((prev) => (prev === "id" ? "en" : "id"))}
            >
              <span className={lang === "id" ? "font-semibold" : "opacity-70"}>ID</span>
              <span className="mx-1 text-sky-900/50">/</span>
              <span className={lang === "en" ? "font-semibold" : "opacity-70"}>EN</span>
            </button>
            <Button
              size="sm"
              className="bg-sky-900 text-sky-50 hover:bg-sky-800 shadow-md hidden sm:inline-flex"
              onClick={() => scrollToSection("contact")}
            >
              <Phone size={16} />
              {lang === "id" ? "Konsultasi Gratis" : "Free Consultation"}
            </Button>
          </div>
        </header>

        {/* Hero */}
        <main>
          <section className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-8 items-stretch mb-16 mt-6">
            <div className="tropical-card hero-glass p-7 lg:p-9 relative overflow-hidden">
              <div className="floating-chip chip-1">
                <div className="flex items-center gap-2 text-xs text-sky-900">
                  <Sparkles size={14} className="text-amber-500" />
                  <span>Kolam jernih, tamu senang</span>
                </div>
              </div>

              <div className="floating-chip chip-2">
                <div className="flex items-center gap-2 text-xs text-sky-900">
                  <Leaf size={14} className="text-emerald-600" />
                  <span>Chemical aman & seimbang</span>
                </div>
              </div>

              <p className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 text-sky-900 mb-4 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {lang === "id" ? "Spesialis Kolam Renang Bali" : "Bali Pool Specialist"}
              </p>

              <h1 className="hero-title text-[28px] sm:text-[32px] lg:text-[38px] leading-tight text-sky-950 mb-4">
                {lang === "id"
                  ? "Jasa Pembersihan, Pembuatan & Perbaikan Kolam Renang"
                  : "Pool Cleaning, Construction & Repair Services"}
                <span className="block hero-highlight">
                  {lang === "id" ? "khusus wilayah Bali." : "for Bali area only."}
                </span>
              </h1>

              <p className="text-sm sm:text-base text-sky-900/80 mb-6 max-w-xl">
                {lang === "id"
                  ? "Yudi's Pool membantu pemilik villa, resort, dan rumah pribadi di Bali untuk memiliki kolam renang yang selalu jernih, aman, dan estetik. Dari desain baru, perawatan rutin, hingga perbaikan kebocoran."
                  : "Yudi's Pool helps villa, resort, and private homeowners in Bali keep their pools crystal clear, safe, and beautiful – from new designs and regular maintenance to leak repairs."}
              </p>

              <div className="flex flex-wrap gap-3 mb-7">
                <Button
                  className="bg-sky-900 text-sky-50 hover:bg-sky-800 shadow-md text-sm px-5"
                  onClick={() => scrollToSection("contact")}
                >
                  {lang === "id" ? "Pesan Survey Lokasi" : "Book On-site Survey"}
                </Button>
                <Button
                  variant="outline"
                  className="border-sky-800/40 text-sky-950 hover:bg-sky-50 text-sm px-5"
                  onClick={() => scrollToSection("services")}
                >
                  {lang === "id" ? "Lihat Paket Layanan" : "See Service Packages"}
                </Button>
              </div>

              <dl className="grid grid-cols-3 gap-4 text-xs sm:text-sm text-sky-900/80">
                <div>
                  <dt className="font-semibold text-sky-950">100+ kolam terawat</dt>
                  <dd>Villa & rumah pribadi di Bali.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-sky-950">Respon cepat</dt>
                  <dd>CS via WhatsApp & telepon.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-sky-950">Jaminan puas</dt>
                  <dd>Foto before-after tiap kunjungan.</dd>
                </div>
              </dl>
            </div>

            {/* Side card */}
            <aside className="tropical-card p-6 flex flex-col justify-between bg-gradient-to-b from-sky-900 to-sky-950 text-sky-50 relative overflow-hidden">
              <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
                backgroundImage:
                  "radial-gradient(circle at 10% 20%, rgba(148, 227, 255, 0.35) 0, transparent 50%), radial-gradient(circle at 80% 80%, rgba(129, 230, 217, 0.4) 0, transparent 50%)",
              }} />
              <div className="relative z-10">
                <p className="text-[11px] uppercase tracking-[0.24em] text-sky-100 mb-3">Layanan Cepat Bali</p>
                <h2 className="text-lg font-semibold text-sky-50 mb-2">Butuh perbaikan kolam segera?</h2>
                <p className="text-xs text-sky-100 mb-4">
                  Air hijau, pompa rusak, atau kebocoran mendadak? Kami siap survey dan bantu solusi.
                </p>
                <ul className="space-y-2 text-xs text-sky-50/95">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="mt-[2px] text-emerald-300" />
                    <span>Jadwal fleksibel menyesuaikan tamu villa.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="mt-[2px] text-emerald-300" />
                    <span>Laporan singkat via WhatsApp setelah pekerjaan.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="mt-[2px] text-emerald-300" />
                    <span>Harga disampaikan jelas sebelum mulai.</span>
                  </li>
                </ul>
              </div>
              <div className="relative z-10 mt-5 flex flex-col gap-2 text-xs text-sky-100/90">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-emerald-200" />
                  <span>Hubungi langsung: +62-xxx-xxxx-xxxx</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-emerald-200" />
                  <span>Berbasis di Bali, melayani area sekitarnya.</span>
                </div>
              </div>
            </aside>
          </section>

          {/* Services */}
          <section id="services" className="mb-16">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="section-title text-xl sm:text-2xl text-sky-950 mb-1">
                  {lang === "id" ? "Layanan Yudi's Pool" : "Yudi's Pool Services"}
                </h2>
                <p className="text-sm text-sky-900/80 max-w-xl">
                  {lang === "id"
                    ? "Pilih layanan sesuai kebutuhan kolam renang Anda di Bali. Kami bantu dari pembersihan rutin hingga pembangunan baru dari nol."
                    : "Choose the right service for your Bali pool – from regular cleaning to new pool construction and full repairs."}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-7 items-start">
              <div className="flex flex-col gap-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveServiceId(service.id)}
                    className={`text-left p-4 rounded-xl border transition-colors cursor-pointer flex flex-col gap-1 bg-white/80 hover:bg-sky-50 ${
                      activeServiceId === service.id
                        ? "border-sky-700 bg-sky-50"
                        : "border-sky-100"
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-sky-900/70">
                      {lang === "id" && service.id === "cleaning" && "Perawatan Rutin"}
                      {lang === "id" && service.id === "build" && "Pembuatan Baru"}
                      {lang === "id" && service.id === "repair" && "Perbaikan"}
                      {lang === "en" && service.id === "cleaning" && "Regular Cleaning"}
                      {lang === "en" && service.id === "build" && "New Construction"}
                      {lang === "en" && service.id === "repair" && "Repair Service"}
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-sky-950">{service.title}</p>
                    <p className="text-xs sm:text-sm text-sky-900/80">{service.short}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {service.badges.map((badge) => (
                        <span
                          key={badge}
                          className="px-2 py-1 rounded-full bg-sky-900/5 text-[11px] text-sky-950 border border-sky-900/10"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
              <Card className="p-5 bg-white/90 border-sky-100 shadow-sm">
                <h3 className="text-sm font-semibold text-sky-950 mb-2">
                  Detail layanan: {activeService.title}
                </h3>
                <p className="text-xs sm:text-sm text-sky-900/80 mb-4">
                  {activeService.description}
                </p>
                <ul className="space-y-2 text-xs text-sky-900/80 mb-4">
                  <li className="flex gap-2">
                    <Droplets size={16} className="mt-[2px] text-sky-700" />
                    <span>Cek kualitas air (pH, chlorine) dan penyesuaian chemical yang aman.</span>
                  </li>
                  <li className="flex gap-2">
                    <Waves size={16} className="mt-[2px] text-sky-700" />
                    <span>Pemeriksaan pompa, filter, dan sirkulasi agar air tetap bergerak.</span>
                  </li>
                  <li className="flex gap-2">
                    <Leaf size={16} className="mt-[2px] text-sky-700" />
                    <span>Pembersihan daun, kotoran, serta brushing dinding & lantai kolam.</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-sky-900 text-sky-50 hover:bg-sky-800 text-sm"
                  onClick={() => scrollToSection("contact")}
                >
                  Diskusikan kebutuhan kolam Anda
                </Button>
              </Card>
            </div>
          </section>

          {/* Testimonials */}
          <section id="testimonials" className="mb-16">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="section-title text-xl sm:text-2xl text-sky-950 mb-1">
                  {lang === "id" ? "Apa kata klien di Bali" : "What our Bali clients say"}
                </h2>
                <p className="text-sm text-sky-900/80 max-w-xl">
                  {lang === "id"
                    ? "Pemilik villa, property manager, hingga rumah tinggal yang sudah mempercayakan kolam renangnya kepada Yudi's Pool."
                    : "From villa owners and property managers to private homes who trust Yudi's Pool with their pools."}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {testimonials.map((t) => (
                <Card
                  key={t.name}
                  className="p-4 bg-white/90 border-sky-100 shadow-sm flex flex-col justify-between min-h-[160px]"
                >
                  <p className="text-xs text-sky-900/80 mb-3">“{t.quote}”</p>
                  <div>
                    <p className="text-sm font-semibold text-sky-950">{t.name}</p>
                    <p className="text-[11px] text-sky-900/70">{t.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <h2 className="section-title text-xl sm:text-2xl text-sky-950 mb-1">
                  {lang === "id" ? "Pertanyaan yang sering diajukan" : "Frequently asked questions"}
                </h2>
                <p className="text-sm text-sky-900/80 max-w-xl">
                  {lang === "id"
                    ? "Masih ragu atau ingin tahu lebih detail? Berikut beberapa pertanyaan yang sering muncul dari klien kami di Bali."
                    : "Still unsure or need more details? Here are some common questions from our Bali clients."}
                </p>
              </div>
            </div>
            <Accordion type="single" collapsible className="tropical-card p-4 bg-white/95 border-sky-100">
              {faqs.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-sm text-sky-950">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-sky-900/80">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Contact */}
          <section id="contact" className="mb-10">
            <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-7 items-start">
              <div className="tropical-card p-6 md:p-7">
                <h2 className="section-title text-xl sm:text-2xl text-sky-950 mb-1">
                  {lang === "id"
                    ? "Konsultasi gratis untuk kolam renang Anda di Bali"
                    : "Free consultation for your Bali swimming pool"}
                </h2>
                <p className="text-sm text-sky-900/80 mb-5 max-w-xl">
                  {lang === "id"
                    ? "Ceritakan kondisi kolam Anda, lokasi, dan kebutuhan utama. Kami akan merekomendasikan paket pembersihan, pembuatan, atau perbaikan yang paling pas."
                    : "Tell us about your pool condition, location, and main needs. We’ll recommend the most suitable cleaning, construction, or repair package."}
                </p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-sky-950 mb-1 block">
                        {lang === "id" ? "Nama lengkap" : "Full name"}
                      </label>
                      <Input
                        required
                        value={form.name}
                        onChange={handleChange("name")}
                        placeholder="Nama Anda"
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-sky-950 mb-1 block">No. HP</label>
                      <Input
                        required
                        value={form.phone}
                        onChange={handleChange("phone")}
                        placeholder="08xx..."
                        className="text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-sky-950 mb-1 block">No. WhatsApp (opsional)</label>
                      <Input
                        value={form.whatsapp}
                        onChange={handleChange("whatsapp")}
                        placeholder="Jika berbeda dengan no. HP"
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-sky-950 mb-1 block">Jenis layanan</label>
                      <Select
                        value={form.serviceType}
                        onValueChange={(v) => handleChange("serviceType")(v)}
                      >
                        <SelectTrigger className="text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cleaning">Pembersihan & perawatan rutin</SelectItem>
                          <SelectItem value="build">Pembuatan kolam renang baru</SelectItem>
                          <SelectItem value="repair">Perbaikan / renovasi kolam</SelectItem>
                          <SelectItem value="other">Diskusi kebutuhan khusus</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-sky-950 mb-1 block">Ceritakan singkat kondisi kolam</label>
                    <Textarea
                      required
                      value={form.message}
                      onChange={handleChange("message")}
                      placeholder="Contoh: kolam ukuran 3x7m di daerah Canggu, air mulai keruh, pompa kadang mati."
                      className="text-sm min-h-[90px]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-sky-950 mb-1 block">Waktu kontak yang nyaman</label>
                    <Input
                      value={form.preferredTime}
                      onChange={handleChange("preferredTime")}
                      placeholder="Contoh: setiap hari setelah jam 16.00 WITA"
                      className="text-sm"
                    />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <p className="text-[11px] text-sky-900/70 max-w-xs">
                      Form ini masih <span className="font-semibold">dummy / MOCK</span> untuk demo. Data belum dikirim ke server
                      manapun.
                    </p>
                    <Button
                      type="submit"
                      className="bg-sky-900 text-sky-50 hover:bg-sky-800 text-sm px-6"
                    >
                      Kirim permintaan
                    </Button>
                  </div>
                </form>
              </div>
              <aside className="p-5 rounded-2xl border border-sky-100 bg-sky-900 text-sky-50 relative overflow-hidden contact-highlight">
                <div className="absolute inset-0 opacity-35 pointer-events-none" style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.35) 0, transparent 55%), radial-gradient(circle at 90% 80%, rgba(3, 105, 161, 0.85) 0, transparent 60%)",
                }} />
                <div className="relative z-10">
                  <h3 className="text-base font-semibold mb-2">Lebih cepat lewat WhatsApp</h3>
                  <p className="text-xs text-sky-100/90 mb-3">
                    Kirim foto kolam Anda, kami bantu analisa awal dan estimasi biaya secara gratis.
                  </p>
                  <Button
                    className="w-full bg-white text-sky-900 hover:bg-sky-50 text-sm mb-4"
                    type="button"
                    onClick={() => window.open("https://wa.me/62", "_blank")}
                  >
                    Buka WhatsApp Yudi's Pool
                  </Button>
                  <p className="text-[11px] text-sky-100/80 mb-2">Jam operasional</p>
                  <p className="text-xs mb-3">Senin – Sabtu, 09.00 – 18.00 WITA</p>
                  <p className="text-[11px] text-sky-100/80">Area layanan utama: Denpasar, Badung, Gianyar, sekitarnya.</p>
                </div>
              </aside>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer pt-6 mt-4 text-[11px] text-sky-900/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Yudi's Pool – Jasa kolam renang Bali.</p>
          <p>Website demo ini masih berbasis React & MOCK, nanti bisa diadaptasi ke WordPress.</p>
        </footer>
      </div>
    </div>
  );
}
