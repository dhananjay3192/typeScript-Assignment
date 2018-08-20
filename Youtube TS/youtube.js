var Youtube = /** @class */ (function () {
    function Youtube(channelName, subscriberCount, videoId, title, description, tags, numberOfViews, uploadDate, likesCount, comments, commentsCount, shareCount) {
        var _this = this;
        this.getVideoId = function () {
            console.log("Video's Id.");
            return _this.videoId;
        };
        this.getLikesCount = function () {
            console.log("Number of Likes");
            return _this.likesCount;
        };
        this.getComments = function () {
            console.log("Comments");
            console.log("Expand the array below to view comments");
            return _this.comments;
        };
        this.setComments = function (newComment) {
            _this.comments = _this.comments.concat(newComment);
        };
        this.getCommentCount = function () {
            console.log("Number of comments");
            return _this.commentsCount;
        };
        this.setCommentCount = function (count) {
            _this.commentsCount = _this.commentsCount + count;
        };
        this.getNumberOfViews = function () {
            console.log("Number Of Views");
            return _this.numberOfViews;
        };
        this.getTitle = function () {
            console.log("Video Title");
            return _this.title;
        };
        this.setTitle = function (newTitle) {
            console.log("Video's Title gets modified...");
            _this.title = newTitle;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getTags = function () {
            console.log("Tags");
            return _this.tags;
        };
        this.setTags = function (newTag) {
            _this.tags = _this.tags.concat(newTag);
        };
        this.getChannelName = function () {
            console.log("Channel's Name");
            return _this.channelName;
        };
        this.setChannelName = function (newName) {
            console.log("Channel's Name gets modified...");
            _this.channelName = newName;
        };
        this.getSubscriberCount = function () {
            console.log("Number of Subscriber");
            return _this.subscriberCount;
        };
        this.getUploadDate = function () {
            console.log("Date of Upload");
            return _this.uploadDate;
        };
        this.setUploadDate = function (_changedDate) {
            console.log("Upload date modified to today's date");
            _this.uploadDate = _changedDate;
        };
        this.getShareCount = function () {
            console.log("Number of times the video got shared");
            return _this.shareCount;
        };
        this.setShareCount = function (newShareCount) {
            console.log("Shares Count modified...");
            _this.shareCount = _this.shareCount + newShareCount;
        };
        this.getRelatedVideos = function () {
            console.log("This method will return the ids of videos having content tags similar to the tags of the particular video");
        };
        this.sortComments = function () {
            console.log("This method will reverse the comments array to show the recent comments on the top after addition of a new comment");
        };
        this.channelName = channelName;
        this.subscriberCount = subscriberCount;
        this.videoId = videoId;
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.numberOfViews = numberOfViews;
        this.uploadDate = uploadDate;
        this.likesCount = likesCount;
        this.comments = comments;
        this.commentsCount = commentsCount;
        this.shareCount = shareCount;
    }
    Youtube.prototype.setNumberOfViews = function (view) {
        console.log("Number of views gets modified...");
        this.numberOfViews = this.numberOfViews + view;
    };
    return Youtube;
}());
var video = new Youtube("Motivation", 25555, "id234569", "Focus is everything", "Some tips to improve focus", ["motivation", "focus"], 4500, new Date(2018, 4, 24), 3566, ["Thumbs up for the approach", "nice content"], 2, 89);
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
console.log("Description - " + video.getDescription());
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
