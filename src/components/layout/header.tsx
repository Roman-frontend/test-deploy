"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X, Smartphone, Tablet, Laptop, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Smartphone className="h-6 w-6" />
          <span className="font-bold text-xl">ТехФікс</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Ремонт</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem
                      href="/repair/phones"
                      title="Телефони"
                      icon={<Smartphone className="h-4 w-4 mr-2" />}
                    >
                      Від тріснутого скла до заміни батареї — наші експерти
                      повернуть ваш телефон до життя.
                    </ListItem>
                    <ListItem
                      href="/repair/tablets"
                      title="Планшети"
                      icon={<Tablet className="h-4 w-4 mr-2" />}
                    >
                      Від проблем з програмним забезпеченням, до ремонту чи
                      заміни деталей.
                    </ListItem>
                    <ListItem
                      href="/repair/laptops"
                      title="Ноутбуки"
                      icon={<Laptop className="h-4 w-4 mr-2" />}
                    >
                      Встановлення програм, фізичні пошкодження чи знос деталей.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Продаж</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem
                      href="/shop/new-phones"
                      title="Нові пристрої"
                      icon={<ShoppingBag className="h-4 w-4 mr-2" />}
                    >
                      Останні моделі з гарантією та аксесуарами
                    </ListItem>
                    <ListItem
                      href="/shop/used-phones"
                      title="Б/у пристрої"
                      icon={<Smartphone className="h-4 w-4 mr-2" />}
                    >
                      Якісні б/у пристрої за вигідними цінами
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Контакти
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Auth and Mode Toggle */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center gap-2">
            <Link href="/auth/login">
              <Button variant="outline" size="sm">
                Вхід
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm">Реєстрація</Button>
            </Link>
          </div>
          <ModeToggle />
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container px-4 py-4 space-y-4">
            <div className="flex flex-col space-y-3">
              <Link href="/repair/phones" className="flex items-center py-2">
                <Smartphone className="h-5 w-5 mr-2" />
                <span>Ремонт телефонів</span>
              </Link>
              <Link href="/repair/tablets" className="flex items-center py-2">
                <Tablet className="h-5 w-5 mr-2" />
                <span>Ремонт планшетів</span>
              </Link>
              <Link href="/repair/laptops" className="flex items-center py-2">
                <Laptop className="h-5 w-5 mr-2" />
                <span>Ремонт ноутбуків</span>
              </Link>
              <Link href="/shop/new-phones" className="flex items-center py-2">
                <ShoppingBag className="h-5 w-5 mr-2" />
                <span>Нові пристрої</span>
              </Link>
              <Link href="/shop/used-phones" className="flex items-center py-2">
                <Smartphone className="h-5 w-5 mr-2" />
                <span>Б/у пристрої</span>
              </Link>
              <Link href="/contact" className="flex items-center py-2">
                <span>Контакти</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 pt-2 border-t">
              <Link href="/auth/login">
                <Button variant="outline" size="sm" className="w-full">
                  Вхід
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="sm" className="w-full">
                  Реєстрація
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center text-sm font-medium leading-none">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
