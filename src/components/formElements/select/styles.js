const styles = ({ spacing, typography, palette }) => ({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  formControl: {
    marginBottom: 15 * spacing.unit,
    marginRight: 20 * spacing.unit,
    paddingLeft: 20 * spacing.unit,
    paddingRight: 20 * spacing.unit
  },
  label: {
    marginBottom: 5 * spacing.unit,
    fontSize: typography.smallerFontSize
  },
  paper: {
    display: "flex",
    minWidth: 83 * spacing.unit
  },
  valueContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    cursor: "pointer",
    "&:hover": {
      border: `1px solid ${palette.secondary.light}`,
      boxShadow: `0 0 1px ${palette.secondary.light}`
    }
  },
  value: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    paddingLeft: 8 * spacing.unit,
    color: palette.text.main,
    fontWeight: "bold"
  },
  icon: {
    width: 15 * spacing.unit,
    height: 15 * spacing.unit,
    color: palette.secondary.light
  },
  timeIcon: {
    width: 18 * spacing.unit,
    height: 18 * spacing.unit,
    color: palette.secondary.light
  },
  placeholder: {
    marginLeft: 3 * spacing.unit
    // marginTop: 4 * spacing.unit
  },
  employeeName: {
    marginLeft: 7 * spacing.unit,
    marginTop: 4 * spacing.unit
  },
  selectOption: {
    fontSize: typography.normalFontSize,
    fontWeight: "bold",
    color: palette.text.main
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 8 * spacing.unit,
    marginBottom: 8 * spacing.unit,
    width: "auto",
    height: 20 * spacing.unit,
    borderLeft: "1px solid lightgrey"
  },
  expandIcon: {
    width: 20 * spacing.unit,
    height: 20 * spacing.unit
  },
  menu: {
    minWidth: 400 * spacing.unit,
    width: "auto",
    maxHeight: 600 * spacing.unit
  },
  menuItem: {
    display: "flex",
    width: "100%",
    fontWeight: "bold",
    fontSize: typography.normalFontSize,
    // "&:hover": {
    //   backgroundColor: palette.secondary.main,
    //   color: palette.text.alternate
    // },
    paddingLeft: 10 * spacing.unit,
    paddingRight: 10 * spacing.unit,
    color: palette.text.main
  },
  noOptions: {
    display: "flex",
    width: "100%",
    paddingLeft: 10 * spacing.unit,
    paddingRight: 10 * spacing.unit,
    fontWeight: "normal",
    fontSize: typography.normalFontSize,
    color: palette.text.main
  }
});

export default styles;
