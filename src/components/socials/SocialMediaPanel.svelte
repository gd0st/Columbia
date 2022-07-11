<script>
	import SocialMediaCard from "./SocialMediaCard.svelte"
	export let social_medias= [ 
		{
			name: 'insta',
			profile_username: 'Tyler1',
			profile_hyperlink: 'https://instagram.com/tyler1_alpha'
		}
	]
</script>

<style>
</style>


<div class="bg-purple-200">
	{#each social_medias as social_media}
		<SocialMediaCard {social_media}/>
	{/each}

</div>