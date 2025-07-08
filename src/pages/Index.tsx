import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
              <div className="relative bg-white p-6 rounded-full telegram-shadow">
                <Icon name="Send" size={60} className="text-primary" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Прокачиваем мышление,
            <br />
            <span className="text-primary">даём стратегию</span>
            <br />и доводим до прибыли
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Комьюнити для развития дисциплины и психологии. Присоединяйтесь к
            сообществу единомышленников
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full telegram-gradient hover:opacity-90 transition-all duration-300 transform hover:scale-105 telegram-shadow"
              onClick={() =>
                window.open("https://t.me/+QgiLIa1gFRY4Y2Iy", "_blank")
              }
            >
              <Icon name="Send" size={20} className="mr-2" />
              Присоединиться к каналу
            </Button>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              🔥 12K+ подписчиков
            </Badge>
          </div>
        </div>
      </section>

      {/* About Channel Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              📊 Что вас ждет в канале
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              О канале
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Наш канал помогает людям развивать дисциплину, улучшать
              психологическое состояние и достигать финансовых целей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="telegram-card telegram-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Комьюнити</h3>
                <p className="text-muted-foreground">
                  Сообщество единомышленников для взаимной поддержки
                </p>
              </CardContent>
            </Card>

            <Card className="telegram-card telegram-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Дисциплина</h3>
                <p className="text-muted-foreground">
                  Практические методы развития самодисциплины
                </p>
              </CardContent>
            </Card>

            <Card className="telegram-card telegram-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Brain" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Психология</h3>
                <p className="text-muted-foreground">
                  Инструменты для работы с мышлением и эмоциями
                </p>
              </CardContent>
            </Card>

            <Card className="telegram-card telegram-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Развитие</h3>
                <p className="text-muted-foreground">
                  Стратегии личностного роста и достижения целей
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-background" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="telegram-card rounded-3xl p-12 telegram-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 telegram-gradient" />
            <div className="relative bg-white p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 telegram-shadow">
              <Icon name="MessageCircle" size={40} className="text-primary" />
            </div>

            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Готовы изменить свою жизнь?
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам людей, которые уже трансформируют свое
              мышление и достигают новых высот
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center text-muted-foreground">
                <Icon name="Users" size={20} className="mr-2" />
                <span>12,000+ подписчиков</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Icon name="Star" size={20} className="mr-2" />
                <span>Ежедневный контент</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Icon name="Shield" size={20} className="mr-2" />
                <span>Проверенные методики</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-10 py-6 rounded-full telegram-gradient hover:opacity-90 transition-all duration-300 transform hover:scale-105 telegram-shadow"
                onClick={() =>
                  window.open("https://t.me/+QgiLIa1gFRY4Y2Iy", "_blank")
                }
              >
                <Icon name="Send" size={20} className="mr-2" />
                Подписаться на канал
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 rounded-full border-primary/20 hover:bg-primary/5 transition-all duration-300"
                onClick={() =>
                  window.open("https://t.me/+QgiLIa1gFRY4Y2Iy", "_blank")
                }
              >
                <Icon name="Eye" size={20} className="mr-2" />
                Предварительный просмотр
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Бесплатно • Без спама • Отписка в любой момент
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
