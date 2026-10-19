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
            className="block h-full bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-orange-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 transition-colors"
        >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-zinc-300">{description}</p>
            {imageUrl && (
                <Image 
                    src={imageUrl} 
                    alt={title} 
                    width={600}
                    height={400}
                    className="mt-4 w-full h-auto rounded-lg"
                />
            )}
        </Link>
    )
}