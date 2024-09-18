import { Container } from "@/components/Container"
import { CurrencyConverter } from "@/components/CurrencyConverter"
import { fetchExchangeRates } from "@/lib/fetchExchangeRates"
import { ExchangeRateResponse } from "@/model/ExchangeRateResponseSchema"

export default async function Home() {
	let exchangeRatesData: ExchangeRateResponse

	try {
		exchangeRatesData = await fetchExchangeRates()
	} catch (error) {
		// Throw an error during render if exchange rates are missing.
		// The message will be caught by error boundary and displayed to the user.
		throw new Error("Failed to get exchange rates")
	}

	return (
		<main className="min-h-full">
			<Container>
				<CurrencyConverter exchangeRates={exchangeRatesData.conversion_rates} />
			</Container>
		</main>
	)
}
