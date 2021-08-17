const validations = {
	required: (value: string) => !value && "This field is required"
} as const;

export default validations;
