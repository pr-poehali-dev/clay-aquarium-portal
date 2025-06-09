export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  size: string;
  description: string;
  images: string[];
  inStock: boolean;
  tags: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Пещера-домик для цихлид",
    price: 1200,
    category: "Декорации",
    size: "Средний",
    description:
      "Натуральная керамическая пещера ручной работы, идеальная для укрытия цихлид и других территориальных рыб. Обожжена при высокой температуре, безопасна для аквариума.",
    images: [
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=500",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500",
    ],
    inStock: true,
    tags: ["цихлиды", "укрытие", "керамика"],
  },
  {
    id: 2,
    name: "Растительная композиция",
    price: 800,
    category: "Растения",
    size: "Большой",
    description:
      "Имитация водных растений из обожженной глины с натуральными текстурами. Создает естественный ландшафт в аквариуме.",
    images: [
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=500",
      "https://images.unsplash.com/photo-1563380931-67ad467b89b1?w=500",
    ],
    inStock: true,
    tags: ["растения", "декор", "ландшафт"],
  },
  {
    id: 3,
    name: "Коряга с мхом",
    price: 1500,
    category: "Коряги",
    size: "Большой",
    description:
      "Художественная имитация коряги с натуральным мхом. Выполнена из экологически чистой глины с детальной проработкой текстур.",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500",
      "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=500",
    ],
    inStock: true,
    tags: ["коряга", "мох", "натуральный"],
  },
  {
    id: 4,
    name: "Грот каменный малый",
    price: 600,
    category: "Декорации",
    size: "Малый",
    description:
      "Компактный грот для небольших аквариумов. Имитирует натуральный камень, безопасен для всех видов рыб.",
    images: [
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=500",
    ],
    inStock: false,
    tags: ["грот", "камень", "малый"],
  },
  {
    id: 5,
    name: "Амфора античная",
    price: 2000,
    category: "Антиквариат",
    size: "Средний",
    description:
      "Стилизованная под античность амфора с эффектом старения. Создает уникальную атмосферу в аквариуме.",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500",
    ],
    inStock: true,
    tags: ["амфора", "античность", "стиль"],
  },
  {
    id: 6,
    name: "Замок средневековый",
    price: 2500,
    category: "Архитектура",
    size: "Большой",
    description:
      "Детализированный средневековый замок с башнями и воротами. Множество укрытий для рыб разных размеров.",
    images: [
      "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=500",
    ],
    inStock: true,
    tags: ["замок", "средневековье", "укрытие"],
  },
];

export const categories = [
  "Все",
  "Декорации",
  "Растения",
  "Коряги",
  "Антиквариат",
  "Архитектура",
];
export const sizes = ["Все", "Малый", "Средний", "Большой"];
