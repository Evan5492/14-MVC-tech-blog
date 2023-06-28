const User = require('../models/user');
const Comment = require('../models/comment');
const Post = require('../models/post');


User.hasMany(Post, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

Post.belongsTo(User, {
    foreignKey:'user_id',
});

Comment.belongsTo(Post, {
    foreignKey:'post_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {User, Comment, Post};