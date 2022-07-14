<script>
	import Logo from "./Logo.svelte"
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


<nav class="flex flex-row justify-center space-x-3">
		<ul>
			{#each links as link}
				<li class="bg-purple-400">
					<a href="{link.link}">{link.displayTitle}</a>
				</li>
			{/each}
		</ul>
</nav>