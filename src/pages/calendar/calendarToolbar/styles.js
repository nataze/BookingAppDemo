const styles = ({ spacing, palette, typography, breakpoints }) => ({
  container: {
    display: "flex",
    justifyContent: "space-between"
  },
  button: {
    "&:hover": {
      backgroundColor: `${palette.secondary.main} !important`,
      color: `${palette.text.white} !important`,
      opacity: "0.8 !important",
      cursor: "pointer !important"
    },
    "&:active": {
      backgroundColor: palette.secondary.main
    },
    "&:focus": {
      outline: 0,
      backgroundColor: palette.secondary.main
    }
  },
  rightActions: {
    display: "flex",
    [breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  month: {
    fontWeight: "bold",
    color: palette.text.main
  },
  labelContainer: {
    display: "flex",
    justifyContent: "center"
  },
  leftArrow: {
    marginRight: 10 * spacing.unit,
    cursor: "pointer"
  },
  rightArrow: {
    marginLeft: 10 * spacing.unit,
    cursor: "pointer"
  },
  addIcon: {
    display: "inline-block",
    textAlign: "center"
  },
  buttonLabel: {
    fontSize: "smaller",
    maxHeight: 25 * spacing.unit,
    minHeight: 25 * spacing.unit,
    paddingTop: 5 * spacing.unit,
    paddingLeft: 10 * spacing.unit,
    paddingRight: 10 * spacing.unit
  },
  buttonRoot: {
    maxHeight: 25 * spacing.unit,
    minHeight: 25 * spacing.unit,
    backgroundColor: "white"
  },
  buttonLabelRight: {
    fontSize: "smaller",
    maxHeight: 25 * spacing.unit,
    minHeight: 25 * spacing.unit,
    paddingLeft: 10 * spacing.unit,
    paddingRight: 10 * spacing.unit
  },
  iconsEmployee: {
    height: 18 * spacing.unit,
    width: 18 * spacing.unit
  },
  employeeName: {
    marginLeft: 3 * spacing.unit,
    marginRight: 3 * spacing.unit
  },
  employeeListName: {
    fontSize: typography.smallFontSize,
    marginLeft: 5 * spacing.unit
  },
  menuItem: {
    "&:hover": {
      backgroundColor: palette.secondary.main,
      color: palette.text.white
    }
  }
});

export default styles;
