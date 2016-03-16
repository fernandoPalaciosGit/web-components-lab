(function (d) {
	'use strict';

	var Document = {
		/**
		 * Create cookies
		 * @param {[type]} cname  [description]
		 * @param {[type]} cvalue [description]
		 * @param {[type]} exdays [description]
		 */
		setCookie: function (cname, cvalue, exdays) {
			var d = new Date(),
					expires = '';

			d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
			expires = 'expires=' + d.toGMTString();
			d.cookie = cname + '=' + cvalue + '; ' + expires;
		},

		/**
		 * Retrieve a cookie by name
		 * @param  {[type]} cname [description]
		 * @return {[type]}       [description]
		 */
		getCookie: function (cname) {
			var name = cname + '=',
					ca = d.cookie.split(';'),
					c = '',
					i = 0,
					len = ca.length;

			for (; i < len; i++) {
				c = ca[i].trim();

				if (c.indexOf(name) === 0) {
					return c.substring(name.length,c.length);
				}
			}

			return '';
		}
	};

	module.exports = Document;
}(document));
