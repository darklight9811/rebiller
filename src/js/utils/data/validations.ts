const validations = {
	required: (value: string) => !value ? "This field is required" : undefined,
	day: (value: string) => !value && (parseInt(value) > 31 || parseInt(value) < 1) ? "Day must be between 1 and 31" : undefined,
} as const

export default validations
