import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="bg-zinc-950 text-white py-20 px-4 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-orange-500">
                    Связаться с нами
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    Обсудим ваш проект
                </h2>
                <p className="max-w-2xl text-zinc-400 leading-relaxed mb-8">
                    Нужны сварочные работы или изготовление металлоконструкций? 
                    Свяжитесь с нами удобным способом.
                </p>
                <div>
                    {/* <div> */}
                        <Image src='#' alt="Contact" />
                        <p>Телефон:</p>
                        <a href="tel:+37112345678">+371 123 456 78</a>
                    {/* </div> */}
                    <Image src='#' alt="Email" />
                    <p>Email</p>
                    <a href="mailto:contact@example.com">contact@example.com</a>
                    <Image src='#' alt="Region" />
                    <p>Регион работы: Daugavpils, Latvia</p>
                </div>
            </div>
        </main>
    )
}