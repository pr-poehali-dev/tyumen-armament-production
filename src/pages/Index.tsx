import { useState } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  {
    id: 1,
    type: "title",
    title: "Производство оружия в Тюменской области",
    subtitle: "Аналитический доклад",
    author: "Автор доклада",
    year: "2026",
  },
  {
    id: 2,
    type: "content",
    title: "Ключевые направления",
    points: [
      "Стрелковое оружие и боеприпасы",
      "Высокоточные системы вооружения",
      "Оборонно-промышленный комплекс региона",
      "Инновационные разработки предприятий",
      "Государственный оборонный заказ",
    ],
    image: "https://cdn.poehali.dev/projects/e0ffc37b-8009-44a6-ae31-a7e52fa4688c/files/a3b57566-fcc6-45cd-ac95-46443dd5026c.jpg",
  },
  {
    id: 3,
    type: "stats",
    title: "Статистика и факты",
    stats: [
      { value: "12+", label: "Предприятий ОПК" },
      { value: "₽45 млрд", label: "Объём производства" },
      { value: "18 000", label: "Рабочих мест" },
      { value: "30%", label: "Рост за 5 лет" },
    ],
    image: "https://cdn.poehali.dev/projects/e0ffc37b-8009-44a6-ae31-a7e52fa4688c/files/3b64e40c-16a9-4b6f-8270-a729e828fffd.jpg",
  },
  {
    id: 4,
    type: "photo",
    title: "Производственная база",
    description: "Современные предприятия оборонно-промышленного комплекса Тюменской области оснащены передовым оборудованием и обеспечивают выполнение государственного оборонного заказа.",
    image: "https://cdn.poehali.dev/projects/e0ffc37b-8009-44a6-ae31-a7e52fa4688c/files/2a13c348-3bf1-4a22-891a-d16ba543f536.jpg",
  },
  {
    id: 5,
    type: "final",
    title: "Выводы",
    points: [
      "Тюменская область — один из ключевых регионов ОПК России",
      "Стабильный рост производственных показателей",
      "Высокий кадровый и технологический потенциал",
      "Перспективы развития в рамках госпрограмм",
    ],
  },
];

export default function Index() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  const slide = slides[current];

  return (
    <div className="min-h-screen bg-[#f5f5f3] flex flex-col items-center justify-center p-4 font-sans">
      {/* Slide container */}
      <div className="w-full max-w-5xl bg-white shadow-sm rounded-sm overflow-hidden" style={{ aspectRatio: "16/9", minHeight: 0 }}>
        {slide.type === "title" && (
          <div className="h-full flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center px-16 py-12 bg-white">
              <div className="w-12 h-[2px] bg-gray-800 mb-10" />
              <h1 className="text-4xl font-light text-gray-900 text-center tracking-tight leading-tight mb-6">
                {slide.title}
              </h1>
              <p className="text-lg text-gray-400 font-light mb-12">{slide.subtitle}</p>
              <div className="w-12 h-[2px] bg-gray-800 mb-10" />
              <div className="flex gap-12 text-sm text-gray-500">
                <span>{slide.author}</span>
                <span>{slide.year}</span>
              </div>
            </div>
          </div>
        )}

        {slide.type === "content" && (
          <div className="h-full flex">
            <div className="flex-1 flex flex-col justify-center px-14 py-10">
              <div className="w-8 h-[2px] bg-gray-800 mb-6" />
              <h2 className="text-3xl font-light text-gray-900 mb-8">{slide.title}</h2>
              <ul className="space-y-4">
                {slide.points?.map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-600">
                    <span className="text-xs font-mono text-gray-300 mt-1">0{i + 1}</span>
                    <span className="text-base font-light leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-2/5 overflow-hidden">
              <img src={slide.image} alt="" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        )}

        {slide.type === "stats" && (
          <div className="h-full flex flex-col">
            <div className="flex-1 flex">
              <div className="flex-1 flex flex-col justify-center px-14 py-10">
                <div className="w-8 h-[2px] bg-gray-800 mb-6" />
                <h2 className="text-3xl font-light text-gray-900 mb-10">{slide.title}</h2>
                <div className="grid grid-cols-2 gap-8">
                  {slide.stats?.map((stat, i) => (
                    <div key={i} className="border-l border-gray-200 pl-5">
                      <div className="text-3xl font-light text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400 font-light">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-2/5 overflow-hidden">
                <img src={slide.image} alt="" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>
          </div>
        )}

        {slide.type === "photo" && (
          <div className="h-full relative">
            <img src={slide.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-14">
              <div className="w-8 h-[2px] bg-white mb-6" />
              <h2 className="text-3xl font-light text-white mb-6">{slide.title}</h2>
              <p className="text-white/80 text-base font-light leading-relaxed max-w-md">
                {slide.description}
              </p>
            </div>
          </div>
        )}

        {slide.type === "final" && (
          <div className="h-full flex flex-col items-center justify-center px-16 py-12 bg-gray-900">
            <div className="w-8 h-[2px] bg-white mb-8" />
            <h2 className="text-3xl font-light text-white mb-10">{slide.title}</h2>
            <ul className="space-y-4 w-full max-w-xl">
              {slide.points?.map((point, i) => (
                <li key={i} className="flex items-start gap-4 text-white/70">
                  <span className="text-xs font-mono text-white/30 mt-1">0{i + 1}</span>
                  <span className="text-base font-light leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6 mt-8">
        <button
          onClick={prev}
          disabled={current === 0}
          className="p-2 text-gray-400 hover:text-gray-900 disabled:opacity-20 transition-colors"
        >
          <Icon name="ChevronLeft" size={22} />
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-gray-900 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="p-2 text-gray-400 hover:text-gray-900 disabled:opacity-20 transition-colors"
        >
          <Icon name="ChevronRight" size={22} />
        </button>
      </div>

      <p className="text-gray-300 text-xs mt-3 font-mono">
        {current + 1} / {slides.length}
      </p>
    </div>
  );
}
