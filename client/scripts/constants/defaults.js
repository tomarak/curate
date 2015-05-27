'use strict';

var Defaults = {

  route: '/',

  page: {
    title: 'Home',
    description: 'A React + Flux application',
    keywords: null

  },

  user: {
    loggedIn: false,
    firstName: 'John',
    lastName: 'Doe'
  },

  messages: {},

	section: {
		title: null,
		description: null,
		links: ["www.google.com", "www.facebook.com"]
  }
};

module.exports = Defaults;
