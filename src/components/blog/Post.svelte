<script>
	import { convertMarkdown } from "./utils.js"
	export let path = "./posts/first.md"

</script>
<style>
/* TODO: apply styles to embedded HTML */

</style>

{@html convertMarkdown(path).html}