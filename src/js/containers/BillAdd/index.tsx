// Packages
import { Form } from "formalization";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Text from "../../components/Text";

// Services
import billService from "../../models/config";

export default function BillAdd () {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Form onSubmit={(data) => billService.add(data as any)}>
			<Input name="label" label="Name" required placeholder="ex: Internet bill" />
			<Input name="date_expire" label="Date it expires" required type="date" />
			<Input name="fine_percentage" label="Fine percentage per day" required type="number" />
			<Text name="description" label="Description" />

			<Button>Add</Button>
		</Form>
	)
}