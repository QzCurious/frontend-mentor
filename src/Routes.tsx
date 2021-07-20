import { Switch } from "@chakra-ui/react"
import { Route } from "react-router-dom"
import StatsPrevieCardComponent from "./StatsPrevieCardComponent/StatsPrevieCardComponent"

function Routes() {
  return (
    <Switch>
      <Route path="/stats-preview-card-component">
        <StatsPrevieCardComponent />
      </Route>
    </Switch>
  )
}

export default Routes
