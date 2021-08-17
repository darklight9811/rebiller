// Packages
import { createModel } from "@rematch/core";

const auth = createModel()({
	// -------------------------------------------------
	// States
	// -------------------------------------------------

	state: {
		open: false,
		display: undefined as string | undefined,
	},

	// -------------------------------------------------
	// Reducers
	// -------------------------------------------------

	reducers: {
		onOpen(state, id: string) {
			return {
				...state,
				open: true,
				display: id,
			};
		},
		onClose(state) {
			return {
				...state,
				open: false,
			}
		},
	},
});

export default auth;
