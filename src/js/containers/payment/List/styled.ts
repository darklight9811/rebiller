import styled from "styled-components"

// -------------------------------------------------
// Price
// -------------------------------------------------

export const Price = styled.span<{late?: boolean}>`
	color: ${({ late, theme }) => theme.colors[late ? "danger" : "success"]}
`