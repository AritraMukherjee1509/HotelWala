const newUserID = [
    "62a6b9f3d3a3d7f85a6b9b1d", 
    "62a6b9f3d3a3d7f85a6b9b2e", 
    "62a6b9f3d3a3d7f85a6b9b3f", 
    "62a6b9f3d3a3d7f85a6b9b4a", 
    "62a6b9f3d3a3d7f85a6b9b5a",
    "62a6b9f3d3a3d7f85a6b9b6a",
    "62a6b9f3d3a3d7f85a6b9b7b",
    "62a6b9f3d3a3d7f85a6b9b8c",
  ];
  
  const newReviewID = [
    "62a6b9f3d3a3d7f85a6b9b1d", 
    "62a6b9f3d3a3d7f85a6b9b2a", 
    "62a6b9f3d3a3d7f85a6b9b3a", 
    "62a6b9f3d3a3d7f85a6b9b4d", 
    "62a6b9f3d3a3d7f85a6b9b5f",
    "62a6b9f3d3a3d7f85a6b9b6c",
    "62a6b9f3d3a3d7f85a6b9b7b",
    "62a6b9f3d3a3d7f85a6b9b8a",
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
      title: "Mountain Retreat",
      description: "A serene getaway amidst the stunning peaks of the Rockies.",
      image: {
        url: "https://plus.unsplash.com/premium_photo-1707974035077-da92b0fe9159?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "MountainRetreat",
      },
      price: 3500,
      location: "Aspen",
      country: "USA",
      owner: newUserID[0],
      reviews: [
        newReviewID[0],
        newReviewID[1],
        newReviewID[2],
      ],
      tags: [tags[3], tags[5]],
      geometry: {
        coordinates: [-106.8200, 39.1911],
      },
    },
    {
      title: "Ocean View Villa",
      description: "A luxurious villa overlooking the azure waters of the Mediterranean.",
      image: {
        url: "https://plus.unsplash.com/premium_photo-1694475571402-3c76c5ecf9f7?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "OceanViewVilla",
      },
      price: 7500,
      location: "Santorini",
      country: "Greece",
      owner: newUserID[1],
      reviews: [newReviewID[3], newReviewID[4]],
      tags: [tags[0], tags[10]],
      geometry: {
        coordinates: [25.4615, 36.3932],
      },
    },
    {
      title: "Countryside Cottage",
      description: "Relax in a charming cottage in the rolling hills of the English countryside.",
      image: {
        url: "https://images.unsplash.com/photo-1542654260-aaa251bf70a6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "CountrysideCottage",
      },
      price: 4200,
      location: "Cotswolds",
      country: "UK",
      owner: newUserID[2],
      reviews: [newReviewID[5], newReviewID[6]],
      tags: [tags[8], tags[7]],
      geometry: {
        coordinates: [-1.8674, 51.8615],
      },
    },
  ];
  
  const sampleReviews = [
    {
      _id: newReviewID[0],
      comment: "A perfect escape from the hustle and bustle of city life.",
      rating: 5,
      createdAt: "2023-01-14T09:20:43.511Z",
      author: newUserID[0],
    },
    {
      _id: newReviewID[1],
      comment: "Stunning location with exceptional hospitality.",
      rating: 4,
      createdAt: "2023-02-22T10:15:12.000Z",
      author: newUserID[1],
    },
    {
      _id: newReviewID[2],
      comment: "Highly recommend this retreat, so peaceful and refreshing.",
      rating: 5,
      createdAt: "2023-03-18T12:30:12.000Z",
      author: newUserID[2],
    },
    {
      _id: newReviewID[3],
      comment: "An unforgettable experience with a perfect view!",
      rating: 5,
      createdAt: "2023-04-25T14:10:43.511Z",
      author: newUserID[3],
    },
    {
      _id: newReviewID[4],
      comment: "Beautiful villa, but a bit too expensive for the location.",
      rating: 3,
      createdAt: "2023-05-09T15:20:23.000Z",
      author: newUserID[4],
    },
    {
      _id: newReviewID[5],
      comment: "Simply luxurious, the view and amenities were top-notch.",
      rating: 5,
      createdAt: "2023-06-14T16:40:12.000Z",
      author: newUserID[5],
    },
    {
      _id: newReviewID[6],
      comment: "Amazing place, totally worth the price.",
      rating: 5,
      createdAt: "2023-08-17T17:30:43.511Z",
      author: newUserID[6],
    },
    {
      _id: newReviewID[7],
      comment: "A lovely place to relax and enjoy nature.",
      rating: 4,
      createdAt: "2023-09-20T18:25:43.511Z",
      author: newUserID[7],
    },
  ];
  
  const sampleUsers = [
    {
      _id: newUserID[0],
      username: "Jack Turner",
      email: "JackTurner@email.com",
      password: "password123",
    },
    {
      _id: newUserID[1],
      username: "Mia Williams",
      email: "MiaWilliams@email.com",
      password: "password123",
    },
    {
      _id: newUserID[2],
      username: "Ella Scott",
      email: "EllaScott@email.com",
      password: "password123",
    },
    {
      _id: newUserID[3],
      username: "Nathan Miller",
      email: "NathanMiller@email.com",
      password: "password123",
    },
    {
      _id: newUserID[4],
      username: "Charlotte Davis",
      email: "CharlotteDavis@email.com",
      password: "password123",
    },
    {
      _id: newUserID[5],
      username: "Liam Smith",
      email: "LiamSmith@email.com",
      password: "password123",
    },
    {
      _id: newUserID[6],
      username: "Grace Johnson",
      email: "GraceJohnson@email.com",
      password: "password123",
    },
    {
      _id: newUserID[7],
      username: "Amelia Brown",
      email: "AmeliaBrown@email.com",
      password: "password123",
    },
  ];
  
  module.exports = {
    sampleListings,
    sampleReviews,
    sampleUsers,
  };
  