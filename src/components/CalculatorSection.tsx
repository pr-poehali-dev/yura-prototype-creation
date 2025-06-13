import { useState } from "react";
import Icon from "@/components/ui/icon";

const CalculatorSection = () => {
  const [amount, setAmount] = useState(1000000);
  const [activeTab, setActiveTab] = useState<"buy" | "sell">("buy");

  const calculatePrice = (virtAmount: number) => {
    const baseRate = 0.0005; // 0.5 рублей за 1000 виртов
    return Math.round(virtAmount * baseRate);
  };

  const formatVirts = (amount: number) => {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `${(amount / 1000).toFixed(0)}K`;
    }
    return amount.toString();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calculator */}
          <div className="bg-gradient-to-b from-gray-800/50 to-black/80 rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <span className="text-blue-400">Калькулятор</span> виртов
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">
                  Сумма виртов (₽)
                </label>
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="100000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>100K</span>
                  <span>10M</span>
                </div>
              </div>

              <div className="text-center p-6 bg-black/50 rounded-xl border border-gray-600/30">
                <div className="text-sm text-gray-400 mb-1">
                  Итого к оплате:
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {calculatePrice(amount)} ₽
                </div>
                <div className="text-gray-300">Курс: 1000 виртов = 0.5 ₽</div>
              </div>

              <div className="flex gap-4">
                <button
                  className={`flex-1 py-3 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    activeTab === "buy"
                      ? "bg-blue-500 text-white"
                      : "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                  }`}
                  onClick={() => setActiveTab("buy")}
                >
                  <Icon name="ShoppingCart" size={20} />
                  Купить
                </button>
                <button
                  className={`flex-1 py-3 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    activeTab === "sell"
                      ? "bg-blue-500 text-white"
                      : "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                  }`}
                  onClick={() => setActiveTab("sell")}
                >
                  <Icon name="TrendingUp" size={20} />
                  Продать
                </button>
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105">
                Рассчитать
              </button>
            </div>
          </div>

          {/* Sell Section */}
          <div className="bg-gradient-to-b from-green-800/30 to-black/80 rounded-2xl p-8 border border-green-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <span className="text-green-400">Продать</span> вирты
            </h3>

            <div className="text-center mb-8">
              <p className="text-gray-300 mb-4">
                Хотите обменять свои вирты на реальные деньги? Мы предлагаем
                лучший курс!
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-black/30 rounded-lg">
                <Icon name="CheckCircle" size={24} className="text-green-400" />
                <span className="text-gray-300">Высокий курс обмена</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-black/30 rounded-lg">
                <Icon name="CheckCircle" size={24} className="text-green-400" />
                <span className="text-gray-300">Мгновенный перевод</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-black/30 rounded-lg">
                <Icon name="CheckCircle" size={24} className="text-green-400" />
                <span className="text-gray-300">Безопасная сделка</span>
              </div>
            </div>

            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105">
              Продать вирты
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </section>
  );
};

export default CalculatorSection;
