import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="secondary" className="bg-stone-600 text-white">
                Нет в наличии
              </Badge>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-stone-900 mb-2 line-clamp-2 group-hover:text-teal-700 transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="text-xs">
              {product.category}
            </Badge>
            <span className="text-sm text-stone-600">{product.size}</span>
          </div>

          <p className="text-stone-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-stone-900">
              {product.price.toLocaleString()} ₽
            </span>
            <Badge
              variant={product.inStock ? "default" : "secondary"}
              className={
                product.inStock
                  ? "bg-green-100 text-green-800"
                  : "bg-stone-100 text-stone-600"
              }
            >
              {product.inStock ? "В наличии" : "Под заказ"}
            </Badge>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
