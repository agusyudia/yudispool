// MOCK DATA ONLY – not connected to any backend yet
// English-only content for Yudi's Pool landing page

export const services = [
  {
    id: "cleaning",
    title: "Regular Cleaning & Pool Maintenance",
    short: "Enjoy a crystal-clear pool without the hassle.",
    description:
      "Scheduled pool cleaning and maintenance for villas, private homes, and resorts across Bali. Includes full cleaning and precise chemical balancing to keep your pool safe and inviting.",
    details: [
      "Skimming leaves and debris from water surface",
      "Vacuuming pool floor and steps",
      "Brushing pool walls, tiles, and waterline",
      "Checking and balancing water chemistry (pH, chlorine)",
      "Inspecting pump, filter, and circulation system",
      "Backwash and rinse filter when required",
    ],
    badges: [
      "Villas & Private Pools",
      "Flexible schedule",
      "Weekly / Monthly plans",
    ],
  },
  {
    id: "service",
    title: "Pool Service & Water Treatment",
    short: "Fast solution for green or cloudy water.",
    description:
      "One-time or on-demand pool service focused on restoring water clarity and safety, ideal for emergency or special conditions.",
    details: [
      "Inspection of water condition and algae level",
      "Shock treatment and algae removal",
      "Chemical adjustment for fast recovery",
      "Cleaning after events or heavy usage",
      "Pre-guest pool inspection and preparation",
    ],
    badges: ["One-time service", "Quick response", "Water clarity recovery"],
  },
  {
    id: "repair",
    title: "Pool Repair & Troubleshooting",
    short: "Fix leaks, pumps, and circulation issues.",
    description:
      "Professional pool repair and troubleshooting to identify and fix technical issues affecting pool performance.",
    details: [
      "Leak detection on pool structure and piping",
      "Repair or replacement of damaged pipes",
      "Pump and filter troubleshooting",
      "Fixing circulation and suction problems",
      "System testing after repair",
    ],
    badges: ["On-site inspection", "Clear estimation", "Experienced technicians"],
  },
  {
    id: "equipment",
    title: "Pool Equipment & Machine Service",
    short: "Keep your pool system running efficiently.",
    description:
      "Comprehensive servicing of pool machines and equipment to ensure long-term efficiency and reliability.",
    details: [
      "Pump inspection, cleaning, and servicing",
      "Filter inspection and performance check",
      "Chlorinator and control system testing",
      "Replacement of worn or damaged components",
      "Energy-efficiency performance advice",
    ],
    badges: ["Pump & filter service", "Energy-efficient options", "Reliable brands"],
  },
  {
    id: "sand",
    title: "Filter Sand Replacement",
    short: "Improve filtration and water quality.",
    description:
      "Filter sand replacement service to restore proper filtration and improve overall water clarity.",
    details: [
      "Inspection of filter tank and laterals",
      "Removal of old filter sand",
      "Installation of new filter sand or media",
      "System backwash and pressure testing",
      "Final water clarity check",
    ],
    badges: ["Filter inspection", "Better water flow", "Longer system lifespan"],
  },
  {
    id: "build",
    title: "New Pool Construction",
    short: "Custom-designed pools inspired by Bali.",
    description:
      "End-to-end swimming pool construction service, from planning to handover, using premium materials and proven systems.",
    details: [
      "Site survey and design consultation",
      "Optional 3D pool design",
      "Excavation and pool structure construction",
      "Plumbing, electrical, and circulation system installation",
      "Finishing (tiles, stone, decking)",
      "Water filling, testing, and final handover",
    ],
    badges: ["Optional 3D design", "Construction warranty", "Premium materials"],
  },
  {
    id: "supply",
    title: "Pool Equipment & Accessories Supply",
    short: "Everything your pool needs in one place.",
    description:
      "Supply of high-quality pool equipment, chemicals, and accessories for villas and private pool owners.",
    details: [
      "Supply of pool pumps and filters",
      "Pool chemicals and water treatment products",
      "Cleaning tools and accessories",
      "Consultation on suitable products",
      "Delivery and basic usage guidance",
    ],
    badges: ["Trusted products", "Quality chemicals", "Competitive pricing"],
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
    question: "Do you offer pool maintenance packages?",
    answer:
      "Yes. We provide regular pool maintenance packages (weekly, bi-weekly, or monthly) to keep your pool clean, safe, and well-balanced at all times.",
  },
  {
    question: "Can I order a one-time pool service?",
    answer:
      "Yes. We offer one-time pool service for special needs such as green water treatment, after-party cleaning, or inspection before guest arrival.",
  },
  {
    question: "Do you provide pool repair services?",
    answer:
      "Yes. We handle various pool repair services including pump issues, leaks, piping problems, and other technical issues related to pool systems.",
  },
  {
    question: "Do you replace pool filter sand?",
    answer:
      "Yes. We provide pool filter sand replacement services to ensure optimal water filtration and circulation. We will inspect and advise when replacement is needed.",
  },
  {
    question: "Do you repair or replace pool machines?",
    answer:
      "Yes. We service, repair, and replace pool equipment such as pumps, filters, chlorinators, and other pool machines based on your pool’s condition.",
  },
  {
    question: "Can you build a new swimming pool?",
    answer:
      "Yes. We offer swimming pool construction services from design to completion. On average, construction takes 6–10 weeks after design approval, depending on size, design, and site conditions.",
  },
  {
    question: "Can I purchase pool equipment and accessories from you?",
    answer:
      "Yes. You can purchase pool equipment and accessories such as pumps, filters, chemicals, cleaning tools, and other pool-related items directly through us.",
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
