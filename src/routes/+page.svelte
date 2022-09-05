<script>
	//Private .js file that can contain information as needed.
	// import { profileInfo, socialMedias} from "../_private/personal.js"
	import ProfileCard from "../components/ProfileCard.svelte";
	import Navigator from "../components/Navigator.svelte";
	// import SocialMediaPanel from "../components/socials/SocialMediaPanel.svelte";
	export let data
</script>

<style>
	/* main { 
		display: grid;
		grid-template-columns: 2fr 1fr;
	} */

</style>

<svelte:head>
	<title>Main</title>
</svelte:head>

<div class="container mx-auto">
	<div class="grid grid-cols-3 my-5">

		<ProfileCard profileInfo={data.profile}/>
		<!-- <SocialMediaPanel {socialMedias}/> -->
	</div>
</div>
<Navigator links={data.links}/>