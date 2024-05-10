const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js")

const defaultLink = "https://images.unsplash.com/photo-1703278909254-0d9b6858d061?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: {
            type: String,
            default: "listingimage",
            set: (v) => v === "" ? "listingimage" : v,
        },
        url: {
            type: String,
            default: defaultLink,
            set: (v) => v === "" ? defaultLink : v,
        },
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing) {
        await Review.deleteMany({_id: {$in: listing.reviews}})
    }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;