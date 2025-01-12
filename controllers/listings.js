const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  const { tags, search } = req.query;

  let filter = {};
  let allListings = [{}];

  if (search) {
    filter.location = { $regex: search, $options: "i" };
    allListings = await Listing.find(filter);

    if (allListings.length === 0) {
      filter = {};
      filter.country = { $regex: search, $options: "i" };
      allListings = await Listing.find(filter);
    }

    if (allListings.length === 0) {
      filter = {};
      filter.title = { $regex: search, $options: "i" };
      allListings = await Listing.find(filter);
    }

    if (allListings.length === 0) {
      filter = {};
      filter.tags = { $regex: search, $options: "i" };
      allListings = await Listing.find(filter);
    }

    if (allListings.length === 0) {
      filter = {};
      filter.title = { $regex: search, $options: "i" };
      allListings = await Listing.find(filter);
    }

    if (allListings.length === 0) {
      filter = {};
      filter.description = { $regex: search, $options: "i" };
      allListings = await Listing.find(filter);
    }

  } else {
    allListings = await Listing.find({});
  }
  
  if (tags) {
    const tagsArray = tags.split(",");
    allListings = allListings.filter(listing => 
      tagsArray.some(tag => listing.tags.includes(tag))
    );
  }

  if (allListings.length === 0) {
    req.flash("error", "No Listings Found");
    res.redirect("/");
  } else {
    res.render("listings/index.ejs", { allListings, search });
  }
};


module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing You requested does not exist");
    res.redirect("/");
  }
  // console.log(listing);
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  newListing.geometry = response.body.features[0].geometry;

  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing You requested does not exist");
    res.redirect("/");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated!");
  res.redirect(`/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing Deleted!");
  res.redirect("/");
};
