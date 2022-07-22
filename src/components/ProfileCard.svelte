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
	<img src="spike.png" alt="Profile Photo"/>
</div>
<div>
	<h1>{profileInfo.name}</h1>
	<p>{profileInfo.profession.location}</p>
	<p>{profileInfo.profession.position}</p>
	<a href="{profileInfo.profession.companyHyperlink}"><p>{profileInfo.profession.company}</p></a>

</div>