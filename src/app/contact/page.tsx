import { Phone, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
    title: "Контакты | Welding Service",
    description:
        "Свяжитесь с нами для заказа сварочных работ и изготовления металлоконструкций в Даугавпилсе и Латвии.",
};

export default function ContactPage() {
    return (
        <main className="bg-zinc-950 text-white py-20 px-4 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-500">
                    Контакты
                </p>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    Обсудим ваш проект
                </h1>
                <p className="max-w-2xl text-zinc-400 leading-relaxed mb-8">
                    Нужны сварочные работы или изготовление металлоконструкций? 
                    Свяжитесь с нами удобным способом.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                        <Phone
                            size={28}
                            strokeWidth={1.75}
                            className="mb-4 text-orange-500"
                            aria-hidden="true"
                        />
                        <p className="mb-2 text-sm text-zinc-400">Телефон:</p>
                        <a href="tel:+37112345678" className="text-white hover:text-orange-400 transition-colors">+371 123 456 78</a>
                    </div>
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                        <Mail
                            size={28}
                            strokeWidth={1.75}
                            className="mb-4 text-orange-500"
                            aria-hidden="true"
                        />
                        <p className="mb-2 text-sm text-zinc-400">Email:</p>
                        <a href="mailto:contact@example.com" className="break-all text-white hover:text-orange-400 transition-colors">
                            contact@example.com
                        </a>
                    </div>
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                        <MapPin
                            size={28}
                            strokeWidth={1.75}
                            className="mb-4 text-orange-500"
                            aria-hidden="true"
                        />
                        <p className="mb-2 text-sm text-zinc-400">Регион работы:</p>
                        <p>Daugavpils, Latvia</p>
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="text-xl font-bold mb-4">Отправить заявку</h2>
                    <ContactForm />
                </div>
            </div>
        </main>
    )
}