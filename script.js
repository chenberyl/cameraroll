// const el = document.querySelector('body');
//
// el.addEventListener("mousemove", (e) =>
//                  {
//
// el.style.backgroundPositionX = e.offsetX + 'px';
// el.style.backgroundPositionY = e.offsetY + 'px';
//
// });

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


 function done(err) {
    if (err) { console.error(err); return; }
};

function showCelebs() {
  console.log("showCelebs()");

  var celebImage = document.createElement("img");
  celeb = celebs[Math.floor(Math.random() * celebs.length)];
  celebImage.src = celeb.fields.image[0].url;
  document.body.style.backgroundImage = 'url(' + celebImage.src + ')';
}

// function showCelebs()	{
//     var celebImage = document.createElement("img");
//     // var imgShown = document.body.style.backgroundImage;
//     celeb = celebs[Math.floor(Math.random() * celebs.length)];
//     celebImage.src = celeb.fields.image[0].url;
//     document.body.style.backgroundImage = celebImage;
//   }



  document.querySelector('body').addEventListener("click", refreshPage);

  function refreshPage(){
    console.log(refreshPage);

      window.location.reload();
  }

document.getElementById('square').style.cursor = 'none'

let square = document.getElementById('square');
const onMouseMove = (e) =>{
  square.style.left = e.pageX + 'px';
  square.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);

