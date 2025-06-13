import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const stats = [
    {
      icon: "Calendar",
      title: "Работаем с 2020",
      description: "Более 3 лет опыта",
    },
    {
      icon: "Users",
      title: "5000+ клиентов",
      description: "Довольных игроков",
    },
    { icon: "Coins", title: "50M+ виртов", description: "Успешно доставлено" },
    {
      icon: "ThumbsUp",
      title: "98% довольных",
      description: "Положительных отзывов",
    },
  ];

  const advantages = [
    {
      icon: "Shield",
      title: "Гарантия безопасности",
      description:
        "Используем только проверенные методы доставки. Ваш аккаунт в полной безопасности - 0 банов за всю историю работы.",
    },
    {
      icon: "Clock",
      title: "Мгновенная доставка",
      description:
        "Среднее время доставки - 4 минуты 37 секунд. В 95% случаев доставляем менее чем за 5 минут.",
    },
    {
      icon: "Star",
      title: "Эксклюзивные бонусы",
      description:
        "Постоянные клиенты получают персональные предложения, увеличенные бонусы и привилегии.",
    },
  ];

  return (
    <section id="about" className="py-16 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-orange-500">Наши</span> преимущества
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - About */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/80 p-8 rounded-2xl border border-orange-500/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
                  Почему Luxury RP?
                </span>
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Мы - команда профессионалов, которая уже более 3 лет помогает
                игрокам воплощать мечты в виртуальном мире Лос-Сантоса. Наши
                клиенты - это наша главная ценность.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                  >
                    <div className="text-orange-500 text-2xl mb-2">
                      <Icon name={stat.icon as any} size={24} />
                    </div>
                    <h4 className="font-bold text-white">{stat.title}</h4>
                    <p className="text-gray-400 text-sm">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Advantages */}
          <div className="space-y-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-orange-500 text-3xl">
                    <Icon name={advantage.icon as any} size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-300">{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl" />
    </section>
  );
};

export default AboutSection;
