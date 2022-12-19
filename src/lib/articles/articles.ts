import { XMLParser } from "fast-xml-parser";

export interface NewsArticle {
	source: string,
	title: string,
	publicationDate: Date,
	link: string,
}

interface Feed {
	link: URL,
	source: string,
	parser: (text: string, parsedXML: XMLParser) => NewsArticle[]
}

//This should go in its own module or be placed in Article.
export function formatDate(date: Date, IFS='-', dateIFS='/', timeIFS=":") {
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

export async function getArticles(url: URL):Promise<NewsArticle[]> {



	let articles: NewsArticle[] = [];
	return articles;

} 
function rssParser(text: string, parser: XMLParser): NewsArticle[] {
	let data = parser.parse(text);
	let source = data.rss.channel.title;
	return parser.parse(text).rss.channel.item.map(
		article => {
			return {
				source: source,
				title: article.title,
				publicationDate: new Date(article.pubDate),
				link: article.link
			}

		}
	)
}


//These will be dumped in favor of the RSS parser which \
//should be able to grep all the data it needs.
//but will be done after the server components have been fixed.
const YCombinator: Feed = {
	link: new URL('https://news.ycombinator.com/rss'),
	source: "YCombinator",
	parser: rssParser,
}

const NYTimes: Feed = {
	link: new URL('https://rss.nytimes.com/services/xml/rss/nyt/US.xml'),
	source: 'NYTimes-US',
	parser: rssParser
}



const availableSources = [
	YCombinator,
	NYTimes,
]


//This will be reworked to to only call
//for a single link instead of a series of sources.
//prevents double array shenanigans.
export async function fetchArticles(sources: string[]): Promise<NewsArticle[][]> {

	const parser = new XMLParser();
	let articles: NewsArticle[][] = [];
	const feeds: Feed[] = availableSources.filter(
		feed => sources.indexOf(feed.source.toLowerCase()) != -1
	);

	for (let feed of feeds) {
		let res = await fetch(feed.link);
		if (!res.ok) {
			console.log(`Failed to find source for ${feed.source}: ${res.status}`);
			continue;

		}
		articles.push(feed.parser(await res.text(), parser));
	}
	return articles;

}