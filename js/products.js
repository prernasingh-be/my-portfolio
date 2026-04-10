// Product catalog. Each product uses a gradient + emoji as an inline "image"
// so the site works fully offline without external asset dependencies.
const PRODUCTS = [
  {
    id: 1,
    name: "Linen Tote Bag",
    price: 38.00,
    category: "Accessories",
    featured: true,
    badge: "Bestseller",
    icon: "👜",
    gradient: "linear-gradient(135deg,#fbd38d,#f6ad55)",
    description: "Durable natural linen tote with reinforced handles."
  },
  {
    id: 2,
    name: "Ceramic Mug",
    price: 22.50,
    category: "Home & Living",
    featured: true,
    badge: "New",
    icon: "☕",
    gradient: "linear-gradient(135deg,#c3dafe,#7f9cf5)",
    description: "Hand-thrown stoneware mug with a matte glaze finish."
  },
  {
    id: 3,
    name: "Desk Lamp",
    price: 89.00,
    category: "Home & Living",
    featured: true,
    badge: "Limited",
    icon: "💡",
    gradient: "linear-gradient(135deg,#fed7d7,#fc8181)",
    description: "Warm dimmable LED lamp with a brushed brass arm."
  },
  {
    id: 4,
    name: "Leather Journal",
    price: 34.00,
    category: "Stationery",
    featured: true,
    icon: "📓",
    gradient: "linear-gradient(135deg,#b794f4,#9f7aea)",
    description: "Full-grain leather notebook, 240 pages, lay-flat binding."
  },
  {
    id: 5,
    name: "Wool Throw Blanket",
    price: 120.00,
    category: "Home & Living",
    featured: true,
    badge: "Cozy",
    icon: "🧣",
    gradient: "linear-gradient(135deg,#9ae6b4,#48bb78)",
    description: "Ethically sourced merino wool throw, 50\" × 60\"."
  },
  {
    id: 6,
    name: "Minimalist Watch",
    price: 165.00,
    category: "Accessories",
    featured: true,
    icon: "⌚",
    gradient: "linear-gradient(135deg,#a0aec0,#4a5568)",
    description: "Swiss movement, sapphire crystal, Italian leather strap."
  },
  {
    id: 7,
    name: "Scented Candle",
    price: 28.00,
    category: "Wellness",
    icon: "🕯️",
    gradient: "linear-gradient(135deg,#fefcbf,#f6e05e)",
    description: "Soy wax candle with notes of cedarwood and vanilla."
  },
  {
    id: 8,
    name: "Ink Pen Set",
    price: 45.00,
    category: "Stationery",
    icon: "🖋️",
    gradient: "linear-gradient(135deg,#bee3f8,#63b3ed)",
    description: "Precision-tipped fountain pen with refillable ink cartridges."
  },
  {
    id: 9,
    name: "Ceramic Planter",
    price: 32.00,
    category: "Home & Living",
    icon: "🪴",
    gradient: "linear-gradient(135deg,#c6f6d5,#68d391)",
    description: "Hand-glazed planter with built-in drainage tray."
  },
  {
    id: 10,
    name: "Yoga Mat",
    price: 68.00,
    category: "Wellness",
    badge: "Eco",
    icon: "🧘",
    gradient: "linear-gradient(135deg,#fbb6ce,#ed64a6)",
    description: "Natural rubber mat with a non-slip textured surface."
  },
  {
    id: 11,
    name: "Canvas Backpack",
    price: 95.00,
    category: "Accessories",
    icon: "🎒",
    gradient: "linear-gradient(135deg,#d6bcfa,#805ad5)",
    description: "Waxed canvas backpack with padded laptop sleeve."
  },
  {
    id: 12,
    name: "Essential Oil Set",
    price: 52.00,
    category: "Wellness",
    icon: "🌿",
    gradient: "linear-gradient(135deg,#b2f5ea,#38b2ac)",
    description: "Six pure essential oils for relaxation and focus."
  }
];
