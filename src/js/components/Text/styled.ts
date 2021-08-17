import styled from "styled-components"
import { Text as FormText } from "formalization"

// -------------------------------------------------
// Text
// -------------------------------------------------

export const Text = styled(FormText)`
	resize: vertical;

	margin: 5px 0 10px;
	padding: 5px 2px 5px 10px;

	border-radius: 5px;
	border: 1px solid ${({ theme }) => theme.colors.black};
`;