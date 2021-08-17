// Packages
import styled from "styled-components";

// Utils
import { shadeColor } from "../../utils/functions/color";

// Component
import Props from "./props";

const Button = styled.button<Props>`
	border: transparent 0px;
	color: ${({ theme, color }) => theme.colors[theme.textColors[color || "main"]]};
	background-color: ${({ theme, color }) => theme.colors[color || "main"]};
	transition: background-color .2s ease;

	padding: 10px 20px;
	border-radius: 5px;

	&:hover {
		cursor: pointer;

		background-color: ${({ theme, color }) => shadeColor(theme.colors[color || "main"], 40)};
	}
`;

export default Button;