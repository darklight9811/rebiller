// Services
import configService from "services/config"

// Components
import Button from "components/Button"
import Modal from "components/Modal"

// Services
import modalService from "services/modal"
import billService from "services/bill"

// Containers
import BillAdd from "containers/bill/Add"
import BillEdit from "containers/bill/Edit"
import BillList from "containers/bill/List"
import Pay from "containers/payment/Pay"

// Layout
import { Heading } from "layout/text"

export default function Home() {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	const [{ user }] = configService.useModel()

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<Heading>Welcome back, {user.name}</Heading>

			<div class="test">
				<Button onClick={() => modalService.open("add-bill")}>Add bill</Button>
				<Button color="danger" onClick={() => modalService.open("clear-bill")}>Clear bills</Button>
			</div>

			<BillList />

			<Modal id="add-bill" title="Add new bill">
				<BillAdd />
			</Modal>
			<Modal id="edit-bill" title="Edit bill">
				<BillEdit />
			</Modal>
			<Modal id="pay-bill" title="Pay a bill">
				<Pay />
			</Modal>
			<Modal id="clear-bill" title="Clear all bills" subtitle="Are you sure? This is not a reversible action.">
				<Button color="danger" onClick={billService.clear}>Delete all</Button>
				<Button onClick={modalService.close}>Cancel</Button>
			</Modal>
		</>
	)
}