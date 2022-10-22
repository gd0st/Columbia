<script>
	//Private .js file that can contain information as needed.
	// import { profileInfo, socialMedias} from "../_private/personal.js"
	import ProfileCard from "../components/ProfileCard.svelte";
	import Icon from "../components/Icon.svelte"
	import Skills from "../components/Skills/Skills.svelte"
	import ReCaptcha from "../components/ReCaptcha.svelte";
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
	<div class="grid grid-cols-1 place-items-center my-5 ">
		<ProfileCard profileInfo={data.profile}/>
		<!-- <SocialMediaPanel {socialMedias}/> -->
		<ul class="flex flex-row gap-4 place-items-center">
			{#each data.socialLinks as link}
				<li class="">
					<a href="{link.link}">
						<Icon faSource={link.fa_icon}/>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<Skills/>

<!-- <ReCaptcha sitekey={data.recaptcha_site}/> -->


