"use client"

import { CurrencyInput } from "@/components/CurrencyInput"
import { CurrencySelector } from "@/components/CurrencySelector"
import { currencyNames } from "@/lib/currencies"
import type { CurrencyCode } from "@/model/ExchangeRateResponseSchema"
import { useEffect, useState } from "react"

type Props = {
	exchangeRates: Partial<Record<CurrencyCode, number>>
}

export const CurrencyConverter = ({ exchangeRates }: Props) => {
	const [fromCurrency, setFromCurrency] = useState<CurrencyCode>("USD")
	const [toCurrency, setToCurrency] = useState<CurrencyCode>("EUR")
	const [fromAmount, setFromAmount] = useState<number>(1)
	const [toAmount, setToAmount] = useState<number>(0)

	// Update toAmount when fromAmount, fromCurrency, or toCurrency changes
	useEffect(() => {
		const fromRate = exchangeRates[fromCurrency]
		const toRate = exchangeRates[toCurrency]

		if (fromRate === undefined || toRate === undefined) {
			setToAmount(0)
			return
		}

		const convertedAmount = (fromAmount / fromRate) * toRate
		setToAmount(parseFloat(convertedAmount.toFixed(2)))
	}, [fromAmount, fromCurrency, toCurrency, exchangeRates])

	// Update fromAmount when toAmount changes
	const handleToAmountChange = (value: number) => {
		setToAmount(value)

		const fromRate = exchangeRates[fromCurrency]
		const toRate = exchangeRates[toCurrency]

		if (fromRate === undefined || toRate === undefined) {
			setFromAmount(0)
			return
		}

		const convertedAmount = (value / toRate) * fromRate
		setFromAmount(parseFloat(convertedAmount.toFixed(2)))
	}

	return (
		<div className="flex justify-between items-center gap-8 bg-secondary w-min p-8 rounded-2xl m-auto ">
			{/* First Column */}
			<div className="flex flex-col items-center gap-4 ">
				<CurrencySelector
					value={fromCurrency}
					onChange={setFromCurrency}
					label="From"
					currencyNames={currencyNames}
				/>
				<CurrencyInput
					amount={fromAmount}
					onAmountChange={setFromAmount}
					currencyCode={fromCurrency}
					id="fromAmount"
				/>
			</div>

			{/* Second Column */}
			<div className="flex flex-col items-center gap-4">
				<CurrencySelector
					value={toCurrency}
					onChange={setToCurrency}
					label="To"
					currencyNames={currencyNames}
				/>
				<CurrencyInput
					amount={toAmount}
					onAmountChange={handleToAmountChange}
					currencyCode={toCurrency}
					id="toAmount"
				/>
			</div>
		</div>
	)
}
