// Packages
import { datatype } from "faker"

// Store
import { store, StateInterface } from ".."

// Utils
import Service from "utils/service"

// Interfaces
import BillInterface from "./interface"
import { useSelector } from "react-redux"

@Service.store(store, "resource.bill")
class BillServiceClass extends Service <"resource.bill"> {
	// -------------------------------------------------
	// Main methods
	// -------------------------------------------------

	public add = (data: Omit<BillInterface, "id" | "date_created">) => {
		const [, dispatch] = this.model
		const [, store] = this.store

		dispatch.addListItem({
			id: datatype.uuid(),
			date_created: Date.now(),
			...data,
		})

		store["config.modal"].onClose()

		return true
	}

	public edit = (id: string, data: Partial<BillInterface>) => {
		const [, dispatch] = this.model
		const [, store] = this.store

		dispatch.editListItem({id, data})

		store["config.modal"].onClose()

		return true
	}

	public remove = (id: string) => {
		const [, dispatch] = this.model
		const [, store] = this.store

		store["resource.payment"].removeByBill(id)
		dispatch.removeListItem(id)
	}

	public clear = () => {
		const [, dispatch] = this.model
		const [, store] = this.store

		dispatch.setList([])
		store["resource.payment"].setList([])

		store["config.modal"].onClose()
	}

	// -------------------------------------------------
	// Helper methods
	// -------------------------------------------------

	public useBill = (id: string) => useSelector((store: StateInterface) => store["resource.bill"].list.data.find(item => item.id === id))
}

const billService = new BillServiceClass()
export default billService