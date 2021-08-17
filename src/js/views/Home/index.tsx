// Services
import configService from "../../models/bill"

// Containers
import BillList from "../../containers/BillList"

// Components
import Button from "../../components/Button"
import Modal from "../../components/Modal"
import modalService from "../../models/modal"
import BillAdd from "../../containers/BillAdd"

export default function Home () {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	const [{user}] = configService.useModel()
	const [, modal] = modalService.useModel()

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<h1>Welcome back, {user.name}</h1>

			<div class="test">
				<Button onClick={() => modal.onOpen("hi")}>Add bill</Button>
			</div>

			<BillList />

			{/* <Modal id="hi" title="Add new bill"> */}
				<BillAdd />
			{/* </Modal> */}
		</>
	)
}