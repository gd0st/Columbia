<script lang='ts'>


	export let headerMeta = {
		content: undefined,
		font: undefined,
	}

	
</script>

<header>
	<div class="p-3 border rounded-tl-md text-pearlBush border-b-0">
		<h1 class="font-{headerMeta.font} text-center text-4xl">
			{headerMeta.content}
		</h1>
	</div>
</header>