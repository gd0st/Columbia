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


<nav class="grid grid-cols-8 bg-purple-200">
	<ul class="flex flex-row space-x">
		{#each links as link}
			<li class="cols-span-1 bg-purple-400">
				<a href="{link.link}">{link.displayTitle}</a>
			</li>
		{/each}
	</ul>

</nav>