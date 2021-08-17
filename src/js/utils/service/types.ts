import { RematchStore } from "@rematch/core";

export interface ServiceInterface {
	$store	: RematchStore;
	$model?	: string;
}