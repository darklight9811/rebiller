/* eslint-disable react-hooks/rules-of-hooks */

// Packages
import { useDispatch, useSelector } from "react-redux"

// Interfaces
import { RematchRootState, RematchDispatch } from "@rematch/core"

// Utils
import { instance } from "../../client"

// Decorators
import StoreDecorator from "./decorator"
import { ModelsInterface } from "services"

type StoreGeneric<ModelName extends string> = {
	store: [
		RematchRootState<ModelsInterface>,
		RematchDispatch<ModelsInterface>,
	];

	model: [
		RematchRootState<ModelsInterface>[ModelName],
		RematchDispatch<ModelsInterface>[ModelName],
	];
};

export default abstract class Service<ModelName extends string> {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	public static store: typeof StoreDecorator;

	// -------------------------------------------------
	// Hooks
	// -------------------------------------------------

	public useModel () {
		const model = (this.constructor as any).$model

		const state 	= useSelector((store: RematchRootState<ModelsInterface>) => store[model as string])
		const dispatch	= useDispatch()

		return [state, dispatch[model as string]] as StoreGeneric<ModelName>["model"]
	}

	// -------------------------------------------------
	// Getters
	// -------------------------------------------------

	protected get client () {
		return instance
	}

	protected get store () {
		const store = (this.constructor as any).$store

		if (!store) {
			throw new Error("Store for this class has not been defined")
		}

		const storeInstance = store

		return [
			storeInstance.getState(),
			storeInstance.dispatch,
		] as StoreGeneric<ModelName>["store"]
	}

	protected get model () {
		const model = (this.constructor as any).$model

		if (!model) {
			throw new Error("Model for this class has not been defined")
		}

		const [state, dispatch] = this.store

		return [
			state[model as any],
			dispatch[model as any],
		] as StoreGeneric<ModelName>["model"]
	}
}