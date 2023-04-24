import { prepareRoutes } from "@curi/router";

import { AuthPage } from "../../pages/Auth";
import NotFound from "../../pages/NotFound";
import { TasksPage } from "../../pages/Tasks";

export enum Pages {
  NotFound = "NotFound",
  Tasks = "Tasks",
  Home = "Home",
}

export default prepareRoutes([
  {
    name: Pages.Home,
    path: "",
    respond() {
      return {
        body: AuthPage,
      };
    },
  },
  {
    name: Pages.Tasks,
    path: "tasks",
    respond() {
      return {
        body: TasksPage,
      };
    },
  },
  {
    name: Pages.NotFound,
    path: "(.*)",
    respond() {
      return {
        body: NotFound,
      };
    },
  },
]);
