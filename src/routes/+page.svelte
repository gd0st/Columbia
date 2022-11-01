<script lang="ts">
	//Private .js file that can contain information as needed.
	// import { profileInfo, socialMedias} from "../_private/personal.js"

	import Icon from "../components/Icon.svelte"
	import { content } from "../content/about.js"
	interface Link {
		ready: boolean,
		name: string,
		destination: string,
	}
	function newLink(name: string, destination: string, ready=false): Link {
		return {
			name,
			destination,
			ready,
		}
	}
	const links: Link[] = [
		newLink(
			"Blog",
			"/blog",
			false
		),
		newLink(
			"Work Experience",
			"/work",
			false
		),
		newLink(
			"Contact Me",
			"/contact",
			false
		)
	]




	const constructionIcon = 'fa-solid fa-traffic-cone'


</script>

<svelte:head>
	<title>Yannick Dorn</title>
</svelte:head>


<div class="flex flex-col items-center text-[#e0e1dd] w-screen md:w-1/2 md:mx-auto lg:w-1/4">
	<div class="my-5 p-3 border rounded-md bg-[#1B263B] text-[#e0e1dd]">
		<h1 class="text-4xl font-pressstart  text-center">Yannick Dorn</h1> 
	</div>
	<div class="square-color px-2 border rounded-md">
		<div class="grid grid-cols-1 font-inconsolata text-xl">
			{#each content as line}
			<p class="p-1">{line}</p>
			<!-- <p class="pb-1">Hi,</p>
			<p class="p-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est soluta eum rem labore quis excepturi, ducimus nesciunt harum totam veniam libero saepe repudiandae consequuntur minus sint sequi! Perspiciatis, at. A!</p>
			<p class="p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, architecto repudiandae. Quasi voluptate laboriosam placeat voluptatum error, perferendis inventore aperiam beatae fugiat aspernatur. Dicta rerum ut mollitia nisi beatae totam!</p>
			<p class="p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo sequi dignissimos! Explicabo deleniti rerum vitae pariatur soluta voluptatibus. Reprehenderit a voluptates doloremque voluptate aspernatur animi, deleniti nemo eos. Reiciendis.</p> -->
			{/each}
		</div>

		<div class="grid grid-cols-1 text-center underline text-xl">
			{#each links as link}
			{#if link.ready == true}
			 	<a href="/{link.destination}">{link.name}</a>
			{/if}
			{/each}
		</div>
	</div>

</div>

<style>
	.square-color {
		background-color: #1B263B; 
	}


</style>

