/*
* LinkVote Controller
*/

'use strict';

var db = require('../config/database');
var Comment = db.comment;
var User = db.user;

var comment = function(req, res, next) {
  var comment = req.body;

  Comment.create({
    guideId: comment.guideId,
    userId: req.user.id,
    message: comment.message
  })
	.then(function(comment) {
			User.find({
				where: {
					id: comment.userId
				}
			})
				.then(function(user) {
					if (user && user.email) {
						comment.dataValues.userEmail = user.email;
						comment.selectedValues.userEmail = user.email;
						res.status(200).json({
							comment: comment,
							success: [{
								msg: 'Comment created successfully.'
							}]
						});
					}
				});

	})
  .error(function(err) {
    if (err) {
      return next(err);
    }
  });
};

module.exports = {
  comment: comment
};
