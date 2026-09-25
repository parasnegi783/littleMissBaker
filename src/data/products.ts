export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
  ingredients: string[];
  rating: number;
  reviews: number;
}

export const categories = [
  "All",
  "Breads",
  "Cakes",
  "Pastries",
  "Cookies",
  "Seasonal",
];

export const products: Product[] = [
  {
    id: 1,
    name: "Sourdough Loaf",
    description:
      "Our signature artisan sourdough, slow-fermented for 24 hours with a crispy golden crust and soft, tangy interior. Made with organic flour and our 5-year-old starter.",
    price: 8.5,
    category: "Breads",
    image: "🍞",
    badge: "Bestseller",
    ingredients: ["Organic flour", "Water", "Sea salt", "Sourdough starter"],
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 2,
    name: "Chocolate Layer Cake",
    description:
      "Three layers of rich Belgian chocolate sponge, filled with silky ganache and topped with chocolate shavings. Perfect for celebrations.",
    price: 45.0,
    category: "Cakes",
    image: "🎂",
    badge: "Popular",
    ingredients: [
      "Belgian chocolate",
      "Free-range eggs",
      "Butter",
      "Flour",
      "Cream",
    ],
    rating: 4.8,
    reviews: 95,
  },
  {
    id: 3,
    name: "Butter Croissant",
    description:
      "Flaky, golden, and impossibly buttery. Each croissant is hand-laminated with 81 layers of French butter dough.",
    price: 4.5,
    category: "Pastries",
    image: "🥐",
    ingredients: ["French butter", "Flour", "Yeast", "Milk", "Eggs"],
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 4,
    name: "Almond Biscotti",
    description:
      "Twice-baked Italian cookies studded with toasted almonds. Perfect with your morning coffee or afternoon tea.",
    price: 12.0,
    category: "Cookies",
    image: "🍪",
    ingredients: ["Flour", "Almonds", "Sugar", "Eggs", "Vanilla"],
    rating: 4.7,
    reviews: 67,
  },
  {
    id: 5,
    name: "Cinnamon Roll",
    description:
      "Soft, pillowy dough swirled with cinnamon-brown sugar filling and drizzled with cream cheese frosting. Baked fresh every morning.",
    price: 5.5,
    category: "Pastries",
    image: "🧁",
    badge: "New",
    ingredients: ["Flour", "Cinnamon", "Brown sugar", "Cream cheese", "Butter"],
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 6,
    name: "Strawberry Shortcake",
    description:
      "Light vanilla sponge layered with fresh strawberries and whipped cream. A classic that never goes out of style.",
    price: 38.0,
    category: "Cakes",
    image: "🍰",
    ingredients: [
      "Fresh strawberries",
      "Cream",
      "Vanilla sponge",
      "Sugar",
      "Eggs",
    ],
    rating: 4.6,
    reviews: 82,
  },
  {
    id: 7,
    name: "Multigrain Bread",
    description:
      "Hearty and wholesome, packed with seven different grains and seeds. High in fiber and absolutely delicious toasted.",
    price: 7.0,
    category: "Breads",
    image: "🍞",
    ingredients: [
      "Whole wheat",
      "Oats",
      "Flax seeds",
      "Sunflower seeds",
      "Honey",
    ],
    rating: 4.5,
    reviews: 54,
  },
  {
    id: 8,
    name: "Pumpkin Spice Muffin",
    description:
      "Seasonal favorite! Moist pumpkin muffins with warm spices, topped with a crunchy streusel. Limited availability.",
    price: 4.0,
    category: "Seasonal",
    image: "🧁",
    badge: "Seasonal",
    ingredients: [
      "Pumpkin puree",
      "Cinnamon",
      "Nutmeg",
      "Ginger",
      "Brown sugar",
    ],
    rating: 4.7,
    reviews: 43,
  },
  {
    id: 9,
    name: "Lemon Drizzle Cake",
    description:
      "Zesty and refreshing, this moist lemon cake is soaked in a tangy lemon syrup and topped with a sweet glaze.",
    price: 32.0,
    category: "Cakes",
    image: "🍰",
    ingredients: ["Lemons", "Butter", "Sugar", "Eggs", "Flour"],
    rating: 4.6,
    reviews: 71,
  },
  {
    id: 10,
    name: "Chocolate Chip Cookies",
    description:
      "Crispy on the edges, chewy in the center. Loaded with premium dark and milk chocolate chips. Sold by the dozen.",
    price: 15.0,
    category: "Cookies",
    image: "🍪",
    badge: "Bestseller",
    ingredients: [
      "Dark chocolate",
      "Milk chocolate",
      "Butter",
      "Brown sugar",
      "Vanilla",
    ],
    rating: 4.9,
    reviews: 189,
  },
  {
    id: 11,
    name: "Rustic Baguette",
    description:
      "Traditional French baguette with a crackling crust and airy, open crumb. Best enjoyed the same day it's baked.",
    price: 5.0,
    category: "Breads",
    image: "🥖",
    ingredients: ["French flour", "Water", "Yeast", "Salt"],
    rating: 4.7,
    reviews: 96,
  },
  {
    id: 12,
    name: "Apple Cinnamon Tart",
    description:
      "Seasonal delight with caramelized apples on buttery shortcrust pastry, dusted with cinnamon sugar.",
    price: 28.0,
    category: "Seasonal",
    image: "🥧",
    badge: "Seasonal",
    ingredients: ["Apples", "Cinnamon", "Butter", "Flour", "Brown sugar"],
    rating: 4.8,
    reviews: 38,
  },
];
