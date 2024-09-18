import {
	CurrencyCode,
	ExchangeRateResponse,
} from "@/model/ExchangeRateResponseSchema"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

// Function to convert amount from one currency to another
export const convertAmount = (
	amount: number,
	fromCurr: CurrencyCode,
	toCurr: CurrencyCode,
	exchangeRates: Partial<Record<CurrencyCode, number>>
): number | null => {
	const fromRate = exchangeRates[fromCurr]
	const toRate = exchangeRates[toCurr]

	if (fromRate === undefined || toRate === undefined) {
		return null
	}

	return parseFloat(((amount / fromRate) * toRate).toFixed(2))
}

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
