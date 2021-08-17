// Packages
import { createModel } from "@rematch/core"

const ConfigModel = createModel()({

	// -------------------------------------------------
	// State
	// -------------------------------------------------

	state: {
		language: "en-EN",
		user: {
			name: "Rafael Corrêa Chaves",
		},
	},

	// -------------------------------------------------
	// Reducers
	// -------------------------------------------------

	reducers: {
		setLanguage (state, language: string) {
			return {
				...state,
				language,
			}
		},
	},
})

export default ConfigModel