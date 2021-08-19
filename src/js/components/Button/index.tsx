// Packages
import styled, { css } from "styled-components"

// Utils
import { shadeColor } from "utils/functions/color"

// Component
import Props from "./props"

const Button = styled.button<Props>`
	border: transparent 0px;
	border-bottom: 3px solid ${({ theme, color }) => shadeColor(theme.colors[color || "main"], -20)};
	color: ${({ theme, color }) => theme.colors[theme.textColors[color || "main"]]};
	background-color: ${({ theme, color }) => theme.colors[color || "main"]};
	transition: background-color .2s ease;

	line-height: 20px;
	padding: 5px 15px;
	border-radius: 5px;

	i {
		color: ${({ theme, color }) => theme.colors[theme.textColors[color || "main"]]};
	}

	&:disabled {
		opacity: 0.6;
	}

	&:not(:disabled):hover {
		cursor: pointer;

		background-color: ${({ theme, color }) => shadeColor(theme.colors[color || "main"], 20)};
	}

	&:not(:last-child) {
		margin-right: 10px;
	}
	
	${({ group }) => group && css`
		border-radius: 0;

		&:not(:last-child) {
			margin-right: 0;
		}

		&:first-child {
			border-top-left-radius: 5px;
			border-bottom-left-radius: 5px;
		}
		&:last-child {
			border-top-right-radius: 5px;
			border-bottom-right-radius: 5px;
		}
	`}
`

export default Button