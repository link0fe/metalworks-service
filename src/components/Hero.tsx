import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-zinc-900 text-white py-16 px-4">
            <div className="max-w-6xl mx-auto flex flex-col gap-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                    - СВАРОЧНЫЕ РАБОТЫ В ЛАТВИИ
                </p>
                <h1 className="text-4xl md:text-6xl font-bold">
                    Надёжные металлоконструкции. Качественная сварка.
                </h1>
                <p className="text-lg text-zinc-300">
                    Изготовление, сварка и монтаж металлических конструкций для частных и корпоративных заказчиков.
                </p>
           
            <Image 
                src="/metalworks.jpg"
                alt="Сварочные работы и изготовление металлоконструкций"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
                className="w-full h-auto rounded-lg" 
            />
            {/* <div className="flex flex-col sm:flex-row gap-4 mt-6">     */}
                <Link href="/contact" className="px-6 py-3 bg-orange-500 text-zinc-50 rounded-md hover:bg-zinc-700 transition-colors">
                    Обсудить проект
                </Link>
                <Link
                    href="/projects"
                    className="px-6 py-3 bg-zinc-800 text-zinc-50 rounded-md hover:bg-zinc-700 transition-colors"
                >
                    Наши работы →
                </Link>
            </div>
        </section>
    )
}