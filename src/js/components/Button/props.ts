// Layout
import theme from "../../../style/theme"

export default interface PropsInterface {
	color?: keyof typeof theme["colors"];
	group?: boolean;
	disabled?: boolean;
}