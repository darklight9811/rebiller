// Packages
import { init, RematchDispatch, RematchRootState } from "@rematch/core"
import persistPlugin from "@rematch/persist"
import storage from "redux-persist/lib/storage"

// Models
import ConfigModel from "./config/model"
import BillModel from "./bill/model"
import PaymentModel from "./payment/model"
import ModalModel from "./modal/model"

// -------------------------------------------------
// Models
// -------------------------------------------------

const models = {
	"config": ConfigModel,
	"config.modal": ModalModel,
	"resource.bill": BillModel,
	"resource.payment": PaymentModel,
}

// -------------------------------------------------
// Store
// -------------------------------------------------

export const store = init({
	models,
	plugins: [persistPlugin({
		key: "root",
		storage,
	}) as any],
})

export type ModelsInterface = typeof models;
export type StoreInterface = typeof store;
export type DispatchInterface = RematchDispatch<typeof models>;
export type StateInterface = RematchRootState<typeof models>;
