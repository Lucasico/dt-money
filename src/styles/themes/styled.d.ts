// import original module declarations
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgrond: string;
    colors: {
      blue: string;
      red: string;
      blueLight: string;
      textTitle: string;
      textBody: string;
      shape: string;
      green: string;
      inputsModal: string;
    };
  }
}
