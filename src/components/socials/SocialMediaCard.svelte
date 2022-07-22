<script>
	import Icon from "./Icon.svelte";
	export let socialMedia = {
		name: "Instagram",
		profileUsername: "Tyler1",
		profileHyperlink: "https://instagram.com/tyler1_alpha",
	}
	let bg = {
		'instagram': 'bg-social-instagram',
		'discord': 'bg-social-discord',
		'linkedin': 'bg-social-linkedin',
		'twitter': 'bg-social-twitter',
		'tiktok': 'bg-social-tiktok',
	}
</script>
<style>
</style>






<a href="{socialMedia.profileHyperlink}">
	<div class="hover:subpixel-antialised  {bg[socialMedia.name.toLowerCase()]} px-2 py-1 flex justify-center items-center flex-row space-x-2 rounded hover:brightness-125">
		<Icon icon={socialMedia.name.toLowerCase()}/>
		<p class="font-medium antialiased whitespace-nowrap" >{socialMedia.profileUsername}</p>
	</div>
</a>