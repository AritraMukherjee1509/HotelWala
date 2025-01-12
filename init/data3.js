const newUserID = [
  "61f6a8f3d3a3d7f85a5b9b1d", 
  "61f6a8f3d3a3d7f85a5b9b2e", 
  "61f6a8f3d3a3d7f85a5b9b3f", 
  "61f6a8f3d3a3d7f85a5b9b4a", 
  "61f6a8f3d3a3d7f85a5b9b5a",
  "61f6a8f3d3a3d7f85a5b9b6a",
  "61f6a8f3d3a3d7f85a5b9b7b",
  "61f6a8f3d3a3d7f85a5b9b8c",
];

const newReviewID = [
  "61f6a8f3d3a3d7f85a5b9b1d", 
  "61f6a8f3d3a3d7f85a5b9b2a", 
  "61f6a8f3d3a3d7f85a5b9b3a", 
  "61f6a8f3d3a3d7f85a5b9b4d", 
  "61f6a8f3d3a3d7f85a5b9b5f",
  "61f6a8f3d3a3d7f85a5b9b6c",
  "61f6a8f3d3a3d7f85a5b9b7b",
  "61f6a8f3d3a3d7f85a5b9b8a",
];

tags = [
    "trending", 
    "rooms", 
    "iconic cities", 
    "mountains", 
    "castles", 
    "arctic", 
    "camping", 
    "woods", 
    "farms", 
    "domes", 
    "boats", 
    "beaches", 
    "deserts"
  ];

const sampleListings = [
  {
    title: "Tropical Island Getaway",
    description: "Escape to a beautiful tropical island and relax by the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1580776502005-49988a0b39a4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "IslandGetaway",
    },
    price: 2200,
    location: "Bora Bora",
    country: "French Polynesia",
    owner: newUserID[0],
    reviews: [
      newReviewID[0],
      newReviewID[1],
      newReviewID[2],
      newReviewID[3],
      newReviewID[4],
    ],
    tags: [tags[2], tags[10]],
    geometry: {
      coordinates: [-151.7510, -16.5000],
    },
  },
  {
    title: "Desert Oasis Resort",
    description: "Experience the calm of the desert with luxurious amenities and spa.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1697729630083-3dfc1504d2f4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "DesertOasis",
    },
    price: 5500,
    location: "Dubai",
    country: "UAE",
    owner: newUserID[1],
    reviews: [newReviewID[5], newReviewID[6]],
    tags: [tags[1], tags[8]],
    geometry: {
      coordinates: [55.3150, 25.2760],
    },
  },
  {
    title: "Alpine Ski Resort",
    description: "Ski in the winter wonderland of the Alps with top-notch facilities.",
    image: {
      url: "https://images.unsplash.com/photo-1612583346852-c5f66f257770?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "SkiResort",
    },
    price: 10000,
    location: "Chamonix",
    country: "France",
    owner: newUserID[2],
    reviews: [newReviewID[2], newReviewID[4], newReviewID[7]],
    tags: [tags[3], tags[5]],
    geometry: {
      coordinates: [6.8694, 45.9237],
    },
  },
];

const sampleReviews = [
  {
    _id: newReviewID[0],
    comment: "The best vacation experience I've ever had!",
    rating: 5,
    createdAt: "2022-01-18T10:20:43.511Z",
    author: newUserID[0],
  },
  {
    _id: newReviewID[1],
    comment: "A perfect tropical getaway with pristine beaches.",
    rating: 4,
    createdAt: "2022-02-12T11:15:12.000Z",
    author: newUserID[1],
  },
  {
    _id: newReviewID[2],
    comment: "Truly paradise, the views are spectacular.",
    rating: 5,
    createdAt: "2022-03-05T13:30:12.000Z",
    author: newUserID[2],
  },
  {
    _id: newReviewID[3],
    comment: "A once-in-a-lifetime trip, unforgettable experience.",
    rating: 5,
    createdAt: "2022-06-25T14:10:43.511Z",
    author: newUserID[3],
  },
  {
    _id: newReviewID[4],
    comment: "Perfect for anyone who loves the beach.",
    rating: 4,
    createdAt: "2022-09-18T15:20:23.000Z",
    author: newUserID[4],
  },
  {
    _id: newReviewID[5],
    comment: "Luxury at its finest, couldn't ask for a better stay!",
    rating: 5,
    createdAt: "2022-12-08T16:40:12.000Z",
    author: newUserID[5],
  },
  {
    _id: newReviewID[6],
    comment: "A place of peace and serenity, highly recommend.",
    rating: 5,
    createdAt: "2023-04-01T17:30:43.511Z",
    author: newUserID[6],
  },
  {
    _id: newReviewID[7],
    comment: "A perfect place to unwind and disconnect from the world.",
    rating: 4,
    createdAt: "2023-07-09T18:25:43.511Z",
    author: newUserID[7],
  },
];

const sampleUsers = [
  {
    _id: newUserID[0],
    username: "David Lee",
    email: "DavidLee@email.com",
    password: "password123",
  },
  {
    _id: newUserID[1],
    username: "Emma Stone",
    email: "EmmaStone@email.com",
    password: "password123",
  },
  {
    _id: newUserID[2],
    username: "Olivia Brown",
    email: "OliviaBrown@email.com",
    password: "password123",
  },
  {
    _id: newUserID[3],
    username: "Lucas White",
    email: "LucasWhite@email.com",
    password: "password123",
  },
  {
    _id: newUserID[4],
    username: "Sophia Johnson",
    email: "SophiaJohnson@email.com",
    password: "password123",
  },
  {
    _id: newUserID[5],
    username: "William Davis",
    email: "WilliamDavis@email.com",
    password: "password123",
  },
  {
    _id: newUserID[6],
    username: "James Smith",
    email: "JamesSmith@email.com",
    password: "password123",
  },
  {
    _id: newUserID[7],
    username: "Chloe Martinez",
    email: "ChloeMartinez@email.com",
    password: "password123",
  },
];

module.exports = {
  sampleListings,
  sampleReviews,
  sampleUsers,
};
