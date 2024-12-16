import { Aboutindex, Navmenu, Portfolioindex, Serviceindex, Skillindex, SocialsIndex } from "../types/Types";

import Web from "./web-programming.png";
import Ux from "./ux-design.png";
import Mobile from "./mobile-development.png";
import Image1 from "./ei_1720081583481-removebg.png";
import Image2 from "./ei_1720968915095-removebg-preview (1).png";
import Image3 from "./ei_1720968995691-removebg-preview.png";
import Book from "./book.png";
import Cusine from "./cusine.png";
import Acme from "./acme.png";
import Tomato from "./tomato.png";
import Moonex from "./moonex.png";
import Shoper from "./shoper.png";
import Topic from "./topic.png";
import Wetland from "./wetland.png";
import NTFMarket from "./NTFMarket.png";
import Food from "./food.png";

export const image = {
  Web,
  Image1,
  Image2,
  Image3,
  Ux,
  Mobile,
  Book,
  Cusine,
  Acme,
  Tomato,
  Moonex,
  Shoper,
  Wetland,
  Topic,
  NTFMarket,
  Food,
};

export const socails:SocialsIndex[] =[
  {
    socail: 'twitter',
    link: 'https://x.com/riidwanullah'
  },
  {
    socail: 'linkedin',
    link: 'https://www.linkedin.com/in/adebayo-ridwan-98b51720a/'
  },
  {
    socail: 'github',
    link: 'https://github.com/wetwan'
  },
]
export const portfolioIndex:Portfolioindex[] = [
  {
    image: Book,
    title: "Bookorama",
    stack:['html','css','js' ],
    link: 'https://book1-d550.onrender.com'
  },
  {
    image: Cusine,
    title: "cusine",
    stack:['html','css' ],
    link: 'https://first-resturant-tau.vercel.app'
  },
  {
    image: Acme,
    title: "acme",
    stack:['html','tailwindcss' ],
    link: 'https://wetwan-acme.onrender.com'
  },
  {
    image: Tomato,
    title: "tomato",
    stack:['reactJs','tailwindcss' ],
    link: 'https://tomato-iota-three.vercel.app'
  },
  {
    image: Moonex,
    title: "Moonex",
    stack:['reactJs','tailwindcss' ],
    link: 'https://moonex-gilt.vercel.app/'
  },
  {
    image: Shoper,
    title: "Shopper",
    stack:['reactJs','tailwindcss' ],
    link: 'https://shopper-plum-mu.vercel.app/'
  },
  {
    image: Wetland,
    title: "wetwanland",
    stack:['reactJs','tailwindcss', 'firebase' ],
    link: 'https://wetwanland.vercel.app/'
  },
  {
    image: Topic,
    title: "topic",
    stack:['html','css' ],
    link: 'https://topic-pi.vercel.app'
  },
  {
    image: NTFMarket,
    title: "NTFMarket",
    stack:['reactJs','tailwindcss' ],
    link: 'https://nft-n4t5.vercel.app/'
  },
  {
    image: Food,
    title: "kwikfood",
    stack:['html','tailwindcss' ],
    link: 'https://kwikfood-tailwind.onrender.com/'
  },
];
export const serviceIndex: Serviceindex[] = [
  {
    image: Web,
    title: "frontend developemt",
    description:
      " Frontend developers work to optimize usability, accessibility, and responsiveness, making applications work seamlessly across devices and browsers",
  },
  {
    image: Ux,
    title: "ui/ux desinger",
    description:
      " UX design is about the overall experience a user has with a product, emphasizing ease of use, efficiency, and satisfaction. Together, they aim to create seamless, enjoyable, and accessible interactions that meet user needs and business goals.",
  },
  {
    image: Mobile,
    title: " mobile developer ",
    description:
      " Mobile developers focus on performance, responsiveness, and user-friendly interfaces, ensuring apps run smoothly and deliver a seamless experience across various screen sizes and operating systems.",
  },
];

export const nav: Navmenu[] = [
  {
    link: "/",
    label: "home",
  },
  {
    link: "/about",
    label: "about",
  },
  {
    link: "/service",
    label: "service",
  },
  {
    link: "/work",
    label: "work",
  },
  {
    link: "/contact",
    label: "contact",
  },
];
export const aboutIndex: Aboutindex[] = [
  {
    label: "happy clients",
    index: 5,
  },
  {
    label: "project done",
    index: 20,
  },
  {
    label: "cups of coffee",
    index: 10,
  },
  {
    label: "working hours",
    index: 300,
  },
];
export const skillIndex: Skillindex[] = [
  {
    name: "javascript",
    percent: 70,
  },
  {
    name: "html5",
    percent: 80,
  },
  {
    name: "css",
    percent: 80,
  },
  {
    name: "react js",
    percent: 70,
  },
  {
    name: "tailwindcss",
    percent: 85,
  },
  {
    name: "figma",
    percent: 65,
  },
];
