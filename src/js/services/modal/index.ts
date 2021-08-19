// Store
import { store } from ".."

// Utils
import Service from "utils/service"

@Service.store(store, "config.modal")
class ModalServiceClass extends Service<"config.modal"> {
	public open = (id: string) => {
		const [, dispatch] = this.model

		dispatch.onOpen(id)
	}

	public close = () => {
		const [, dispatch] = this.model

		dispatch.onClose()
	}
}

const modalService = new ModalServiceClass()
export default modalService