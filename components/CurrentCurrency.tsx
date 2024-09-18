import { fetchExchangeRates } from "@/lib/fetchExchangeRates"
import { getExchangeRate } from "@/lib/getExchangeRate"
import type { CurrencyCode } from "@/model/ExchangeRateResponseSchema"

export const CurrentCurrency = async () => {
	// Fetch exchange rates data
	const exchangeRates = await fetchExchangeRates()

	// Base currency for conversion
	const baseCurrency: CurrencyCode = "UAH"

	// List of currencies to display rates for
	const currenciesToDisplay: CurrencyCode[] = ["USD", "EUR"]

	return (
		<div className="flex flex-col items-center gap-0 max-md:mr-14">
			{currenciesToDisplay.map(currency => {
				const rate = getExchangeRate(
					baseCurrency,
					currency,
					exchangeRates
				).toFixed(2)
				return (
					<div key={currency}>
						{currency}: {rate}
					</div>
				)
			})}
		</div>
	)
}
