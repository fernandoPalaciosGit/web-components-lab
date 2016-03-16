(function (d) {
	'use strict';

	var Dom = {
		/**
		 * Extend array properties to dom querySelectorAll
		 * @param  {[type]} domSelector [description]
		 * @return {[type]}             [description]
		 */
		domQuery: function (domSelector) {
			return [].slice.call( d.querySelectorAll(domSelector) );
		},

		/**
		 * Retrieve last sibling DOM node
		 * @param  {[type]} n [description]
		 * @return {[type]}   [description]
		 */
		getPreviousNodeElement: function (n) {
			var x = n.previousSibling;

			while ( x.nodeType !== Node.ELEMENT_NODE ) {
				x = x.previousSibling;
			}

			return x;
		},

		/**
		 * Add element DOM after reference element
		 * @param  {[type]} referenceNode [description]
		 * @param  {[type]} newNode       [description]
		 * @return {[type]}               [description]
		 */
		insertAfter: function (referenceNode, newNode) {
			referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
		}
	};

	module.exports = Dom;
}(document));
