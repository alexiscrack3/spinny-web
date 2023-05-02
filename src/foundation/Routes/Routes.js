import { Routes as Switch, Route } from "react-router-dom";
import {
  SignIn,
  SignUp,
  About,
  Home,
  Players,
  NewPlayer,
  NotFound,
} from "../../pages";

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
    path: "/users/sign_in",
    element: SignIn,
  },
  {
    path: "/users/sign_up",
    element: SignUp,
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
