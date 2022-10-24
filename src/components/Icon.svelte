<script lang="ts">
	export let faSource = 'github'
	export let fontSize = "12px"
</script>


<style></style>

<svelte:head>
	<script src="https://kit.fontawesome.com/3d1b5ebdca.js" crossorigin="anonymous"></script>
</svelte:head>

<span style="font-size: {fontSize};">
	<i class="{faSource} fa-3x"></i>
</span>