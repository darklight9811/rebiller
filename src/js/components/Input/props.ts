export default interface PropsInterface {
	name: string;
	label?: string;
	required?: boolean;
	placeholder?: string;
	type?: "string" | "number" | "date";
}