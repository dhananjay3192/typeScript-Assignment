var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Profile = /** @class */ (function () {
    function Profile(id, _name, displayPicUrl, about, likes, work, education, dOB, gender, languages, relationship, quotes) {
        var _this = this;
        this.getId = function () {
            return _this.id;
        };
        this.getName = function () {
            console.log("Name");
            return _this._name;
        };
        this.setName = function (newName) {
            console.log("Name Changed");
            _this._name = newName;
        };
        this.getAbout = function () {
            console.log("About");
            return _this.about;
        };
        this.setAbout = function (newAbout) {
            _this.about = newAbout;
        };
        this.getEducation = function () {
            console.log("Education");
            return _this.education;
        };
        this.getQuotes = function () {
            console.log("Quote");
            return _this.quotes;
        };
        this.getDOB = function () {
            console.log("Date of Birth");
            return _this.dOB;
        };
        this.getLanguages = function () {
            console.log("Languages");
            return _this.languages;
        };
        this.getRelationship = function () {
            console.log("Relationship");
            return _this.relationship;
        };
        this.getDisplayPicUrl = function () {
            console.log("Display pic URL");
            return _this.displayPicUrl;
        };
        this.getLikes = function () {
            console.log("Likes");
            return _this.likes;
        };
        this.setlikes = function (newLike) {
            _this.likes = newLike.concat(_this.likes);
        };
        this.setWork = function (newWork) {
            _this.work = newWork;
        };
        this.id = id;
        this._name = _name;
        this.displayPicUrl = displayPicUrl;
        this.about = about;
        this.likes = likes;
        this.work = work;
        this.education = education;
        this.dOB = dOB;
        this.gender = gender;
        this.languages = languages;
        this.relationship = relationship;
        this.quotes = quotes;
    }
    return Profile;
}());
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page(id, _name, displayPicUrl, about, likes, likesCount, followersCount, rating, review) {
        var _this = _super.call(this, id, _name, displayPicUrl, about, likes) || this;
        _this.getLikesCount = function () {
            console.log('Likes count of the page');
            return _this.likesCount;
        };
        _this.getFollowersCount = function () {
            console.log("Followers count of the page");
            return _this.followersCount;
        };
        _this.getRating = function () {
            console.log("Ratings of page");
            return _this.rating;
        };
        _this.setRating = function (newRating) {
            _this.rating = newRating;
        };
        _this.getReview = function () {
            console.log("Reviews");
            return _this.review;
        };
        _this.setReview = function (newReview) {
            _this.review = _this.review.concat(newReview);
        };
        _this.likesCount = likesCount;
        _this.followersCount = followersCount;
        _this.rating = rating;
        _this.review = review;
        return _this;
    }
    return Page;
}(Profile));
//Instance of Profile class
var profileNew = new Profile("idpr56522", "Dhananjay", "https://profile-pic...", "Computer Science student pursuing MEAN stack development", ["Lionel Messi", "Virat Kohli"], "Student", { "highschool": "Shree Jain Vidyalaya", "college": "DSCSDEC" }, new Date(1992, 9, 31), "Male", ["English", "Hindi"], "single", "Life is a journey");
//Instance of Page class
var pageNew = new Page("idpg66625", "Cricket Trolls", "https://page-pic...", "Cricket news with a tinge of light fun", [""], 65000, 70025, 4.5, ["Some jokes are hard to digest", "your posts are awesome"]);
//Accessing ID of Page class
console.log(pageNew.getId());
//Accessing the ID of Profile class
console.log(profileNew.getId());
//name property of Profile class
console.log(profileNew.getName());
//name property of Page class
console.log(pageNew.getName());
//name property of Page class is changed
pageNew.setName("Cricket Fun");
//name property with modified value
console.log(pageNew.getName());
//rating property of Page class
console.log(pageNew.getRating());
pageNew.setRating(4.1);
console.log(pageNew.getRating());
//review property of Page class
console.log(pageNew.getReview());
pageNew.setReview(["Content is good"]);
console.log(pageNew.getReview());
//about property of Page class
console.log(pageNew.getAbout());
pageNew.setAbout("We post memes relating to cricket players please dont be offended");
console.log(pageNew.getAbout());
//about property of Profile class
console.log(profileNew.getAbout());
//education property of Profile class
console.log(profileNew.getEducation());
console.log(profileNew.getQuotes());
console.log(profileNew.getDOB());
console.log(profileNew.getLanguages());
//this will return undefined, since relationship property is accessed with instance of Page class but the "relationship" property is not called in super constructor present in Page class 
console.log(pageNew.getRelationship());
//relationship property of Profile class accessed by instance of Profile class i.e profileNew
console.log(profileNew.getRelationship());
//displayPicUrl of Profile class
console.log(profileNew.getDisplayPicUrl());
//displayPicUrl of Page class
console.log(pageNew.getDisplayPicUrl());
//likes in Profile class
console.log(profileNew.getLikes());
profileNew.setlikes(["Rahul Dravid", "Sachin Tendulkar"]);
console.log(profileNew.getLikes());
//likes in Page class
console.log(pageNew.getLikes()); //this will return an empty array, since an empty array was passed in the instance
