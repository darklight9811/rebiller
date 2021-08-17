/* eslint-disable @typescript-eslint/no-empty-interface */

import "styled-components"

import theme from "../../style/theme"

declare module "styled-components" {
	type themeType = typeof theme;

	export interface DefaultTheme extends themeType {

	}
}