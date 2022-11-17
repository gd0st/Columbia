<script lang='ts'>
	import { json } from "@sveltejs/kit";
	//bg color #od1b2a
	//div bg color #1b263b
	// text color #e0e1dd

	import Header from "../../components/Header.svelte"

	const headerMeta = {
		content: "Yannick's Blog",
		font: 'pressstart'
	}

	//here is where some of the logic will come into play...


	async function articleTitles(){
		const res = await fetch('https://ydorn.com/files/blog')

		if (!res.ok) return Promise.reject()
		const titles: object[] = await res.json()
		console.log(typeof(titles))
		
		return titles
	}






</script>

<Header {headerMeta}/>



{#await articleTitles()}

{:then articles}

{articles}

{:catch error}

{error}
{/await}



<style>

</style>

