"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductFilters = () => {
  const [priceRange, setPriceRange] = useState([200, 1200]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedStorage, setSelectedStorage] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const brands = [
    "Apple",
    "Samsung",
    "Google",
    "OnePlus",
    "Xiaomi",
    "Motorola",
  ];
  const storageOptions = ["64GB", "128GB", "256GB", "512GB", "1TB"];
  const colorOptions = [
    { name: "Чорний", class: "bg-black" },
    { name: "Білий", class: "bg-white border border-gray-200" },
    { name: "Синій", class: "bg-blue-500" },
    { name: "Червоний", class: "bg-red-500" },
    { name: "Зелений", class: "bg-green-500" },
    { name: "Оранжевий", class: "bg-amber-200" },
    { name: "Сірий", class: "bg-gray-300" },
  ];

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleStorage = (storage: string) => {
    setSelectedStorage((prev) =>
      prev.includes(storage)
        ? prev.filter((s) => s !== storage)
        : [...prev, storage]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const resetFilters = () => {
    setPriceRange([200, 1200]);
    setSelectedBrands([]);
    setSelectedStorage([]);
    setSelectedColors([]);
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" onClick={resetFilters}>
          Очистити все
        </Button>
      </div>

      <Separator />

      {/* Price Range */}
      <div className="space-y-4">
        <h4 className="font-medium">Ціна</h4>
        <Slider
          defaultValue={[200, 1200]}
          max={2000}
          min={0}
          step={50}
          value={priceRange}
          onValueChange={handlePriceChange}
        />
        <div className="flex items-center justify-between">
          <span className="text-sm">${priceRange[0]}</span>
          <span className="text-sm">${priceRange[1]}</span>
        </div>
      </div>

      <Separator />

      {/* Accordion Filters */}
      <Accordion
        type="multiple"
        defaultValue={["brands", "storage", "colors"]}
        className="w-full"
      >
        {/* Brands */}
        <AccordionItem value="brands">
          <AccordionTrigger className="py-3">Бренди</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center">
                  <button
                    onClick={() => toggleBrand(brand)}
                    className="flex items-center space-x-2 w-full py-1.5 px-2 rounded-md hover:bg-accent text-left"
                  >
                    <div className="h-4 w-4 rounded border flex items-center justify-center">
                      {selectedBrands.includes(brand) && (
                        <Check className="h-3 w-3" />
                      )}
                    </div>
                    <span>{brand}</span>
                  </button>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Storage */}
        <AccordionItem value="storage">
          <AccordionTrigger className="py-3">Памʼять</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {storageOptions.map((storage) => (
                <div key={storage} className="flex items-center">
                  <button
                    onClick={() => toggleStorage(storage)}
                    className="flex items-center space-x-2 w-full py-1.5 px-2 rounded-md hover:bg-accent text-left"
                  >
                    <div className="h-4 w-4 rounded border flex items-center justify-center">
                      {selectedStorage.includes(storage) && (
                        <Check className="h-3 w-3" />
                      )}
                    </div>
                    <span>{storage}</span>
                  </button>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Colors */}
        <AccordionItem value="colors">
          <AccordionTrigger className="py-3">Кольори</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color.name}
                  onClick={() => toggleColor(color.name)}
                  className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    color.class
                  } ${
                    selectedColors.includes(color.name)
                      ? "ring-2 ring-offset-2 ring-primary"
                      : ""
                  }`}
                  title={color.name}
                >
                  {selectedColors.includes(color.name) && (
                    <Check
                      className={`h-4 w-4 ${
                        ["White", "Gold", "Silver"].includes(color.name)
                          ? "text-black"
                          : "text-white"
                      }`}
                    />
                  )}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Availability */}
        <AccordionItem value="availability">
          <AccordionTrigger className="py-3">Наявність</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center">
                <button className="flex items-center space-x-2 w-full py-1.5 px-2 rounded-md hover:bg-accent text-left">
                  <div className="h-4 w-4 rounded border flex items-center justify-center">
                    <Check className="h-3 w-3" />
                  </div>
                  <span>В наявності</span>
                </button>
              </div>
              <div className="flex items-center">
                <button className="flex items-center space-x-2 w-full py-1.5 px-2 rounded-md hover:bg-accent text-left">
                  <div className="h-4 w-4 rounded border flex items-center justify-center">
                    {/* Empty checkbox */}
                  </div>
                  <span>Немає в наявності</span>
                </button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Features */}
        <AccordionItem value="features">
          <AccordionTrigger className="py-3">Особливості</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {[
                "Підтримка 5G",
                "Бездротова зарядка",
                "Водостійкий",
                "Дві SIM-карти",
              ].map((feature) => (
                <div key={feature} className="flex items-center">
                  <button className="flex items-center space-x-2 w-full py-1.5 px-2 rounded-md hover:bg-accent text-left">
                    <div className="h-4 w-4 rounded border flex items-center justify-center">
                      {/* Empty checkbox */}
                    </div>
                    <span>{feature}</span>
                  </button>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Separator />

      <Button className="w-full">Застосувати фільтр</Button>
    </div>
  );
};

export default ProductFilters;
