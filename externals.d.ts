declare module "*.less" {
  const resource: { [key: string]: string };
  export = resource;
}

declare module "*.svg" {
  import React from "react";

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
