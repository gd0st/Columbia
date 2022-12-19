
import { fetchArticles } from "$lib/articles/articles";


// beacause of this issue https://github.com/sveltejs/kit/issues/2527
// I might need to make this just a server module
// That will take parameters and return things.
/** @type {import('./$types').PageServerLoad} */
// export async function load( {params} ) {


// 	//This should just be links to rss feeds at this point
// 	const hardCodedSources = [ 'ycombinator', 'nytimes-us' ]

// 	return {
// 		feed_data: fetchArticles(hardCodedSources),
// 	};



// }