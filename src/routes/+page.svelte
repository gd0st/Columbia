<script lang="ts">
	//Private .js file that can contain information as needed.
	// import { profileInfo, socialMedias} from "../_private/personal.js"

	import Icon from "../components/Icon.svelte"
	import SocialMedia from "../components/SocialMedia.svelte"
	import { content, socialMedia } from "../content/about.js"
	interface Link {
		ready: boolean,
		name: string,
		destination: string,
	}
	const links: Link[] = []
	const constructionIcon = 'fa-solid fa-traffic-cone'


</script>

<svelte:head>
	<title>Yannick Dorn</title>
</svelte:head>


<div class="flex flex-col items-center text-[#e0e1dd] w-screen md:w-1/2 lg:w-1/4 md:m-auto">
	<div class="p-3 border rounded-tl-md bg-[#1B263B] text-[#e0e1dd]">
		<h1 class="text-4xl font-pressstart  text-center">Yannick Dorn</h1> 
	</div>
	{#if socialMedia.length > 0}
		<!-- <div class="flex flex-row box-border w-full"> -->
			<nav>
				<ul class="flex flex-row box-border w-full">
				{#each socialMedia as media}

					<li class="w-1/3 border-x border-dashed">
						<a href="{media.hyperlink}">
							<div class="p-5 text-center hover:bg-[#e0e1dd] hover:text-[#1b263b] ">
								<Icon faSource={media.icon}/>
							</div>
						</a>
					</li>
			<nav>
			<!-- <a href="{media.hyperlink}">
					<div class="text-center border-x border-dashed p-5 hover:bg-[#e0e1dd] hover:text-[#1b263b] w-1/3">
							<Icon faSource={media.icon}/>
					</div>
			</a> -->
			{/each}
			</ul>
		<!-- </div> -->
	{/if}
	<div class="square-color px-2 border rounded-br-md">
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

