import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HomepageHero = () => {
  return (
    <section className="relative pb-20 pt-32 overflow-hidden bg-background">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary/5 pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Професійний ремонт &<br className="hidden sm:block" /> Круті
                девайси
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                {`Ремонтуємо навіть коли інші кажуть, 'то кінець'. Швидкий ремонт
                і сертифікована техніка за вашими потребами.`}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/booking">Розділ ремонту</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/shop/new-phones" className="flex items-center">
                  Пристрої на продаж
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary"
                  >
                    <path
                      d="M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779 20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944 8.90983H9.75486L12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="ml-2">
                  <p className="text-sm font-medium">4.9/5 Оцінка</p>
                  <p className="text-xs text-muted-foreground">
                    На основі 500+ ремонтів
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary"
                  >
                    <path
                      d="M9 12L11 14L15 10M12 3L4 10V20H9V16C9 15.4477 9.44772 15 10 15H14C14.5523 15 15 15.4477 15 16V20H20V10L12 3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="ml-2">
                  <p className="text-sm font-medium">Перевірений сервіс</p>
                  <p className="text-xs text-muted-foreground">
                    5+ років роботи
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              {/* Hero Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20" />
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4195324/pexels-photo-4195324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center" />

              {/* Floating Cards */}
              <div className="absolute top-12 -left-2 max-w-[180px] bg-background/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-accent/20">
                <p className="text-sm font-medium">Відновлення екрану</p>
                <p className="text-xs text-muted-foreground">
                  Зробимо в той самий день
                </p>
              </div>

              <div className="absolute bottom-12 -right-2 max-w-[180px] bg-background/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-accent/20">
                <p className="text-sm font-medium">Нові девайси</p>
                <p className="text-xs text-muted-foreground">
                  Останні версії iPhone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
