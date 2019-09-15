const styles = ({ typography, palette, spacing: { unit } }) => ({
  container: {
    marginBottom: 15 * unit,
    marginRight: 20 * unit,
    paddingLeft: 20 * unit,
    paddingRight: 20 * unit
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      border: `1px solid ${palette.secondary.light}`,
      boxShadow: `0 0 1px ${palette.secondary.light}`
    }
  },
  inputBase: {
    width: "100%"
  },
  input: {
    fontWeight: "bold",
    color: palette.text.main,
    fontSize: typography.normalFontSize
  },
  inputRoot: {},
  label: {
    marginBottom: 5 * unit,
    fontSize: typography.smallerFontSize
  }
});

export default styles;
