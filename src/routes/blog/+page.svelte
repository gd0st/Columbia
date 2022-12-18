<script lang='ts'>
	import { json } from "@sveltejs/kit";
	import type { BlogPost } from "$lib/blog";
	import type { NewsArticle } from "$lib/articles/articles";
	import Article from "$lib/articles/Article.svelte";
	import Header from "../../components/Header.svelte"
	//bg color #od1b2a
	//div bg color #1b263b
	// text color #e0e1dd

	export let data;
	interface HeaderContent {
		content: string,
		font: string,
	}




	const headerMeta: HeaderContent = {
		content: "Shitpost Central",
		font: "pressstart"
	}


	const posts: NewsArticle[] = data.posts;
	console.log(posts)


	//here is where some of the logic will come into play...





</script>

<Header headerMeta={headerMeta}/>



<ul>
	{#each posts as post}
	<li class="truncate p-2 m-2 border">
		<Article post={post} date_formatted={false}/>
	</li>
	{/each}
</ul>









<style>

</style>

