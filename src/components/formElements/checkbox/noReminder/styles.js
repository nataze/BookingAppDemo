const styles = ({ typography, palette, spacing }) => ({
  container: {
    fontSize: typography.smallFontSize,
    paddingTop: 15 * spacing.unit,
    marginBottom: 20 * spacing.unit
  },
  formControl: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: palette.background.form,
    paddingTop: 13 * spacing.unit
  },
  label: {
    textAlign: "center"
  },
  formGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15 * spacing.unit
  },
  checkbox: {
    paddingRight: 8 * spacing.unit,
    paddingLeft: 8 * spacing.unit
  },
  root: {
    color: palette.text.main,
    borderWidth: 1 * spacing.unit,
    "&$checked": {
      color: palette.text.main
    },
    backgroundColor: palette.background.content,
    fontSize: typography.smallerFontSize
  },
  checked: {},
  formLabel: {
    fontSize: typography.normalFontSize,
    color: palette.text.main,
    fontWeight: "bold"
  },
  noReminder: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 10 * spacing.unit
  },
  or: {
    backgroundColor: palette.secondary.main,
    color: palette.text.white,
    width: 35 * spacing.unit,
    maxWidth: 35 * spacing.unit,
    paddingTop: 3 * spacing.unit,
    paddingBottom: 3 * spacing.unit,
    paddingLeft: 8 * spacing.unit,
    paddingRight: 8 * spacing.unit,
    borderRadius: 5 * spacing.unit,
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: 10 * spacing.unit
  },
  error: {
    marginLeft: 20 * spacing.unit
  }
});

export default styles;
