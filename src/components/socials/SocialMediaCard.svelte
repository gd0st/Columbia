<script>
	import Icon from "./Icon.svelte";
	export let social_media = {
		name: "Instagram",
		profile_username: "Tyler1",
		profile_hyperlink: "https://instagram.com/tyler1_alpha",
		
	}
	let bg = `bg-social-${social_media.name.toLowerCase()}`

	
</script>
<style>
	


</style>






<a href="{social_media.profile_hyperlink}">
	<div class="hover:subpixel-antialised {bg} px-2 py-1 flex justify-center items-center flex-row space-x-2 rounded hover:brightness-125">
		<Icon icon={social_media.name.toLowerCase()}/>
		<p class="font-medium antialiased whitespace-nowrap" >{social_media.profile_username}</p>
	</div>
</a>