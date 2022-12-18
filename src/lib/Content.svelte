<script lang="ts" context="module">

	interface ContentData {
		paragraphs: string[]
	}

	async function getIndexParagraphs() {
		const request = await fetch('/', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				'cache-control': 'public, max-age=3600'
			}
		})

		const data = await request.json()
		console.log(data)

		const paragraphs = data.text_data.split()

		return data.text_data

	}
</script>

{#await getIndexParagraphs()}
	{:then text_data}
		<p>{text_data}</p>
{/await}
