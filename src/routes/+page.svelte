<script lang="ts">
	//Private .js file that can contain information as needed.
	// import { profileInfo, socialMedias} from "../_private/personal.js"
	import ProfileCard from '../components/ProfileCard.svelte';
	import Icon from '../components/Icon.svelte';
	import Skills from '../components/Skills/Skills.svelte';
	import ReCaptcha from '../components/ReCaptcha.svelte';
	import { skills, type SkillInterface } from '../lib/skills';
	import { getCategories, filterForCategory } from '../lib/skills';
	export let data;
	let catgories = getCategories(skills);
	function gridCols(arrayLength: SkillInterface[]): number {
		if (arrayLength.length < 3) return arrayLength.length
		return 3 
	}
</script>

<svelte:head>
	<title>Main</title>
</svelte:head>

<div class="container mx-auto bg-[#4d4d4d] text-white rounded">
	<div class="grid grid-cols-1 place-items-center my-5 ">
		<ProfileCard profileInfo={data.profile} />
		<!-- <SocialMediaPanel {socialMedias}/> -->
		<ul class="flex flex-row gap-4 place-items-center">
			{#each data.socialLinks as link}
				<li class="">
					<a href={link.link}>
						<Icon faSource={link.fa_icon} />
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<!-- <ReCaptcha sitekey={data.recaptcha_site}/> -->

<!-- <div class="container mx-auto bg-[#4d4d4d] text-white rounded">
	{#each catgories as category}
		<h1 class="text-center">{category}</h1>
		<div class="grid grid-cols-3  place-items-center">
			{#if gridCols(skills) == 1}
			<div></div>
			{/if}
			<Skills skills={filterForCategory(skills, category)} />
			{#if gridCols(skills) == 1}
			<div>{gridCols(skills)}</div>
			{/if}
		</div>
	{/each}
</div> -->
