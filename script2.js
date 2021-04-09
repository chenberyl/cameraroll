var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyWdJ8PWSgMSVQeK'}).base('appKS4Y0fnQPMwHzZ');

// base('Photos').select({}).eachPage(function page(records, fetchNextPage) {
//
//     records.forEach(function(record) {
//         console.log('Retrieved', record.get('Name'));
//     });
//
//     fetchNextPage();

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
  showCelebsImg();
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

    var celebImage = document.createElement("img");
    celebImage.src = celeb.fields.image[0].url;
    document.querySelector('body').append(celebImage);
  });
}

// function showCelebs() {
//   console.log("showCelebs()");
//
//   var celebImage = document.createElement("img");
//   celeb = celebs[Math.floor(Math.random() * celebs.length)];
//   celebImage.src = celeb.fields.image[0].url;
//   document.querySelector('body').append(celebImage);
// }

 function done(err) {
    if (err) { console.error(err); return; }
};
