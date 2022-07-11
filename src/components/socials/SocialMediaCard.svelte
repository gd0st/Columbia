<script>
	import {getRandomInt} from "../../_utils.js"
	export let social_media = {
		name: "Instagram",
		profile_username: "Tyler1",
		profile_hyperlink: "https://instagram.com/tyler1_alpha",
	}
	let color_shade = getRandomInt(3, 10) * 100;
</script>
<style>
</style>


<div class="bg-purple-{color_shade}">
	<p>{color_shade}</p>
	<h1>{social_media.name}</h1>
	<a href="{social_media.profile_hyperlink}">{social_media.profile_username}</a>
</div>
