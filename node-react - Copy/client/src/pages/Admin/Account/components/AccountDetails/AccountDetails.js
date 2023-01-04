import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Button, TextField } from '@material-ui/core';
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter
} from '../../../../../components';

// Component styles
import styles from './styles';

class Account extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    password: ''
  };

  componentDidMount() {
    const { name, email, phone } = this.props.user;
    this.setState({ name, email, phone });
  }

  handleFieldChange = (field, value) => {
    const newState = { ...this.state };
    newState[field] = value;
    this.setState(newState);
  };

  onUpdateUser = async () => {
    try {
      const { name, email, phone, password } = this.state;
      const token = localStorage.getItem('jwtToken');
      let body = { name, email, phone };
      if (password) body = { ...body, password };
      const url = '/users/me';
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      if (response.ok) {
        const user = await response.json();
        if (this.props.file) this.props.uploadImage(user._id, this.props.file);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { classes, className } = this.props;
    const { name, phone, email, password } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet className={rootClassName}>
        <PortletHeader>
          <PortletLabel
            subtitle=""
            title="Profile"
          />
        </PortletHeader>
        <PortletContent noPadding>
          <form autoComplete="off" noValidate>
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                helperText="Spécifiez le nom complet"
                label="Nom complet"
                margin="dense"
                required
                value={name}
                variant="outlined"
                onChange={event =>
                  this.handleFieldChange('name', event.target.value)
                }
              />
              <TextField
                className={classes.textField}
                label="Addresse Email "
                margin="dense"
                required
                value={email}
                variant="outlined"
                onChange={event =>
                  this.handleFieldChange('Addresse Email', event.target.value)
                }
              />
            </div>
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="Télephone"
                margin="dense"
                type="number"
                value={phone}
                variant="outlined"
                onChange={event =>
                  this.handleFieldChange('Télephone', event.target.value)
                }
              />
              <TextField
                className={classes.textField}
                label="Mot de passe"
                margin="dense"
                type="password"
                value={password}
                variant="outlined"
                onChange={event =>
                  this.handleFieldChange('Mot de passe', event.target.value)
                }
              />
            </div>
          </form>
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
          <Button
            color="primary"
            variant="contained"
            onClick={this.onUpdateUser}>
            Sauvegarder
          </Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

Account.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default withStyles(styles)(Account);
