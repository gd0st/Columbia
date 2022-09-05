import { profile_card } from "../../profile_config.js"
export async function load() {
	return {
		profile: profile_card,
		links: profile_card.links,
	}
}