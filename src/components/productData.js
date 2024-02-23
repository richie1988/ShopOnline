// This file contains the data of the products that are displayed on the home page.
import item1 from '../imageData/laptop1.png';
import item2 from '../imageData/laptop2.png';
import item3 from '../imageData/laptop3.png';
import item4 from '../imageData/laptop4.png';
import item5 from '../imageData/laptop5.png';
import item6 from '../imageData/laptop6.png';
import item7 from '../imageData/laptop7.png';
import item8 from '../imageData/laptop8.png';
import item9 from '../imageData/laptop9.png';
import item10 from '../imageData/laptop10.png';
import item11 from '../imageData/laptop11.png';
import item12 from '../imageData/laptop12.png';

function ProductData() {
  const ItemsData = [
    {
      id: 1,
      name: 'MacBook',
      imgURL: item1,
      price: 340,
    },
    {
      id: 2,
      name: 'Lenovo Yoga',
      imgURL: item2,
      price: 230,
    },
    {
      id: 3,
      name: 'Dell lattitude',
      imgURL: item3,
      price: 1020,
    },
    {
      id: 4,
      name: 'HP Pavillion',
      imgURL: item4,
      price: 810,
    },
    {
      id: 5,
      name: 'Acer Aspire',
      imgURL: item5,
      price: 620,
    },
    {
      id: 5,
      name: 'Acer Aspire',
      imgURL: item6,
      price: 270,
    },
    {
      id: 5,
      name: 'Acer Aspire',
      imgURL: item7,
      price: 250,
    },
    {
      id: 5,
      name: 'Acer Aspire',
      imgURL: item8,
      price: 330,
    },
    {
      id: 5,
      name: 'Acer Aspire',
      imgURL: item9,
      price: 750,
    },
    {
      id: 5,
      name: 'Acer Aspire',
      imgURL: item10,
      price: 290,
    },
    {
      id: 5,
      name: 'Acer Aspire',
      imgURL: item11,
      price: 230,
    },
    {
      id: 5,
      name: 'Acer Aspire',
      imgURL: item12,
      price: 450,
    },
  ];

  return ItemsData;
}

export default ProductData;
