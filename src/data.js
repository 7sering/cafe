const data = [
  {
    id: 1,
    title: "Espresso ",
    price: 5.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Latte",
    price: 3.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/6207297/pexels-photo-6207297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Flat White",
    price: 6.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Affogato",
    price: 5.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "Americano",
    price: 2.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 6,
    title: "Long Black",
    price: 5.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    title: "Marocchino",
    price: 5.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    title: "Macchiato",
    price: 5.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 9,
    title: "Mazagran",
    price: 5.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 10,
    title: "Espresso",
    price: 3.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/6207297/pexels-photo-6207297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 11,
    title: "Caffe Mocha",
    price: 6.99,
    category: "Dessert",
    image:
      "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 12,
    title: "Ristretto",
    price: 5.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 13,
    title: "Lungo",
    price: 2.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 14,
    title: "Dppio",
    price: 5.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 15,
    title: "Cold Brew",
    price: 5.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 16,
    title: "Cuban Espresso",
    price: 5.99,
    category: "Brunch",
    image:
      "https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 17,
    title: "Coratado",
    price: 5.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 18,
    title: "Frappe",
    price: 2.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 19,
    title: "Cafe au lait",
    price: 5.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 20,
    title: "Caffea Arabica",
    price: 5.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 21,
    title: "Mix Fruit",
    price: 5.99,
    category: "Brunch",
    image:
      "https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 22,
    title: "Latte Coffee",
    price: 5.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 23,
    title: "Milk Coffee",
    price: 2.99,
    category: "Coffee",
    image:
      "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 24,
    title: "Cheese Cake",
    price: 5.99,
    category: "Dessert",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 25,
    title: "Apple Pie",
    price: 5.99,
    category: "Dessert",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 26,
    title: "Creme Caramel",
    price: 5.99,
    category: "Dessert",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 27,
    title: "Creme Brulee",
    price: 5.99,
    category: "Dessert",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 28,
    title: "Key Lime Pie",
    price: 5.99,
    category: "Dessert",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 29,
    title: "Trimisu",
    price: 5.99,
    category: "Dessert",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 30,
    title: "Chocolate Brownine",
    price: 5.99,
    category: "Dessert",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 31,
    title: "Pecan Pie",
    price: 5.99,
    category: "Dessert",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 32,
    title: "Baked Alaska",
    price: 5.99,
    category: "Dessert",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 33,
    title: "Pudding",
    price: 5.99,
    category: "Dessert",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 34,
    title: "Banana Pudding",
    price: 5.99,
    category: "Dessert",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 35,
    title: "Chicken MOMO",
    price: 5.99,
    category: "Brunch",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 36,
    title: "Laphing",
    price: 5.99,
    category: "Brunch",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default data;
