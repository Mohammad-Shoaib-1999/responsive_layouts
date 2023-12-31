// import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import {  avatar1,avatar2,avatar3,avatar4
} from "../assets/images";
import { review1, review2, review3 } from "../assets/videos";

export const navLinks = [
    { id:1,href: "#home", label: "Home" },
    { id:2,href: "#about-us", label: "About Us" },
    { id:3,href: "#products", label: "Products" },
    { id:4,href: "#contact-us", label: "Contact Us" },
];

// export const shoes = [
//     {
//         thumbnail: thumbnailShoe1,
//         bigShoe: bigShoe1,
//     },
//     {
//         thumbnail: thumbnailShoe2,
//         bigShoe: bigShoe2,
//     },
//     {
//         thumbnail: thumbnailShoe3,
//         bigShoe: bigShoe3,
//     },
// ];

// export const statistics = [
//     { value: '1k+', label: 'Brands' },
//     { value: '500+', label: 'Shops' },
//     { value: '250k+', label: 'Customers' },
// ];

export const products = [
    {
        imgURL: "img",
        name: "Prodruct 1",
        price: "$200.20",
    },
    {
        imgURL:"img",
        name: "Prodruct 2",
        price: "$210.20",
    },
    {
        imgURL: "img",
        name: "Prodruct 3",
        price: "$220.20",
    },
    {
        imgURL: "img",
        name: "Prodruct 4",
        price: "$230.20",
    },
    {
        imgURL: "img",
        name: "Prodruct 5",
        price: "$200.20",
    },
    {
        imgURL:"img",
        name: "Prodruct 6",
        price: "$210.20",
    },
    {
        imgURL: "img",
        name: "Prodruct 7",
        price: "$220.20",
    },
    {
        imgURL: "img",
        name: "Prodruct 8",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: "img",
        label: "Service 1",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: "img",
        label: "Service 2",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: "img",
        label: "Service 3",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
    {
        imgURL: "img",
        label: "Service 4",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: "img",
        label: "Service 5",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: "img",
        label: "Service 6",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: avatar1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: avatar2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },
    {
        imgURL: avatar3,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: avatar4,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];

export const videoReviews = [
    {
        videoURL: review1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        videoURL: review2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },
    {
        videoURL: review3,
        customerName: 'John doe',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
   
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: "facebook", alt: "facebook logo" },
    { src: "twitter", alt: "twitter logo" },
    { src: "instagram", alt: "instagram logo" },
];