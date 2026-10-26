import { cardData } from "../../../data/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import ContactCTA from "../../../components/ContactCTA";

type ServicePageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = cardData.find((item) => item.slug === slug);

    if (!service) {
        notFound();
    }

    return {
        title: `${service.title} | Welding Service`,
        description: service.description,
    };  
}

export function generateStaticParams() {
    return cardData.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = cardData.find((item) => item.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="bg-zinc-950 text-white py-20 px-4 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-4 md:text-5xl">{service.title}</h1>
                <p className="text-lg max-w-2xl">{service.description}</p>
                {service.fullDescription && (
                    <p className="text-zinc-300 leading-relaxed mt-6">{service.fullDescription}</p>
                )}
                {service.imageUrl && (
                                <Image 
                                    src={service.imageUrl} 
                                    alt={service.title} 
                                    width={600}
                                    height={400}
                                    className="mt-8 w-full max-h-[500px] object-cover rounded-xl"
                                />
                            )}
                <ContactCTA/>
            </div>
        </main>
    );
}