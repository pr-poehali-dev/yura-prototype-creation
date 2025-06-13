import Icon from "@/components/ui/icon";

const PricingSection = () => {
  const packages = [
    {
      name: "Базовый",
      price: "$500K",
      originalPrice: "300,000 виртов",
      delivery: "Доставка за 5 минут",
      features: ["Полная безопасность", "Поддержка 24/7"],
      buttonText: "Купить за 299₽",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      popular: false,
    },
    {
      name: "Премиум",
      price: "$2M",
      originalPrice: "2,000,000 виртов",
      delivery: "Доставка за 5 минут",
      features: [
        "Полная безопасность",
        "Поддержка 24/7",
        "Бонус +10%",
        "Приоритет в очереди",
      ],
      buttonText: "Купить за 999₽",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      popular: true,
    },
    {
      name: "VIP",
      price: "$5M",
      originalPrice: "5,000,000 виртов",
      delivery: "Доставка за 5 минут",
      features: [
        "Макс. безопасность",
        "Поддержка 24/7",
        "Бонус +20%",
        "Персональный менеджер",
        "Эксклюзивные предложения",
      ],
      buttonText: "Купить за 2,299₽",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      popular: false,
      exclusive: true,
    },
  ];

  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-orange-500">Эксклюзивные</span> предложения
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Выбери свой путь к богатству в Лос-Сантосе. Все пакеты включают
            мгновенную доставку и 100% безопасность.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                pkg.exclusive
                  ? "border-purple-500/50 bg-gradient-to-b from-purple-900/20 to-black"
                  : "border-orange-500/30 bg-gradient-to-b from-gray-900/50 to-black"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    ЛУЧШЕЕ ПРЕДЛОЖЕНИЕ
                  </span>
                </div>
              )}

              {pkg.exclusive && (
                <div className="absolute -top-4 right-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ЭКСКЛЮЗИВ
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <div className="text-4xl font-bold mb-2">
                  <span
                    className={
                      pkg.exclusive ? "text-purple-400" : "text-orange-400"
                    }
                  >
                    {pkg.price}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-1">
                  {pkg.originalPrice}
                </p>
                <p className="text-gray-400 text-sm">{pkg.delivery}</p>
              </div>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-400 flex-shrink-0"
                    />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 ${pkg.buttonColor}`}
              >
                {pkg.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
