import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	* {
		color: ${({ theme }) => theme.colors.black};
		font-family: ${({theme}) => theme.font.family};
		font-size: ${({theme}) => theme.font.size}px;
		line-height: 30px;
	}
`

export default GlobalStyle