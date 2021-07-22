import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { BrowserRouter as Router } from "react-router-dom"
import { Grid, Image } from "@chakra-ui/react"
import { Link, Route } from "react-router-dom"
import "@fontsource/inter/400.css"
import img from "./StatsPreviewCardComponent/design/desktop-design.jpg"
import Routes from "./Routes"

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes />
        <Route exact path="/">
          <Grid templateColumns="repeat(3, 1fr)" gap={3}>
            <Link to="/stats-preview-card-component">
              <Image src={img} />
            </Link>
          </Grid>
        </Route>
      </Router>
    </ChakraProvider>
  )
}

export default App
