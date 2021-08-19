// Packages
import { useEffect, useState } from "preact/hooks"
import { Form } from "formalization"

// Components
import Button from "components/Button"
import Input from "components/Input"
import Text from "components/Text"

// Services
import billService from "services/bill"

export default function BillEdit() {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// services
	const [bill] = billService.useModel()

	// states
	const [data, setdata] = useState(bill.data || {})

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	useEffect(() => setdata(bill.data || {}), [bill.data])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Form data={[data, setdata]} onSubmit={(data) => billService.edit(bill.data!.id, data as any)}>
			<Input name="label" label="Name" required placeholder="ex: Internet bill" />
			<Input name="date_expire" label="Day it expires" required type="number" />
			<Input name="fine_percentage" label="Fine percentage per day" required type="money" />
			<Input name="base_value" label="Bill price" required type="money" />
			<Text name="description" label="Description" />

			<Button>Edit</Button>
		</Form>
	)
}