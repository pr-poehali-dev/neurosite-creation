import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SitePreview from "@/components/SitePreview";
import FeatureList from "@/components/FeatureList";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSite, setGeneratedSite] = useState<string | null>(null);

  const handleGenerateSite = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Симуляция генерации (в реальном приложении здесь будет API запрос к нейросети)
    setTimeout(() => {
      setGeneratedSite(`
        <div style="font-family: Arial; max-width: 1200px; margin: 0 auto; padding: 20px;">
          <header style="text-align: center; margin-bottom: 40px;">
            <h1 style="color: #7e22ce; font-size: 36px;">Сгенерированный сайт</h1>
            <p>На основе запроса: "${prompt}"</p>
          </header>
          <main>
            <section style="background-color: #f3f4f6; padding: 30px; border-radius: 8px; margin-bottom: 30px;">
              <h2 style="color: #4c1d95;">Основной контент</h2>
              <p>Здесь будет располагаться основной контент вашего сайта, сгенерированный нейросетью.</p>
            </section>
          </main>
        </div>
      `);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <a className="font-bold flex items-center" href="/">
              <svg 
                viewBox="0 0 24 24" 
                className="w-6 h-6 mr-2 text-primary"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m7 10 2 2 6-6"></path>
                <path d="m18 14-2-2-6 6"></path>
              </svg>
              НейроСайт
            </a>
          </div>
          <nav className="ml-auto flex gap-4 items-center">
            <a className="text-sm font-medium hover:text-primary" href="#features">Возможности</a>
            <a className="text-sm font-medium hover:text-primary" href="#generator">Генератор</a>
            <Button variant="outline" size="sm" className="mr-2">Войти</Button>
            <Button size="sm">Регистрация</Button>
          </nav>
        </div>
      </header>

      <HeroSection />

      <section id="features" className="py-16 container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Возможности нашего сервиса</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            С помощью искусственного интеллекта мы поможем вам создать веб-сайт за несколько минут
          </p>
        </div>
        
        <FeatureList />
      </section>

      <section id="generator" className="py-16 bg-accent">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Создайте свой сайт прямо сейчас</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              Просто опишите, что вы хотите получить, и наша нейросеть сгенерирует веб-сайт
            </p>
          </div>
          
          <Tabs defaultValue="generator" className="max-w-[1000px] mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="generator">Генератор</TabsTrigger>
              <TabsTrigger value="preview">Предпросмотр</TabsTrigger>
            </TabsList>
            
            <TabsContent value="generator">
              <Card>
                <CardHeader>
                  <CardTitle>Опишите ваш будущий сайт</CardTitle>
                  <CardDescription>
                    Чем детальнее будет ваш запрос, тем точнее будет результат.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Textarea 
                        placeholder="Например: Мне нужен сайт для кофейни с меню, ценами и контактами. В стиле минимализм с теплыми коричневыми тонами."
                        className="min-h-[120px]"
                        value={prompt} 
                        onChange={(e) => setPrompt(e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={handleGenerateSite} 
                    disabled={isGenerating || !prompt.trim()}
                    className="w-full"
                  >
                    {isGenerating ? "Генерация..." : "Сгенерировать сайт"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="preview">
              <Card>
                <CardHeader>
                  <CardTitle>Предпросмотр сайта</CardTitle>
                  <CardDescription>
                    Здесь вы увидите результат генерации.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <SitePreview htmlContent={generatedSite} />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Начать заново</Button>
                  <Button disabled={!generatedSite}>Скачать HTML</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 НейроСайт. Все права защищены.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">О нас</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Блог</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;