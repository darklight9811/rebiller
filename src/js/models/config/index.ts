// Store
import { store, ModelsInterface } from "..";

// Utils
import Service from "../../utils/service";

// Interfaces
import BillInterface from "../bill/interface";

@Service.store(store, "resource.bill")
class BillServiceClass extends Service <ModelsInterface, "resource.bill"> {
	public add (data: BillInterface) {
		console.log(data)

		return true;
	}
}

const billService = new BillServiceClass();
export default billService;