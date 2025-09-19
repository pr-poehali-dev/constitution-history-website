import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  significance: 'major' | 'minor';
}

interface Document {
  id: number;
  title: string;
  date: string;
  description: string;
  type: 'constitution' | 'law' | 'declaration';
  image: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '1906',
    title: 'Основные государственные законы Российской империи',
    description: 'Первая российская конституция, принятая в период Первой русской революции.',
    significance: 'major'
  },
  {
    year: '1918',
    title: 'Конституция РСФСР',
    description: 'Первая советская конституция, принятая V Всероссийским съездом Советов.',
    significance: 'major'
  },
  {
    year: '1924',
    title: 'Конституция СССР',
    description: 'Первая конституция Союза Советских Социалистических Республик.',
    significance: 'major'
  },
  {
    year: '1936',
    title: 'Сталинская конституция',
    description: 'Конституция СССР, провозгласившая построение социализма в стране.',
    significance: 'major'
  },
  {
    year: '1977',
    title: 'Брежневская конституция',
    description: 'Конституция развитого социализма, действовавшая до распада СССР.',
    significance: 'major'
  },
  {
    year: '1993',
    title: 'Конституция Российской Федерации',
    description: 'Действующая конституция России, принятая всенародным голосованием.',
    significance: 'major'
  }
];

const documents: Document[] = [
  {
    id: 1,
    title: 'Основные государственные законы 1906 года',
    date: '23 апреля 1906',
    description: 'Первая российская конституция, ограничившая самодержавие и установившая основы конституционной монархии.',
    type: 'constitution',
    image: '/img/4ee919ed-b0fa-4a82-af6c-153dbf9df49e.jpg'
  },
  {
    id: 2,
    title: 'Конституция РСФСР 1918 года',
    date: '10 июля 1918',
    description: 'Первая советская конституция, закрепившая диктатуру пролетариата и основы советской власти.',
    type: 'constitution',
    image: '/img/627184f5-0f6e-4732-b42f-fede8b2082ef.jpg'
  },
  {
    id: 3,
    title: 'Конституция РФ 1993 года',
    date: '12 декабря 1993',
    description: 'Действующая конституция Российской Федерации, принятая всенародным референдумом.',
    type: 'constitution',
    image: '/img/823c4202-a066-4d50-905e-a9513a98a363.jpg'
  }
];

function Index() {
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Scroll" size={24} className="text-primary" />
              <h1 className="text-xl font-bold text-foreground">История Конституции</h1>
            </div>
            <div className="flex space-x-6">
              <button onClick={() => scrollToSection('main')} className="text-muted-foreground hover:text-foreground transition-colors">Главная</button>
              <button onClick={() => scrollToSection('timeline')} className="text-muted-foreground hover:text-foreground transition-colors">Хронология</button>
              <button onClick={() => scrollToSection('documents')} className="text-muted-foreground hover:text-foreground transition-colors">Документы</button>
              <button onClick={() => scrollToSection('gallery')} className="text-muted-foreground hover:text-foreground transition-colors">Галерея</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="main" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              Историческое наследие
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              История появления<br />
              <span className="text-primary">Конституции России</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Путешествие через века конституционного развития России — от первых основных законов 
              до современной Конституции Российской Федерации
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection('timeline')}>
              <Icon name="BookOpen" size={20} className="mr-2" />
              Изучить хронологию
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('documents')}>
              <Icon name="Image" size={20} className="mr-2" />
              Посмотреть документы
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Хронология событий</h2>
            <p className="text-muted-foreground text-lg">
              Ключевые этапы конституционного развития России
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={event.year} className="relative flex items-start ml-16">
                  {/* Timeline dot */}
                  <div className={`absolute -left-20 w-4 h-4 rounded-full border-2 bg-background ${
                    event.significance === 'major' ? 'border-primary' : 'border-muted-foreground'
                  }`}></div>
                  
                  <Card className="flex-1 hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <Badge variant={event.significance === 'major' ? 'default' : 'secondary'}>
                          {event.year}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Исторические документы</h2>
            <p className="text-muted-foreground text-lg">
              Изучите оригинальные тексты и документы
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">Все документы</TabsTrigger>
              <TabsTrigger value="constitution">Конституции</TabsTrigger>
              <TabsTrigger value="law">Законы</TabsTrigger>
              <TabsTrigger value="declaration">Декларации</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documents.map((doc) => (
                  <Card key={doc.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => setSelectedDocument(doc)}>
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img 
                        src={doc.image} 
                        alt={doc.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary">{doc.type}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{doc.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{doc.date}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-3">{doc.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="constitution" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documents.filter(doc => doc.type === 'constitution').map((doc) => (
                  <Card key={doc.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img 
                        src={doc.image} 
                        alt={doc.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{doc.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{doc.date}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Галерея</h2>
            <p className="text-muted-foreground text-lg">
              Исторические фотографии и иллюстрации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img 
                  src={doc.image} 
                  alt={`Историческое изображение ${index + 1}`}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <Button variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="ZoomIn" size={16} className="mr-2" />
                    Увеличить
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Scroll" size={24} className="text-primary" />
            <h3 className="text-xl font-bold">История Конституции</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Изучение конституционного развития России через века
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">О проекте</a>
            <a href="#" className="hover:text-foreground transition-colors">Источники</a>
            <a href="#" className="hover:text-foreground transition-colors">Контакты</a>
          </div>
        </div>
      </footer>

      {/* Document Modal */}
      {selectedDocument && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
             onClick={() => setSelectedDocument(null)}>
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>{selectedDocument.title}</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setSelectedDocument(null)}>
                <Icon name="X" size={16} />
              </Button>
            </CardHeader>
            <CardContent>
              <img 
                src={selectedDocument.image} 
                alt={selectedDocument.title}
                className="w-full rounded-lg mb-4"
              />
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{selectedDocument.date}</p>
                <p>{selectedDocument.description}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Index;