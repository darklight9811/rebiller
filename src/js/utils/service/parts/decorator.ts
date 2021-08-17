// Interfaces
import { RematchStore } from "@rematch/core";
import { ServiceInterface } from "../types";

export default function ServiceInitializerDecorator (store: RematchStore, model?: string): ClassDecorator {
	return function (target) {
		const classModel = target as unknown as ServiceInterface;
		classModel.$store = store;
		classModel.$model = model;
	}
}