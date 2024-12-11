import { ICategory } from '~/interfaces/category.interface';

export const categoriesData: ICategory[] = [
  {
    id: 1,
    title: 'Cactuses',
    products: [
      {
        id: 1,
        img: '/img/products/cactus-echinogruzon.png',
        title: 'Cactus Echinogruzon',
        price: 4,
      },
      {
        id: 2,
        img: '/img/products/cactus-mix.png',
        title: 'Cactus mix',
        price: 40,
      },
      {
        id: 3,
        img: '/img/products/cactus-with-flowers.png',
        title: 'Cactus with flowers',
        price: 4,
      },
    ],
  },
  {
    id: 2,
    title: 'Succulents',
    products: [
      {
        id: 4,
        img: '/img/products/echeveria.webp',
        title: 'Echeveria',
        price: 6,
      },
      {
        id: 5,
        img: '/img/products/aloe.webp',
        title: 'Aloe',
        price: 4,
      },
      {
        id: 6,
        img: '/img/products/crassula.webp',
        title: 'Crassula',
        price: 8,
      },
    ],
  },
  {
    id: 3,
    title: 'Woods',
    products: [
      {
        id: 7,
        img: '/img/products/areca.webp',
        title: 'Areca',
        price: 75,
      },
      {
        id: 8,
        img: '/img/products/ficus.png',
        title: 'Ficus',
        price: 70,
      },
      {
        id: 9,
        img: '/img/products/dracaena.png',
        title: 'Dracaena',
        price: 45,
      },
      {
        id: 10,
        img: '/img/products/schefflera.png',
        title: 'Schefflera',
        price: 25,
      },
    ],
  },
];
