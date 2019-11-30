var express              = require("express"),
    app                  = express(),
    bodyParser           = require("body-parser"),
    mongoose             = require("mongoose"),
    flash                = require("connect-flash"),
    passport             = require("passport"),
    localStrategy        = require("passport-local"),
    methodOverride       = require("method-override"),
    Campground           = require("./models/campground"),
    Comment              = require("./models/comment"),
    User                 = require("./models/user"),
    seedDB               = require("./seed")


//mongoose.connect("mongodb://localhost:27017/yelp_camp_v11", { useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connect("mongodb+srv://adeyemifelix:CFGdescent1981@gettingstarted-3ojad.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true , useUnifiedTopology: true });


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
console.log(__dirname);
//seedDB();  // seeds the database

var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index")

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "watch your words",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error       = req.flash("error");
    res.locals.success     = req.flash("success");
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT || 1800, function(){
    console.log("THE YELPCAMP SERVER STARTED!!!");
})