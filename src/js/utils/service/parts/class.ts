/* eslint-disable react-hooks/rules-of-hooks */

// Packages
import { useDispatch, useSelector } from "react-redux";

// Interfaces
import { Models, RematchRootState, RematchDispatch } from "@rematch/core";

// Utils
import { instance } from "../../client";

// Decorators
import StoreDecorator from "./decorator";

type StoreGeneric<ModelGroup extends Models, ModelName extends string> = {
	store: [
		RematchRootState<ModelGroup>,
		RematchDispatch<ModelGroup>,
	];

	model: [
		RematchRootState<ModelGroup>[ModelName],
		RematchDispatch<ModelGroup>[ModelName],
	];
};

export default abstract class Service<ModelGroup extends Models, ModelName extends string> {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	public static store: typeof StoreDecorator;

	// -------------------------------------------------
	// Hooks
	// -------------------------------------------------

	public useModel () {
		const model = (this.constructor as any).$model;

		const state 	= useSelector((store: RematchRootState<ModelGroup>) => store[model as string]);
		const dispatch	= useDispatch();
		
		return [state, dispatch[model as string]] as StoreGeneric<ModelGroup, ModelName>["model"];
	}

	// -------------------------------------------------
	// Getters
	// -------------------------------------------------

	protected get client () {
		return instance;
	}
	
	protected get store () {
		const store = (this.constructor as any).$store;

		if (!store) {
			throw new Error("Store for this class has not been defined");
		}

		const storeInstance = store;

		return [
			storeInstance.getState(),
			storeInstance.dispatch,
		] as StoreGeneric<ModelGroup, ModelName>["store"];
	}

	protected get model () {
		const model = (this.constructor as any).$model;

		if (!model) {
			throw new Error("Model for this class has not been defined");
		}

		const [state, dispatch] = this.store;

		return [
			state[model as any],
			dispatch[model as any]
		] as StoreGeneric<ModelGroup, ModelName>["model"];
	}
}