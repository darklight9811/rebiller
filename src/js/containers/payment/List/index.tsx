// Components
import List from "components/List"

// Services
import paymentService from "services/payment"

// Component
import Props from "./props"

// Subcomponents
import PaymentItem from "./subcomponents/PaymentItem"

export default function PaymentList(props: Props) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// services
	const [{ list }] = paymentService.useModel()

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<List>
			{list.data.filter(item => item.id_bill === props.id_bill).map(item => <PaymentItem key={item.id} {...item} />)}

			{props.month_from !== undefined && Array.from(Array(Math.abs((new Date()).getMonth() - props.month_from)), () => <h1>hi</h1>)}
		</List>
	)
}