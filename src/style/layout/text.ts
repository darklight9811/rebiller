// Packages
import styled from "styled-components"
import { clamp, lerp } from "utils/functions/math"

// Style
import theme from "../theme"

// -------------------------------------------------
// Highlight
// -------------------------------------------------

type colors = keyof typeof theme["colors"]

export const Highlight = styled.span<{color: colors}>`
	color: ${({ theme, color }) => theme.colors[color || "main"]};
`

// -------------------------------------------------
// Heading
// -------------------------------------------------

export const Heading = styled.h1<{size?: 1 | 2 | 3 | 4 | 5}>`
	font-size: ${({ size }) => lerp(50, 16, clamp(1, 5, size || 1) / 5)}px;
`