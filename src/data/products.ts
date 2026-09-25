export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  emoji: string;
  tag?: string;
  tagColor?: string;
  ingredients: string[];
  rating: number;
  reviews: number;
}

export const categories = [
  "All",
  "Cupcakes",
  "Cakes",
  "Cookies",
  "Rolls & Pastries",
  "Seasonal",
];

export const products: Product[] = [
  {
    id: 1,
    name: "Strawberry Dream Cupcakes",
    description:
      "Fluffy vanilla cupcakes topped with a swirl of strawberry buttercream and a fresh strawberry. Box of 4.",
    price: 18.0,
    category: "Cupcakes",
    emoji: "🧁",
    tag: "Bestseller",
    tagColor: "bg-pink-500",
    ingredients: ["Flour", "Butter", "Strawberries", "Cream", "Vanilla"],
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 2,
    name: "Celebration Layer Cake",
    description:
      "Three layers of moist pink velvet sponge with cream cheese frosting, decorated with edible flowers. Serves 12.",
    price: 55.0,
    category: "Cakes",
    emoji: "🎂",
    tag: "Gift-ready",
    tagColor: "bg-rose-400",
    ingredients: ["Cream cheese", "Beetroot", "Flour", "Butter", "Rose water"],
    rating: 4.8,
    reviews: 95,
  },
  {
    id: 3,
    name: "Heart-Shaped Sugar Cookies",
    description:
      "Buttery sugar cookies cut into heart shapes, decorated with royal icing in pastel pinks. Box of 6.",
    price: 14.0,
    category: "Cookies",
    emoji: "🍪",
    tag: "New",
    tagColor: "bg-emerald-500",
    ingredients: ["Butter", "Sugar", "Flour", "Vanilla", "Food coloring"],
    rating: 4.7,
    reviews: 67,
  },
  {
    id: 4,
    name: "Cinnamon Swirl Rolls",
    description:
      "Soft pillowy dough swirled with cinnamon-brown sugar, baked golden and drizzled with cream cheese glaze. Pack of 4.",
    price: 12.0,
    category: "Rolls & Pastries",
    emoji: "🥐",
    tag: "Weekend only",
    tagColor: "bg-amber-500",
    ingredients: ["Flour", "Cinnamon", "Brown sugar", "Cream cheese", "Butter"],
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 5,
    name: "Rose & Pistachio Macarons",
    description:
      "Delicate French macarons with rose-flavored ganache and crushed pistachios. Box of 8.",
    price: 22.0,
    category: "Cookies",
    emoji: "🌸",
    ingredients: ["Almond flour", "Rose water", "Pistachios", "Cream", "Sugar"],
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 6,
    name: "Chocolate Fudge Brownies",
    description:
      "Rich, dense chocolate brownies with a crackly top and gooey center. Made with Belgian dark chocolate. Box of 4.",
    price: 16.0,
    category: "Cakes",
    emoji: "🍫",
    tag: "Bestseller",
    tagColor: "bg-pink-500",
    ingredients: ["Dark chocolate", "Butter", "Cocoa", "Eggs", "Walnuts"],
    rating: 4.8,
    reviews: 142,
  },
  {
    id: 7,
    name: "Lemon Lavender Tart",
    description:
      "Buttery shortcrust filled with lemon curd and topped with candied lavender. A floral delight.",
    price: 24.0,
    category: "Seasonal",
    emoji: "🍋",
    tag: "Seasonal",
    tagColor: "bg-purple-400",
    ingredients: ["Lemons", "Lavender", "Butter", "Flour", "Sugar"],
    rating: 4.6,
    reviews: 38,
  },
  {
    id: 8,
    name: "Red Velvet Cupcakes",
    description:
      "Classic red velvet cupcakes with a hint of cocoa, topped with tangy cream cheese frosting. Box of 4.",
    price: 18.0,
    category: "Cupcakes",
    emoji: "❤️",
    tag: "Popular",
    tagColor: "bg-rose-500",
    ingredients: ["Cocoa", "Buttermilk", "Cream cheese", "Beetroot", "Vanilla"],
    rating: 4.7,
    reviews: 104,
  },
  {
    id: 9,
    name: "Almond Croissant",
    description:
      "Buttery, flaky croissant filled with frangipane and topped with sliced almonds and powdered sugar.",
    price: 6.5,
    category: "Rolls & Pastries",
    emoji: "🥐",
    ingredients: ["Butter", "Almonds", "Flour", "Sugar", "Eggs"],
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 10,
    name: "Vanilla Bean Cheesecake",
    description:
      "Creamy New York-style cheesecake with a buttery biscuit base, infused with real vanilla bean. Whole cake.",
    price: 42.0,
    category: "Cakes",
    emoji: "🍰",
    tag: "Gift-ready",
    tagColor: "bg-rose-400",
    ingredients: ["Cream cheese", "Vanilla bean", "Biscuits", "Butter", "Cream"],
    rating: 4.8,
    reviews: 76,
  },
  {
    id: 11,
    name: "Matcha White Choc Cookies",
    description:
      "Chewy matcha cookies studded with white chocolate chunks. Earthy, sweet, and utterly addictive. Box of 6.",
    price: 15.0,
    category: "Cookies",
    emoji: "🍵",
    tag: "New",
    tagColor: "bg-emerald-500",
    ingredients: ["Matcha", "White chocolate", "Butter", "Flour", "Brown sugar"],
    rating: 4.6,
    reviews: 34,
  },
  {
    id: 12,
    name: "Pumpkin Spice Muffins",
    description:
      "Moist pumpkin muffins with warm autumn spices, topped with a crunchy streusel. Pack of 4.",
    price: 10.0,
    category: "Seasonal",
    emoji: "🎃",
    tag: "Seasonal",
    tagColor: "bg-orange-400",
    ingredients: ["Pumpkin", "Cinnamon", "Nutmeg", "Ginger", "Brown sugar"],
    rating: 4.7,
    reviews: 43,
  },
];
