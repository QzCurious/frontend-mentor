import { Route, Switch } from "react-router-dom"
import Gallery from "./Pages/Gallery"
import StatsPreviewCardComponent from "./StatsPreviewCardComponent/StatsPreviewCardComponent"

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Gallery />
      </Route>
      <Route path="/stats-preview-card-component">
        <StatsPreviewCardComponent />
      </Route>
    </Switch>
  )
}

export default Routes
