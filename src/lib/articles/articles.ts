
export interface NewsArticle {
	source: string,
	title: string,
	publicationDate: Date,
	link: string,
}

export function formatDate(date: Date, IFS='-', dateIFS='/', timeIFS=":") {
	const date_items = [
		date.getMonth(),
		date.getDay(),
		date.getFullYear()
	]
	const time_items = [
		date.getHours(),
		
	]
	const day = formatYearMonthDay(date, dateIFS);
	let minutes = formatTime(date, timeIFS);
	return [day, minutes].join(' - ');
}
function padAZero(time: string) {
	if (time.length == 1) return '0' + time;
	return time;
}

function formatTime(date: Date, ifs=":"): string {
	const time_items = [
		date.getHours(),
		padAZero(date.getMinutes().toString()),
	]

	return time_items.join(ifs)
}

function formatYearMonthDay(date: Date, ifs="/"): string {
	const things = [
		padAZero(date.getMonth().toString()),
		padAZero(date.getDay().toString()),
		date.getFullYear(),
	]
	return things.join(ifs)
}