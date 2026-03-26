import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Lightbulb",
    title: "Световая реклама",
    description:
      "Объёмные буквы, лайтбоксы, световые короба, неоновые вывески — привлекаем внимание к вашему бизнесу днём и ночью. Изготавливаем любые форматы под ваш фасад и фирменный стиль.",
  },
  {
    icon: "Printer",
    title: "Широкоформатная и интерьерная печать",
    description:
      "Печать на баннерах, плёнках и других материалах. Оформление витрин, офисов, торговых залов — яркая графика больших размеров с чёткой детализацией.",
  },
  {
    icon: "LayoutDashboard",
    title: "Таблички и указатели",
    description:
      "Кабинетные и адресные таблички, указатели навигации — изготавливаем из металла, акрила и пластика. Стильное и функциональное решение для офиса, склада или торгового центра.",
  },
  {
    icon: "BookOpen",
    title: "Информационные стенды",
    description:
      "Уголки потребителя, доски объявлений, информационные стенды любых конфигураций. Соответствуем требованиям законодательства и корпоративному стилю.",
  },
  {
    icon: "Scissors",
    title: "Плоттерная резка",
    description:
      "Резка виниловых плёнок для оформления витрин, логотипы, наклейки на авто. Рабочая ширина плоттера — 1300 мм. Точный рез любой сложности.",
  },
  {
    icon: "FileText",
    title: "Полиграфия и дизайн",
    description:
      "Визитки, листовки, штендеры стандартных и нестандартных размеров. Также разрабатываем дизайн-макеты с нуля — от идеи до готового файла в печать.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наши услуги
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Всё для вашей <span className="text-primary">рекламы</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Полный цикл производства рекламы — от разработки макета до монтажа готовой конструкции.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} fallback="Star" className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
