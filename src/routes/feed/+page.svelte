<script lang="ts">
	import type { NewsArticle } from "$lib/articles/articles";
	import Article from "$lib/articles/Article.svelte";
	// export let data;

	const articleLimit = 10;

	// let feeds: NewsArticle[][] = data.feed_data;

	//date class is not getting the day properly for some reason...

	//need some sort of shuffeling algorithm that will determine how to 
	//organize the feed.
	let date_formatted = (article: NewsArticle) => article.source != 'ycombinator';

	let placeholder: NewsArticle[] = [{
		title: "🚧 Under Construction 🚧",
		link: "/feed",
		source: "ydorn.com",
		publicationDate: new Date(Date.now())
	}];
	let feeds = placeholder;

</script>

<ul>
	{#each feeds as article}
		<li class="p-2 m-2 border">
			<Article post={article} date_formatted={date_formatted(article)}/>
		</li>
	{/each}
</ul>