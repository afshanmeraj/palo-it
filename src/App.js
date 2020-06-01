import React, {useState} from 'react';
import './App.css';
import { Illnesses } from './components/Illnesses'
import { PainLevel } from './components/PainLevel'
import { Hospitals } from './components/Hospitals'
import AppContext from "./context/main";
import Box from '@material-ui/core/Box';


function App() {

  let [state, setState] = useState({
    userPainLevel:'',
    userIllness: '',
    
  });

  return (
    <AppContext.Provider value={[state, setState]}>
    <div style={{ width: '100%' }}>
      <Box display="flex" flexDirection="row" p={1} m={1}>
        <Illnesses></Illnesses>
        {state.userIllness && <PainLevel></PainLevel>}
        {state.userPainLevel && <Hospitals></Hospitals>}
      </Box>
    </div>
    </AppContext.Provider>
  );
}

export default App;
