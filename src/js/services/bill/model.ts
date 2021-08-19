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
		setList (state, data: ModelInterface[]) {
			return {
				...state,
				list: {
					data,
				},
			}
		},
		addListItem (state, data: ModelInterface) {
			return {
				...state,
				list: {
					data: [... state.list.data, data],
				},
			}
		},
		editListItem (state, data: {id: string; data: Partial<ModelInterface>}) {
			return {
				...state,
				list: {
					data: state.list.data.map(item => item.id === data.id ? {...item, ...data.data} : item),
				},
			}
		},
		removeListItem (state, id: string) {
			return {
				...state,
				list: {
					data: state.list.data.filter(item => item.id !== id),
				},
			}
		},
	},
})

export default ConfigModel