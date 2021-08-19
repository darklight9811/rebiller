// Packages
import { useParams, useHistory } from "react-router"

// Layout
import { Heading, Highlight } from "layout/text"

// Components
import Button from "components/Button"
import Modal from "components/Modal"

// Containers
import BillEdit from "containers/bill/Edit"
import PaymentList from "containers/payment/List"

// Services
import billService from "services/bill"
import modalService from "services/modal"
import paymentService from "services/payment"
import Pay from "containers/payment/Pay"
import { calculateFee } from "utils/functions/bill"

export default function Bill() {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const { id } = useParams<{ id: string }>()
	const history = useHistory()
	const paid = paymentService.usePaid(id)

	// Services
	const bill = billService.useBill(id)!

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const total = parseFloat(bill.base_value.replace(/\./, "").replace(",", ".")) + parseFloat(calculateFee(bill).replace(/\./, "").replace(",", "."))

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<Heading size={1}>{bill.label}</Heading>
			<div>
				<Button group onClick={() => history.push("/")} color="secondary"><i class="fa fa-chevron-left" /></Button>
				<Button group onClick={() => modalService.open("edit-bill")}><i class="fa fa-edit" /></Button>
				<Button group color="danger"><i class="fa fa-trash" /></Button>
			</div>

			{bill.description}

			<div class="my-4">
				<Button disabled={!!paid} onClick={() => modalService.open("pay-bill")}>{paid ? "Paid" : "Pay"}</Button>
				{!paid && <Highlight color="danger"> You haven't paid yet (R$ {bill.base_value} + R$ {calculateFee(bill)} in fees = R$ {total})</Highlight>}
				{paid && <Highlight color="success"> You already paid this month</Highlight>}
			</div>

			This bill was added at {(new Date(bill.date_created)).toLocaleString("pt-BR")}.

			<PaymentList id_bill={bill.id} month_from={(new Date(bill.date_created)).getMonth()} />

			<Modal id="edit-bill" title="Edit bill">
				<BillEdit />
			</Modal>

			<Modal id="pay-bill" title="Pay bill">
				<Pay />
			</Modal>
		</>
	)
}