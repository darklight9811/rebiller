// Packages
import { createModel } from "@rematch/core"

// Model
import ModelInterface from "./interface"

const ConfigModel = createModel()({

	// -------------------------------------------------
	// State
	// -------------------------------------------------

	state: {
		data: undefined as ModelInterface | undefined,
		list: {
			data: [] as ModelInterface[],
		},
	},

	// -------------------------------------------------
	// Reducers
	// -------------------------------------------------

	reducers: {
		setData (state, data: ModelInterface | undefined) {
			return {
				...state,
				data,
			}
		},
		addList (state, data: ModelInterface) {
			return {
				...state,
				list: {
					data: [... state.list.data, data],
				},
			}
		},
		setList (state, data: ModelInterface[]) {
			return {
				...state,
				list: {
					data,
				},
			}
		},
	},
})

export default ConfigModel