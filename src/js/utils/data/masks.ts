// Packages
import masker from "vanilla-masker"

const masks = {
	date: (value: string) => value ? masker.toPattern("99/99/9999") : value,
	money: (value: string) => value ? masker.toMoney(value) : value,
	number: (value: string) => value ? parseInt(masker.toNumber(value)) : value,
	day: (value: string) => value ? parseInt(masker.toNumber(value)) : value,
	string: (value: string) => value ? `${value}` : value,
} as const

export default masks
