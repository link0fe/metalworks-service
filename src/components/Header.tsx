"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="bg-zinc-800 text-zinc-50 py-4">
            <div className="flex items-center justify-between container mx-auto px-4 ">
                <p className="text-2xl font-bold">Сварочные работы</p>
                <nav className="hidden md:flex gap-4">
                        <Link href="/" className="text-zinc-50 hover:text-zinc-300">
                        Главная
                        </Link>
                        <Link href="/services" className="text-zinc-50 hover:text-zinc-300">
                            Услуги
                        </Link>
                        <Link href="/about" className="text-zinc-50 hover:text-zinc-300">
                            О Мастере
                        </Link>
                        <Link href="/contact" className="text-zinc-50 hover:text-zinc-300">
                            Контакты
                        </Link>
                </nav>
                <button type="button" aria-label={isOpen ? "Close Menu" : "Open Menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" className="md:hidden" onClick={() => setIsOpen(prev => !prev)}>
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>
            {isOpen && (
                <div className="container mx-auto px-4 md:hidden">
                    <nav className="flex flex-col gap-2 py-2" id="mobile-navigation">
                        <hr className="border-zinc-600"/>
                        <Link href="/" className="text-zinc-50 hover:text-zinc-300" onClick={() => setIsOpen(false)}>
                            Главная
                        </Link>
                        <Link href="/services" className="text-zinc-50 hover:text-zinc-300" onClick={() => setIsOpen(false)}>
                            Услуги
                        </Link>
                        <Link href="/about" className="text-zinc-50 hover:text-zinc-300" onClick={() => setIsOpen(false)}>
                            О Мастере
                        </Link>
                        <Link href="/contact" className="text-zinc-50 hover:text-zinc-300" onClick={() => setIsOpen(false)}>
                            Контакты
                        </Link>
                    </nav>
                </div>
                )}
        </header>
    )
}