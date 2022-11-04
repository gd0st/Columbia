<script lang="ts">
	import Icon from '../components/Icon.svelte';
	import { content, socialMedia } from '../content/about.js';
	interface Link {
		ready: boolean;
		name: string;
		destination: string;
		selected: boolean;
	}
	const links: Link[] = [
		{
			ready: true,
			name: 'home',
			destination: '/',
			selected: true
		},
		{
			ready: false,
			name: 'blog',
			destination: '/',
			selected: false
		}
	];
	const constructionIcon = 'fa-solid fa-traffic-cone';
</script>

<svelte:head>
	<title>Yannick Dorn</title>
</svelte:head>

<div class="grid grid-cols-1 items-center text-[#e0e1dd] w-screen md:w-1/3 lg:w-1/4 m-auto">
	<div class="p-3 border rounded-tl-md bg-[#1B263B] text-[#e0e1dd]">
		<h1 class="text-4xl font-pressstart  text-center">Yannick Dorn</h1>
	</div>

	<ul class="flex flex-row text-center box-border w-full">
		{#each links as link}
			<li class="hover:bg-[#e0e1dd] hover:text-[#1b263b] w-full">
				<a href={link.destination} class="">
					<p>{link.name}</p>
				</a>
			</li>
		{/each}
	</ul>
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
		<ul class="flex flex-row box-border w-full">
			{#each socialMedia as media}
				<li class="w-1/3">
					<a href={media.hyperlink}>
						<div class="p-5 text-center">
							<Icon faSource={media.icon} />
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</div>
	{#if socialMedia.length > 0}
		<!-- <div class="flex flex-row box-border w-full"> -->
		<!-- </div> -->
	{/if}
	<div class="text-right text-xs underline italic opacity-1/2">
		<a href="https://github.com/2mill/Columbia">
			<p class="text-right">Source Code</p>
		</a>
	</div>
</div>

<style>
	.square-color {
		background-color: #1b263b;
	}
</style>
