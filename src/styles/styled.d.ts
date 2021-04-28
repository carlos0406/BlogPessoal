import "styled-components";
import dark from "./themes/dark";

export type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends dark {}
}
