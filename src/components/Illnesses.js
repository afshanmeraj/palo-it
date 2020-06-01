import React, { useState, useEffect, useContext } from "react";
import AppContext from "../context/main";
import { getIllnesses } from '../api';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


/**
 * Illnesses component
*/

const useStyles = makeStyles({

  root: {
    backgroundColor: '#DCDCDC'
  },
  item: {
    minWidth: 275,
    display: "flex",
    justifyContent: "space-between",
    margin: 10,
    fontSize: 14,

  },
  illnessName: {
    fontSize: 14,
  },
  title: {
    fontSize: 18,
    padding: 10,
  },

});


export function Illnesses() {
  const classes = useStyles();
  const [state, setState] = useContext(AppContext);
  const [illnesses, setIllnesses] = useState(null);

  const selectUserIllness = (id) => {
    setState(prevState => ({
      ...prevState,
      userIllness: id
    }));
  }
  useEffect(() => {
    getIllnesses().then((illnesses => {
      setIllnesses(illnesses);
    }));

  }, []);
  return (
    <div style={{ width: '40%' }} m={1}>
      <Box className={classes.root} display="flex" flexDirection="column" p={1} m={1} bgcolor="background.paper">
        <div className={classes.title}>
          <Typography variant="h6">
            Select an illness
        </Typography>
        </div>
        {illnesses && illnesses._embedded.illnesses.map(illness => (
          <Card className={classes.item} key={illness.illness.id}>
            <CardContent>
              <Typography className={classes.illnessName}>
                {illness.illness.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={e => selectUserIllness(illness.illness.id)}><ArrowForwardIosIcon></ArrowForwardIosIcon></Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
}