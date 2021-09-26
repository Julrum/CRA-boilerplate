import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      header1: string;
      header2: string;
      body: string;
    };

    colors: {
      bold: string;
      main: string;
      sub: string;
      placeholder: string;
      white: string;
      background: string;
      bgDivider: string;
      disabledbg: string;
      disabledborder: string;
      boxShawdow: string;
      primary: string;
      primaryDarken: string;
      primaryMoreDarken: string;
      primaryLighten: string;
      primaryTransparent: string;
      secondary: string;
      danger: string;
      warning: string;
      success: string;
    };
  }
}
