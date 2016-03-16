/*jshint freeze:false*/
/*eslint-disable no-extend-native*/
(function (Element, NodeList, HTMLCollection, Array) {
	'use strict';

	var ExtendPrimitive = {
		loadNode: function () {
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
		},

		/**
     * remove array elemnets
     * @param  {[type]} item [description]
     * @return {[type]}      [description]
     */
		loadArray: function () {
			Array.prototype.arrUnset = function (item) {
				var position = this.indexOf(item);

				if ( ~position ) {
					this.splice(position, 1);
				}
			};
		},
		/*jshint freeze:true*/
		/*eslint-enable no-extend-native*/

		/**
		 * list of methods to initialize
		 * @type {Array}
		 */
		loadClientInterfaces: ['loadNode', 'loadArray']
	};

	module.exports = ExtendPrimitive;
}(window.Element, window.NodeList, window.HTMLCollection, window.Array));
