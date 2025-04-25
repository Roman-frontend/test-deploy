"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  storage: string;
  colors: string[];
  features: string[];
  inStock: boolean;
  isNew?: boolean;
  isRefurbished?: boolean;
  condition?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    toast({
      title: "Додано в кошик",
      description: `${product.name} було додано до вашого кошика.`,
    });
  };

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlist(!isWishlist);

    toast({
      title: isWishlist ? "Видалено з кошика" : "Додано в кошик",
      description: `${product.name} було ${
        isWishlist ? "видалено з кошика." : "додано в кошик."
      }`,
    });
  };

  const getProductPath = () => {
    if (product.isNew) {
      return `/shop/new-phones/${product.id}`;
    } else if (product.isRefurbished) {
      return `/shop/used-phones/${product.id}`;
    }
    return `#`;
  };

  return (
    <Link href={getProductPath()}>
      <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md group">
        <div className="relative aspect-square overflow-hidden bg-muted">
          {/* Product Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${product.image})` }}
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>
            )}
            {product.isRefurbished && (
              <Badge
                variant="outline"
                className="bg-green-500 hover:bg-green-600"
              >
                Відремонтований
              </Badge>
            )}
            {!product.inStock && (
              <Badge variant="outline" className="bg-red-500 hover:bg-red-600">
                Немає в наявності
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            className="absolute top-2 right-2 p-1.5 bg-background/80 rounded-full backdrop-blur-sm transition-colors hover:bg-background"
            onClick={toggleWishlist}
          >
            <Heart
              className={cn(
                "h-5 w-5",
                isWishlist
                  ? "fill-red-500 text-red-500"
                  : "text-muted-foreground"
              )}
            />
          </button>
        </div>

        <CardContent className="p-4">
          <div className="mb-1 text-sm text-muted-foreground">
            {product.brand}
          </div>
          <h3 className="font-medium text-lg mb-1 truncate">{product.name}</h3>

          <div className="flex items-center justify-between mt-2">
            <span className="font-semibold">${product.price}</span>
            <span className="text-sm text-muted-foreground">
              {product.storage}
            </span>
          </div>

          <div className="mt-3">
            <div className="text-sm text-muted-foreground mb-1">
              Доступні кольори:
            </div>
            <div className="flex gap-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border"
                  title={color}
                  style={{
                    backgroundColor: getColorCode(color),
                    borderColor: isLightColor(color)
                      ? "rgba(0,0,0,0.1)"
                      : "transparent",
                  }}
                />
              ))}
              {product.colors.length > 3 && (
                <div className="text-xs text-muted-foreground flex items-center ml-1">
                  +{product.colors.length - 3}
                </div>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button
            className="w-full"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.inStock ? "В кошик" : "Немає в наявності"}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

// Helper functions for colors
function getColorCode(colorName: string): string {
  const colorMap: Record<string, string> = {
    // Apple colors
    Graphite: "#4E4E4E",
    Silver: "#E3E3E3",
    Gold: "#FAD7BD",
    "Sierra Blue": "#90C1E0",
    Blue: "#447792",
    Purple: "#D0CDDA",
    Midnight: "#1F1F1F",
    Starlight: "#F9F8F6",
    Red: "#D62E31",

    // Samsung colors
    "Phantom Black": "#111111",
    Green: "#285943",
    Cream: "#FFF8E1",

    // Google colors
    Obsidian: "#323232",
    Snow: "#F1F1F1",
    Hazel: "#CAC5B9",

    // OnePlus colors
    "Eternal Green": "#2A5C45",
    "Titan Black": "#262626",

    // Xiaomi colors
    "Ceramic White": "#FFFFFF",
    "Ceramic Black": "#111111",

    // Default
    White: "#FFFFFF",
    Black: "#000000",
  };

  return colorMap[colorName] || "#888888"; // Default gray if not found
}

function isLightColor(colorName: string): boolean {
  const lightColors = [
    "Silver",
    "Gold",
    "Starlight",
    "White",
    "Cream",
    "Snow",
    "Ceramic White",
    "Purple",
  ];

  return lightColors.includes(colorName);
}

export default ProductCard;
