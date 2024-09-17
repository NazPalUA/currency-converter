import {
	CurrencyCode,
	ExchangeRateResponse,
} from "@/model/ExchangeRateResponseSchema"

// Function to calculate exchange rate from baseCurrency to targetCurrency
export const getExchangeRate = (
	fromCurrency: CurrencyCode,
	toCurrency: CurrencyCode,
	exchangeRates: ExchangeRateResponse
): number => {
	const rateFrom = exchangeRates.conversion_rates[fromCurrency]
	const rateTo = exchangeRates.conversion_rates[toCurrency]

	if (rateFrom === undefined || rateTo === undefined) {
		throw new Error(
			`Exchange rate for ${fromCurrency} or ${toCurrency} not found.`
		)
	}

	// Calculate exchange rate: how many units of fromCurrency equal one unit of toCurrency
	return rateFrom / rateTo
}
