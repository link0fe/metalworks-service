import ServiceCard from "./ServiceCard";

type Service = {
    id: number;
    title: string;
    description: string;
    imageUrl?: string;
    href: string;
};

const cardData: Service[] = [ 
    {
        id: 1,
        title: "Изготовление металлоконструкций",
        description: "Проектирование и изготовление металлических конструкций любой сложности.",
        imageUrl: "/metalworks.jpg",
        href: "/services/metal-structures"
    },
    {
        id: 2,
        title: "Сварочные работы",
        description: "Качественная сварка металлических конструкций.",
        imageUrl: "/welding.jpg",
        href: "/services/welding"
    },
    {
        id: 3,
        title: "Монтаж металлоконструкций",
        description: "Профессиональный монтаж металлических конструкций на объекте.",
        // imageUrl: "/services/installation.jpg",
        href: "/services/installation"
    },
];

export default function ServicesPreview() {

    return (
        <section className="bg-zinc-950 text-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold">Наши услуги</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {cardData.map((card) => (
                        <ServiceCard 
                            key={card.id} 
                            title={card.title} 
                            description={card.description}
                            imageUrl={card.imageUrl}
                            href={card.href}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}