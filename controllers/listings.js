const Listing = require("../models/listing.js")


module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
}


module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
}


module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing You requested does not exist");
        res.redirect("/listings");
    }
    // console.log(listing);
    res.render("listings/show.ejs", { listing })
};

module.exports.createListing = async (req, res, next) => {
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
        newListing.owner = req.user._id;
        await newListing.save();
        req.flash("success", "New Listing Created!");
        res.redirect("/listings");
    } catch(err) {
        next(err)
    }
}

module.exports.renderEditForm = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing You requested does not exist");
        res.redirect("/listings");
    }
    res.render("listings/edit.ejs", {listing});
}

module.exports.updateListing = async (req, res, next) => {
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
        req.flash("success", "Listing Updated!")
        res.redirect(`/listings/${id}`);
    } catch(err) {
        next(err);
    }
}

module.exports.destroyListing = async (req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!")
    res.redirect("/listings");
}