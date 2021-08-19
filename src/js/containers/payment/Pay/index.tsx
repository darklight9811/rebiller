// Packages
import { useMemo } from "preact/hooks"
import { Form } from "formalization"

// Components
import Button from "components/Button"
import Input from "components/Input"

// Services
import billService from "services/bill"
import paymentService from "services/payment"

// Utils
import { parseMoney } from "utils/functions/parse"

// Layout
import { Highlight } from "layout/text"
import { calculateFee } from "utils/functions/bill"

export default function Pay() {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// services
	const [{ data }] = billService.useModel()

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const fee = useMemo(() => calculateFee(data!), [data])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Form onSubmit={({ day }: any) => paymentService.add(data?.id as string, day)} initialData={{ day: (new Date()).getDate() }}>
			You are paying the bill for {data!.label} that costs {parseMoney(data!.base_value)}.
			It {fee ? "expired" : "expires"} at day {data!.date_expire}{fee ? <>, it has now accumulated <Highlight color="danger">{parseMoney(fee)}</Highlight> of fees.</> : "."}
			<Input name="day" label="Day you paid" required type="day" />

			<Button>Add</Button>
		</Form>
	)
}