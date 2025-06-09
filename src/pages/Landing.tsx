import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Landing = () => {
  const benefits = [
    {
      icon: "Palette",
      title: "Ручная работа",
      description:
        "Каждое изделие создается вручную опытным мастером с вниманием к деталям",
    },
    {
      icon: "Shield",
      title: "Безопасно для рыб",
      description:
        "Обожжено при высокой температуре, не влияет на химический состав воды",
    },
    {
      icon: "Leaf",
      title: "Натуральные материалы",
      description:
        "Используется только экологически чистая глина без вредных добавок",
    },
    {
      icon: "Heart",
      title: "Долговечность",
      description:
        "Изделия служат годами, не теряя форму и не разрушаясь в воде",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
    "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=400",
  ];

  const reviews = [
    {
      name: "Анна М.",
      text: "Потрясающие изделия! Рыбки сразу облюбовали новые пещерки. Качество на высоте.",
      rating: 5,
    },
    {
      name: "Дмитрий К.",
      text: "Заказывал амфору - выглядит просто шикарно в аквариуме. Никакого влияния на воду.",
      rating: 5,
    },
    {
      name: "Елена В.",
      text: "Коряга с мхом стала центром композиции. Очень натурально смотрится!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Герой-секция */}
      <section className="relative bg-gradient-to-br from-teal-50 to-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-teal-100 text-teal-800 border-teal-200">
                🏺 Ручная работа
              </Badge>
              <h1 className="text-5xl font-bold text-stone-900 mb-6 leading-tight">
                Превратите аквариум в
                <span className="text-teal-600"> произведение искусства</span>
              </h1>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                Уникальные глиняные изделия ручной работы создадут неповторимую
                атмосферу в вашем подводном мире. Безопасно для рыб, красиво для
                души.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  <Link to="/catalog">
                    <Icon name="ShoppingBag" className="mr-2" size={20} />
                    Смотреть каталог
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-stone-300"
                >
                  <Icon name="Play" className="mr-2" size={20} />
                  Как это делается
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600"
                alt="Глиняные изделия для аквариума"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Icon name="Award" className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">
                      100% натурально
                    </p>
                    <p className="text-sm text-stone-600">Безопасно для рыб</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Почему выбирают наши изделия
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Каждая деталь продумана для создания идеальной среды обитания
              ваших рыб
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-stone-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={benefit.icon as any}
                      className="text-teal-600"
                      size={32}
                    />
                  </div>
                  <h3 className="font-semibold text-stone-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-stone-600 text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Галерея работ */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Наши работы в аквариумах
            </h2>
            <p className="text-stone-600">
              Посмотрите, как преображаются подводные миры с нашими изделиями
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl"
              >
                <img
                  src={image}
                  alt={`Работа ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Что говорят наши клиенты
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-stone-200">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="text-yellow-400 fill-current"
                        size={20}
                      />
                    ))}
                  </div>
                  <p className="text-stone-600 mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-stone-900">
                    — {review.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы создать аквариум мечты?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Выберите изделия, которые подчеркнут красоту вашего подводного мира
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-teal-600 hover:bg-stone-50"
          >
            <Link to="/catalog">
              <Icon name="ArrowRight" className="mr-2" size={20} />
              Перейти в каталог
            </Link>
          </Button>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">🏺 Глиняные изделия</h3>
              <p className="text-stone-400">
                Создаем уникальные декорации для аквариумов уже более 10 лет
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-stone-400">
                <p>📞 +7 (999) 123-45-67</p>
                <p>✉️ info@clay-aqua.ru</p>
                <p>📍 Москва, ул. Мастеров, 15</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Гарантии</h4>
              <div className="space-y-2 text-stone-400">
                <p>✅ Безопасность для рыб</p>
                <p>✅ Гарантия качества</p>
                <p>✅ Доставка по России</p>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-400">
            <p>
              © 2024 Глиняные изделия для аквариума. Сделано с ❤️ для
              аквариумистов
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
