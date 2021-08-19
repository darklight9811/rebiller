// Packages
import { Error } from "formalization"

// Component
import Props from "./props"
import * as styled from "./styled"

// Style
import * as form from "layout/form"

// Data
import masks from "utils/data/masks"
import validations from "utils/data/validations"
import { useMemo } from "preact/hooks"

export default function Input(props: Props) {
	// -------------------------------------------------
	// Memops
	// -------------------------------------------------

	const fieldValidations = useMemo(() => {
		const response = []

		if (props.required) response.push(validations.required)
		if (props.type === "day") response.push(validations.day)

		return response
	}, [props])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<form.Container>
			{props.label && <label htmlFor={props.name}>{props.label}{props.required === true ? " *" : ""}</label>}
			<styled.Input
				placeholder={props.placeholder}
				validates={fieldValidations}
				filters={masks[props.type || "string"]}
				name={props.name}
			/>
			<form.Error><Error name={props.name} /></form.Error>
		</form.Container>
	)
}