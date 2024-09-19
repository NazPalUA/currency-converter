import { ExchangeRateResponseSchema } from "@/model/ExchangeRateResponseSchema"

export async function fetchExchangeRates() {
	const apiKey = process.env.EXCHANGE_RATE_API_KEY

	if (!apiKey) {
		throw new Error("API key not configured")
	}

	const res = await fetch(
		`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`,
		{
			// Next.js fetch options for caching and revalidation
			next: {
				revalidate: 5, // Revalidate data every 5 seconds
			},
		}
	).then(res => {
		console.log("New fetch request made to get exchange rates")
		return res
	})

	if (!res.ok) {
		throw new Error("Failed to fetch exchange rates")
	}

	const data = await res.json()

	// Validate the response using Zod
	const parsedData = ExchangeRateResponseSchema.safeParse(data)

	if (!parsedData.success) {
		throw new Error("Invalid data format")
	}

	return parsedData.data
}
