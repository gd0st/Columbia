

import fs from 'fs'
import fm from 'front-matter'


async function getFile(slugParam: string) {
	let file = fs.readFileSync(
		`./posts/${slugParam}.md`
	).toString()
	let front_matter = fm(file)
	return front_matter
}
async function content(slugParam: string) {
	let file = fs.readFileSync(
		`./${slugParam}.md`
	).toString()

}
/** @type {import('./$types').PageLoad} */
export async function load({params}) {
	let more_data = getFile(params.slug)
	return {
		front_matter: more_data
	}
}