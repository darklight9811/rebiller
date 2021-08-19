import { StoreInterface } from "services"

export interface ServiceInterface {
	$store	: StoreInterface;
	$model?	: string;
}