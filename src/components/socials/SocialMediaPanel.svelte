<script>
	import SocialMediaCard from "./SocialMediaCard.svelte"
	export let socialMedias = [ 
		{
			name: 'insta',
			profileUsername: 'Tyler1',
			profileHyperlink: 'https://instagram.com/tyler1_alpha'
		}
	]
</script>

<style>

	div {
		text-align:center;
	}

</style>


<div class="">
		{#each socialMedias as socialMedia}
			<SocialMediaCard {socialMedia}/>
		{/each}
</div>