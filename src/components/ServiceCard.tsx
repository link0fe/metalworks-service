import Image from "next/image";

type ServiceCardProps = {
    title: string;
    description: string;
    imageUrl?: string;
}

export default function ServiceCard({title, description, imageUrl}: ServiceCardProps) {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-orange-500 transition-colors">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-zinc-300">{description}</p>
            {imageUrl && (
                <Image 
                    src={imageUrl} 
                    alt="Image" 
                    width={600}
                    height={400}
                    className="mt-4 w-full h-auto rounded-lg"
                />
            )}
        </div>
    )
}