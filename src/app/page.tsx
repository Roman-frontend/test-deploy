"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Clock,
  Award,
  PenTool as Tool,
  Smartphone,
  Tablet,
  Laptop,
  Zap,
} from "lucide-react";
import HomepageHero from "@/components/home/hero";
import ServiceHighlight from "@/components/home/service-highlight";
import TestimonialSection from "@/components/home/testimonial-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomepageHero />

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Наші послуги</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Від заміни екрану до повного відновлення пристрою.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceHighlight
              icon={<Smartphone className="h-8 w-8" />}
              title="Ремонт телефону"
              description="Заміна екрану, усуненя проблем зарядки, відновлення після води та інших несправностей."
              linkHref="/repair/phones"
            />
            <ServiceHighlight
              icon={<Tablet className="h-8 w-8" />}
              title="Ремонт планшета"
              description="Професійний ремонт планшетів iPad і Android."
              linkHref="/repair/tablets"
            />
            <ServiceHighlight
              icon={<Laptop className="h-8 w-8" />}
              title="Ремонт ноутбука"
              description="Діагностика обладнання, заміна компонентів, проблеми з програмним забезпеченням і відновлення даних."
              linkHref="/repair/laptops"
            />
            <ServiceHighlight
              icon={<Zap className="h-8 w-8" />}
              title="Швидкі ремонти"
              description="Багато поширених проблем можна усунути, поки ви чекаєте - поверніться до своїх справ швидше."
              linkHref="/quick-repairs"
            />
            <ServiceHighlight
              icon={<Smartphone className="h-8 w-8" />}
              title="Вживані телефони"
              description="Якісні відновлені пристрої за вигідними цінами, всі повністю протестовані та з гарантією."
              linkHref="/shop/used-phones"
            />
            <ServiceHighlight
              icon={<Tool className="h-8 w-8" />}
              title="Аксесуари"
              description="Чохли, захисні плівки, зарядні пристрої та інше для всіх ваших пристроїв."
              linkHref="/accessories"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Чому обирають нас
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Досвідчені техніки, якісні запчастини та чудовий сервіс — ось чому
              нас обирають.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">90 днів гарантії</h3>
                  <p className="text-muted-foreground text-sm">
                    Усі наші ремонти мають 90-денну гарантію, щоб ви були
                    спокійні.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Швидкий ремонт</h3>
                  <p className="text-muted-foreground text-sm">
                    Більшість ремонтів виконується того ж дня, часто за час
                    вашого очікування.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">
                    Кваліфіковані техніки
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Наші сертифіковані фахівці мають багаторічний досвід роботи
                    з усіма пристроями.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                    <Tool className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">
                    Якісні запчастини
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Ми використовуємо лише високоякісні запчастини для всіх
                    ремонтів.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Готові полагодити ваш пристрій?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Не дозволяйте поламаному пристрою сповільнювати вас. Наші експерти
            готові допомогти вам уже сьогодні.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              {/* <Button size="lg" asChild variant="secondary"> */}
              <Link href="/contact">{`Зв'язатися з нами`}</Link>
            </Button>
            <Button asChild>
              {/* <Button size="lg" asChild> */}
              <Link href="/booking">Замовити ремонт</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
