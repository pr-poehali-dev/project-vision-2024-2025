import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Световые объёмные буквы",
    category: "Световая реклама",
    image: "/placeholder.jpg",
    description:
      "Изготовление и монтаж объёмных световых букв для фасада торгового центра. Акриловые грани, светодиодная подсветка, полноцветная окраска.",
    tags: ["Объёмные буквы", "LED", "Фасад"],
  },
  {
    title: "Оформление витрины",
    category: "Плоттерная резка",
    image: "/placeholder.jpg",
    description:
      "Брендирование витрины магазина одежды: резка матовой плёнки с логотипом и декоративными элементами. Ширина плоттера 1300 мм.",
    tags: ["Плёнка", "Витрина", "Плоттерная резка"],
  },
  {
    title: "Информационный стенд",
    category: "Стенды и таблички",
    image: "/placeholder.jpg",
    description:
      "Уголок потребителя и навигационные указатели для офисного центра. Акрил, металлические держатели, полноцветная печать вставок.",
    tags: ["Уголок потребителя", "Акрил", "Навигация"],
  },
  {
    title: "Рекламный баннер",
    category: "Широкоформатная печать",
    image: "/placeholder.jpg",
    description:
      "Полноцветная печать баннера 6×3 м для наружной рекламы кафе. Литая ПВХ-ткань, обварка краёв, установка люверсов.",
    tags: ["Баннер", "Наружная реклама", "Широкоформат"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши работы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Примеры выполненных проектов — от небольших табличек до крупных световых конструкций.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
