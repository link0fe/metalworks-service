import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-zinc-800 text-zinc-50 py-4">
            <div className="flex items-center justify-between container mx-auto px-4">
                <p className="text-2xl font-bold">Сварочные работы</p>
                <nav className="">
                    <div className="container mx-auto px-4 flex space-x-4">
                        <Link href="/" className="text-zinc-50 hover:text-zinc-300">
                        Главная
                        </Link>
                        <Link href="/services" className="text-zinc-50 hover:text-zinc-300">
                            Услуги
                        </Link>
                        <Link href="/about" className="text-zinc-50 hover:text-zinc-300">
                            О нас
                        </Link>
                        <Link href="/contact" className="text-zinc-50 hover:text-zinc-300">
                            Контакты
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}