<script lang='ts'>
	import { json } from "@sveltejs/kit";
	import type { BlogPost } from "$lib/blog"
	//bg color #od1b2a
	//div bg color #1b263b
	// text color #e0e1dd

	import Header from "../../components/Header.svelte"

	const headerMeta = {
		content: "Shitpost Central",
		font: "pressstart"
	}

	export let data;

	const blogPosts = data.post as BlogPost[]



	//here is where some of the logic will come into play...





</script>

<Header {headerMeta}/>



<div>
	{#each blogPosts as blogPost}
		<p>
			{blogPost.postTitle}
		</p>
	{/each}
</div>










<style>

</style>

