import React, { useContext } from "react";
import AppContext from "../context/main";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import { IconButton } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { saveUserDetails } from '../api';



/**
 * Dislay console component
*/
export function PainLevel() {
  const [state, setState] = useContext(AppContext);

  const selectPainLevel = (id) => {
    setState(prevState => ({
      ...prevState,
      userPainLevel: id
    }));

    const userDetails = {
      "illness": state.userIllness,
      "pain_level": id,
    }

    saveUserDetails(userDetails);
  }
  return (
    <div style={{ width: '40%' }}>
      <div style={{ margin: '1em', padding: '1em' }} >
        <Typography variant="h5" gutterBottom>
          Select severity level
      </Typography>
      </div>
      <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
        <IconButton onClick={e => selectPainLevel(0)}>
          <InsertEmoticonIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={e => selectPainLevel(1)}>
          <SentimentSatisfiedIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={e => selectPainLevel(2)}>
          <SentimentVeryDissatisfiedIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={e => selectPainLevel(3)}>
          <MoodBadIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={e => selectPainLevel(4)}>
          <SentimentDissatisfiedIcon fontSize="large" />
        </IconButton>
      </Box>
    </div>
  );
};
