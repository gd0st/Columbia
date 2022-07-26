<script>
	import { page } from '$app/stores'
	import Post from "../../components/blog/Post.svelte"
	let slug = $page.params.slug;
	console.log($page.params.slug)

	import glob from 'glob';

	let files = glob.sync('./posts/' + $page.params.slug + '.md');
</script>


{#if files.length == 1} 
	<Post path={files[0]}/>
{/if}