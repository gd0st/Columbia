<script>
	// import Logo from './Logo.svelte';
	export let links = [
		{
			displayTitle: 'home',
			link: '/'
		},
	];
</script>
<nav class="flex w-screen my-4">
	<ul class="flex-1 flex">
		{#each links as link}
			<li class="cols-span-1 mx-5">
				<a href={link.link} class="text-xl">{link.displayTitle}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	/**a tag styles by: https://codepen.io/mds/pen/dgRJoZ */
	/**Minor color adjustments were made*/
	a {
		color:#fff;
		text-decoration: none;
		position: relative;
		padding: 2px 2px;
		transition: all 0.2s ease-out;
	}
	a:after {
		content: ' ';
		width: 100%;
		height: 1px;
		background: #fff;
		position: absolute;
		right: 0;
		bottom: 0;
		transition: all 0.2s ease-out;
	}
	a:before {
		content: ' ';
		width: 4px;
		height: 4px;
		background: #fff;
		position: absolute;
		right: -4px;
		bottom: 0;
		opacity: 0;
	}
	a:hover {
		/* background: rgba(100, 109, 99, 0.1); */
		transition: all 0.1s ease-out;
		/* padding: 2px 8px; */
	}
	a:hover:after {
		width: 0px;
		transition: all 0.1s ease-out;
	}
	a:hover:before {
		opacity: 1;
		animation: blink 0.4s infinite 0.1s;
		transition: all 0.1s ease-out;
	}

	@keyframes blink {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>