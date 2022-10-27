<script>
	export let profileInfo = {
		profilePhotoLink: 'https://i.imgur.com/IgXaOpG.png',
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



<img class="h-48"src="{profileInfo.profilePhotoLink}" alt="Profile Photo"/>
<!-- <div class="whitespace-nowrap font-bold text-xl text-center">
	<h1>{profileInfo.name}</h1>
	<p>{profileInfo.profession.location}</p>
	<p>{profileInfo.profession.position}</p>
	<a href="{profileInfo.profession.companyHyperlink}"><p>@{profileInfo.profession.company}</p></a>
</div> -->

<!-- <div class="text-center">
		<p>{profileInfo.description}</p>
</div> -->
<div></div>