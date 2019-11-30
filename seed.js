var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {name: "Lake",
     image: "https://lakecumberlandvacation.com/wp-content/uploads/2018/03/KOA-CAMPGROUND-Main-Building-Russell-Springs.jpg",
    description: "Lake Cumberland Campgrounds. i have you been there?"
    },
    {name: "D' Best",
    image: "https://www.planetware.com/photos-large/USTX/texas-big-bend-national-park-camping-chisos-basin-campground.jpg",
   description: "This is the Cumberland Campgrounds. i have you been there?"
   },
   {name: "Windy Hills",
    image: "https://discoveralleganycounty.com/wp-content/uploads/2018/10/WindyHillsCampground.jpg",
    description: "County home is the best o boy! Lorem ipsum is the nonsense filler text that typically demonstrates the font and style of a text in a document or visual demonstration. Originally from Latin, lorem ipsum has no intelligible meaning, but is simply a display of letters and characteristics to be viewed as a sample with given graphical elements in a file. Lipsum (portmanteau of lorem and ipsum) generators are commonly used to form generic text in a file. The “gibberish” is adequately like normal text to demonstrate a font, but does not distract the reader with its content. It has been used as placeholder text since the 16th century."
  }
]

function seedDB(){
    //REMOVE ALL CAMPGROUNDS
      Campground.remove({}, function(err){
          if(err){
            console.log(err);
         }
        console.log("removed campgrounds!");
         //ADD A FEW CAMPGROUNDS
  //  data.forEach(function(seed){
  //      Campground.create(seed, function(err, campground){
 //           if(err){
 //               console.log(err);
 //           }else{
 //               console.log("added a campground")
 //               //CREATE A  COMMENT
 //               Comment.create(
 //                   {
 //                       text: "This place is a great place you can come to have a relaxation moment",
 //                       author: "Felix Homies"
 //                   },  function(err, comment){
 //                          if(err){
 //                               console.log(err)
 //                               }else{
 //                                      campground.comments.push(comment);
 //                                      campground.save();
 //                                      console.log("created new comment");
 //                                 }
 //                           });
 //                         }
 //                      })
 //                   });
                 });
              }

module.exports = seedDB;
