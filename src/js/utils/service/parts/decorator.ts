// Interfaces
import { RematchStore } from "@rematch/core"
import { ModelsInterface } from "services"

// Models
import { ServiceInterface } from "../types"

export default function ServiceInitializerDecorator (store: RematchStore<ModelsInterface>, model?: string): ClassDecorator {
	return function (target) {
		const classModel = target as unknown as ServiceInterface
		classModel.$store = store
		classModel.$model = model
	}
}