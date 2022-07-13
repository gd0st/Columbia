<script>
	//Private .js file that can contain information as needed.
	import { profile_info, social_medias } from "../_private/personal.js"
	import ProfileCard from "../components/ProfileCard.svelte";
	import SocialMediaPanel from "../components/socials/SocialMediaPanel.svelte";
</script>

<style>

	div {
		text-align:center;
	}
</style>


<div class="container mx-auto border-2 grid grid-cols-1 gap-4 place-content-center">
	<ProfileCard info={profile_info}/>
	<SocialMediaPanel {social_medias}/>
</div>



<div>
</div>