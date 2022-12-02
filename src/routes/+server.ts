import { getMeta } from "$lib/server/blog"
import type { RequestHandler } from "../../.svelte-kit/types/src/routes/$types"
import { json } from "@sveltejs/kit"
import { blog_index } from "$env/static/private"


export async function GET() {

	let res = await fetch(
		new URL(blog_index)
	)

	const data = await res.text()
	const responseData = {
		text_data: data.trim().split("\n")
	}
	return json(responseData)
}