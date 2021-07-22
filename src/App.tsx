import { Grid, Image } from "@chakra-ui/react"
import { Link, Route } from "react-router-dom"
import Routes from "./Routes"
import img from "./StatsPrevieCardComponent/design/desktop-design.jpg"
function App() {
  return (
    <>
      <Route exact path="/">
        <Grid templateColumns="repeat(3, 1fr)" gap={3}>
          <Link to="/stats-preview-card-component">
            <Image src={img} />
          </Link>
        </Grid>
      </Route>
      <Routes />
    </>
  )
}

export default App
