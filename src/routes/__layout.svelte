<script>
	import Navigator from "../components/Navigator.svelte"
	import "../app.css"
	import Logo from "../components/Logo.svelte"


</script>

<style>

</style>



<Navigator class="mb-2" />
<main class="grid grid-cols-3 gap-x-2 mx-8">
	<slot></slot>
</main>
