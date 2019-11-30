var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get("/", function(req, res){
    res.render("landing");
});

//======================================================
// AUTHENTICATION ROUTES
//======================================================

//show register form
router.get("/register", function(req, res){
    res.render("register");
});

//hand sign up
router.post("/register", function(req, res){
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err)
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("Success", "Welcome to YelpCamp" + user.username)
            res.redirect("/campgrounds")
        });
    });
 });

 //show login form
 router.get("/login", function(req, res){
     res.render("login");
 });

 //handling login logic

 router.post("/login",passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), function(req, res){
});

router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged you out!");
    res.redirect("/campgrounds");
});
 
module.exports = router;