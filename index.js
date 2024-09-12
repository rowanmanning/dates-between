'use strict';

/**
 * Get an iterator comprising of all dates between a start and end date.
 *
 * @public
 * @param {Date} [startDate]
 *     The start date. Defaults to the current date.
 * @param {Date} [endDate]
 *     The end date. Defaults to the given start date.
 * @yields {Date}
 *     Yields the next date in the sequence.
 */
function* datesBetween(startDate = new Date(), endDate = startDate) {
	const current = incrementDate(cloneDate(startDate), -1);
	while (current < endDate) {
		yield cloneDate(incrementDate(current));
	}
}

/**
 * Increment a date object by a number of days.
 *
 * @private
 * @param {Date} date
 *     The date object to increment.
 * @param {number} amount
 *     The number of days to increment by.
 * @returns {Date}
 *     Returns the incremented date.
 */
function incrementDate(date, amount = 1) {
	date.setDate(date.getDate() + amount);
	return date;
}

/**
 * Clone a date object.
 *
 * @private
 * @param {Date} date
 *     The date object to clone.
 * @returns {Date}
 *     Returns a cloned data object.
 */
function cloneDate(date) {
	return new Date(date.valueOf());
}

/** @type {typeof datesBetween} */
module.exports = datesBetween;
module.exports.default = module.exports;
