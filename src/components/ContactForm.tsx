import { submitContactForm } from "../app/contact/actions";

export default function ContactForm() {
    return (
        <form 
            className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 md:p-10 space-y-6"
            action={submitContactForm}
        >
            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="name"
                    className="text-sm font-medium text-zinc-300"
                >
                    Ваше имя
                </label>
                <input 
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition-colors focus:border-orange-500"
                    type="text" 
                    id="name" 
                    name="name" 
                    autoComplete="name"
                    required
                 />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    className="text-sm font-medium text-zinc-300" 
                    htmlFor="contact"
                >
                    Телефон или email
                </label>
                <input 
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition-colors focus:border-orange-500"
                    type="text" 
                    id="contact" 
                    name="contact" 
                    placeholder="+371 ..."
                    // autoComplete="email"
                    required 
                />
            </div>
            <div className="flex flex-col gap-2">
                <label 
                    className="text-sm font-medium text-zinc-300" 
                    htmlFor="description"
                >
                    Описание задачи
                </label>
                <textarea 
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition-colors focus:border-orange-500"
                    id="description" 
                    name="description" 
                    placeholder="Опишите задачу..."
                    maxLength={2000}
                    required
                ></textarea>
            </div>
            <button 
                type="submit"
                className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
            >
                Отправить Заявку
            </button>
        </form>
    )
}