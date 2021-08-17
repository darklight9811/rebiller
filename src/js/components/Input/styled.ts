import styled from "styled-components"
import { Input as FormInput } from "formalization"

// -------------------------------------------------
// Input
// -------------------------------------------------

export const Input = styled(FormInput)`
	margin: 5px 0 10px;
	padding: 5px 2px 5px 10px;

	border-radius: 5px;
	border: 1px solid ${({ theme }) => theme.colors.black};
`