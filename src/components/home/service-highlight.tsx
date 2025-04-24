import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface ServiceHighlightProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkHref: string;
}

const ServiceHighlight = ({
  icon,
  title,
  description,
  linkHref,
}: ServiceHighlightProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
            <div className="text-primary">{icon}</div>
          </div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex justify-center">
        <Button variant="ghost" asChild>
          <Link
            href={linkHref}
            className="group-hover:text-primary transition-colors flex items-center"
          >
            Дізнитись більше
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceHighlight;
