import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "TechFix врятував мій день! Екран мого телефону був повністю розбитий, і вони замінили його протягом години. Відмінний сервіс і розумні ціни.",
    author: "Emily Johnson",
    role: "Marketing Specialist",
    avatar: "EJ",
    rating: 5,
  },
  {
    id: 2,
    content:
      "Я придбав відновлений iPhone у TechFix два роки тому, і він досі працює ідеально. Чудове співвідношення ціни та якості, і персонал дуже допоміг з вибором пристрою.",
    author: "Michael Rodriguez",
    role: "Software Developer",
    avatar: "MR",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Коли мій ноутбук не завантажувався, я думала, що втратила всі дані. Команда TechFix не лише виправила проблему, але й відновила всі важливі файли. Не можу передати свою вдячність!",
    author: "Sarah Thompson",
    role: "Graphic Designer",
    avatar: "ST",
    rating: 5,
  },
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Відгуки наших клієнтів
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Не вірте нам на слово. Ось що кажуть задоволені клієнти про наші
            послуги.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="pt-6 h-full flex flex-col">
                <RatingStars rating={testimonial.rating} />
                <blockquote className="mt-4 flex-grow">
                  <p className="text-lg">{testimonial.content}</p>
                </blockquote>
                <div className="mt-6 flex items-center">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="" alt={testimonial.author} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
