'use strict';

const {
    AUTHORS_DATA,
    COMMENTS_DATA,
    POSTS_DATA} = require('./../../common/mock/data');

module.exports = function(server) {
  (function() {
    Promise.all(AUTHORS_DATA.map(element => server.models.Author.create(element)))
    .then(() => Promise.all(POSTS_DATA.map(element => server.models.Post.create(element))))
    .then(() => Promise.all(COMMENTS_DATA.map(element => server.models.Comment.create(element))))
    .then(() => console.log('Mock data initialization done'))
    .catch(error => console.error(error));
  })();
};

