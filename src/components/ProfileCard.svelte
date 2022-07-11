<script>
	export let info = {
		name: "Spike Spiegel",
		profession: {
			company: "Bebop",
			position: "Bounty Hunter",
			location: "Space",
			company_hyperlink: "https://github.com/2mill"
		}
	}
</script>
<style>

</style>


<div class="bg-purple-400">
	<section>
		<h1>{info.name}</h1>
		<p>{info.profession.location}</p>
		<p>{info.profession.position}</p>
		<a href="{info.profession.company_hyperlink}">{info.profession.company}</a>
	</section>
</div>