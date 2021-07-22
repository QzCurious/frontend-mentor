import { Switch, Route } from "react-router-dom"
import StatsPrevieCardComponent from "./StatsPrevieCardComponent/StatsPrevieCardComponent"
import TipCalculatorApp from "./TipCalculatorApp/TipCalculatorApp"

function Routes() {
  return (
    <Switch>
      <Route path="/stats-preview-card-component">
        <StatsPrevieCardComponent />
      </Route>
      <Route path="/tip-calculator-app">
        <TipCalculatorApp />
      </Route>
    </Switch>
  )
}

export default Routes
