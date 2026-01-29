// MOCK DATA ONLY – not connected to any backend yet
// English-only content for Yudi's Pool landing page

export const services = [
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
];

export const faqs = [
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
];

export const testimonials = [
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
];

export const initialContactForm = {
  name: "",
  phone: "",
  whatsapp: "",
  serviceType: "cleaning",
  message: "",
  preferredTime: "",
};
