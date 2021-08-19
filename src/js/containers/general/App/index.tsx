// Packages
import { Suspense } from "preact/compat"
import { BrowserRouter, Switch } from "react-router-dom"
import { ScreenChanger } from "./styled"

// Utils
import buildRoutes from "./utils/buildRoutes"

export default function App() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	const SuspenseComp = Suspense as any

	return (
		<BrowserRouter>
			<SuspenseComp fallback="">
				<ScreenChanger>
					<Switch>{buildRoutes()}</Switch>
				</ScreenChanger>
			</SuspenseComp>
		</BrowserRouter>
	)
}
