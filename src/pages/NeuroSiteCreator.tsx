import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Wand2 } from "lucide-react";

const NeuroSiteCreator = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState("");
  const [siteName, setSiteName] = useState("");

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Имитация запроса к API нейросети
    setTimeout(() => {
      setResult(`Ваш сайт "${siteName}" успешно создан! Вот код страницы: 
      
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>${siteName}</title>
  <style>
    body { font-family: Arial; color: #333; max-width: 1200px; margin: 0 auto; padding: 20px; }
    .header { text-align: center; margin-bottom: 40px; }
    .content { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
    @media (max-width: 768px) { .content { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <div class="header">
    <h1>${siteName}</h1>
    <p>Сайт создан с помощью нейросети</p>
  </div>
  <div class="content">
    <div>
      <h2>О нас</h2>
      <p>${prompt.substring(0, 150)}...</p>
    </div>
    <div>
      <h2>Наши преимущества</h2>
      <ul>
        <li>Качество</li>
        <li>Скорость</li>
        <li>Доступность</li>
      </ul>
    </div>
  </div>
</body>
</html>
      `);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="container px-4 py-8 max-w-6xl">
      <h1 className="text-4xl font-bold text-center mb-8">
        Создание сайта с помощью нейросети 🚀
      </h1>
      
      <p className="text-center mb-10 text-lg text-muted-foreground">
        Опишите, какой сайт вы хотите создать, и наша нейросеть сгенерирует его для вас!
      </p>
      
      <Card className="p-6 mb-8">
        <div className="mb-4">
          <label className="block mb-2 font-medium">Название сайта</label>
          <Input 
            placeholder="Введите название вашего сайта" 
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="mb-4"
          />
          
          <label className="block mb-2 font-medium">Ваш запрос</label>
          <Textarea 
            placeholder="Опишите подробно, какой сайт вы хотите создать..." 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-32 mb-4"
          />
        </div>
        
        <Button 
          onClick={handleGenerate} 
          className="w-full" 
          disabled={isGenerating || !prompt.trim() || !siteName.trim()}
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Генерация сайта...
            </>
          ) : (
            <>
              <Wand2 className="mr-2 h-4 w-4" />
              Создать сайт
            </>
          )}
        </Button>
      </Card>

      {result && (
        <Tabs defaultValue="preview" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Превью</TabsTrigger>
            <TabsTrigger value="code">Код сайта</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="p-4 border rounded-md">
            <div dangerouslySetInnerHTML={{ __html: result.split('<!DOCTYPE html>')[1] }} />
          </TabsContent>
          <TabsContent value="code">
            <pre className="p-4 bg-muted rounded-md overflow-auto max-h-96">
              <code>{result}</code>
            </pre>
            <div className="mt-4 flex justify-end">
              <Button>Скачать HTML</Button>
            </div>
          </TabsContent>
        </Tabs>
      )}
      
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Как это работает?</h2>
        <p className="text-muted-foreground mb-6">
          Просто опишите, какой сайт вы хотите создать, и наша нейросеть сгенерирует
          HTML-код сайта на основе вашего описания.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-md">
            <div className="text-3xl mb-2">✍️</div>
            <h3 className="font-medium mb-2">1. Опишите</h3>
            <p className="text-sm text-muted-foreground">
              Подробно опишите, какой сайт вы хотите создать
            </p>
          </div>
          <div className="p-4 border rounded-md">
            <div className="text-3xl mb-2">🤖</div>
            <h3 className="font-medium mb-2">2. Генерация</h3>
            <p className="text-sm text-muted-foreground">
              Нейросеть анализирует запрос и создает сайт
            </p>
          </div>
          <div className="p-4 border rounded-md">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="font-medium mb-2">3. Готово!</h3>
            <p className="text-sm text-muted-foreground">
              Скачайте готовый HTML-код вашего сайта
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuroSiteCreator;
