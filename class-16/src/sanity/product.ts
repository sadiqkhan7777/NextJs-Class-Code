import { title } from "process";

// sanity/pet.ts
export const Product = {
    name: "product",
    type: "document",
    title: "Product",

    fields: [
        {
            name: "productName",
            type: "string",
            title: "Product Name"
        },

        {
            name: "price",
            type: "number",
            title: "Price"
        },

        {
            name: "image",
            type: "image",
            title: "image"
        }
    ]
}