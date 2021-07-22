import { Grid, Box, Flex, Heading, Stack, VStack } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/react"
import desktopImg from "./images/image-header-desktop.jpg"
import mobileImg from "./images/image-header-mobile.jpg"

interface StatProps {
  number: string
  text: string
}
function Stat({ number, text }: StatProps) {
  return (
    <VStack spacing="0.5">
      <Box color="hsl(0, 0%, 100%)" fontWeight="extrabold" fontSize="2xl">
        {number}
      </Box>
      <Box
        as="h2"
        color="hsla(0, 0%, 100%, 0.6)"
        textTransform="uppercase"
        fontSize="sm"
        fontWeight="700"
      >
        {text}
      </Box>
    </VStack>
  )
}
function Stats() {
  return (
    <Stack direction={"column"} spacing="4">
      <Stat number="10k+" text="companies" />
      <Stat number="314" text="templates" />
      <Stat number="12M+" text="queries" />
    </Stack>
  )
}

function Content() {
  return (
    <VStack px="10" spacing="6">
      <Heading as="h1" textAlign="center" color="hsl(0, 0%, 100%)" size="lg">
        Get{" "}
        <Box as="span" color=" hsl(277, 64%, 61%)">
          insights
        </Box>{" "}
        that help your business grow.
      </Heading>
      <Box as="p" textAlign="center" color="hsla(0, 0%, 100%, 0.75)">
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </Box>
    </VStack>
  )
}

function StatsPreviewCardComponent() {
  return (
    <Grid
      bgColor="hsl(233, 47%, 7%)"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction={{ base: "column", xl: "row" }}
        borderRadius="xl"
        bgColor="hsl(244, 38%, 16%)"
        w={{ base: "375px", xl: "1440px" }}
        m="auto"
        overflow="hidden"
        spacing="12"
        pb="10"
      >
        <Image src={mobileImg} />
        <Content />
        <Stats />
      </Stack>
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </Grid>
  )
}

export default StatsPreviewCardComponent
