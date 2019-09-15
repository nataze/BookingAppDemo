import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";

import Loading from "../components/common/loading";

const CalendarPage = lazy(() => import("../pages/calendar/CalendarPage"));

const Components = {
  CalendarPage
};

const AsyncComponent = props => {
  const { componentName } = props;

  const Component = withRouter(Components[componentName]);
  return <Component {...props} />;
};

const Routes = () => (
  <div>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <AsyncComponent componentName="CalendarPage" {...props} />
            )}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </div>
);

export default Routes;
