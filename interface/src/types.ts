export interface ProductEntry {

    id: string,

    // The name of the product.
    name: string,

    // A percentage score representing the popularity of the product.
    popularityScore: number,

    // The weight in grams.
    weight: number,

    // Product images (URLs) (three images for each product, one for each color option).
    images: {
        yellow: string,
        rose: string,
        white: string
    },

    // product price
    price: number
}

export type ButtonColor = "yellow" | "rose" | "white";