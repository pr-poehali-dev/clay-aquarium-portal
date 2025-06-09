import { useState, useMemo } from "react";
import SearchBar from "@/components/SearchBar";
import FilterPanel from "@/components/FilterPanel";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedSize, setSelectedSize] = useState("Все");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      const matchesCategory =
        selectedCategory === "Все" || product.category === selectedCategory;
      const matchesSize =
        selectedSize === "Все" || product.size === selectedSize;
      const matchesStock = !inStockOnly || product.inStock;

      return matchesSearch && matchesCategory && matchesSize && matchesStock;
    });
  }, [searchQuery, selectedCategory, selectedSize, inStockOnly]);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Навигация */}
      <nav className="bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild className="text-stone-600">
              <Link to="/">
                <Icon name="ArrowLeft" className="mr-2" size={20} />
                На главную
              </Link>
            </Button>
            <h1 className="text-2xl font-bold text-stone-900">
              🏺 Каталог изделий
            </h1>
            <div></div>
          </div>
        </div>
      </nav>

      {/* Заголовок */}
      <header className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Глиняные изделия для аквариума
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Ручная работа • Натуральные материалы • Безопасно для рыб
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Поиск по названию, описанию или тегам..."
            />
            <div className="text-sm text-stone-600">
              Найдено товаров: {filteredProducts.length}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Фильтры */}
        <FilterPanel
          selectedCategory={selectedCategory}
          selectedSize={selectedSize}
          onCategoryChange={setSelectedCategory}
          onSizeChange={setSelectedSize}
          inStockOnly={inStockOnly}
          onInStockChange={setInStockOnly}
        />

        {/* Каталог товаров */}
        <div className="mt-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🏺</div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">
                Товары не найдены
              </h3>
              <p className="text-stone-600">
                Попробуйте изменить параметры поиска или фильтры
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Catalog;
