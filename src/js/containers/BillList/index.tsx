import List from "../../components/List";
import billService from "../../models/config"

export default function BillList () {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	const [{list}] = billService.useModel();

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<List>
			{list.data.map(item => <List.Item>{item.label}</List.Item>)}
		</List>
	)
}