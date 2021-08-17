// Packages
import { Error } from "formalization"

// Component
import Props from "./props"
import * as styled from "./styled"
import * as form from "../../../style/layout/form"

export default function Text (props: Props) {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<form.Container>
			{props.label && <label htmlFor={props.name}>{props.label}{props.required === true ? " *":""}</label>}
			<styled.Text placeholder={props.placeholder} name={props.name} />
			<form.Error><Error name={props.name} /></form.Error>
		</form.Container>
	)
}