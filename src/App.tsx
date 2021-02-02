import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  Button
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import theme from "./theme/index"
//import theme from "./theme"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Button>
            baseStyle
          </Button>
          <Button variant="">
            variant=""
          </Button>
          <Button variant="blue">
            variant="blue"
          </Button>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
