<script>
	export let socials = [ 
		{
			media: 'insta',
			username: 't1',
			link: 'https://instagram.com/t1'
		}
	]
</script>

<style>
</style>


<div class="bg-purple-200">
	{#each socials as social}
		{#if social !== undefined}
			<h1>{social.media}</h1>
			<p>{social.username}</p>

			{#if social.link !== undefined}
				<a href="{social.link}">{social.link}</a>
			{/if}
		{/if}
	{/each}

</div>