// Data
import masks from "utils/data/masks"

export default interface PropsInterface {
	name: string;
	label?: string;
	required?: boolean;
	placeholder?: string;
	type?: keyof typeof masks;
}