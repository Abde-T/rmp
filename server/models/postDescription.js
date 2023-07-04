import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default:0
    },
    createdAt: {
        type:Date,
        default: new Date()
    }
})

const PostDescription = mongoose.model('PostDescription', postSchema)
export default PostDescription;