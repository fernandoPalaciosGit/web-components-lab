(function () {
	'use strict';

	/**
	 * TEST PERFORMANCE IMPLEMENTATION, speed test class
	 * @param {Function} testImplement - object to test
	 * @param {Array} testParams - initialize object arguments
	 * @param {Number} sensibility - speed test average
	 * @param {Number} average - time proportional to one repetition
	 * @param {String} results - toString test results
	 */
	var TimePerformance = function (sensibility) {
		this.sensibility = sensibility || 10000;
		this.average = 0;
		this.results = this.setResults(null);
	};

	TimePerformance.prototype.setSensibility = function (sense) {
		this.sensibility = sense;
		this.results = this.setResults(null);
	};

	TimePerformance.prototype.setImplementation = function (testImplement, testParams) {
		this.testImplement = testImplement;
		this.testParams = testParams || [];
		this.results = this.setResults(null);
	};

	TimePerformance.prototype.setResults = function (average) {
		var output = '';

		if (average === null || this.average === 0) {
			output = 'Need to start Test.';

		} else {
			output += 'Average excution across ';
			output += this.sensibility + ' times = ';
			output += this.average + ' milseg.';
		}

		this.results = output;
	};

	TimePerformance.prototype.printPerformance = function () {
		return this.results;
	};

	TimePerformance.prototype.isTestAviable = function () {
		return Object.prototype.toString.call(this.testImplement).toLowerCase().indexOf('function') !== -1;
	};

	TimePerformance.prototype.startPerformance = function () {
		var beginTime = 0,
			endTime = 0,
			sumTimes = 0,
			i = 0,
			testIterations = this.sensibility.length;

		if (this.isTestAviable) {
			for (; i < testIterations; i++) {
				beginTime = +new Date();
				this.testImplement.apply(this.testImplement, this.testParams);
				endTime = +new Date();
				sumTimes += beginTime - endTime;
			}
		}

		this.average = sumTimes / this.sensibility;
		this.results = this.setResults(this.average);
		this.average = 0;
	};

	/*eslint-disable no-console*/
	/**
	 * approximation to Javascript runtimme
	 * @return {[type]} [description]
	 */
	TimePerformance.prototype.startTimer = function (name) {
		console.time(name || 'performance');
	};

	TimePerformance.prototype.endTimer = function (name) {
		console.timeEnd(name || 'performance');
	};
	/*eslint-enable no-console*/

	module.exports = TimePerformance;
}());
