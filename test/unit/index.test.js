'use strict';

const { beforeEach, describe, it } = require('node:test');
const assert = require('node:assert');

describe('dates-between', () => {
	let datesBetween;

	beforeEach(() => {
		datesBetween = require('../..');
	});

	it('exports a generator function', () => {
		assert.strictEqual(typeof datesBetween, 'function');
		assert.strictEqual(datesBetween.constructor.name, 'GeneratorFunction');
	});

	describe('datesBetween()', () => {
		let endDate;
		let returnValue;
		let startDate;

		beforeEach(() => {
			startDate = new Date(Date.UTC(2016, 2, 30));
			endDate = new Date(Date.UTC(2016, 3, 3));
			returnValue = datesBetween(startDate, endDate);
		});

		it('returns an iterable', () => {
			assert.strictEqual(typeof returnValue[Symbol.iterator], 'function');
		});

		it('generates dates between the given start and end dates (inclusive)', () => {
			const dates = Array.from(returnValue);
			assert.strictEqual(dates.length, 5);
			for (const date of dates) {
				assert.ok(date instanceof Date);
			}
			assert.strictEqual(dates[0].toISOString(), '2016-03-30T00:00:00.000Z');
			assert.strictEqual(dates[1].toISOString(), '2016-03-31T00:00:00.000Z');
			assert.strictEqual(dates[2].toISOString(), '2016-04-01T00:00:00.000Z');
			assert.strictEqual(dates[3].toISOString(), '2016-04-02T00:00:00.000Z');
			assert.strictEqual(dates[4].toISOString(), '2016-04-03T00:00:00.000Z');
		});

		it('does not modify the passed in Date objects', () => {
			assert.strictEqual(startDate.toISOString(), '2016-03-30T00:00:00.000Z');
			assert.strictEqual(endDate.toISOString(), '2016-04-03T00:00:00.000Z');
		});

		it('clones generated dates, not yielding with passed in Date objects', () => {
			const dates = Array.from(returnValue);
			assert.notStrictEqual(dates[0], startDate);
			assert.notStrictEqual(dates[0], endDate);
		});

		describe('when the end date is before the start date', () => {
			beforeEach(() => {
				startDate = new Date(Date.UTC(2016, 3, 3));
				endDate = new Date(Date.UTC(2016, 2, 30));
				returnValue = datesBetween(startDate, endDate);
			});

			it('generates an empty array', () => {
				const dates = Array.from(returnValue);
				assert.strictEqual(dates.length, 0);
			});
		});

		describe('when no end date is specified', () => {
			beforeEach(() => {
				returnValue = datesBetween(startDate);
			});

			it('generates an array containing only the start date', () => {
				const dates = Array.from(returnValue);
				assert.strictEqual(dates.length, 1);
				assert.strictEqual(dates[0].toISOString(), '2016-03-30T00:00:00.000Z');
			});
		});

		describe('when no start or end date is specified', () => {
			beforeEach(() => {
				returnValue = datesBetween();
			});

			it('generates an array containing only the current date', () => {
				const dates = Array.from(returnValue);
				assert.strictEqual(dates.length, 1);
				assert.strictEqual(
					dates[0].toISOString().split('T')[0],
					new Date().toISOString().split('T')[0]
				);
			});
		});
	});

	describe('.default', () => {
		it('aliases the module exports', () => {
			assert.strictEqual(datesBetween, datesBetween.default);
		});
	});
});
