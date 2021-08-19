// Packages
import { datatype } from "faker"
import { useSelector } from "react-redux"

// Store
import { store, StateInterface } from ".."

// Utils
import Service from "utils/service"

// Interfaces
import PaymentInterface from "./interface"

@Service.store(store, "resource.payment")
class PaymentServiceClass extends Service <"resource.payment"> {
	// -------------------------------------------------
	// Main methods
	// -------------------------------------------------

	public add = (id_bill: string, day?: number, month?: number, year?: number) => {
		const date = new Date()

		const [, dispatch] = this.model
		const [, store] = this.store

		dispatch.addListItem({
			id: datatype.uuid(),
			date_paid: (new Date(`${month || date.getMonth()}/${day || date.getDate()}/${year || date.getFullYear()}`)).getMilliseconds(),
			id_bill,
		})

		store["config.modal"].onClose()

		return true
	}

	public edit = (id: string, data: Partial<PaymentInterface>) => {
		const [, dispatch] = this.model
		const [, store] = this.store

		dispatch.editListItem({id, data})

		store["config.modal"].onClose()

		return true
	}

	public remove = (id: string) => {
		const [, dispatch] = this.model

		dispatch.removeListItem(id)
	}

	public clear = () => {
		const [, dispatch] = this.model
		const [, store] = this.store

		dispatch.setList([])

		store["config.modal"].onClose()
	}

	// -------------------------------------------------
	// Hooks
	// -------------------------------------------------

	public usePaid = (id: string, month?: number, year?: number) => {
		return useSelector((store: StateInterface) =>
			store["resource.payment"].list.data
				.find(item => item.id_bill === id && item.date_paid[1] === month || (new Date()).getMonth()),
		)
	}
}

const paymentService = new PaymentServiceClass()
export default paymentService