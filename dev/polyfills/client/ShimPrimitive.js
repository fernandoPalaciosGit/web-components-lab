/*eslint-disable no-console*/
(function (w) {
	'use strict';

	var ShimPrimitive = {
		/**
     * Override console interfaces across platforms
     * @return {[type]} [description]
     */
		loadConsole: function () {
			var method,
					methods = [
						'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
						'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
						'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
						'timeStamp', 'trace', 'warn'
					],
					length = methods.length,
					console = w.console = w.console || {},
					noop = function () {};

			while (length--) {
				method = methods[length];

				if (!console[method]) {
					console[method] = noop;
				}
			}
		},
		/*eslint-enable no-console*/

		/**
		 * Check element constructor type
		 * @param  {[type]} variable [description]
		 * @param  {[type]} type     [description]
		 * @return {[type]}          [description]
		 */
		checkTypeof: function (variable, type) {
			var typeofVariable = Object.prototype.toString.call(variable).toLowerCase(),
					constructor = null,
					checkType = false;

			if (!type || type.length === 0) {
				return typeofVariable.split(' ')[1].slice(0, -1);
			}

			constructor = type.trim().charAt(0).toUpperCase() + type.trim().slice(1);
			checkType = typeofVariable === '[object ' + constructor + ']';

			if (constructor !== 'Number') {
				return checkType;

			} else {
				return checkType && !isNaN(variable);
			}
		},

		/**
		 * Check empty element
		 * @param  {[type]}  list [description]
		 * @return {Boolean}    [description]
		 */
		isEmptyList: function (list) {
			return !list || list.length === 0;
		},

		/**
		 * list of methods to initialize
		 * @type {Array}
		 */
		loadClientInterfaces: ['loadConsole']
	};

	module.exports = ShimPrimitive;
}(window));
