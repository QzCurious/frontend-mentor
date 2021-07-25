import { Route, Switch } from "react-router-dom"
import Gallery from "./Pages/Gallery"
import ProfileCardComponent from "./ProfileCardComponent/ProfileCardComponent"
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
      <Route path="/profile-card-component">
        <ProfileCardComponent />
      </Route>
    </Switch>
  )
}

export default Routes
