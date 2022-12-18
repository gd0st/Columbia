import { getMeta } from "$lib/server/blog"
import { json } from "@sveltejs/kit"
import { blog_index } from "$env/static/private"

/** @type {import('./$types').PageServerLoad} */
export async function load( {params} ) {
	let res = await fetch( new URL(blog_index) );
	const data = await res.text();

	return {
		text_data: data.trimEnd().split("\n")
	};
}

// export async function GET() {

// 	let res = await fetch(
// 		new URL(blog_index)
// 	)

// 	const data = await res.text()
// 	const responseData = {
// 		text_data: data.trim().split("\n")
// 	}
// 	return json(responseData)
// }