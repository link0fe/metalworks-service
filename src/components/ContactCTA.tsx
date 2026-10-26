import Link from "next/link";

export default function ContactCTA() {
    return (
        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Обсудим ваш проект?
            </h2>
            <p className="max-w-2xl text-zinc-400 leading-relaxed mb-8">
                Нужна сварка, изготовление или монтаж металлоконструкций?{" "}
                Расскажите о задаче — обсудим детали и подберём решение.
            </p>
            <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
            >
                Связаться с нами
            </Link>
        </section>
    );
}