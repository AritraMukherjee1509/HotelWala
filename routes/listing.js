const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema} = require("../schema.js");
const Listing = require("../models/listing.js");


const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
    if(error) {
        console.log(error);
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}


//Index Route
router.get("/", wrapAsync ( async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
}));

//New Route
router.get("/new", (req, res) => {
    res.render("listings/new.ejs");
})

//Show Route
router.get("/:id", wrapAsync ( async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", {listing})
}));


//Create Route
router.post("/", validateListing, wrapAsync ( async (req, res, next) => {
    try {
        const { title, description, image_url, price, location, country } = req.body.listing;
        const newListing = new Listing({
            title,
            description,
            url: image_url || '', // Flatten the structure
            price,
            location,
            country
        });    
        await newListing.save();
        req.flash("success", "New Listing Created!")
        res.redirect("/listings");
    } catch(err) {
        next(err)
    }
}));

//Edit Route
router.get("/:id/edit", wrapAsync ( async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
}));

//Update Route 
router.put("/:id", validateListing, wrapAsync ( async (req, res) => {
    try {
        let {id} = req.params;
        const { title, description, image_url, price, location, country } = req.body.listing;
        await Listing.findByIdAndUpdate(id, {
            title,
            description,
            image: {
                url: image_url || '',
            }, // Flatten the structure
            price,
            location,
            country
        });
        res.redirect(`/listings/${id}`);
    } catch(err) {
        next(err)
    }
}))

//Delete Route
router.delete("/:id", wrapAsync ( async (req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));

module.exports = router;