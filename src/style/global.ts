import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		font-family: ${({theme}) => theme.font.family};
		font-size: ${({theme}) => theme.font.size};
	}
`;

export default GlobalStyle;