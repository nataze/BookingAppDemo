import { createMuiTheme } from "material-ui-next/styles";

const font = ["Open Sans", "sans-serif", "Roboto"];

const muiTheme = createMuiTheme({
  typography: {
    fontFamily: font.join(","),
    useNextVariants: true,
    fontSize9: 9,
    smallerFontSize: 10,
    smallFontSize: 11,
    normalFontSize: 12,
    largeFontSize: 13,
    largerFontSize: 14
  },
  spacing: {
    unit: 1
  },
  palette: {
    primary: {
      main: "#6dc7c6",
      light: "#edf7f7"
    },
    secondary: {
      light: "#f5c1c1",
      main: "#fe999e"
    },
    text: {
      main: "#478181",
      white: "#ffffff",
      darkGrey: "#696969",
      lightgrey: "#bfbfbf",
      info: "#547f7f"
    },
    background: {
      main: "#edf7f7",
      content: "#f9f9f8",
      form: "#FDFAFA",
      select: "#82c5c5",
      alternate: "#fcf0f1",
      info: "#fcf4f4",
      close: "#527e7e"
    },
    status: {
      green: "#88ebc0",
      red: "#ff2323"
    },
    danger: "#d9534f"
  },
  overrides: {
    MuiTextField: {
      color: "#478181"
    }
  }
});

export default muiTheme;
