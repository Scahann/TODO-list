import { createRouterComponent } from "@curi/react-dom";
import { createRouter, title } from "@curi/router";
import { Response } from "@curi/types";
import { browser } from "@hickory/browser";

import routes from "./routes";

export const PROJECT_NAME = "TODO list";

export interface PageProps {
  response: Response;
}

const router = createRouter(browser, routes, {
  sideEffects: [
    title(({ response }) => {
      return response.meta?.title ? `${response.meta.title} | ${PROJECT_NAME}` : PROJECT_NAME;
    }),
  ],
});
export default createRouterComponent(router);
