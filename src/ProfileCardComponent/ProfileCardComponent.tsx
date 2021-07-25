import {
  Box,
  ChakraProvider,
  extendTheme,
  Flex,
  Grid,
  Image,
  VStack,
} from "@chakra-ui/react"
import "@fontsource/kumbh-sans/400.css"
import "@fontsource/kumbh-sans/700.css"
import bgPatten from "./images/bg-pattern-card.svg"
import avatar from "./images/image-victor.jpg"
import bgTop from "./images/bg-pattern-top.svg"
import bgBottom from "./images/bg-pattern-bottom.svg"

const theme = extendTheme({
  fonts: {
    heading: "Kumbh Sans",
    body: "Kumbh Sans",
  },
})

const darkCyan = "hsl(185, 75%, 39%)"
const veryDarkDesaturatedBlue = "hsl(229, 23%, 23%)"
const darkGrayishBlue = "hsl(227, 10%, 46%)"
const darkGray = "hsl(0, 0%, 59%)"

interface StatProps {
  number: string
  text: string
}
function Stat({ number, text }: StatProps) {
  return (
    <VStack spacing="0.5" justifyContent="center">
      <Box fontWeight="700" fontSize="lg" lineHeight="none">
        {number}
      </Box>
      <Box color={darkGray} fontSize="xs" fontWeight="400">
        {text}
      </Box>
    </VStack>
  )
}

const ProfileCardComponent = () => {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        minH="100vh"
        placeItems="center"
        bg={`
        no-repeat left calc(-25vw - 25vh + 50%) top calc(-25vh - 25vw + 50%) / calc(55vh + 55vw) url("${bgTop}"),
        no-repeat right calc(-25vw - 25vh + 50%) bottom calc(-25vh - 25vw + 50%) / calc(55vh + 55vw) url("${bgBottom}"),
        ${darkCyan}
        `}
      >
        <Grid
          bgColor="#fff"
          w="324px"
          overflow="hidden"
          borderRadius="xl"
          gridTemplateColumns="100%"
          gridTemplateRows="90px 50px 50px 95px auto"
          color={veryDarkDesaturatedBlue}
        >
          <Box bgImage={`url("${bgPatten}")`} gridRow="1/3" gridColumn="1/-1" />
          <Grid
            justifyContent="center"
            gridRow="2/4"
            gridColumn="1/-1"
            pos="relative"
            zIndex="1"
          >
            <Image src={avatar} rounded="full" border="5px solid #fff" />
          </Grid>
          <Grid
            placeItems="center"
            gridRow="4/5"
            gridColumn="1/-1"
            fontWeight="700"
            textAlign="center"
          >
            <Box fontSize="lg">
              Victor Crest{" "}
              <Box as="span" color={darkGrayishBlue} fontWeight="400" mx="1">
                26
              </Box>
              <Box color={darkGray} fontSize="sm" fontWeight="400">
                London
              </Box>
            </Box>
          </Grid>
          <Flex justifyContent="space-around" borderTop="1px solid #ccc" p="6">
            <Stat text="Followers" number="80K" />
            <Stat text="Likes" number="803K" />
            <Stat text="Photos" number="1.4K" />
          </Flex>
        </Grid>
      </Grid>
    </ChakraProvider>
  )
}

export default ProfileCardComponent
