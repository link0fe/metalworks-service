export type Service = {
    slug: string;
    title: string;
    description: string;
    fullDescription?: string;
    imageUrl?: string;
};

export const cardData: Service[] = [ 
    {
        slug: "metal-structures",
        title: "Изготовление металлоконструкций",
        description: "Проектирование и изготовление металлических конструкций любой сложности.",
        fullDescription: "Мы предлагаем полный спектр услуг по проектированию и изготовлению металлических конструкций любой сложности. Наши специалисты используют современные технологии и материалы для создания прочных и надежных конструкций.",
        imageUrl: "/metalworks.jpg",
    },
    {
        slug: "welding",
        title: "Сварочные работы",
        description: "Качественная сварка металлических конструкций.",
        imageUrl: "/welding.jpg",
    },
    {
        slug: "installation",
        title: "Монтаж металлоконструкций",
        description: "Профессиональный монтаж металлических конструкций на объекте.",
        // imageUrl: "/services/installation.jpg",
    },
];