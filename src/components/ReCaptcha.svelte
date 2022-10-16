<script lang="ts">
	export let sitekey = ''
</script>

<svelte:head>
	<script src="https://www.google.com/recaptcha/api.js" async defer></script>
</svelte:head>

<form action="?" method="POST">
	<div class="g-recaptcha" data-sitekey="{sitekey}"></div>
	<br/>
	<input type="submit" value="Submit">
</form>