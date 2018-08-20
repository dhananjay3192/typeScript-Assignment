class Profile
{
    protected id:string;
    protected _name:string;
    protected displayPicUrl:string; 
    protected about:string;
    protected likes:string[];
    protected work?:string;
    protected education?:{highschool:string,college:string};
    protected dOB?:Date;
    protected gender?:string;
    protected languages?:string[];
    protected relationship?:string;
    protected quotes?:string;
    

    constructor(id:string,_name:string,displayPicUrl:string,about:string,likes:string[],work?:string,education?:{highschool:string,college:string},dOB?:Date,gender?:string,languages?:string[],relationship?:string,quotes?:string)
    {
       this.id=id;
       this._name=_name;
       this.displayPicUrl=displayPicUrl; 
       this.about=about;
       this.likes=likes;
       this.work=work;
       this.education=education;
       this.dOB=dOB;
       this.gender=gender;
       this.languages=languages;
       this.relationship=relationship;
       this.quotes=quotes;
    }

    getId=()=>
    {
        return this.id;
    }

    getName=()=>
    {   
        console.log("Name");
        return this._name;
    }

    setName=(newName:string)=>
    {
        console.log("Name Changed");
        this._name = newName;
    }

    getAbout=()=>
    {
        console.log(`About`);
        return this.about;
    }

    setAbout=(newAbout:string)=>
    {
        this.about=newAbout;
    }

    getEducation=()=>
    {
        console.log(`Education`);
        return this.education;
    }
    getQuotes=()=>
    {
        console.log(`Quote`);
        return this.quotes;
    }
    getDOB=()=>
    {
        console.log(`Date of Birth`);
        return this.dOB;
    }
    getLanguages=()=>
    {
        console.log("Languages");
        return this.languages;
    }
    getRelationship=()=>
    {   
        console.log("Relationship");
        return this.relationship;
    }
    getDisplayPicUrl=()=>
    {
        console.log("Display pic URL")
        return this.displayPicUrl;
    }
    getLikes=()=>
    {
        console.log(`Likes`);
        return this.likes;
    }
    setlikes=(newLike:string[])=>
    {
    
        this.likes=newLike.concat(this.likes);
    }
    setWork=(newWork:string)=>
    {
        this.work=newWork;
    }
}
class Page extends Profile
{
   private likesCount:number;
   private followersCount:number;
   private rating:number;
   private review:string[];

   constructor(id:string,_name:string,displayPicUrl:string,about:string,likes:string[],likesCount:number,followersCount:number,rating:number,review:string[])
   {
       super (id,_name,displayPicUrl,about,likes);
       this.likesCount=likesCount;
       this.followersCount=followersCount;
       this.rating=rating;
       this.review=review;
   }

   getLikesCount=()=>
   {   
       console.log('Likes count of the page')
       return this.likesCount;
   }
   getFollowersCount=()=>
   {   
       console.log(`Followers count of the page`);
       return this.followersCount;
   }
   getRating=()=>
   {
       console.log(`Ratings of page`);
       return this.rating;
   }
   setRating=(newRating:number)=>
   {
       this.rating=newRating;
   }
   getReview=()=>
   {
       console.log(`Reviews`)
       return this.review;
   }
   setReview=(newReview:string[])=>
   {
       this.review=this.review.concat(newReview);
   }
}

//Instance of Profile class
let profileNew = new Profile("idpr56522","Dhananjay","https://profile-pic...","Computer Science student pursuing MEAN stack development",["Lionel Messi", "Virat Kohli"],"Student",{"highschool":"Shree Jain Vidyalaya","college":"DSCSDEC"},new Date(1992,9,31),"Male",["English","Hindi"],"single","Life is a journey");

//Instance of Page class
let pageNew= new Page("idpg66625","Cricket Trolls","https://page-pic...","Cricket news with a tinge of light fun",[""],65000,70025,4.5,["Some jokes are hard to digest","your posts are awesome"]);

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
profileNew.setlikes(["Rahul Dravid","Sachin Tendulkar"]);
console.log(profileNew.getLikes());

//likes in Page class
console.log(pageNew.getLikes()); //this will return an empty array, since an empty array was passed in the instance
