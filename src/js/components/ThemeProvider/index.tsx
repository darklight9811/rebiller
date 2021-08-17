// Packages
import { ThemeProvider as Provider } from "styled-components"

// Component
import theme from "../../../style/theme"
import Global from "../../../style/global"

export default function ThemeProvider (props: any) {
	return (
		<Provider theme={theme}>
			<Global />
			{props.children}
		</Provider>
	)
}