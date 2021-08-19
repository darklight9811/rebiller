// Components
import List from "components/List"

// Services
import billService from "services/bill"

// Subcomponents
import BillItem from "./subcomponents/BillItem"

export default function BillList() {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	const [{ list }] = billService.useModel()

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<List>
			{list.data.map(item => <BillItem key={item.id} {...item} />)}
		</List>
	)
}