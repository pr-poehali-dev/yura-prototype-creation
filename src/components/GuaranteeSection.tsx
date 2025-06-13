import Icon from "@/components/ui/icon";

const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 rounded-2xl p-8 border border-yellow-500/30 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Icon name="Shield" size={32} className="text-yellow-400" />
            <h3 className="text-2xl font-bold text-white">
              <span className="text-yellow-400">🔒 Гарантия</span> возврата
              средств
            </h3>
          </div>

          <div className="text-center">
            <p className="text-gray-300 text-lg leading-relaxed">
              Если вирты не будут доставлены в течение{" "}
              <strong className="text-yellow-400">30 минут</strong> - мы вернём
              вам деньги в полном объёме.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Clock" size={28} className="text-yellow-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">30 минут</h4>
              <p className="text-gray-400 text-sm">
                Максимальное время доставки
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="RefreshCw" size={28} className="text-yellow-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">100% возврат</h4>
              <p className="text-gray-400 text-sm">Полное возмещение средств</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon
                  name="HeadphonesIcon"
                  size={28}
                  className="text-yellow-400"
                />
              </div>
              <h4 className="font-semibold text-white mb-2">24/7 поддержка</h4>
              <p className="text-gray-400 text-sm">Круглосуточная помощь</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
