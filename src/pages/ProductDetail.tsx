import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stone-900 mb-4">
            Товар не найден
          </h1>
          <Link to="/">
            <Button variant="outline">Вернуться к каталогу</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-stone-600 hover:text-stone-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Назад к каталогу
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Изображения */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-sm">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-2">
                {product.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg overflow-hidden bg-white shadow-sm"
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Информация о товаре */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline">{product.category}</Badge>
                <Badge variant="outline">{product.size}</Badge>
              </div>
              <h1 className="text-3xl font-bold text-stone-900 mb-4">
                {product.name}
              </h1>
              <p className="text-4xl font-bold text-teal-700 mb-4">
                {product.price.toLocaleString()} ₽
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Описание</h3>
                <p className="text-stone-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-stone-900 mb-2">
                  Характеристики
                </h3>
                <ul className="space-y-2 text-stone-600">
                  <li>• Размер: {product.size}</li>
                  <li>• Категория: {product.category}</li>
                  <li>• Материал: Обожженная глина</li>
                  <li>• Безопасно для аквариума: Да</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Теги</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Наличие:</span>
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

              <div className="flex gap-3">
                <Button
                  size="lg"
                  className="flex-1 bg-teal-600 hover:bg-teal-700"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? "В корзину" : "Заказать"}
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
