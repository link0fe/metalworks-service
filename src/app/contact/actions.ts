"use server";

export type ContactFormState = {
    success: boolean;
    message: string;
};

export async function submitContactForm(_previousState: ContactFormState, data: FormData): Promise<ContactFormState> {
    const rawName = data.get("name");
    const rawEmail = data.get("email");
    const rawPhone = data.get("phone");
    const rawDescription = data.get("description");
    
    const name = typeof rawName === "string" ? rawName.trim() : "";
    const email = typeof rawEmail === "string" ? rawEmail.trim() : "";
    const phone = typeof rawPhone === "string" ? rawPhone.trim() : "";
    const description = typeof rawDescription === "string" ? rawDescription.trim() : "";
    
    if (!name || !email || !phone || !description) {
        return { success: false, message: "Пожалуйста, заполните все поля." };
    }

    if (description.length > 2000) {
        return {
            success: false,
            message: "Описание не должно превышать 2000 символов.",
        };
    }   

    return {
        success: true,
        message: "Тестовая заявка успешно обработана.",
    };
}