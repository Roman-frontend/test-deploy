"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  Phone,
  Clock,
  PenTool as Tool,
  Shield,
} from "lucide-react";
import BookingForm from "@/components/booking/booking-form";

export default function PhoneRepairPage() {
  const commonRepairs = [
    {
      title: "Заміна екрана",
      description:
        "Заміна тріснутих, розбитих або неактивних екранів на високоякісні деталі, що відповідають оригінальним характеристикам.",
      icon: <Phone className="h-5 w-5" />,
    },
    {
      title: "Заміна батареї",
      description:
        "Відновлення автономності телефону за допомогою нової батареї з тривалим терміном служби.",
      icon: <Tool className="h-5 w-5" />,
    },
    {
      title: "Ремонт після потрапляння вологи",
      description:
        "Спеціальне очищення та заміна компонентів для відновлення телефонів після контакту з водою.",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "Ремонт роз'єму зарядки",
      description:
        "Ремонт або заміна пошкоджених або розхитаних портів зарядки, які ускладнюють заряджання пристрою.",
      icon: <Tool className="h-5 w-5" />,
    },
    {
      title: "Ремонт камери",
      description:
        "Ремонт або заміна несправних фронтальних чи основних камер, що впливають на якість знімків.",
      icon: <Tool className="h-5 w-5" />,
    },
    {
      title: "Проблеми з динаміком і мікрофоном",
      description:
        "Усунення проблем зі звуком, таких як спотворення, низька гучність або несправність мікрофона.",
      icon: <Tool className="h-5 w-5" />,
    },
  ];

  const faqs = [
    {
      question: "Скільки часу займає ремонт телефону?",
      answer:
        "Найпоширеніші ремонти, наприклад, заміна екрана, займають 1-2 години. Складніші випадки можуть потребувати більше часу, але ми завжди повідомляємо точний термін до початку робіт.",
    },
    {
      question: "Чи використовуєте ви оригінальні запчастини?",
      answer:
        "Ми пропонуємо як оригінальні запчастини виробника, так і якісні аналоги. Усі варіанти та різницю в ціні ми обговорюємо перед початком ремонту.",
    },
    {
      question: "Чи безпечні мої дані під час ремонту?",
      answer:
        "Так, ми дуже серйозно ставимося до конфіденційності. Ваші особисті дані залишаються недоторканими. Ми рекомендуємо зробити резервну копію, але самі не маємо доступу до ваших даних.",
    },
    {
      question: "Чи даєте ви гарантію на ремонт?",
      answer:
        "Так, усі наші ремонти мають 90-денну гарантію на запчастини та роботу. Якщо протягом цього терміну виникнуть проблеми, ми усунемо їх безкоштовно.",
    },
    {
      question: "Які бренди телефонів ви ремонтуєте?",
      answer:
        "Ми обслуговуємо всі популярні бренди: Apple, Samsung, Google, LG, Motorola, OnePlus, Huawei та інші. Наші техніки мають досвід з різними пристроями.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-muted">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Професійний ремонт телефонів
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Від тріснутого екрана до заміни батареї — наші експерти
                повернуть ваш телефон до життя.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="#booking">Записатися на ремонт</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#repairs">Переглянути послуги</Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[300px] lg:h-[400px]">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Чому обирають наш сервіс ремонту
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Ми поєднуємо технічну експертизу з чудовим обслуговуванням
              клієнтів, щоб забезпечити найкращий досвід ремонту.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Tool className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">
                  Кваліфіковані техніки
                </h3>
                <p className="text-muted-foreground">
                  Наші сертифіковані техніки мають багаторічний досвід ремонту
                  всіх моделей телефонів.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Швидке виконання</h3>
                <p className="text-muted-foreground">
                  Більшість ремонтів виконується того ж дня, часто під час
                  очікування.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Гарантія 90 днів</h3>
                <p className="text-muted-foreground">
                  Усі наші ремонти покриваються 90-денною гарантією на
                  запчастини та роботу.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Якісні запчастини</h3>
                <p className="text-muted-foreground">
                  Ми використовуємо лише високоякісні запчастини, що
                  відповідають специфікаціям виробника.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Repairs */}
      <section id="repairs" className="py-16 bg-muted">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Поширені ремонти телефонів
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Ми усуваємо широкий спектр несправностей, щоб ваш пристрій
              працював як новий.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonRepairs.map((repair, index) => (
              <Card key={index} className="h-full">
                <CardContent className="pt-6 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-4">
                        {repair.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">
                          {repair.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {repair.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Запис на ремонт телефону
              </h2>
              <p className="text-muted-foreground mb-8">
                Заповніть форму, щоб записатися на ремонт. Ми підтвердимо запис
                і надамо всю необхідну інформацію.
              </p>

              <div className="space-y-6">
                <h3 className="text-xl font-medium">Поширені запитання</h3>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            <div>
              <BookingForm serviceType="Phone Repair" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Потрібна термінова допомога?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Для термінового ремонту або конкретних запитань щодо пристрою
            зв’яжіться з нами напряму.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Зв’язатися зараз</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
