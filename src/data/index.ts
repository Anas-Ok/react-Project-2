import { v4 as uuid } from 'uuid';
import { IFormInput } from '../interfaces';

const products = [
    {
        id: uuid(),
        title: "Product 1",
        imageURL: "http://example.com/product1.jpg",
        price: "29.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. ",
        colors: ["Red", "Blue", "Green"],
        category: {
            name: "Category 1",
            imageURL: "http://example.com/category1.jpg"
        }
    },
    {
        id: uuid(),
        title: "Product 2",
        imageURL: "http://example.com/product2.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.",
        price: "39.99",
        colors: ["Yellow", "Black", "White"],
        category: {
            name: "Category 2",
            imageURL: "http://example.com/category2.jpg"
        }
    },
    {
        id: uuid(),
        title: "Product 3",
        imageURL: "http://example.com/product3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.",
        price: "49.99",
        colors: ["Purple", "Orange", "Pink"],
        category: {
            name: "Category 3",
            imageURL: "http://example.com/category3.jpg"
        }
    },
    {
        id: uuid(),
        title: "Product 4",
        imageURL: "http://example.com/product4.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.",
        price: "59.99",
        colors: ["Brown", "Gray", "Cyan"],
        category: {
            name: "Category 4",
            imageURL: "http://example.com/category4.jpg"
        }
    },
    {
        id: uuid(),
        title: "Product 5",
        imageURL: "http://example.com/product5.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.",
        price: "69.99",
        colors: ["Magenta", "Lime", "Teal"],
        category: {
            name: "Category 5",
            imageURL: "http://example.com/category5.jpg"
        }
    },
    {
        id: uuid(),
        title: "Product 6",
        imageURL: "http://example.com/product6.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.",
        price: "79.99",
        colors: ["Navy", "Olive", "Maroon"],
        category: {
            name: "Category 6",
            imageURL: "http://example.com/category6.jpg"
        }
    },
    {
        id: uuid(),
        title: "Product 7",
        imageURL: "http://example.com/product7.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.",
        price: "89.99",
        colors: ["Silver", "Gold", "Bronze"],
        category: {
            name: "Category 7",
            imageURL: "http://example.com/category7.jpg"
        }
    },
    {
        id: uuid(),
        title: "Product 8",
        imageURL: "http://example.com/product8.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.",
        price: "99.99",
        colors: ["Coral", "Turquoise", "Lavender"],
        category: {
            name: "Category 8",
            imageURL: "http://example.com/category8.jpg"
        }
    },
    {
        id: uuid(),
        title: "Product 9",
        imageURL: "http://example.com/product9.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.",
        price: "109.99",
        colors: ["Peach", "Mint", "Beige"],
        category: {
            name: "Category 9",
            imageURL: "http://example.com/category9.jpg"
        }
    },
    {
        id: uuid(),
        title: "Product 10",
        imageURL: "http://example.com/product10.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.",
        price: "119.99",
        colors: ["Ivory", "Charcoal", "Aqua"],
        category: {
            name: "Category 10",
            imageURL: "http://example.com/category10.jpg"
        }
    }
];

export const formInputsList : IFormInput[] = [
    {
        id: "title",
        name: "title",
        label: "Product Title",
        type: "text",
    },
    {
        id: "description",
        name: "description",
        label: "Product Description",
        type: "text",
    },
    {
        id: "image",
        name: "imageURL",
        label: "Product Image URL",
        type: "text",
    },
    {
        id: "price",
        name: "price",
        label: "Product Price",
        type: "text",
    }
]

export default products;