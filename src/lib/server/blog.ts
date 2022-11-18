

export async function getMeta(endpoint: URL) {
	const res = await fetch(endpoint)
	if (!res.ok) {
		return Promise.reject()
	}

	let data = await res.json()
	return data
}






