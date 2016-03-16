(function () {
	'use strict';

	var _ = require('lodash'),
	Client = function () {

	};

	_.extend(
		Client.prototype,
		require('client/ShimPrimitive'),
		require('client/ExtendPrimitive'),
		require('client/Dom'),
		require('client/Document'),
		{
			/**
			 * loadClientInterfaces from prototype interfaces
			 * @return {[type]} [description]
			 */
			load: function () {
				//loadClientInterfaces
			}
		});

	module.exports = Client;
}(window));
