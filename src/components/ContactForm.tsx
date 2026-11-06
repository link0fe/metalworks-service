"use client";

import {useActionState, useEffect, useRef} from 'react';
import {
    submitContactForm, 
    type ContactFormState
} from '../app/contact/actions';

const initialState: ContactFormState = { success: false, message: "" };

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.success) {
            formRef.current?.reset();
        }
    }, [state.success]);


    return (
        <form 
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 md:p-10 space-y-6"
            action={formAction}
            ref={formRef}
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
                    placeholder="Петр Петров"
                    required
                 />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    className="text-sm font-medium text-zinc-300" 
                    htmlFor="email"
                >
                    Email
                </label>
                <input 
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition-colors focus:border-orange-500"
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="contact@example.com"
                    autoComplete="email"
                    required 
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-zinc-300">
                    Телефон
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+371 22345678"
                    required
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition-colors focus:border-orange-500"
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
                disabled={isPending}
                className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isPending ? "Отправка..." : "Отправить Заявку"}
            </button>
            {state.message && (
                <p
                    role="status"
                    className={state.success ? "text-green-400" : "text-red-400"}
                >
                    {state.message}
                </p>
            )}
        </form>
    )
}