import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  row: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  seat: {
    cursor: 'pointer',
    color: 'rgba(255,255,255,0.7)',
    borderRadius: 2,
    padding: theme.spacing(2),
    margin: theme.spacing(0.5),
    fontWeight: 600,
    '&:hover': {
      background: 'rgb(105, 4, 11)'
    }
  },
  seatInfoContainer: {
    width: '50%',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#eee'
  },

  seatInfo: { marginRight: theme.spacing(2) },

  seatInfoLabel: {
    marginRight: theme.spacing(1),
    display: 'inline-block',
    width: 10,
    height: 10
  },

  [theme.breakpoints.down('sm')]: {
    seat: { padding: theme.spacing(1.2), margin: theme.spacing(0.5) },
    seatInfoContainer: { width: '100%', display: 'block' },
    seatInfo: { marginTop: theme.spacing(2) }
  }
}));

export default function BookingSeats(props) {
  const classes = useStyles(props);
  const { seats, onSelectSeat } = props;

  return (
    <Fragment>
      <Box width={1} pt={15}>
        {seats.length > 0 &&
          seats.map((seatRows, indexRow) => (
            <div key={indexRow} className={classes.row}>
              {seatRows.map((seat, index) => (
                <Box
                  key={`seat-${index}`}
                  onClick={() => onSelectSeat(indexRow, index)}
                  className={classes.seat}
                  bgcolor={
                    seat === 1
                      ? 'rgb(16, 17, 18)'
                      : seat === 2
                      ? 'rgb(105, 4, 11)'
                      : seat === 3
                      ? 'rgb(181, 58, 58)'
                      : 'rgb(181, 58, 58)'
                  }>
                  {index + 1}
                </Box>
              ))}
            </div>
          ))}
      </Box>
      <Box width={1} mt={10}>
        <div className={classes.seatInfoContainer}>
          <div className={classes.seatInfo}>
            <div
              className={classes.seatInfoLabel}
              style={{ background: 'rgb(181, 58, 58)' }}></div>
            Chaises disponibles
          </div>
          <div className={classes.seatInfo}>
            <div
              className={classes.seatInfoLabel}
              style={{ background: 'rgb(16, 17, 18)' }}></div>
            Chaises réservées
          </div>
          <div className={classes.seatInfo}>
            <div
              className={classes.seatInfoLabel}
              style={{ background: 'rgb(105, 4, 11)' }}></div>
            Chaises sélectionnées
          </div>
          <div className={classes.seatInfo}>
            {/* <div
              className={classes.seatInfoLabel}
              style={{ background: 'rgb(14, 151, 218)' }}></div> */}
            
          </div>
        </div>
      </Box>
    </Fragment>
  );
}
