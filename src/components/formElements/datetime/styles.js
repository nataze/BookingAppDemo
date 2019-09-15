const styles = ({ palette, spacing, typography }) => ({
  container: {
    marginBottom: 10 * spacing.unit
  },
  dateContainer: {
    display: "flex",
    flexDirection: "row"
  },
  date: {
    maxWidth: 100 * spacing.unit
  },
  calendarContainer: {
    backgroundColor: palette.background.form,
    paddingLeft: 10 * spacing.unit,
    paddingRight: 10 * spacing.unit
  },
  showTimeSlots: {
    marginTop: 10 * spacing.unit
  },
  label: {
    marginBottom: 5 * spacing.unit,
    fontSize: typography.smallFontSize,
    textAlign: "center"
  },
  timeLabel: {
    marginTop: 10 * spacing.unit,
    marginBottom: 10 * spacing.unit,
    fontSize: typography.smallFontSize,
    textAlign: "center"
  },
  timeSlotsContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 12 * spacing.unit,
    paddingBottom: 8 * spacing.unit
  },
  timeSlotsInnerContainer: {
    maxWidth: "90%",
    maxHeight: 150 * spacing.unit,
    overflowY: "auto",
    display: "flex",
    height: "auto",
    flexFlow: "row wrap",
    justifyContent: "space-evenly"
  },
  timeSlot: {
    backgroundColor: palette.background.select,
    color: palette.text.white,
    fontSize: typography.smallFontSize,
    width: 80 * spacing.unit,
    maxWidth: 80 * spacing.unit,
    marginBottom: 10 * spacing.unit,
    overflowX: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    paddingTop: 3 * spacing.unit,
    paddingBottom: 3 * spacing.unit,
    paddingLeft: 7 * spacing.unit,
    paddingRight: 7 * spacing.unit,
    borderRadius: 5 * spacing.unit,
    cursor: "pointer",
    textAlign: "center",
    "&:hover": {
      backgroundColor: palette.text.white,
      color: palette.text.main
    }
  },
  selectedTimeSlot: {
    backgroundColor: palette.text.white,
    color: palette.text.main,
    border: `1px solid ${palette.background.select}`,
    boxShadow: `0 0 1px ${palette.background.select}`
  },
  timeContainer: {
    display: "flex",
    flexDirection: "column"
  },
  noTimeSlot: {
    color: palette.secondary.main
  }
});

export default styles;
