'use strict';

/**
 * @import { datesBetween } from '.'
 */

/** @type {datesBetween} */
exports.datesBetween = function* datesBetween(startDate = new Date(), endDate = startDate) {
	const current = incrementDate(cloneDate(startDate), -1);
	while (current < endDate) {
		yield cloneDate(incrementDate(current));
	}
};

/**
 * @param {Date} date
 * @param {number} amount
 * @returns {Date}
 */
function incrementDate(date, amount = 1) {
	date.setDate(date.getDate() + amount);
	return date;
}

/**
 * @param {Date} date
 * @returns {Date}
 */
function cloneDate(date) {
	return new Date(date.valueOf());
}
