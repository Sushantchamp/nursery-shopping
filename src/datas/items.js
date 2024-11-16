// air Purifying Plants
import snakePlant from "../assets/snakeplant.jpg";
import spiderPlant from "../assets/spiderplant.webp";
import arecaPlant from "../assets/arecaplant.jpg";
import aloeveraPlant from "../assets/aloeveraplant.webp";
import broadladyPlant from "../assets/broadladyplant.jpeg";
import rubberPlant from "../assets/rubberplant.jpg";

// aromatic Fragrant Plants
import lavender from "../assets/lavender.jpg";
import jasmine from "../assets/jasmine.jpeg";
import rosemary from "../assets/rosemary.jpg";
import mint from "../assets/mint.webp";
import lemonbalm from "../assets/lemonbalm.jpeg";
import geranium from "../assets/geranium.webp";


const Products = [
    {
        category: 'Air Purifying Plants',
        products: [
            { id: 1, name: 'Snake Plant', price: '$15.99', description: 'A hardy plant that cleans air and is easy to care for.', imageUrl: `${snakePlant}` },
            { id: 2, name: 'Spider Plant', price: '$12.85', description: 'An excellent indoor plant known for its air-purifying qualities.', imageUrl: `${spiderPlant}` },
            { id: 3, name: 'Areca Palm Plant', price: '$11.67', description: 'An excellent indoor plant known for its air-purifying qualities.', imageUrl: `${arecaPlant}` },
            { id: 4, name: 'Aloe Vera Plant', price: '$18.83', description: 'An excellent indoor plant known for its air-purifying qualities.', imageUrl: `${aloeveraPlant}` },
            { id: 5, name: 'Broad Lady Plant', price: '$25.31', description: 'An excellent indoor plant known for its air-purifying qualities.', imageUrl: `${broadladyPlant}` },
            { id: 6, name: 'Rubber Plant', price: '$27.59', description: 'An excellent indoor plant known for its air-purifying qualities.', imageUrl: `${rubberPlant}` },
        ]
    },
    {
        category: 'Aromatic Fragrant Plants',
        products: [
            { id: 7, name: 'Lavender', price: '$10.99', description: 'A fragrant plant perfect for relaxation and aromatherapy.', imageUrl: `${lavender}` },
            { id: 8, name: 'Jasmine', price: '$14.74', description: 'An aromatic plant known for its pleasant fragrance.', imageUrl: `${jasmine}` },
            { id: 9, name: 'Rosemary', price: '$7.61', description: 'An aromatic plant known for its pleasant fragrance.', imageUrl: `${rosemary}` },
            { id: 10, name: 'Mint', price: '$50.23', description: 'An aromatic plant known for its pleasant fragrance.', imageUrl: `${mint}` },
            { id: 11, name: 'Lemon Balm', price: '$19.25', description: 'An aromatic plant known for its pleasant fragrance.', imageUrl: `${lemonbalm}` },
            { id: 12, name: 'Geranium', price: '$33.72', description: 'An aromatic plant known for its pleasant fragrance.', imageUrl: `${geranium}` },
        ]
    }
];

// const allProducts = [
//     ...Products[0].products,
//     ...Products[1].products
// ];


export default Products