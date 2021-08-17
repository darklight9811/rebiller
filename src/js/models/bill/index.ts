// Store
import { store, ModelsInterface } from "..";

// Utils
import Service from "../../utils/service";

@Service.store(store, "config")
class ConfigServiceClass extends Service <ModelsInterface, "config"> {
	
}

const configService = new ConfigServiceClass();
export default configService;