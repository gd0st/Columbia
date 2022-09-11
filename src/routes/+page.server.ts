import { profile_card } from "../../profile_config.js"
import { recaptcha_site } from "../../site_keys"
export async function load() {
	return {
		profile: profile_card,
		socialLinks: profile_card.links,
		recaptcha_site: recaptcha_site
	}
}