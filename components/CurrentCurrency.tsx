import { fetchExchangeRates } from "@/lib/fetchExchangeRates"
import { getExchangeRate } from "@/lib/utils"
import type {
	CurrencyCode,
	ExchangeRateResponse,
} from "@/model/ExchangeRateResponseSchema"

export const CurrentCurrency = async () => {
	// Fetch exchange rates data or return null if an error occurs
	let exchangeRates: ExchangeRateResponse
	try {
		exchangeRates = await fetchExchangeRates()
	} catch (error) {
		// As there is no place to display the error message, we just return null
		// The fetchExchangeRates handles the error and throws an error message for a developer to see
		return null
	}

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
