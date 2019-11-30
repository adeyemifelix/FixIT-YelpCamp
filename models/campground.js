var mongoose = require("mongoose");
//const MongoClient = require('mongodb').MongoClient;
//SCHEMA SETUP
var campgroundSchema =  mongoose.Schema({
    name:  String,
    price: String,
    image: String,
    description: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"

        }

    ]
});
 //compiling the above code for the schema into a model
module.exports = mongoose.model("Campground", campgroundSchema);