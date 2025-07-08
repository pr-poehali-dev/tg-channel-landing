import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Icon name="Send" size={60} className="text-primary mx-auto mb-6" />
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

          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            <Icon name="ArrowRight" size={20} className="mr-2" />
            Присоединиться к каналу
          </Button>
        </div>
      </section>

      {/* About Channel Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              О канале
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Наш канал помогает людям развивать дисциплину, улучшать
              психологическое состояние и достигать финансовых целей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Icon
                  name="Brain"
                  size={48}
                  className="text-primary mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">Комьюнити</h3>
                <p className="text-muted-foreground">
                  Сообщество единомышленников для взаимной поддержки
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Icon
                  name="Target"
                  size={48}
                  className="text-primary mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">Дисциплина</h3>
                <p className="text-muted-foreground">
                  Практические методы развития самодисциплины
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Icon
                  name="Heart"
                  size={48}
                  className="text-primary mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">Психология</h3>
                <p className="text-muted-foreground">
                  Инструменты для работы с мышлением и эмоциями
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Icon
                  name="TrendingUp"
                  size={48}
                  className="text-primary mx-auto mb-4"
                />
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
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-primary/5 rounded-3xl p-12 border border-primary/20">
            <Icon name="Zap" size={60} className="text-primary mx-auto mb-6" />

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

            <Button
              size="lg"
              className="text-lg px-10 py-6 rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="Send" size={20} className="mr-2" />
              Подписаться на канал
            </Button>

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
