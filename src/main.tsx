// Packages
import { render } from 'preact'
import { Provider } from "react-redux";

// Store
import { store } from './js/models';

// Containers
import App from './js/containers/App';

// Components
import ThemeProvider from "./js/components/ThemeProvider"
import Modal from './js/components/Modal';

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
	document.getElementById('app')!
);
