// Store
import { store, ModelsInterface } from ".."

// Utils
import Service from "utils/service"

@Service.store(store, "config.modal")
class ModalServiceClass extends Service<ModelsInterface, "config.modal"> {

}

const modalService = new ModalServiceClass()
export default modalService