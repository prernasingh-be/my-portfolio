// Product catalog. Images loaded from specific Unsplash CDN URLs.
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
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400",
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
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400",
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
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
    rating: 4.6,
    reviews: 892,
    description: "Warm dimmable LED lamp with a brushed brass arm."
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 5999,
    originalPrice: 8999,
    category: "Electronics",
    featured: true,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    rating: 4.7,
    reviews: 5823,
    description: "Over-ear wireless headphones with noise cancellation."
  },
  {
    id: 5,
    name: "Leather Wallet",
    price: 2499,
    originalPrice: 3499,
    category: "Accessories",
    featured: true,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400",
    rating: 4.4,
    reviews: 1823,
    description: "Genuine full-grain leather bifold wallet with RFID protection."
  },
  {
    id: 6,
    name: "Scented Candle",
    price: 1299,
    originalPrice: 1799,
    category: "Home & Living",
    featured: true,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400",
    rating: 4.2,
    reviews: 768,
    description: "Soy wax candle with notes of cedarwood and vanilla."
  },
  {
    id: 7,
    name: "Water Bottle",
    price: 899,
    originalPrice: 1299,
    category: "Wellness",
    badge: "Eco",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
    rating: 4.5,
    reviews: 3129,
    description: "Insulated stainless steel bottle. Keeps drinks cold 24h."
  },
  {
    id: 8,
    name: "Yoga Mat",
    price: 1999,
    originalPrice: 2999,
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400",
    rating: 4.6,
    reviews: 2876,
    description: "Natural rubber mat with a non-slip textured surface."
  },
  {
    id: 9,
    name: "Sunglasses",
    price: 2799,
    originalPrice: 3999,
    category: "Accessories",
    badge: "New",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
    rating: 4.4,
    reviews: 1562,
    description: "UV400 polarized sunglasses with lightweight metal frame."
  },
  {
    id: 10,
    name: "Phone Stand",
    price: 799,
    originalPrice: 1199,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400",
    rating: 4.3,
    reviews: 967,
    description: "Adjustable aluminum desk stand for phones and small tablets."
  }
];
