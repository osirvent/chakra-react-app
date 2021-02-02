import { extendTheme, ThemeOverride } from "@chakra-ui/react"
import styles from "./styles"


export const theme: ThemeOverride = extendTheme({
	styles,
	components: {
		Button: {
			baseStyle: {
				bg: "red.200",
				_hover: {
					bg: "red.400"
				}
			},
			variants: {
				"blue": {
					bg: "blue.200",
					_hover: {
						bg: "blue.400"
					}
				}
			}
		}
	}
})

export default theme