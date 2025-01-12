const newUserID = [
    "60f6a7f4d2a2c6e74f5b8a1f", 
    "60f6a7f4d2a2c6e74f5b8a2b", 
    "60f6a7f4d2a2c6e74f5b8a3c", 
    "60f6a7f4d2a2c6e74f5b8a4d", 
    "60f6a7f4d2a2c6e74f5b8a5e",
    "60f6a7f4d2a2c6e74f5b8a6f",
    "60f6a7f4d2a2c6e74f5b8a7a",
    "60f6a7f4d2a2c6e74f5b8a8b",
  ];
  
  const newReviewID = [
    "60f6a7f4d2a2c6e74f5b8a1f", 
    "60f6a7f4d2a2c6e74f5b8a2d", 
    "60f6a7f4d2a2c6e74f5b8a3b", 
    "60f6a7f4d2a2c6e74f5b8a4c", 
    "60f6a7f4d2a2c6e74f5b8a5d",
    "60f6a7f4d2a2c6e74f5b8a6e",
    "60f6a7f4d2a2c6e74f5b8a7f",
    "60f6a7f4d2a2c6e74f5b8a8a",
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
      title: "Mountain Adventure Retreat",
      description: "Explore the mountains and enjoy a peaceful retreat.",
      image: {
        url: "https://images.unsplash.com/photo-1544189032-dffdaca41a0b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "MountainRetreat",
      },
      price: 3500,
      location: "Zermatt",
      country: "Switzerland",
      owner: newUserID[0],
      reviews: [
        newReviewID[0],
        newReviewID[1],
        newReviewID[2],
        newReviewID[3],
        newReviewID[4],
      ],
      tags: [tags[0], tags[3]],
      geometry: {
        coordinates: [7.7491, 46.0207],
      },
    },
    {
      title: "Luxury Mountain Chalet",
      description: "A luxury chalet nestled in the mountains with stunning views.",
      image: {
        url: "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "MountainChalet",
      },
      price: 15000,
      location: "Swiss Alps",
      country: "Switzerland",
      owner: newUserID[1],
      reviews: [newReviewID[5], newReviewID[6]],
      tags: [tags[0], tags[9]],
      geometry: {
        coordinates: [9.0874, 46.9667],
      },
    },
    {
      title: "Safari Lodge in Africa",
      description: "Experience the beauty of Africa with a luxury safari lodge.",
      image: {
        url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "SafariLodge",
      },
      price: 12000,
      location: "Serengeti",
      country: "Tanzania",
      owner: newUserID[2],
      reviews: [newReviewID[2], newReviewID[4], newReviewID[7]],
      tags: [tags[6], tags[12]],
      geometry: {
        coordinates: [34.8888, -2.3333],
      },
    },
  ];
  
  const sampleReviews = [
    {
      _id: newReviewID[0],
      comment: "Amazing retreat, highly recommend!",
      rating: 5,
      createdAt: "2022-06-18T10:20:43.511Z",
      author: newUserID[0],
    },
    {
      _id: newReviewID[1],
      comment: "A perfect getaway for nature lovers",
      rating: 4,
      createdAt: "2022-07-12T11:15:12.000Z",
      author: newUserID[1],
    },
    {
      _id: newReviewID[2],
      comment: "The views were incredible, truly unforgettable.",
      rating: 5,
      createdAt: "2022-08-05T13:30:12.000Z",
      author: newUserID[2],
    },
    {
      _id: newReviewID[3],
      comment: "A once-in-a-lifetime experience.",
      rating: 5,
      createdAt: "2022-11-11T14:10:43.511Z",
      author: newUserID[3],
    },
    {
      _id: newReviewID[4],
      comment: "Highly recommended for adventure seekers.",
      rating: 4,
      createdAt: "2023-01-18T15:20:23.000Z",
      author: newUserID[4],
    },
    {
      _id: newReviewID[5],
      comment: "Absolutely loved it, will return soon!",
      rating: 5,
      createdAt: "2023-03-08T16:40:12.000Z",
      author: newUserID[5],
    },
    {
      _id: newReviewID[6],
      comment: "A paradise in the mountains, breathtaking views.",
      rating: 5,
      createdAt: "2023-06-01T17:30:43.511Z",
      author: newUserID[6],
    },
    {
      _id: newReviewID[7],
      comment: "A peaceful retreat, perfect for unwinding.",
      rating: 4,
      createdAt: "2023-09-09T18:25:43.511Z",
      author: newUserID[7],
    },
  ];
  
  const sampleUsers = [
    {
      _id: newUserID[0],
      username: "John Markson",
      email: "JohnMarkson@email.com",
      password: "newpassword",
    },
    {
      _id: newUserID[1],
      username: "Jane Wills",
      email: "JaneWills@email.com",
      password: "newpassword",
    },
    {
      _id: newUserID[2],
      username: "Alice Cooper",
      email: "AliceCooper@email.com",
      password: "newpassword",
    },
    {
      _id: newUserID[3],
      username: "Bob Harris",
      email: "BobHarris@email.com",
      password: "newpassword",
    },
    {
      _id: newUserID[4],
      username: "Charlie Edwards",
      email: "CharlieEdwards@email.com",
      password: "newpassword",
    },
    {
      _id: newUserID[5],
      username: "Emily Rodriguez",
      email: "EmilyRodriguez@email.com",
      password: "newpassword",
    },
    {
      _id: newUserID[6],
      username: "Michael Collins",
      email: "MichaelCollins@email.com",
      password: "newpassword",
    },
    {
      _id: newUserID[7],
      username: "Sarah Miller",
      email: "SarahMiller@email.com",
      password: "newpassword",
    },
  ];
  
  module.exports = {
    sampleListings,
    sampleReviews,
    sampleUsers,
  };
  