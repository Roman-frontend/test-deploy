import React from "react";
import Link from "next/link";
import {
  Smartphone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-muted">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ТехФікс</h3>
            <p className="text-muted-foreground mb-4">
              Ваш надійний партнер з продажу та ремонту мобільних пристроїв.
              Гарантія якісної роботи.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Послуги</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/repair/phones"
                  className="text-muted-foreground hover:text-primary"
                >
                  Ремонт телефонів
                </Link>
              </li>
              <li>
                <Link
                  href="/repair/tablets"
                  className="text-muted-foreground hover:text-primary"
                >
                  Ремонт планшетів
                </Link>
              </li>
              <li>
                <Link
                  href="/repair/laptops"
                  className="text-muted-foreground hover:text-primary"
                >
                  Ремонт ноутбуків
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/new-phones"
                  className="text-muted-foreground hover:text-primary"
                >
                  Нові телефони
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/used-phones"
                  className="text-muted-foreground hover:text-primary"
                >
                  Вживані телефони
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Швидкі посилання</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  Про нас
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  {`Зв'язатися з нами`}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary"
                >
                  Політика конфіденційності
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-muted-foreground hover:text-primary"
                >
                  Умови використання
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-primary"
                >
                  Поширені запитання
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контактна інформація</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span className="text-muted-foreground">
                  123 Tech Street, San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Smartphone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">
                  support@techfix.com
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <div className="text-muted-foreground">
                  <p>Пн-Пт: 9:00 - 19:00</p>
                  <p>Сб: 10:00 - 17:00</p>
                  <p>Нд: Вихідний</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-muted-foreground text-sm">
          <p>
            &copy; {new Date().getFullYear()} ТехФікс Електронікс. Всі права
            захищено.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
