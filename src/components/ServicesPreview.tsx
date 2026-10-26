import ServiceCard from "./ServiceCard";
import { cardData } from "../data/services";


export default function ServicesPreview() {
    // need to add a section with a title and a grid of ServiceCard components, using the cardData array to populate the cards
    return (
        <section className="bg-zinc-950 text-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold">Наши услуги</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {cardData.map((card) => (
                        <ServiceCard 
                            key={card.slug} 
                            title={card.title} 
                            description={card.description}
                            imageUrl={card.imageUrl}
                            href={`/services/${card.slug}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}