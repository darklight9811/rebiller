// Packages
import { useHistory } from "react-router"

// Interfaces
import BillInterface from "services/bill/interface"

// Components
import List from "components/List"
import Button from "components/Button"

// Component
import * as styled from "../styled"

// Services
import billService from "services/bill"
import modalService from "services/modal"
import paymentService from "services/payment"

// Layout
import { Heading } from "layout/text"
import { calculateFee } from "utils/functions/bill"

export default function BillItem(data: BillInterface) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// services
	const [, modal] = modalService.useModel()
	const [, bill] = billService.useModel()
	const paid = paymentService.usePaid(data.id)

	// hooks
	const history = useHistory()

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const pay = () => {
		modal.onOpen("pay-bill")
		bill.setData(data)
	}

	const edit = () => {
		modal.onOpen("edit-bill")
		bill.setData(data)
	}

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<List.Item>
			<Heading size={4}>{data.label}</Heading>
			<div class="d-flex">
				<div class="me-2">
					<Button group color="secondary" onClick={() => history.push(`/bills/${data.id}`)}><i class="fa fa-info" /></Button>
					<Button disabled={!!paid} group color="success" onClick={pay}>{paid ? "Paid" : "Pay"}</Button>
					<Button group onClick={edit}><i class="fa fa-edit" /></Button>
					<Button group color="danger" onClick={() => billService.remove(data.id)}><i class="fa fa-trash" /></Button>
				</div>
				<styled.Price late={!paid}>
					{paid && "Paid"}
					{!paid && <>R$ {data.base_value}{paid ? "" : ` (R$ ${calculateFee(data)} in fees)`}</>}
				</styled.Price>
			</div>
		</List.Item>
	)
}