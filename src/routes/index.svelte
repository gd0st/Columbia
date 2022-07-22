<script>
	//Private .js file that can contain information as needed.
	import { profileInfo, socialMedias} from "../_private/personal.js"
	import ProfileCard from "../components/ProfileCard.svelte";
	import SocialMediaPanel from "../components/socials/SocialMediaPanel.svelte";
</script>

<style>
	/* main { 
		display: grid;
		grid-template-columns: 2fr 1fr;
	} */

</style>

<div class="container mx-auto">
	<div class="grid grid-cols-2">
		<div class="grid grid-cols-2 place-items-center mt-8">
			<ProfileCard {profileInfo}/>
		</div>
		<!-- <SocialMediaPanel {socialMedias}/> -->
	</div>

</div>