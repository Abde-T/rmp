import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default:[]
    },
    createdAt: {
        type:Date,
        default: new Date()
    }
})

const PostDescription = mongoose.model('PostDescription', postSchema)
export default PostDescription;