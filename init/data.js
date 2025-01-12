userID = [
  "98f3b5e4f6b0e6f0c8b5e1d4", 
  "98f3b5e4f6b0e6f0c8b5e9b8", 
  "98f3b5e4f6b0e6f0c8b5e8ca", 
  "98f3b5e4f6b0e6f0c8b5e7d9", 
  "98f3b5e4f6b0e6f0c8b5e6a1",
  "98f3b5e4f6b0e6f0c8b5e5b2",
  "98f3b5e4f6b0e6f0c8b5e4d3",
  "98f3b5e4f6b0e6f0c8b5e3f4",
];

reviewId = [
  "98f3b5e4f6b0e6f0c8b5e1d4", 
  "98f3b5e4f6b0e6f0c8b5e9b7", 
  "98f3b5e4f6b0e6f0c8b5e8c9", 
  "98f3b5e4f6b0e6f0c8b5e7d8", 
  "98f3b5e4f6b0e6f0c8b5e6a0",
  "98f3b5e4f6b0e6f0c8b5e5b1",
  "98f3b5e4f6b0e6f0c8b5e4d2",
  "98f3b5e4f6b0e6f0c8b5e3f3",
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
    title: "Camping in the woods",
    description: "Beautiful campsite in the woods",
    image: {
      url: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "Campsite",
    },
    price: 2500,
    location: "Kodaikanal",
    country: "India",
    owner: userID[0],
    reviews: [
      reviewId[0],
      reviewId[1],
      reviewId[2],
      reviewId[3],
      reviewId[4],
    ],
    tags: [tags[6], tags[7]],
    geometry: {
      coordinates: [77.4892, 10.2381],
    },
  },
  {
    title: "Luxury Beachfront Villa",
    description: "A luxurious villa right on the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "BeachfrontVilla",
    },
    price: 10000,
    location: "Maldives",
    country: "Maldives",
    owner: userID[1],
    reviews: [reviewId[5], reviewId[6]],
    tags: [tags[0], tags[11]],
    geometry: {
      coordinates: [73.2207, 3.2028],
    },
  },
  {
    title: "Desert Adventure Tent",
    description: "Experience the serene beauty of the desert.",
    image: {
      url: "https://images.unsplash.com/photo-1523335546955-b1a4ff2afc79?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "DesertTent",
    },
    price: 4000,
    location: "Thar Desert",
    country: "India",
    owner: userID[2],
    reviews: [reviewId[2], reviewId[4], reviewId[7]],
    tags: [tags[0], tags[12]],
    geometry: {
      coordinates: [72.5448, 26.8258],
    },
  },
];

const sampleReviews = [
  {
    _id: reviewId[0],
    comment: "Great place to camp",
    rating: 4,
    createdAt: "2021-07-18T18:25:43.511Z",
    author: userID[0],
  },
  {
    _id: reviewId[1],
    comment: "Beautiful location",
    rating: 5,
    createdAt: "2021-07-18T18:25:43.511Z",
    author: userID[1],
  },
  {
    _id: reviewId[2],
    comment: "Amazing location",
    rating: 5,
    createdAt: "2021-10-12T10:15:12.000Z",
    author: userID[2],
  },
  {
    _id: reviewId[3],
    comment: "Unique and stunning!",
    rating: 5,
    createdAt: "2022-03-18T15:25:43.511Z",
    author: userID[3],
  },
  {
    _id: reviewId[4],
    comment: "Would recommend to everyone!",
    rating: 4,
    createdAt: "2022-05-22T12:05:13.000Z",
    author: userID[4],
  },
  {
    _id: reviewId[5],
    comment: "Absolutely breathtaking view",
    rating: 5,
    createdAt: "2022-07-10T09:25:43.511Z",
    author: userID[5],
  },
  {
    _id: reviewId[6],
    comment: "Felt like paradise!",
    rating: 5,
    createdAt: "2022-12-18T18:25:43.511Z",
    author: userID[6],
  },
  {
    _id: reviewId[7],
    comment: "Unique and relaxing.",
    rating: 4,
    createdAt: "2023-01-14T08:45:23.000Z",
    author: userID[7],
  },
];

const sampleUsers = [
  {
    _id: userID[0],
    username: "John Doe",
    email: "JohnDoe@email.com",
    password: "password",
  },
  {
    _id: userID[1],
    username: "Jane Smith",
    email: "JaneSmith@email.com",
    password: "password",
  },
  {
    _id: userID[2],
    username: "Alice Johnson",
    email: "AliceJohnson@email.com",
    password: "password",
  },
  {
    _id: userID[3],
    username: "Bob Brown",
    email: "BobBrown@email.com",
    password: "password",
  },
  {
    _id: userID[4],
    username: "Charlie Davis",
    email: "CharlieDavis@email.com",
    password: "password",
  },
  {
    _id: userID[5],
    username: "Emily Clark",
    email: "EmilyClark@email.com",
    password: "password",
  },
  {
    _id: userID[6],
    username: "Michael Scott",
    email: "MichaelScott@email.com",
    password: "password",
  },
  {
    _id: userID[7],
    username: "Sarah Connor",
    email: "SarahConnor@email.com",
    password: "password",
  },
];

module.exports = {
  sampleListings,
  sampleReviews,
  sampleUsers,
};
