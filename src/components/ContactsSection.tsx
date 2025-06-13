import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  const socialLinks = [
    {
      name: "Telegram",
      url: "https://t.me/luxuryrp",
      icon: "MessageCircle",
      color: "bg-blue-500 hover:bg-blue-600",
      description: "Быстрая связь",
    },
    {
      name: "ВКонтакте",
      url: "https://vk.com/luxuryrp",
      icon: "Users",
      color: "bg-blue-400 hover:bg-blue-500",
      description: "Сообщество",
    },
    {
      name: "Discord",
      url: "https://discord.gg/luxuryrp",
      icon: "Gamepad2",
      color: "bg-indigo-600 hover:bg-indigo-700",
      description: "Игровой чат",
    },
  ];

  return (
    <section id="contacts" className="py-16 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-orange-500">Купить</span> вирты
          </h2>
          <p className="text-gray-300 text-lg">
            Свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} text-white font-bold py-4 px-6 rounded-lg flex items-center space-x-3 transition-all duration-300 hover:scale-105 shadow-lg`}
            >
              <Icon name={link.icon as any} size={20} />
              <div className="text-left">
                <div className="font-semibold">{link.name}</div>
                <div className="text-xs opacity-80">{link.description}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center text-gray-300">
          <p className="mb-2">По всем вопросам пишите нам в поддержку:</p>
          <a
            href="mailto:support@luxuryrp.com"
            className="text-orange-500 hover:text-orange-400 font-semibold hover:underline"
          >
            support@luxuryrp.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
