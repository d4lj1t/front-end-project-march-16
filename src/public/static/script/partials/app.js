/*
	App base constructor
	----------------------------------- */

	module.exports = function App() {
		'use strict';

		var self = this;

		// Dependencies
		var $ = require('jquery');


/*
		External methods
		----------------------------------- */

		self.init = function() {





			// Start other modules
			new (require('partials/side-menu'))();
			new (require('partials/secondary-nav'))();


		/*	// 3rd party
			require('picturefill');
			(require('fastclick'))(document.body);

			// Prevent linking on disabled <a>
			$(document).on('click', 'a.button--disabled', function(event) {
				event.preventDefault();
			});*/


		};

		// Auto initialise
		self.init();

		// Return instance
		return self;
	};
