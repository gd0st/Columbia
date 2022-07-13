<script>
	import Navigator from "../components/Navigator.svelte"
	import "../app.css"
	import Logo from "../components/Logo.svelte"


</script>

<style>

	
</style>




<div class="grid grid-cols-2">
	<div class="container mx-auto place-content-left">
		<Logo />
	</div>
	<div class="container mx-auto place-content-center flex flex-row">
			<Navigator />
	</div>
</div>
<slot></slot>
