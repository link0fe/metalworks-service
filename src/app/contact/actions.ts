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

    if (name.length > 100 ) {
        return { success: false, message: "Имя не должно превышать 100 символов." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d+$/;

    const cleanedPhone = phone.replace(/[\s-]/g, "");
    const digitsOnly = cleanedPhone.replace(/\D/g, "");
    
    if(!phoneRegex.test(cleanedPhone) || digitsOnly.length < 8 || digitsOnly.length > 15) { 
        return { success: false, message: "Пожалуйста, введите корректный номер телефона." };
    }

    if(email && !emailRegex.test(email)) {
        return { success: false, message: "Пожалуйста, введите корректный email." };
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