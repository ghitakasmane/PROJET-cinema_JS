import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, Box } from '@material-ui/core';
import { Paper } from '../../../../../components';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3)
  },
  paper: { padding: theme.spacing(4) },
  gridContainer: {
    marginTop: theme.spacing(4)
  },
  successInfo: { margin: theme.spacing(3) },
  ignoreButton: {
    marginLeft: theme.spacing(3)
  }
}));

const convertToAlphabet = value => (value + 10).toString(36).toUpperCase();

export default function BookingInvitation(props) {
  const classes = useStyles(props);
  const {
    selectedSeats,
    sendInvitations,
    ignore,
    invitations,
    onSetInvitation,
    onDownloadPDF
  } = props;

  const notValidInvitations = !Object.keys(invitations).length;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4" align="center">
          Votre Ticket
        </Typography>
        <Typography
          className={classes.successInfo}
          variant="body1"
          align="center">
          Vous avez réservé vos places avec succès. 
        </Typography>
        <Box width={1} textAlign="center">
          <Button
            color="primary"
            variant="outlined"
            onClick={() => onDownloadPDF()}>
            Télecharger votre ticket.
          </Button>
        </Box>
        <Grid className={classes.gridContainer} container spacing={3}>
          <Grid item xs={12} container>
            
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
