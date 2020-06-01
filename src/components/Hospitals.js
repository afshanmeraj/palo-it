import React, { useState, useEffect, useContext } from "react";
import AppContext from "../context/main";
import { getHopitals } from '../api';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({

  root: {
    backgroundColor: '#DCDCDC'
  },
  item: {
    minWidth: 275,
    margin: 10,
    fontSize: 14,

  },
  hospitalName: {
    fontSize: 14,
  },
  title: {
    fontSize: 18,
    padding: 10,
  },
  waitingTime: {
    fontSize: 12,
  }

});


/**
 * Hospitals component
*/
export function Hospitals() {
  const classes = useStyles();
  const [state, setState] = useContext(AppContext);
  const [hospitals, setHospitals] = useState(null);

  useEffect(() => {
    getHopitals().then((hospitals => {

      const hospitalWaitingTime = hospitals._embedded.hospitals.map(hospital => ({ ...hospital, userWaitingTime: getWaitingTime(hospital) }));
      hospitalWaitingTime.sort((a, b) => a.userWaitingTime - b.userWaitingTime);
      setHospitals(hospitalWaitingTime);
    }))
  }, []);

  const getWaitingTime = (hospital) => {
    return hospital.waitingList.filter(list => list.levelOfPain === state.userPainLevel).map(filteredName => (
      filteredName.averageProcessTime * filteredName.patientCount
    ));
  }

  return (
    <div style={{ width: '40%' }}>
      <Box className={classes.root} display="flex" flexDirection="column" p={1} m={1} bgcolor="background.paper">
        <div className={classes.title}>
          <Typography variant="h6">
            Our Suggested Hospitals
        </Typography>
        </div>
        {hospitals && hospitals.map(hospital => (
          <Card className={classes.item} key={hospital.id}>
            <CardContent>
              <Typography className={classes.hospitalName}>
                {hospital.name}
              </Typography>
              <div className={classes.waitingTime}>
                <Typography className={classes.waitingTime}>Waiting time: {hospital.userWaitingTime}</Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
}