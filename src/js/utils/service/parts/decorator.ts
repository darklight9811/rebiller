// Interfaces
import { StoreInterface } from "services"

// Models
import { ServiceInterface } from "../types"

export default function ServiceInitializerDecorator (store: StoreInterface, model?: string): ClassDecorator {
	return function (target) {
		const classModel = target as unknown as ServiceInterface
		classModel.$store = store
		classModel.$model = model
	}
}