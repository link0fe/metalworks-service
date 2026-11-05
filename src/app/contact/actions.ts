"use server";

export type ContactFormState = {
    success: boolean;
    message: string;
};

export async function submitContactForm(previousState: ContactFormState | undefined, data: FormData): Promise<ContactFormState> {
    const rawName = data.get("name");
    const rawContact = data.get("contact");
    const rawDescription = data.get("description");
    
    const name = typeof rawName === "string" ? rawName.trim() : "";
    const contact = typeof rawContact === "string" ? rawContact.trim() : "";
    const description = typeof rawDescription === "string" ? rawDescription.trim() : "";
    
    if (!name || !contact || !description) {
        return { success: false, message: "Пожалуйста, заполните все поля." };
    }

    if (description.length > 2000) {
        return {
            success: false,
            message: "Описание не должно превышать 2000 символов.",
        };
    }   
    
    console.log("Contact Form Submission:", { name, contact, description });
    // Need to implement actual submission logic here (e.g., send an email, save to database, etc.)

    return {
        success: true,
        message: "Тестовая заявка успешно обработана.",
    };
}