import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./Routes"

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes />
      </Router>
    </ChakraProvider>
  )
}

export default App
