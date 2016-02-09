(function (d, w) {
	'use strict';

	var POLYFILL = 'node_modules/webcomponentsjs/webcomponents-lite.min.js',
		DOM_TYPES = ['shady', 'shadow'],
		_ = require('_');

	var PolymerStarter = function (domType) {
		this.elements = [];
		this.domType = this.setDom(domType || '');
	};

	PolymerStarter.setDom = function(domType) {
		var dom = _.indexOf(DOM_TYPES, _.toLowerCase(domType)) !== -1 ? domType : DOM_TYPES[0];
		this.domType = dom;
	};

	PolymerStarter.prototype.load = function () {
		if (!this.isSuported) {
			this.loadPolyfillPolymer();

		} else {
			this.loadLazyPolymer();
		}
	};

	PolymerStarter.prototype.isSuported = function () {
		return 'registerElement' in d &&
			'import' in d.createElement('link') &&
			'content' in d.createElement('template');
	};

	PolymerStarter.prototype.loadPolyfillPolymer = function () {
		var wcPoly = d.createElement('script');
		
		wcPoly.src = POLYFILL;
		wcPoly.onload = this.loadLazyPolymer;
		d.head.appendChild(wcPoly);
	};

	PolymerStarter.prototype.loadLazyPolymer = function () {
		// Let's use Shadow DOM if we have it, future implementation.
		w.Polymer = w.Polymer || {};
		w.Polymer.dom = this.domType;

		this.elements.forEach(function(elementURL) {
			var elImport = document.createElement('link');
	
			elImport.rel = 'import';
			elImport.href = elementURL;
			document.head.appendChild(elImport);
		});
	};

	PolymerStarter.prototype.setElements = function (arrUrlElements) {
		this.elements = arrUrlElements || [];
	};

	module.exports = PolymerStarter;
})(document, window);