import { Grid, Box, Heading, Stack, VStack } from "@chakra-ui/layout"
import {
  ChakraProvider,
  extendTheme,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react"
import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@fontsource/lexend-deca"
import desktopImg from "./images/image-header-desktop.jpg"
import mobileImg from "./images/image-header-mobile.jpg"
import Stat from "./components/Stat"

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Lexend Deca",
  },
})

function Stats() {
  return (
    <Stack
      direction={{ base: "column", xl: "row" }}
      alignItems={{ xl: "start" }}
      spacing={{ base: "4", xl: "14" }}
    >
      <Stat
        alignItems={{ base: "center", xl: "start" }}
        number="10k+"
        text="companies"
      />
      <Stat
        alignItems={{ base: "center", xl: "start" }}
        number="314"
        text="templates"
      />
      <Stat
        alignItems={{ base: "center", xl: "start" }}
        number="12M+"
        text="queries"
      />
    </Stack>
  )
}

function Content() {
  return (
    <VStack spacing="5" textAlign={{ base: "center", xl: "left" }}>
      <Heading
        as="h1"
        color="hsl(0, 0%, 100%)"
        fontSize={{ base: "3xl", xl: "4xl" }}
        fontWeight="700"
        lineHeight="1.2"
      >
        Get{" "}
        <Box as="span" color=" hsl(277, 64%, 61%)">
          insights
        </Box>{" "}
        that help your business grow.
      </Heading>
      <Box
        as="p"
        fontSize={{ base: "sm", xl: "md" }}
        color="hsla(0, 0%, 100%, 0.75)"
        lineHeight="1.6"
      >
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </Box>
    </VStack>
  )
}

function StatsPreviewCardComponent() {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        bgColor="hsl(233, 47%, 7%)"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          direction={{ base: "column", xl: "row-reverse" }}
          borderRadius="lg"
          bgColor="hsl(244, 38%, 16%)"
          w={{ base: "326px", xl: "1120px" }}
          m="auto"
          overflow="hidden"
        >
          <Box
            aria-hidden="true"
            flex="none"
            pos="relative"
            _after={{
              content: `""`,
              pos: "absolute",
              inset: "0",
              bgColor: "hsla(275, 100%, 30%, 0.5)",
            }}
          >
            <Image
              src={useBreakpointValue({ base: mobileImg, xl: desktopImg })}
            />
          </Box>
          <VStack
            spacing={{ base: "8", xl: "16" }}
            px={{ base: "6", xl: "20" }}
            py={{ base: "8" }}
            justifyContent="center"
            alignItems={{ base: "center", xl: "start" }}
          >
            <Content />
            <Stats />
          </VStack>
        </Stack>
      </Grid>
    </ChakraProvider>
  )
}

export default StatsPreviewCardComponent
