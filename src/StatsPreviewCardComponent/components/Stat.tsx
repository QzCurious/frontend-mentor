import { Box, StackProps, VStack } from "@chakra-ui/react"

interface StatProps extends StackProps {
  number: string
  text: string
}

function Stat({ number, text, ...props }: StatProps) {
  return (
    <VStack spacing="0.5" {...props}>
      <Box color="hsl(0, 0%, 100%)" fontWeight="700" fontSize="2xl">
        {number}
      </Box>
      <Box
        as="h2"
        color="hsla(0, 0%, 100%, 0.6)"
        textTransform="uppercase"
        fontSize="sm"
        fontWeight="400"
      >
        {text}
      </Box>
    </VStack>
  )
}

export default Stat
