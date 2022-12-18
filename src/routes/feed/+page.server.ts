
import { XMLParser } from "fast-xml-parser";
import { parse } from "postcss";
import type { NewsArticle } from "$lib/articles";
const nytimes = new URL('https://www.nytimes.com/sitemaps/new/news.xml.gz')




// This whole system is dog shit and should be replaced
// With a proper RSS feed parser

async function fetchNYT(depth: number): Promise<NewsArticle[]> {
	let res = await fetch(nytimes)
	if ( !res.ok ) {
		console.log(`Failed to parse ${nytimes}`);
		return Promise.reject(res.status);
	}

	const parser = new XMLParser();
	const data = parser.parse(
		await res.text()
	);
	let sources = [];

	for (let sitemap of data.sitemapindex.sitemap) {
		if (sources.length == depth) break;
		sources.push(sitemap.loc)
	}



	let articles: NewsArticle[] = []

	for (let source of sources) {
		let res = await fetch(source)
		if (! res.ok ) {
			console.log(`Bad fetch for ${source}: ${res.status}`);
			continue;
		}
		let parsed_data = parser.parse( await res.text() )
		articles = [...articles, ...parseURLSet(parsed_data.urlset)];
	}
	return articles;
}

function parseURLSet(urlset): NewsArticle[] {
	let articles: NewsArticle[] = [];
	for (let thing of urlset.url) {

		articles.push(
			{
				source: 'The New York Times',
				title: thing['news:news']['news:title'],
				publicationDate: new Date(thing['news:news']['news:publication_date']),
				link: thing.loc,
			}
		)
	}
	return articles;
}



let feedmap = {
	nyt: fetchNYT,
}

/** @type {import('./$types').PageServerLoad} */
export async function load( {params} ) {

	return {
		feed_data: fetchNYT(1),
	};



}