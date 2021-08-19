// Interfaces
import PaymentInterface from "services/payment/interface"

// Components
import List from "components/List"
import Button from "components/Button"

// Services
import paymentService from "services/payment"

export default function PaymentItem(data: PaymentInterface) {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<List.Item>
			<>Payed {data.date[0]}/{data.date[1]}</>
			<div class="d-flex">
				<div class="me-2">
					<Button group color="danger" onClick={() => paymentService.remove(data.id)}><i class="fa fa-trash" /></Button>
				</div>
			</div>
		</List.Item>
	)
}