import {
  Box,
  ChakraProvider,
  extendTheme,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  useTheme,
  Image,
  SimpleGrid,
  Button,
  HStack,
  Grid,
  VStack,
} from "@chakra-ui/react"
import { useState } from "react"
import dollarIcon from "./images/icon-dollar.svg"

const localTheme = {
  colors: {
    cyan: {
      100: "hsl(189, 41%, 97%)",
      200: "hsl(185, 41%, 84%)",
      700: "hsl(184, 14%, 56%)",
      800: "hsl(186, 14%, 43%)",
      900: "hsl(183, 100%, 15%)",
    },
  },
  components: {
    FormLabel: {
      baseStyle: { color: "cyan.800", fontWeight: "400" },
    },
    Input: {
      baseStyle: {
        field: {
          textAlign: "right",
          color: "cyan.700",
        },
      },
      variants: {
        outline: {
          field: {
            bgColor: "cyan.100",
          },
        },
      },
    },
  },
}

interface CustomInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  icon?: React.ReactNode
  min?: number
  max?: number
}
function CustomInput({
  label,
  icon,
  value,
  onChange,
  min = Number.MIN_SAFE_INTEGER + 10,
  max = Number.MAX_SAFE_INTEGER - 10,
}: CustomInputProps) {
  return (
    <FormControl id="bill">
      <FormLabel>{label}</FormLabel>
      <InputGroup fontWeight="bold">
        <InputLeftElement pointerEvents="none" color="cyan.800">
          {icon}
        </InputLeftElement>
        <Input value={value} onChange={(e) => onChange(e.target.value)} />
      </InputGroup>
    </FormControl>
  )
}

function TipCalculatorApp() {
  const appTheme = useTheme()
  const theme = extendTheme(localTheme, appTheme)
  const [bill, setBill] = useState<string>("0")

  return (
    <ChakraProvider theme={theme}>
      <Grid
        bgColor="cyan.200"
        h="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <VStack
          as="section"
          bgColor="white"
          rounded="2xl"
          spacing="6"
          p="6"
          alignItems="stretch"
        >
          <Box>
            <CustomInput
              label="Bill"
              icon={<Image src={dollarIcon} />}
              value={bill}
              onChange={setBill}
            />
          </Box>
          <Box>
            <FormLabel>Select Tip %</FormLabel>
            <SimpleGrid rows={2} columns={3} gap={3}>
              {["5%", "10%", "15%", "25%", "50%"].map((text) => (
                <Button colorScheme="cyan" color="white">
                  {text}
                </Button>
              ))}
              <Button bgColor="cyan.100" color="cyan.800">
                Custom
              </Button>
            </SimpleGrid>
          </Box>
          <Box>
            <CustomInput
              label="Number of People"
              icon={<Image src={dollarIcon} />}
              value={bill}
              onChange={setBill}
            />
          </Box>
        </VStack>
      </Grid>
      <HStack spacing={0} pos="absolute" bottom={6} right={6}>
        <Box bgColor="cyan.100" w={10} h={6}></Box>
        <Box bgColor="cyan.200" w={10} h={6}></Box>
        <Box bgColor="cyan.700" w={10} h={6}></Box>
        <Box bgColor="cyan.800" w={10} h={6}></Box>
        <Box bgColor="cyan.900" w={10} h={6}></Box>
      </HStack>
    </ChakraProvider>
  )
}

export default TipCalculatorApp
