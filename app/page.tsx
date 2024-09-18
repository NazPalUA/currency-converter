import { Container } from "@/components/Container"
import { CurrencyConverter } from "@/components/CurrencyConverter"
import { fetchExchangeRates } from "@/lib/fetchExchangeRates"

export default async function Home() {
	const exchangeRatesData = await fetchExchangeRates()

	return (
		<main className="min-h-full">
			<Container>
				<CurrencyConverter exchangeRates={exchangeRatesData.conversion_rates} />
			</Container>
		</main>
	)
}
