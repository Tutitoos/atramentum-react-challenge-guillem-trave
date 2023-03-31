import globals from "@/styles/globals/globals";
import "styled-components";

type Globals = typeof globals;

declare module "styled-components" {
  export interface DefaultTheme extends Globals {}
}
