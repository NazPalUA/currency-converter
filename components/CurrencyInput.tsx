"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { CurrencyCode } from "@/model/ExchangeRateResponseSchema"

type Props = {
	amount: number
	onAmountChange: (value: number) => void
	currencyCode: CurrencyCode
	id: string
}

export const CurrencyInput = ({
	amount,
	onAmountChange,
	currencyCode,
	id,
}: Props) => {
	return (
		<div>
			<Label htmlFor={id}>{currencyCode}</Label>
			<Input
				id={id}
				type="number"
				value={amount.toString()}
				onChange={e => onAmountChange(parseFloat(e.target.value))}
				className="w-48 border-primary"
			/>
		</div>
	)
}
