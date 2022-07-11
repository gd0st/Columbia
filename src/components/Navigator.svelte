<script>
	export let links = [
		{
			displayTitle: 'home',
			link: '/'
		},
		{
			displayTitle: 'blog',
			link: '/blog',
		}
	]
	


</script>

<style>


</style>


<nav class="flex flex-row">
		<ul class="flex flex-row">
			{#each links as link}
				<li class="bg-purple-400 bases-1/4 p-5">
					<a href="{link.link}">{link.displayTitle}</a>
				</li>
			{/each}
		</ul>
</nav>