(function (w, d) {
	'use strict';

	var DomUtils = function () {
		var scope = {};

		/*eslint-disable no-console*/
		/**
     * Check debugger compatiblity
     * @return {[type]} [description]
     */
		scope.loadDebuger = function () {
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
		};
		/*eslint-enable no-console*/

		/*jshint freeze:false*/
		/*eslint-disable no-extend-native*/
		scope.extendPrimitiveProto = function () {

			/**
       * remove array elemnets
       * @param  {[type]} item [description]
       * @return {[type]}      [description]
       */
			Array.prototype.arrUnset = function (item) {
				var position = this.indexOf(item);

				if ( ~position ) {
					this.splice(position, 1);
				}
			};

			/**
       * remove DOM Node Element
       * @return {[type]} [description]
       */
			Element.prototype.remove = function () {
				this.parentElement.removeChild(this);
			};

			NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
				var i = 0,
						len = this.length;

				for (; i < len; i++) {
					if (this[i] && this[i].parentElement) {
						this[i].parentElement.removeChild(this[i]);
					}
				}
			};
		};
		/*eslint-enable*/
		/*jshint freeze:true*/

		scope.initNativeShim = function () {
			scope.loadDebuger();
			scope.extendPrimitiveProto();
		};

		return {
			initNativeShim: scope.initNativeShim
		};
	};

	/**
	 * Extend array properties to dom querySelectorAll
	 * @param  {[type]} domSelector [description]
	 * @return {[type]}             [description]
	 */
	DomUtils.prototype.domQuery = function (domSelector) {
		return [].slice.call( d.querySelectorAll(domSelector) );
	};

	/**
	 * Create cookies
	 * @param {[type]} cname  [description]
	 * @param {[type]} cvalue [description]
	 * @param {[type]} exdays [description]
	 */
	DomUtils.prototype.setCookie = function (cname, cvalue, exdays) {
		var d = new Date(),
				expires = '';

		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		expires = 'expires=' + d.toGMTString();
		d.cookie = cname + '=' + cvalue + '; ' + expires;
	};

	/**
	 * Retrieve a cookie by name
	 * @param  {[type]} cname [description]
	 * @return {[type]}       [description]
	 */
	DomUtils.prototype.getCookie = function (cname) {
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
	};

	/**
	 * Retrieve last sibling DOM node
	 * @param  {[type]} n [description]
	 * @return {[type]}   [description]
	 */
	DomUtils.prototype.getPreviousNodeElement = function (n) {
		var x = n.previousSibling;

		while ( x.nodeType !== Node.ELEMENT_NODE ) {
			x = x.previousSibling;
		}

		return x;
	};

	/**
	 * Add element DOM after reference element
	 * @param  {[type]} referenceNode [description]
	 * @param  {[type]} newNode       [description]
	 * @return {[type]}               [description]
	 */
	DomUtils.prototype.insertAfter = function (referenceNode, newNode) {
		referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	};

	/**
	 * Check empty element
	 * @param  {[type]}  el [description]
	 * @return {Boolean}    [description]
	 */
	DomUtils.prototype.isEmpty = function (el) {
		return !el || el.length === 0;
	};

	/**
	 * Check element constructor type
	 * @param  {[type]} variable [description]
	 * @param  {[type]} type     [description]
	 * @return {[type]}          [description]
	 */
	DomUtils.prototype.checkTypeof = function (variable, type) {
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
	};

	module.exports = DomUtils;
}(window, document));
