var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyWdJ8PWSgMSVQeK'}).base('appKS4Y0fnQPMwHzZ');

base("photos").select({}).eachPage(gotPageOfCelebs, gotAllCelebs);

    const celebs = [];

// callback function that receives our data
function gotPageOfCelebs(records, fetchNextPage) {
  console.log("gotPageOfCelebs()");
  // add the records from this page to our books array
  celebs.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllCelebs(err) {
  console.log("gotAllCelebs()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading photos");
    console.error(err);
    return;

    try {
       showCelebs();
     } catch (error) {
       error.log(error);
       }
  }

  consoleLogCelebs();
  showCelebs();
}


function consoleLogCelebs() {
  console.log("consoleLogCelebs()");
  celebs.forEach((celeb) => {
    console.log("Celeb:", celeb);
  });
}

function showCelebs() {
  console.log("showCelebs()");
  console.log(celebs);
  celebs.forEach((celeb) => {

    // create button
    var celebImage = document.createElement("img");
    celebImage.src = celeb.fields.image[0].url;
    // put image in button
    document.querySelector('#grid').append(celebImage); //append button to grid

    // button onclick ()
    // modal display (div for text, image, details)
    // document.querySelector("text").append(celeb.fields.name)
    // repeat for image .. details ..

    // span onclick()
    // close modal

  });
}

displayTime();

function displayTime() {
var x = new Date()
document.getElementById('time').innerHTML = x;
 }

 console.log(displayTime);

 function done(err) {
    if (err) { console.error(err); return; }
};
