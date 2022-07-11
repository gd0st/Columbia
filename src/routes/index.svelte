<script>
	//Private .js file that can contain information as needed.
	import { profile_info, social_medias } from "../_private/personal.js"
	import ProfileCard from "../components/ProfileCard.svelte";
	import SocialMediaPanel from "../components/socials/SocialMediaPanel.svelte";
</script>

<style>
</style>


<div class="">
	<ProfileCard info={profile_info}/>
	<SocialMediaPanel {social_medias}/>
</div>



<div>
</div>