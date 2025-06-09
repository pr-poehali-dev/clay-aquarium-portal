import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories, sizes } from "@/data/products";

interface FilterPanelProps {
  selectedCategory: string;
  selectedSize: string;
  onCategoryChange: (category: string) => void;
  onSizeChange: (size: string) => void;
  inStockOnly: boolean;
  onInStockChange: (inStock: boolean) => void;
}

const FilterPanel = ({
  selectedCategory,
  selectedSize,
  onCategoryChange,
  onSizeChange,
  inStockOnly,
  onInStockChange,
}: FilterPanelProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-stone-50 rounded-lg border border-stone-200">
      <div className="space-y-2">
        <label className="text-sm font-medium text-stone-700">Категория</label>
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-stone-700">Размер</label>
        <Select value={selectedSize} onValueChange={onSizeChange}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sizes.map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2 pt-6">
        <input
          type="checkbox"
          id="inStock"
          checked={inStockOnly}
          onChange={(e) => onInStockChange(e.target.checked)}
          className="rounded border-stone-300 text-teal-600 focus:ring-teal-500"
        />
        <label htmlFor="inStock" className="text-sm font-medium text-stone-700">
          Только в наличии
        </label>
      </div>
    </div>
  );
};

export default FilterPanel;
