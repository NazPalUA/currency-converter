"use client"

import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import type { CurrencyCode } from "@/model/ExchangeRateResponseSchema"

type Props = {
	value: CurrencyCode
	onChange: (value: CurrencyCode) => void
	label: string
	currencyNames?: Record<CurrencyCode, string>
}

export const CurrencySelector = ({
	value,
	onChange,
	label,
	currencyNames,
}: Props) => {
	// Define currencies to be displayed in the dropdown
	const popularCurrencies: CurrencyCode[] = [
		"UAH", // Ukrainian Hryvnia
		"USD", // US Dollar
		"EUR", // Euro
		"RUB", // Russian Ruble
		"JPY", // Japanese Yen
		"GBP", // British Pound Sterling
		"AUD", // Australian Dollar
		"CAD", // Canadian Dollar
		"CHF", // Swiss Franc
		"CNY", // Chinese Yuan
		"HKD", // Hong Kong Dollar
		"NZD", // New Zealand Dollar
	]
	return (
		<div>
			<Label htmlFor={label}>{label}</Label>
			<Select
				value={value}
				onValueChange={value => onChange(value as CurrencyCode)}
			>
				<SelectTrigger className="w-48 border-primary">
					<SelectValue placeholder="Select currency" />
				</SelectTrigger>
				<SelectContent>
					{popularCurrencies.map(currencyCode => (
						<SelectItem key={currencyCode} value={currencyCode}>
							{currencyCode}
							{currencyNames && currencyNames[currencyCode]
								? ` - ${currencyNames[currencyCode]}`
								: ""}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
