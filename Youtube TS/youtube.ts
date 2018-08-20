class Youtube{
    private channelName:string;
    private subscriberCount:number;
    private videoId:string;
    private title:string;
    private description:string;
    private tags:string[];     //tags will be stored in an array
    private numberOfViews:number;
    private uploadDate:Date;
    private likesCount:number;
    private comments:string[];   //comments will be stored in an array
    private commentsCount:number;
    private shareCount:number;

    constructor(channelName:string,subscriberCount:number,videoId:string,title:string,description:string,tags:string[],numberOfViews:number,uploadDate:Date,likesCount:number,comments:string[],commentsCount:number,shareCount:number)
    {
       this.channelName=channelName;
       this.subscriberCount=subscriberCount;
       this.videoId=videoId;
       this.title=title;
       this.description=description;
       this.tags=tags;
       this.numberOfViews=numberOfViews;
       this.uploadDate=uploadDate;
       this.likesCount=likesCount;
       this.comments=comments;
       this.commentsCount=commentsCount;
       this.shareCount=shareCount;
    }

    getVideoId=()=>
    {   
        console.log("Video's Id.");
        return this.videoId;
    }
    getLikesCount=()=>
    {   
        console.log("Number of Likes")
        return this.likesCount;
    }
    getComments=()=>
    {   
        console.log("Comments");
        console.log("Expand the array below to view comments")
        return this.comments; 
    }
    setComments=(newComment:string[])=>
    {   
       this.comments=this.comments.concat(newComment);
    }
    getCommentCount=()=>
    {   
        console.log("Number of comments");
        return this.commentsCount;
    }
    setCommentCount=(count:number)=>
    {
        this.commentsCount=this.commentsCount + count;
    }
    getNumberOfViews=()=>
    {   
        console.log("Number Of Views")
        return this.numberOfViews
    }
    setNumberOfViews(view:number)
    {   
        console.log("Number of views gets modified...")
        this.numberOfViews=this.numberOfViews + view;
    }
    getTitle=()=>
    {   
        console.log("Video Title")
        return this.title;
    }
    setTitle=(newTitle:string)=>
    {  
       console.log("Video's Title gets modified...")
       this.title=newTitle;
    }
    getDescription=()=>
    {
        return this.description;
    }
    getTags=()=>
    {
        console.log("Tags");
        return this.tags;
    }
    setTags=(newTag:string[])=>
    {
        this.tags=this.tags.concat(newTag);
    }
    getChannelName=()=>
    {   
        console.log("Channel's Name")
        return this.channelName;
    }
    setChannelName=(newName:string)=>
    {   
        console.log("Channel's Name gets modified...");
        this.channelName = newName;
    }
    getSubscriberCount=()=>
    {   
        console.log("Number of Subscriber")
        return this.subscriberCount;
    }
    getUploadDate=()=>
    {  
        console.log("Date of Upload");
        return this.uploadDate;
    }
    setUploadDate=(_changedDate:Date)=>
    {   
        console.log("Upload date modified to today's date")
        this.uploadDate=_changedDate;
    }
    getShareCount=()=>{
        console.log("Number of times the video got shared")
        return this.shareCount;
    }
    setShareCount=(newShareCount:number)=>
    {   
        console.log("Shares Count modified...")
        this.shareCount = this.shareCount + newShareCount;
    }
    getRelatedVideos=()=>
    {
        console.log("This method will return the ids of videos having content tags similar to the tags of the particular video")
    }
    sortComments=()=>
    {
        console.log("This method will reverse the comments array to show the recent comments on the top after addition of a new comment");
    }
   
}


let video=new Youtube("Motivation",25555,"id234569","Focus is everything","Some tips to improve focus",["motivation","focus"],4500,new Date(2018,4,24),3566,["Thumbs up for the approach","nice content"],2,89);

//videoID
console.log(video.getVideoId());

//likesCount,CommentCount,Comments
console.log(video.getLikesCount());
console.log(video.getComments());
console.log(video.getCommentCount());
video.setComments(["video quality was not good"]);
console.log(video.getComments());
video.setCommentCount(1);
console.log(video.getCommentCount());

//Number of Views
console.log(video.getNumberOfViews());
video.setNumberOfViews(1);
console.log(video.getNumberOfViews());

//Title
console.log(video.getTitle());
video.setTitle("Focus Revisited");
console.log(video.getTitle());

//Description and tags
console.log(`Description - ${video.getDescription()}`);
console.log(video.getTags());
video.setTags(["concentration"]);
console.log(video.getTags());
//ChannelName
console.log(video.getChannelName());
video.setChannelName("Motivational Stuffs");
console.log(video.getChannelName());
//SubscriberCount and UploadDate
console.log(video.getSubscriberCount());
console.log(video.getUploadDate());
video.setUploadDate(new Date());
console.log(video.getUploadDate());
//ShareCount
console.log(video.getShareCount());
video.setShareCount(1);
console.log(video.getShareCount());
//Some additional methods
video.getRelatedVideos();
video.sortComments();