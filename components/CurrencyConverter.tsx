"use client"

import { CurrencyInput } from "@/components/CurrencyInput"
import { CurrencySelector } from "@/components/CurrencySelector"
import { currencyNames } from "@/lib/currencies"
import { convertAmount } from "@/lib/utils"
import type { CurrencyCode } from "@/model/ExchangeRateResponseSchema"
import { ArrowLeftRight } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"

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
		const convertedAmount = convertAmount(
			fromAmount,
			fromCurrency,
			toCurrency,
			exchangeRates
		)
		if (convertedAmount !== null) {
			setToAmount(convertedAmount)
		} else {
			setToAmount(0)
		}
	}, [fromAmount, fromCurrency, toCurrency, exchangeRates])

	// Update fromAmount when toAmount changes
	const handleToAmountChange = (value: number) => {
		setToAmount(value)
		const convertedAmount = convertAmount(
			value,
			toCurrency,
			fromCurrency,
			exchangeRates
		)
		if (convertedAmount !== null) {
			setFromAmount(convertedAmount)
		} else {
			setFromAmount(0)
		}
	}

	// Function to swap currencies
	const swapCurrencies = () => {
		setFromCurrency(toCurrency)
		setToCurrency(fromCurrency)
	}

	// Throw an error during render if exchange rates are missing
	if (
		exchangeRates[fromCurrency] === undefined ||
		exchangeRates[toCurrency] === undefined
	) {
		throw new Error("Exchange rate data is unavailable.")
	}

	return (
		<div className="flex justify-between items-center gap-4 bg-secondary w-min p-8 rounded-2xl m-auto ">
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

			{/* A button to swap currencies */}
			<Button
				className="hidden md:block p-0 "
				variant="ghost"
				size="icon"
				onClick={swapCurrencies}
			>
				<ArrowLeftRight className="w-7 h-7 m-auto" />
				<span className="sr-only">Swap currencies</span>
			</Button>

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
