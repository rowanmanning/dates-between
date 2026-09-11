export function* datesBetween(startDate = new Date(), endDate = startDate) {
	const current = incrementDate(cloneDate(startDate), -1);
	while (current < endDate) {
		yield cloneDate(incrementDate(current));
	}
}

function incrementDate(date: Date, amount = 1) {
	date.setDate(date.getDate() + amount);
	return date;
}

function cloneDate(date: Date) {
	return new Date(date.valueOf());
}
