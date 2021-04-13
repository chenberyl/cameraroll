//load airtable library called "airtable";
//var and let are interchangable
var Airtable = require("airtable");
//console.log(Airtable);

//use airtable lib, connect to base using API key
var base = new Airtable({apiKey: 'keyWdJ8PWSgMSVQeK'}).base('appKS4Y0fnQPMwHzZ');

//get collection base, select all records
//specify functions that will recieve the data

base("photos").select({}).eachPage(gotPageOfCelebs, gotAllCelebs);

var celebs = [];

function gotPageOfCelebs(records, fetchNextPage) {
  console.log("gotPageOfCelebs()");
  // add the records from this page to our books array
  celebs.push(...records);
  // request more pages
  fetchNextPage();
}

function gotAllCelebs(err) {
  console.log("gotAllCelebs()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogCelebs();
  showCelebs();
}

// just loop through the books and console.log them
function consoleLogCelebs() {
  console.log("consoleLogCelebs()");
  celebs.forEach((celeb) => {
    console.log("Celeb:", celeb);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showCelebs() {
  console.log("showCelebs()");
  celebs.forEach((celeb) => {

// creating new div container
// item info will go here
    var celebContainer = document.createElement("div");
    itemContainer.classList.add("celeb-container");
    document.querySelector(".container").append(celebContainer);

    var itemImage = document.createElement("img");
    itemImage.classList.add("item-image");
    itemImage.src = item.fields.item_image[0].url;
    itemContainer.append(itemImage);

    var itemCategory = item.fields.item_category;
    itemCategory.forEach(function(category) {
      itemContainer.classList.add(category)
    })
