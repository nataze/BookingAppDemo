import React from "react";

import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

class SelectField extends React.Component {
  constructor(props) {
    super(props);

    this.state = { anchorEl: null, selected: null };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSelect = option => {
    const selected = option;

    this.setState({ selected });

    // send selected to form
    this.props.onChange(option, this.props.name);

    this.handleClose();
  };

  render() {
    const {
      labelName,
      selectOptions,
      name,
      error,
      classes,
      placeholder,
      fullWidth
    } = this.props;

    const { anchorEl } = this.state;

    const open = Boolean(anchorEl);

    if (!selectOptions.length) {
      return null;
    }

    return (
      <div className={classes.container}>
        <FormControl
          fullWidth={fullWidth || true}
          className={classes.formControl}
          error={error && error.isPresent}
        >
          <div className={classes.label}>{labelName}</div>
          <Paper className={classes.paper}>
            <div className={classes.valueContainer} onClick={this.handleClick}>
              <div className={classes.value}>{placeholder}</div>

              <div className={classes.iconContainer}>
                <ExpandMoreIcon className={classes.expandIcon} />
              </div>
            </div>
            <Menu
              id={`select-menu-${name}`}
              className={classes.menu}
              anchorEl={anchorEl}
              open={open}
              onClose={this.handleClose}
              PaperProps={{
                style: {
                  maxHeight: 300,
                  minWidth: 70
                }
              }}
            >
              {selectOptions &&
                selectOptions.map(option => (
                  <MenuItem
                    key={option.value}
                    className={classes.menuItem}
                    onClick={() => this.handleSelect(option)}
                  >
                    {option.name}
                  </MenuItem>
                ))}

              {!selectOptions ||
                (!selectOptions.length && (
                  <MenuItem className={classes.noOptions}>No Options.</MenuItem>
                ))}
            </Menu>
          </Paper>
          <FormHelperText>{error && error.content}</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SelectField);
