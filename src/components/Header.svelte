<script lang='ts'>

	import type { HeaderContent } from "$lib/structs";


	export let headerMeta: HeaderContent = {
		content: 'Undefined',
		font: ''
	}
</script>
<header>
	<div class="p-3 border rounded-tl-md text-pearlBush border-b-0">
		<h1 class="font-{headerMeta.font} text-center text-4xl">
			{headerMeta.content}
		</h1>
	</div>
</header>