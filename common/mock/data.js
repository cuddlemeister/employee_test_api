'use strict';

const faker = require('faker');

const authorsSize = Math.round(Math.random() * 30) + 70;
const postsSize = authorsSize * 2 + Math.round(Math.random() * 50);
const commentsSize = postsSize * 2 + Math.round(Math.random() * 50);

const AUTHORS_DATA = new Array(authorsSize)
    .fill(null)
    .map(() => {
      return {
        'first_name': faker.name.firstName(),
        'last_name': faker.name.lastName(),
        'address': faker.address.streetAddress(),
        'city': faker.address.city(),
        'country': faker.address.country(),
        'date_of_birth': faker.date.between(
                new Date('1940-01-01T08:17:22.334Z'),
                new Date('2005-01-01T08:17:22.334Z')
            ),
        'is_female_gender': !!Math.round(Math.random()),
        'email': faker.internet.email(),
        'phone': faker.phone.phoneNumber(),
        'date_created': faker.date.between(
                new Date('2018-01-01T08:17:22.334Z'),
                new Date('2020-01-01T08:17:22.334Z')
            ),
      };
    });

const POSTS_DATA = new Array(postsSize)
    .fill(null)
    .map(() => {
      return {
        'title': faker.hacker.phrase(),
        'text': faker.lorem.paragraphs(Math.round(Math.random() * 3) + 1),
        'authorId': faker.random.number(authorsSize),
      };
    });
const COMMENTS_DATA = new Array(commentsSize)
    .fill(null)
    .map(() => {
      return {
        'content': faker.hacker.phrase() + faker.hacker.phrase(),
        'authorId': faker.random.number(authorsSize),
        'postId': faker.random.number(postsSize),
      };
    });

module.exports = {
  AUTHORS_DATA,
  COMMENTS_DATA,
  POSTS_DATA,
};
