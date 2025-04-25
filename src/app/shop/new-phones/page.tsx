"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/shop/product-card";
import ProductFilters from "@/components/shop/product-filters";

// Sample data for new phones
const newPhones = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    brand: "Apple",
    price: 999,
    image:
      "https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    storage: "128GB",
    colors: ["Graphite", "Silver", "Gold"],
    features: ["A16 Bionic Chip", "48MP Camera System", "Dynamic Island"],
    inStock: true,
    isNew: true,
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    brand: "Samsung",
    price: 1199,
    image:
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    storage: "256GB",
    colors: ["Phantom Black", "Green", "Cream"],
    features: ["200MP Camera", "S Pen", "5000mAh Battery"],
    inStock: true,
    isNew: true,
  },
  {
    id: 3,
    name: "Google Pixel 7 Pro",
    brand: "Google",
    price: 899,
    image:
      "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    storage: "128GB",
    colors: ["Obsidian", "Snow", "Hazel"],
    features: ["Tensor G2 Chip", "Pro-level Camera", "Pure Android Experience"],
    inStock: true,
    isNew: true,
  },
  {
    id: 4,
    name: "OnePlus 11",
    brand: "OnePlus",
    price: 699,
    image:
      "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    storage: "256GB",
    colors: ["Eternal Green", "Titan Black"],
    features: ["Snapdragon 8 Gen 2", "Hasselblad Camera", "100W Fast Charging"],
    inStock: true,
    isNew: true,
  },
  {
    id: 5,
    name: "Xiaomi 13 Pro",
    brand: "Xiaomi",
    price: 899,
    image:
      "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    storage: "256GB",
    colors: ["Ceramic White", "Ceramic Black"],
    features: ["Leica Camera System", "4820mAh Battery", "120W HyperCharge"],
    inStock: false,
    isNew: true,
  },
  {
    id: 6,
    name: "iPhone 14",
    brand: "Apple",
    price: 799,
    image:
      "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    storage: "128GB",
    colors: ["Blue", "Purple", "Midnight", "Starlight", "Red"],
    features: ["A15 Bionic Chip", "Crash Detection", "Action Mode Videos"],
    inStock: true,
    isNew: true,
  },
];

export default function NewPhonesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-muted">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Останні моделі
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Колекція нових телефонів
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Відкрийте для себе найновіші смартфони з передовими технологіями,
              вражаючими камерами та потужною продуктивністю.
            </p>
          </div>
        </div>
      </section>

      {/* Product Listing */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <ProductFilters />
            </div>

            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Новинки</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    Сортувати за:
                  </span>
                  <select className="bg-background border rounded-md px-2 py-1 text-sm">
                    <option>Рекомендовані</option>
                    <option>Ціна: від найнижчої</option>
                    <option>Ціна: від найвищої</option>
                    <option>Спочатку нові</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {newPhones.map((phone) => (
                  <ProductCard key={phone.id} product={phone} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Phone */}
      <section className="py-16 bg-muted">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Рекомендовано</Badge>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                iPhone 14 Pro Max
              </h2>
              <p className="text-muted-foreground mb-6">
                Відчуйте перевагу iPhone з неймовірним дисплеєм Super Retina
                XDR, процесором A16 Bionic та революційним Dynamic Island.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/10 p-1 rounded-full">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Професійна камера</p>
                    <p className="text-sm text-muted-foreground">
                      48 МП основна | Ширококутна | Телеоб’єктив
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/10 p-1 rounded-full">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Акумулятор на цілий день</p>
                    <p className="text-sm text-muted-foreground">
                      До 29 годин відтворення відео
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/10 p-1 rounded-full">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Процесор A16 Bionic</p>
                    <p className="text-sm text-muted-foreground">
                      Найшвидший процесор у смартфоні
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/shop/new-phones/iphone-14-pro-max">
                    Дізнатися більше
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  Ціна від $1099
                </Button>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/11438840/pexels-photo-11438840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Чому варто купувати в TechFix
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Купуючи новий телефон у нас, ви отримуєте більше, ніж просто
              пристрій. Ми надаємо винятковий сервіс та додаткові переваги.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border bg-card">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">
                Безкоштовне захисне скло
              </h3>
              <p className="text-muted-foreground">
                До кожної покупки нового телефону — захисне скло з гартованого
                скла у подарунок.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border bg-card">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">
                Налаштування пристрою
              </h3>
              <p className="text-muted-foreground">
                Ми безкоштовно перенесемо ваші дані та налаштуємо новий
                смартфон.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border bg-card">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">
                Гарантія ціни 30 днів
              </h3>
              <p className="text-muted-foreground">
                Знайшли дешевше протягом 30 днів після покупки? Ми компенсуємо
                різницю.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Будьте в курсі
            </h2>
            <p className="mb-6">
              Підпишіться на нашу розсилку, щоб першими дізнаватися про новинки
              та ексклюзивні пропозиції.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваша електронна пошта"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button variant="secondary">Підписатися</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
