// Packages
import styled from "styled-components"

// Animations
import { fadeFromLeft } from "animations/transition"

export const ScreenChanger = styled.div`
	& > * {
		animation: ${fadeFromLeft} 0.4s ease;
	}
`