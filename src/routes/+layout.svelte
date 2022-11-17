<script>
	import "../app.css";
	// import Navigator from "../components/Navigator.svelte";
</script>
	<svelte:head>
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&family=Press+Start+2P&display=swap" rel="stylesheet">
		<link rel="icon" type="image/png" href="site-icon.png"/>
	</svelte:head>
	<!-- <Navigator/> -->
	<div class="flex h-screen">
		<div class="grid grid-cols-1 items-center text-[#e0e1dd] bg-[#1B263B] w-screen md:w-1/3 lg:w-1/4 m-auto relative">
			<slot></slot>
		</div>
	</div>

<style>

	:global(body) {
		background-color: #0d1b2a;
	}


</style>

