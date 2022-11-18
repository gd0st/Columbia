import { getMeta } from "$lib/server/blog"
import type { PageServerLoad } from "./$types"
import { blog_meta } from "$env/static/private"

export async function load({ params }) {


	const url: URL = new URL(blog_meta)
	const post = await getMeta(url)
	if (post){


		return {
			post,
		}
	}
	throw error(404, "Not Found")

}

