import { Route, Switch } from "react-router-dom"
import StatsPreviewCardComponent from "./StatsPreviewCardComponent/StatsPreviewCardComponent"

function Routes() {
  return (
    <Switch>
      <Route path="/stats-preview-card-component">
        <StatsPreviewCardComponent />
      </Route>
    </Switch>
  )
}

export default Routes
