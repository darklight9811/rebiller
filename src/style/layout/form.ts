import styled from "styled-components"

// -------------------------------------------------
// Container
// -------------------------------------------------

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

// -------------------------------------------------
// Error
// -------------------------------------------------

export const Error = styled.span`
	color: ${({theme}) => theme.colors.danger};
	
	font-size: 0.9em;

	height: 20px;
	margin: -4px 0 5px;
`;