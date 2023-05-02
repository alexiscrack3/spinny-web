import { Routes as Switch, Route } from "react-router-dom";
import { About, Home, Players, NewPlayer, NotFound } from "../../pages";

const ROUTE_LIST = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/home",
    element: Home,
  },
  {
    path: "/about",
    element: About,
  },
  {
    path: "/admin/players",
    element: Players,
  },
  {
    path: "/admin/players/new",
    element: NewPlayer,
  },
];

export default function Routes() {
  return (
    <Switch>
      {ROUTE_LIST.map((route, index) => (
        <Route key={index} path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
}
