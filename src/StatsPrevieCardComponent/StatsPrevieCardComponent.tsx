import { Box, Flex, Heading, Stack, VStack } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/react"
import desktopImg from "./images/image-header-desktop.jpg"
import mobileImg from "./images/image-header-mobile.jpg"

interface StatisticProps {
  number: string
  text: string
}
function Statistic({ number, text }: StatisticProps) {
  return (
    <VStack>
      <Heading color="hsla(0, 0%, 100%)" fontWeight="extrabold" size="3xl">
        {number}
      </Heading>
      <Box color="hsla(0, 0%, 100%, 0.75)" textTransform="capitalize">
        {text}
      </Box>
    </VStack>
  )
}

function StatsPrevieCardComponent() {
  return (
    <Box bgColor="hsl(233, 47%, 7%)">
      <Flex
        direction="column"
        borderRadius="3xl"
        bgColor="hsl(244, 38%, 16%)"
        w="375px"
        overflow="hidden"
      >
        <Image src={mobileImg} />
        <Box p="12">
          <Heading
            as="h1"
            textAlign="center"
            color="hsl(0, 0%, 100%)"
            size="3xl"
            fontWeight="extrabold"
          >
            Get{" "}
            <Box as="span" color=" hsl(277, 64%, 61%)">
              insights
            </Box>
            that help your business grow.
          </Heading>{" "}
          <Box as="p" textAlign="center" color="hsla(0, 0%, 100%, 0.75)">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </Box>
        </Box>
        <Stack direction={"column"}>
          <Statistic number="10k+" text="companies" />
          <Statistic number="314" text="templates" />
          <Statistic number="12m+" text="queries" />
        </Stack>
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </Flex>
    </Box>
  )
}

export default StatsPrevieCardComponent
