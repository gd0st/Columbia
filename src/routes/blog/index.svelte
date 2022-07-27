<script>

	import glob from 'glob'
	import Post from '../../components/blog/Post.svelte';
	let fileNames = glob.sync(`./posts/*.md`);

	//DO NOT TOUCH THIS
	const fileNameOnlyRegEx = /[ \w-]+?(?=\.)/;
	// let posts_map = fileNames.map()

	//TODO: Figure out regex to get only the file name.
</script>

<style>

	h1 {
		background-color: purple;
	}


</style>

<ul>
	{#each fileNames as post}

		<a href="/blog/{post.match(fileNameOnlyRegEx)}">
			<li>
				{post.match(fileNameOnlyRegEx)}
			</li>
		</a>

	{/each}

</ul>


