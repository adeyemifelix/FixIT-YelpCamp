var Campground = require("../models/campground")
var Comment    = require("../models/comment")

// ALL THE MIDDLE GOES HERE
var middlewareobj = {};

middlewareobj.checkCampgroundOwnership = function(req, res, next){
        if(req.isAuthenticated()){
            Campground.findById(req.params.id, function(err, foundCampground){
                if(err){
                    req.flash("error", "campground not find in DataBase");
                    res.redirect("back");
                }else{
                    //does user own the campground?
                    if(foundCampground.author.id.equals(req.user._id)){
                        next();
                    }else{
                        req.flash("error", "You don't have permission to do that");
                        res.redirect("back");
                    }               
                }
            });       
        } else{
            req.flash("error", "THIS IS  A SERIOUS ACHING!!! VIA URL please login First!")
            res.redirect("back")
        }
    
}

middlewareobj.checkCommentOwnership = function(req, res, next){
        if(req.isAuthenticated()){
            Comment.findById(req.params.comment_id, function(err, foundComment){
                if(err){
                    res.redirect("back");
                }else{
                    //does user own the comment?
                    if(foundComment.author.id.equals(req.user._id)){
                        next();
                    }else{
                        req.flash("error", "You don't have permission to do that");
                        res.redirect("back");
                    }               
                }
            });       
        } else{
            req.flash("error", "You need to logged in to do that");
            res.redirect("back")
        }
       
}

//middleware
middlewareobj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "please login First! or Sign Up for just N0.00")
    res.redirect("/login");
}

module.exports = middlewareobj