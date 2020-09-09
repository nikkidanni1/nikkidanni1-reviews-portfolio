export const getProducts = async ({ from, count, type, word }) =>
	await fetch(`https://reviewsback.vercel.app/products?from=${from}&count=${count}&type=${type}&searchword=${word}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json())
		.then((res) => res)

export const getTypes = async () =>
	await fetch('https://reviewsback.vercel.app/types', {
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json())
		.then((res) => res)

export const uploadPhoto = async (photo) =>
	await fetch('https://reviewsback.vercel.app/photo', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/octet-stream',
		},
		body: photo,
	})
		.then((res) => res.json())
		.then((res) => res)

export const setProduct = async (body) =>
	await fetch('https://reviewsback.vercel.app/products', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	})
