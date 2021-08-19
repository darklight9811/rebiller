import styled, { css } from "styled-components"

// -------------------------------------------------
// Container
// -------------------------------------------------

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`

// -------------------------------------------------
// Error
// -------------------------------------------------

export const Error = styled.span`
	color: ${({theme}) => theme.colors.danger};
	
	font-size: 0.9em;

	height: 20px;
	margin: -4px 0 5px;
`

// -------------------------------------------------
// InputBase
// -------------------------------------------------

export const InputBase = css`
	margin: 5px 0 10px;
	padding: 5px 2px 5px 10px;

	border-radius: 5px;
	border: 2px solid ${({ theme }) => theme.colors.gray};
	border-bottom: 3px solid ${({ theme }) => theme.colors.main};

	transition: box-shadow .2s ease;

	&:hover, &:active, &:focus {
		outline: none;
		box-shadow: 0px 2px 8px 2px ${({ theme }) => theme.colors.gray};
	}
`