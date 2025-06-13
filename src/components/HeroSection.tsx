import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-orange-500">Купи вирты</span>
                <span className="text-white"> и</span>
                <br />
                <span className="text-white">стань королём </span>
                <span className="text-orange-500">Лос-</span>
                <br />
                <span className="text-orange-500">Сантоса</span>
              </h1>

              <div className="space-y-3 text-gray-300 text-lg max-w-lg">
                <p>
                  Мгновенная доставка, высокая безопасность и гарантия возврата.
                </p>
                <p>Начни свою криминальную империю уже сегодня!</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 shadow-lg shadow-orange-500/25">
                Выбрать пакет
                <Icon name="ArrowRight" size={20} />
              </button>

              <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-200 hover:scale-105">
                Как это работает?
              </button>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Main Dollar Circle */}
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex items-center justify-center shadow-2xl shadow-green-500/30 animate-pulse">
                <div className="text-8xl lg:text-9xl text-white font-bold">
                  $
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold animate-bounce delay-100">
                $
              </div>

              <div className="absolute -bottom-4 -right-8 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold animate-bounce delay-300">
                $
              </div>

              <div className="absolute top-1/2 -right-12 w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-bold animate-bounce delay-500">
                $
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
