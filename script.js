// const el = document.querySelector('body');
//
// el.addEventListener("mousemove", (e) =>
//                     {
//
// el.style.backgroundPositionX = e.offsetX + 'px';
// el.style.backgroundPositionY = e.offsetY + 'px';
//
// });


// $(document).ready(function() {
// var movementStrength = 15;
// var height = movementStrength / $(window).height();
// var width = movementStrength / $(window).width();
// $('body').mousemove(function(e){
//           var pageX = e.pageX - ($(window).width() / 2);
//           var pageY = e.pageY - ($(window).height() / 2);
//           var newvalueX = width * pageX * -1 - 25;
//           var newvalueY = height * pageY * -1 - 50;
//           $('body').css("background-position", newvalueX+"px     "+newvalueY+"px");
// });
// });



//
// var lFollowX = 0,
//     lFollowY = 0,
//     x = 0,
//     y = 0,
//     friction = 1 / 30;
//
// function moveBackground() {
//   x += (lFollowX - x) * friction;
//   y += (lFollowY - y) * friction;
//
//   translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
//
//   $('body').css({
//     '-webit-transform': translate,
//     '-moz-transform': translate,
//     'transform': translate
//   });
//
//   window.requestAnimationFrame(moveBackground);
// }
//
// $(window).on('mousemove click', function(e) {
//
//   var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
//   var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
//   lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
//   lFollowY = (10 * lMouseY) / 100;
//
// });

// moveBackground();

// const bg = document.querySelector('body');
// const windowWidth = window.innerWidth / 5;
// const windowHeight = window.innerHeight / 5 ;
//
// bg.addEventListener('mousemove', (e) => {
//   const mouseX = e.clientX / windowWidth;
//   const mouseY = e.clientY / windowHeight;
//
//   bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
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
  // document.querySelector('#bgimg').append(celebImage).style.backgroundSize = "cover";
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

  // $(document).on("click mousemove","body",function(e){
  // var x = e.clientX;
  // var y = e.clientY;
  // var newposX = x - 10;
  // var newposY = y - 10; $("#square").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
  // });

document.getElementById('square').style.cursor = 'none'

let square = document.getElementById('square');
const onMouseMove = (e) =>{
  square.style.left = e.pageX + 'px';
  square.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);


      // function changeImg(imgNumber)	{
      //     var myImages = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.png", "img5.jpeg", "img6.jpeg","img7.jpeg","img8.jpeg","img9.png","img10.jpeg","img11.png","img11.jpeg","img12.png"];
      //     var imgShown = document.body.style.backgroundImage;
      //     var newImgNumber =Math.floor(Math.random()*myImages.length);
      //     document.body.style.backgroundImage = 'url('+myImages[newImgNumber]+')';
      //   }
      //   window.onload=changeImg;

//
//
// showBooks();
//
// function showBooks() {
//   console.log("showBooks()");
//
//   // find the shelf element
//   const photo = document.getElementById("photo");
//
//   // loop through the books loaded from the Airtable API
//   books.forEach((book) => {
//     // create the div, set its text and class
//     const div = document.createElement("div");
//     div.innerText = book.fields.title;
//     div.classList.add("book-spine");
//     // when the user clicks this book spine, call showBook and send the book data and this spine element
//     div.addEventListener("click", () => {
//       showBook(book, div);
//     });
//     // put the newly created book spine on the shelf
//     shelf.appendChild(div);
//   });
// }
//
// // show the detail info for a book, and highlight the active book-spine
// function showBook(book, div) {
//   console.log("showBook()", book);
//
//   // find the book detail element
//   const bookDetail = document.getElementById("book-detail");
//
//   // populate the template with the data in the provided book
//   bookDetail.getElementsByClassName("title")[0].innerText = book.fields.title; //
//   bookDetail.getElementsByClassName("description")[0].innerText =
//     book.fields.description;
//   bookDetail.getElementsByClassName("more")[0].href = book.fields.more;
//   bookDetail.getElementsByClassName("cover-image")[0].src =
//     book.fields.cover_image[0].url;
//
//   // remove the .active class from any book spines that have it...
//   const shelf = document.getElementById("shelf");
//   const bookSpines = shelf.getElementsByClassName("active");
//   for (const bookSpine of bookSpines) {
//     bookSpine.classList.remove("active");
//   }
//   // ...and set it on the one just clicked
//   div.classList.add("active");
//
//   // reveal the detail element, we only really need this the first time
//   // but its not hurting to do it more than once
//   bookDetail.classList.remove("hidden");
// }
