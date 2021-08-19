// Packages
import { keyframes } from "styled-components"

export const fadeFromLeft = keyframes`
	from {
		opacity: 0;
		transform: translate(20px);
	}

	to {
		opacity: 1;
		transform: translate(0);
	}
`