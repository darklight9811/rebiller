import BillInterface from "services/bill/interface"

export const calculateFee = (data: BillInterface) => {
	const date = new Date()
	const totalPrice = (parseFloat(data?.base_value?.replace(/\./g, "").replace(",", ".") || "") || 0)
	const percentageFee = (parseFloat(data?.fine_percentage?.replace(/\./g, "").replace(",", ".") || "") || 0)
	const daysLate = date.getDate() - (data?.date_expire || 0)
	const fee = ((daysLate * percentageFee) / 100) * totalPrice

	return daysLate > 0 ? fee.toFixed(2).replace(".", ",") : "0"
}