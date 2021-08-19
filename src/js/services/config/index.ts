// Store
import { store } from ".."

// Utils
import Service from "../../utils/service"

@Service.store(store, "config")
class ConfigServiceClass extends Service <"config"> {

}

const configService = new ConfigServiceClass()
export default configService