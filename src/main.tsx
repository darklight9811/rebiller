// Packages
import { render } from "preact"
import { Provider } from "react-redux"

// Store
import { store } from "services"

// Containers
import App from "containers/general/App"

// Components
import ThemeProvider from "components/ThemeProvider"
import Modal from "components/Modal"

// -------------------------------------------------
// Styling
// -------------------------------------------------

import "bootstrap/dist/css/bootstrap-grid.min.css"
import "@fortawesome/fontawesome-free/css/fontawesome.min.css"
import "@fortawesome/fontawesome-free/css/solid.min.css"

// -------------------------------------------------
// Routes
// -------------------------------------------------

import "./js/routes/general"

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
