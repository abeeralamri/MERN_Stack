const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    UserName:{
        type: String,
        default: 'Cloud9'
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    content: {
        type: String
    },
    url: {
        type: String
    },
    writtenByUser: {
        type: Boolean,
        default: false
    },
    image: {
        type: String
    },
    
    articleId: {
        type: String,
    }

}, {timestamps: true});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;