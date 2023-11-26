const data = [
  {
    id: 1,
    title: "Espresso Coffee",
    price: 5.99,
    category: "coffee",
    image:
      "https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Americano Coffee",
    price: 3.99,
    category: "coffee",
    image:
      "https://images.pexels.com/photos/6207297/pexels-photo-6207297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "Strawberry Cake",
    price: 6.99,
    category: "dessert",
    image:
      "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Latte Coffee",
    price: 5.99,
    category: "coffee",
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Milk Coffee",
    price: 2.99,
    category: "coffee",
    image:
      "https://images.pexels.com/photos/162947/coffee-glass-beverage-coffee-mug-162947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 6,
    title: "Milk Cake",
    price: 5.99,
    category: "desert",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    title: "Tost with Omelet",
    price: 5.99,
    category: "brunch",
    image:
      "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    title: "Mix Fruit",
    price: 5.99,
    category: "brunch",
    image:
      "https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 1,
    title: "Espresso Coffee",
    price: 5.99,
    category: "coffee",
    image:
      "https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Americano Coffee",
    price: 3.99,
    category: "coffee",
    image:
      "https://images.pexels.com/photos/6207297/pexels-photo-6207297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "Strawberry Cake",
    price: 6.99,
    category: "dessert",
    image:
      "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Latte Coffee",
    price: 5.99,
    category: "coffee",
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Milk Coffee",
    price: 2.99,
    category: "coffee",
    image:
      "https://images.pexels.com/photos/162947/coffee-glass-beverage-coffee-mug-162947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 6,
    title: "Milk Cake",
    price: 5.99,
    category: "desert",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    title: "Tost with Omelet",
    price: 5.99,
    category: "brunch",
    image:
      "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    title: "Mix Fruit",
    price: 5.99,
    category: "brunch",
    image:
      "https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Latte Coffee",
    price: 5.99,
    category: "coffee",
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Milk Coffee",
    price: 2.99,
    category: "coffee",
    image:
      "https://images.pexels.com/photos/162947/coffee-glass-beverage-coffee-mug-162947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 6,
    title: "Milk Cake",
    price: 5.99,
    category: "desert",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    title: "Tost with Omelet",
    price: 5.99,
    category: "brunch",
    image:
      "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    title: "Mix Fruit",
    price: 5.99,
    category: "brunch",
    image:
      "https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Latte Coffee",
    price: 5.99,
    category: "coffee",
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Milk Coffee",
    price: 2.99,
    category: "coffee",
    image:
      "https://images.pexels.com/photos/162947/coffee-glass-beverage-coffee-mug-162947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 6,
    title: "Milk Cake",
    price: 5.99,
    category: "desert",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default data;
