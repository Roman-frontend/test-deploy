"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email({
    message: "Будь ласка, введіть правильний email.",
  }),
  password: z.string().min(6, {
    message: "Пароль повинен бути не менше 6 символів.",
  }),
});

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);

      // For demo purposes, let's say admin@techfix.com logs in as admin
      if (values.email === "admin@techfix.com") {
        toast({
          title: "Вхід, як адміністратора виконано успішно",
          description: "Вітаю в розділі адміністратора!",
        });
        router.push("/admin/dashboard");
      } else {
        toast({
          title: "Ви вийшли зі свого акаунта",
          description: "З поверненням на головну сторінку ТехФікс!",
        });
        router.push("/");
      }
    }, 1500);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-md w-full space-y-8 bg-background p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Вітаємо в ТехФікс</h1>
          <p className="mt-2 text-muted-foreground">
            Вхід до вашого ТехФікс акаунта
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Електронна пошта</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Пароль</FormLabel>
                    <Link
                      href="/auth/forgot-password"
                      className="text-sm text-primary hover:underline"
                    >
                      Забули пароль?
                    </Link>
                  </div>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Виконується вхід...
                </>
              ) : (
                "Log in"
              )}
            </Button>
          </form>
        </Form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {`Не маєте акаунта? `}
            <Link href="/auth/signup" className="text-primary hover:underline">
              Реєстрація
            </Link>
          </p>
        </div>

        <div className="flex items-center justify-center my-6">
          <div className="w-full border-t border-muted"></div>
          <div className="px-4 text-xs text-muted-foreground">або</div>
          <div className="w-full border-t border-muted"></div>
        </div>

        <div className="space-y-3">
          <Button variant="outline" className="w-full" disabled={isLoading}>
            Продовжити з Google
          </Button>
          {/* <Button variant="outline" className="w-full" disabled={isLoading}>
            Continue with Apple
          </Button> */}
        </div>
      </div>
    </div>
  );
}
