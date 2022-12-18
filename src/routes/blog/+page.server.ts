import { getMeta } from "$lib/server/blog"
import type { PageServerLoad } from "./$types"
import { blog_meta } from "$env/static/private"
import type { NewsArticle } from "$lib/articles/articles";



/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const url: URL = new URL(blog_meta);
	const res = await fetch(url);

	if (! res.ok ) console.log(`Failed to blog list: ${res.status}`);
	let data = await res.json()
	console.log(data)
	let articles: NewsArticle[] = []
	for (let article of data) {
		console.log(article)
		articles.push(
			{
				source: 'ydorn.com',
				title: article.postTitle,
				publicationDate: article.published,
				link: new URL(`https://ydorn.com/blog/${article.postTitle}`).toString()
			}
		)

	}
	return {
		posts: articles
	}

}

