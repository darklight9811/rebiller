export default interface BillInterface {
	id: string;
	label: string;
	date_expire: string;
	fine_percentage: number;
	base_value: number;
	description: string;
}