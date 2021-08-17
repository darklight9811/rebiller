// Packages
import { Error } from "formalization";

// Component
import Props from "./props"
import * as styled from "./styled"

// Style
import * as form from "../../../style/layout/form"

// Data
import validations from "../../utils/data/validations";

export default function Input (props: Props) {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<form.Container>
			{props.label && <label htmlFor={props.name}>{props.label}{props.required === true ? " *":""}</label>}
			<styled.Input placeholder={props.placeholder} validates={[validations.required]} type={props.type} name={props.name} />
			<form.Error><Error name={props.name} /></form.Error>
		</form.Container>
	)
}