import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
    title: string;
    description: string;
    imageUrl?: string;
    href: string;
}

export default function ServiceCard({title, description, imageUrl, href}: ServiceCardProps) {
    return (
        <Link
            href={href} 
            className="group block h-full bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-orange-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 transition-colors overflow-hidden"
        >
            {imageUrl && (
                <Image 
                    src={imageUrl} 
                    alt={title} 
                    width={600}
                    height={400}
                    className="mb-4 w-full h-48 object-cover rounded-lg"
                />
            )}
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-zinc-300">{description}</p>
            <p className="mt-4 text-orange-500 group-hover:text-orange-400 group-focus-visible:text-orange-400 transition-colors">
                Подробнее →
            </p>
        </Link>
    )
}