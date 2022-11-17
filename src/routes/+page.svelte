<script lang="ts">
	import Icon from '../components/Icon.svelte';
	import { content, socialMedia } from '../content/about.js';
	import  Header from "../components/Header.svelte";
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
			destination: '/blog',
			selected: false
		}
	];
	const constructionIcon = 'fa-solid fa-traffic-cone';

	const headerMeta = {
		content: 'Yannick Dorn',
		font: 'pressstart'
	}
</script>

<svelte:head>
	<title>Yannick Dorn</title>
</svelte:head>



	<!-- <div class="p-3 border rounded-tl-md  text-[#e0e1dd] border-b-0"> -->
		<!-- <h1 class="text-4xl font-pressstart  text-center">Yannick Dorn</h1> -->
		<Header headerMeta={headerMeta}/>
	<!-- </div> -->




	<div class="flex flex-row">
		<div class="border-l border-r grid grid-cols-1 w-1/6">
			<div class="">
			</div>
			<div class="border-t">
			</div>
		</div>
		<div class="w-4/6 border-y">
			<ul class="flex flex-row text-center box-border justify-center w-full">
				{#each links as link}
					<li class="hover:bg-[#e0e1dd] hover:text-[#1b263b] w-full border-r">
						<a href={link.destination} class="">
							<p>{link.name}</p>
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="border-r grid grid-cols-1 w-1/6">
			<div class="">
			</div>
			<div class="border-t">
			</div>
		</div>
	</div>
	<div class="square-color px-2 border rounded-br-md border-t-0">
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
	<div class="text-right text-xs underline italic opacity-1/2 bg-[#0d1b2a]">
		<a href="https://github.com/2mill/Columbia">
			<p class="text-right">Source Code</p>
		</a>
	</div>

<style>
	.square-color {
		background-color: #1b263b;
	}
</style>
