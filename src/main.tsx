// Packages
import { render } from "preact"
import { Provider } from "react-redux"

// Store
import { store } from "services"

// Containers
import App from "containers/App"

// Components
import ThemeProvider from "components/ThemeProvider"
import Modal from "components/Modal"

// -------------------------------------------------
// Styling
// -------------------------------------------------

import "bootstrap/dist/css/bootstrap-grid.min.css"
import "@fortawesome/fontawesome-free/css/all.css"

// -------------------------------------------------
// Setup DOM
// -------------------------------------------------

render(
	<Provider store={store}>
		<ThemeProvider>
			<Modal.Provider>
				<App />
			</Modal.Provider>
		</ThemeProvider>
	</Provider>,
	document.getElementById("app")!,
)
