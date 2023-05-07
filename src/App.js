import { useState } from 'react';
import './App.css';
import Game from './Game';
import Start from './Start';
import Finish from './Finish';

const GAME_STATUS = {
  notStarted: 'not started',
  inProgress: 'in progress',
  finished: 'finished',
};

function App() {
  const [status, setStatus] = useState('not started');

  return (
    <div className="App">
      {status === GAME_STATUS.notStarted &&
        <Start startGame={() => setStatus(GAME_STATUS.inProgress)} />
      }

      {status === GAME_STATUS.inProgress &&
        <Game finishGame={() => setStatus(GAME_STATUS.finished)} />
      }

      {status === GAME_STATUS.finished &&
        <Finish restartGame={() => setStatus(GAME_STATUS.notStarted)} />
      }
    </div>
  );
}

export default App;
