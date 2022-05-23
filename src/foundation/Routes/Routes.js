import { Routes as Switch, Route } from "react-router-dom";
import { Home } from "../../containers/Home";
import { About } from "../../containers/About";
import { Players } from "../../containers/Players";
import { NotFound } from "../../containers/NotFound";

const ROUTE_LIST = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/about",
    element: About,
  },
  {
    path: "/players",
    element: Players,
  }
];

export default function Routes() {
  return (
    <Switch>
        {ROUTE_LIST.map(route =>
          <Route path={route.path} element={<route.element />} />
        )}
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
}
