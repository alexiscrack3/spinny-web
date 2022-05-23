import { Routes as Switch, Route } from "react-router-dom";
import { About, Home, Players, NotFound } from "../../pages";

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
  },
];

export default function Routes() {
  return (
    <Switch>
      {ROUTE_LIST.map((route) => (
        <Route path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
}
