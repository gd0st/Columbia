<script>
	import { convertMarkdown } from "./utils.js"
	export let path = "./posts/first.md"
</script>

<style>

</style>

Hello Again!
{@html convertMarkdown(path).html}