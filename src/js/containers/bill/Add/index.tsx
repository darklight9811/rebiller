// Packages
import { Form } from "formalization"

// Components
import Button from "components/Button"
import Input from "components/Input"
import Text from "components/Text"

// Services
import billService from "services/bill"

export default function BillAdd() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Form onSubmit={billService.add}>
			<Input name="label" label="Name" required placeholder="ex: Internet bill" />
			<Input name="date_expire" label="Day it expires" required type="number" />
			<Input name="fine_percentage" label="Fine percentage per day" required type="money" />
			<Input name="base_value" label="Bill price" required type="money" />
			<Text name="description" label="Description" />

			<Button>Add</Button>
		</Form>
	)
}