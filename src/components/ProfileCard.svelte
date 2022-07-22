<script>
	export let profileInfo = {
		name: "Spike Spiegel",
		profession: {
			company: "Bebop",
			position: "Bounty Hunter",
			location: "Space",
			companyHyperlink: "https://github.com/2mill"
		},
		skills : [
			"First Skill",
			"Second Skill etc...",
		],
		description: "Lorem Ipsum"

	}
</script>
<style>


</style>


<div>
	<img class="object-contain h-48 w-96"src="spike.png" alt="Profile Photo"/>
</div>
<div class="font-bold text-xl">
	<h1>{profileInfo.name}</h1>
	<p>{profileInfo.profession.location}</p>
	<p>{profileInfo.profession.position}</p>
	<a href="{profileInfo.profession.companyHyperlink}"><p>{profileInfo.profession.company}</p></a>
</div>
<div class="col-span-2">
	<p>{profileInfo.description}</p>
</div>