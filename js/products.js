// Product catalog. Images are loaded from Unsplash source API.
// Prices in INR. EMI and discount are derived in app.js.
const PRODUCTS = [
  {
    id: 1,
    name: "Linen Tote Bag",
    price: 3999,
    originalPrice: 4999,
    category: "Accessories",
    featured: true,
    badge: "Bestseller",
    image: "https://source.unsplash.com/600x600/?tote,bag",
    rating: 4.5,
    reviews: 2451,
    description: "Durable natural linen tote with reinforced handles."
  },
  {
    id: 2,
    name: "Ceramic Coffee Mug",
    price: 1799,
    originalPrice: 2299,
    category: "Home & Living",
    featured: true,
    badge: "New",
    image: "https://source.unsplash.com/600x600/?ceramic-mug,coffee",
    rating: 4.3,
    reviews: 1287,
    description: "Hand-thrown stoneware mug with a matte glaze finish."
  },
  {
    id: 3,
    name: "Modern Desk Lamp",
    price: 7499,
    originalPrice: 9999,
    category: "Home & Living",
    featured: true,
    badge: "Limited",
    image: "https://source.unsplash.com/600x600/?desk-lamp,lamp",
    rating: 4.6,
    reviews: 892,
    description: "Warm dimmable LED lamp with a brushed brass arm."
  },
  {
    id: 4,
    name: "Leather Journal",
    price: 2999,
    originalPrice: 3999,
    category: "Stationery",
    featured: true,
    image: "https://source.unsplash.com/600x600/?leather,notebook",
    rating: 4.4,
    reviews: 3214,
    description: "Full-grain leather notebook, 240 pages, lay-flat binding."
  },
  {
    id: 5,
    name: "Wool Throw Blanket",
    price: 9999,
    originalPrice: 12999,
    category: "Home & Living",
    featured: true,
    badge: "Cozy",
    image: "https://source.unsplash.com/600x600/?wool,blanket",
    rating: 4.7,
    reviews: 1562,
    description: "Ethically sourced merino wool throw, 50\" × 60\"."
  },
  {
    id: 6,
    name: "Minimalist Watch",
    price: 13499,
    originalPrice: 17999,
    category: "Accessories",
    featured: true,
    image: "https://source.unsplash.com/600x600/?minimalist,watch",
    rating: 4.8,
    reviews: 4198,
    description: "Swiss movement, sapphire crystal, Italian leather strap."
  },
  {
    id: 7,
    name: "Scented Soy Candle",
    price: 2299,
    originalPrice: 2999,
    category: "Wellness",
    image: "https://source.unsplash.com/600x600/?scented,candle",
    rating: 4.2,
    reviews: 768,
    description: "Soy wax candle with notes of cedarwood and vanilla."
  },
  {
    id: 8,
    name: "Fountain Pen Set",
    price: 3799,
    originalPrice: 4999,
    category: "Stationery",
    image: "https://source.unsplash.com/600x600/?fountain-pen,ink",
    rating: 4.5,
    reviews: 534,
    description: "Precision-tipped fountain pen with refillable ink cartridges."
  },
  {
    id: 9,
    name: "Ceramic Planter",
    price: 2699,
    originalPrice: 3499,
    category: "Home & Living",
    image: "https://source.unsplash.com/600x600/?planter,pot",
    rating: 4.3,
    reviews: 1029,
    description: "Hand-glazed planter with built-in drainage tray."
  },
  {
    id: 10,
    name: "Premium Yoga Mat",
    price: 5499,
    originalPrice: 6999,
    category: "Wellness",
    badge: "Eco",
    image: "https://source.unsplash.com/600x600/?yoga-mat,yoga",
    rating: 4.6,
    reviews: 2876,
    description: "Natural rubber mat with a non-slip textured surface."
  },
  {
    id: 11,
    name: "Canvas Backpack",
    price: 7999,
    originalPrice: 9999,
    category: "Accessories",
    image: "https://source.unsplash.com/600x600/?canvas,backpack",
    rating: 4.4,
    reviews: 1843,
    description: "Waxed canvas backpack with padded laptop sleeve."
  },
  {
    id: 12,
    name: "Essential Oil Set",
    price: 4299,
    originalPrice: 5499,
    category: "Wellness",
    image: "https://source.unsplash.com/600x600/?essential-oil,aromatherapy",
    rating: 4.5,
    reviews: 967,
    description: "Six pure essential oils for relaxation and focus."
  }
];
