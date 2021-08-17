// Packages
import { init, RematchDispatch, RematchRootState } from "@rematch/core";

// Models
import ConfigModel from "./config/model";
import BillModel from "./bill/model";
import ModalModel from "./modal/model";

// -------------------------------------------------
// Models
// -------------------------------------------------

const models = {
	"config": ConfigModel,
	"config.modal": ModalModel,
	"resource.bill": BillModel,
};

// -------------------------------------------------
// Store
// -------------------------------------------------

export const store = init({
	models
});

export type ModelsInterface = typeof models;
export type StoreInterface = typeof store;
export type DispatchInterface = RematchDispatch<typeof models>;
export type StateInterface = RematchRootState<typeof models>;
