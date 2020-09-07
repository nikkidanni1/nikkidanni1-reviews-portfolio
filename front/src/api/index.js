export const getProducts = async ({ from, count, type, word }) =>
	await fetch(
		`https://reviewsback.vercel.app/products?from=${from}&count=${count}&type=${type}&searchword=${word}`
	).then((res) => res.json()).then(res => res)
