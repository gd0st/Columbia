<script>
	import { page } from '$app/stores'
	import Post from "../../components/blog/Post.svelte"
	console.log($page.params.slug)

	let path = './posts/' + $page.params.slug; 
</script>

<Post {path}/>

{path}

