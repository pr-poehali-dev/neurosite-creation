import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-accent to-background">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Создайте свой сайт с помощью <span className="text-primary">нейросети</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mb-10">
          Просто опишите, что вы хотите увидеть, и наш сервис сгенерирует для вас 
          готовый веб-сайт за считанные минуты. Никакого кода, только ваши идеи.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="px-8" asChild>
            <a href="#generator">Создать сайт</a>
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            Узнать больше
          </Button>
        </div>
        <div className="mt-16 max-w-[900px] w-full bg-card rounded-lg border shadow-lg overflow-hidden">
          <img 
            src="/placeholder.svg" 
            alt="Демонстрация сервиса" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;