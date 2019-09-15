const styles = ({ spacing, palette, typography, breakpoints }) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: 600 * spacing.unit,
    minWidth: 320 * spacing.unit,
    height: "auto",
    width: "auto",
    maxHeight: 750 * spacing.unit,
    maxWidth: 330 * spacing.unit,
    fontFamily: typography.fontFamily,
    justifyContent: "space-between",
    [breakpoints.down("xs")]: {
      minWidth: 0,
      overflowX: "hidden"
    }
  },
  navigation: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    minHeight: 40 * spacing.unit,
    maxHeight: 40 * spacing.unit,
    backgroundColor: palette.primary.main,
    color: palette.text.white,
    fontWeight: "bolder",
    cursor: "pointer",
    paddingTop: 8 * spacing.unit,
    "&:hover": {
      opacity: 0.75
    }
  },
  header: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    minHeight: 40 * spacing.unit,
    maxHeight: 40 * spacing.unit,
    backgroundColor: palette.primary.main,
    color: palette.text.white,
    fontWeight: "bolder",
    paddingTop: 10 * spacing.unit
  },
  content: {
    flexGrow: 1,
    fontSize: typography.normalFontSize
  },
  step: {
    fontSize: typography.largeFontSize,
    color: palette.text.main,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 12 * spacing.unit
  },
  form: {
    paddingTop: 15 * spacing.unit,
    color: palette.text.darkGrey,
    fontWeight: "bold"
  }
});

export default styles;
