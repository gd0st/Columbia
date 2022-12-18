<script lang="ts">
	import type { NewsArticle } from "./articles";
	import { formatDate } from "./articles"

	export let date_formatted = true;
	export let post: NewsArticle = {
		source: "fizz",
		title: "buzz",
		publicationDate: new Date(Date.now()),
		link: new URL('https://ydorn.com/')
	};

</script>


<a href="something" title="{post.title}">
	<p>
		{post.title}
	</p>
	<p>
		{post.source}
	</p>
	<p>
			
		{#if date_formatted}
		{formatDate(post.publicationDate)}
		{:else}
		{post.publicationDate}
		{/if}
	</p>


</a>

