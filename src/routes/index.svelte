<script>
	//Private .js file that can contain information as needed.
	import { profile_info, social_medias } from "../_private/personal.js"
	import ProfileCard from "../components/ProfileCard.svelte";
	import SocialMediaPanel from "../components/socials/SocialMediaPanel.svelte";
</script>

<style>
	/* main { 
		display: grid;
		grid-template-columns: 2fr 1fr;
	} */



</style>

<div class="bg-purple-400 col-span-2">

	<div class="grid grid-cols-2">
		<img src="spike.png" height="50px" width="50px" alt="Profile Image"/>
		<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, quos. In autem numquam at, culpa ut nihil nemo magnam quibusdam aliquid facilis reprehenderit nesciunt possimus recusandae incidunt exercitationem enim. Qui.</p>
	</div>

	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rerum reprehenderit aut, culpa, delectus ut qui modi minus sit deserunt recusandae voluptates omnis repellat illum dolores inventore sapiente quo! Libero.</p>

	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo aliquid voluptate sint explicabo hic quidem voluptatum error reiciendis, placeat delectus minus quae omnis tempora quia quibusdam sapiente inventore consequuntur! Inventore.</p>
</div>
<div class="bg-purple-800 col-span-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur nihil est accusamus accusantium quam ipsam harum veritatis corrupti aliquid assumenda quidem excepturi animi officia, quo corporis! Ipsam, quidem officia?</div>