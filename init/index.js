const mongoose = require("mongoose");
const initData = require("./data4.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const User = require("../models/user.js");
const { create } = require("connect-mongo");
const _ = require("passport-local-mongoose");


const MONGO_URL = "mongodb+srv://aritra1509:VQ2WCfweE5aLh400@cluster0.tagsgez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    // await Listing.deleteMany({});
    // console.log("All Listings deleted");

    initData.sampleListings = initData.sampleListings.map((obj) => ({
        title: obj.title,
        description: obj.description,
        image: {
            url: obj.image?.url,
            filename: obj.image?.filename,
        },
        price: obj.price,
        location: obj.location,
        country: obj.country,
        owner: obj.owner,
        reviews: obj.reviews.map((review) => review),
        tags: obj.tags.map((tag) => tag),
        geometry: {
            type: "Point",
            coordinates: obj.geometry?.coordinates,
        }
    }));

    await Listing.insertMany(initData.sampleListings);
    console.log("Listings inserted");

    // await Review.deleteMany({});
    // console.log("All Reviews deleted");

    initData.sampleReviews = initData.sampleReviews.map((obj) => ({
        _id: obj._id,
        comment: obj.comment,
        rating: obj.rating,
        createdAt: obj.createdAt,
        author: obj.author,
    }));

    await Review.insertMany(initData.sampleReviews);
    console.log("Reviews inserted");


    // await User.deleteMany({});
    // console.log("All Users deleted");

    initData.sampleUsers = initData.sampleUsers.map((obj) => ({
        _id: obj._id,
        email: obj.email,
        password: obj.password,
        username: obj.username,
    }));

    await User.insertMany(initData.sampleUsers);
    console.log("Users inserted");
    
    console.log("Data was initialized")
}

initDB();