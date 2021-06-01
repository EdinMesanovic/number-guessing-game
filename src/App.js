import "./Script";
import { check, clear, reset, newGame } from "./Script";

const App = () => {
  return (
    <div className='containter'>
      <h1 className='game-name'>NUMBER GUESSING GAME</h1> <hr />
      <div className='game'>
        <label>Enter a number:</label>
        <br />
        <input className='input-field' type='text'></input>
        <div className='btns'>
          <button className='check' onClick={check}>
            Submit number
          </button>
          <button className='clear' onClick={clear}>
            Clear
          </button>
          <button className='reset' onClick={reset}>
            Reset
          </button>
        </div>
        <hr />
        <p>
          High score:<span className='high-score'>0</span>
        </p>
        <p className='attempts'>
          Remaining attempts: <span className='score'>10</span>
        </p>
        <p className='guesses'>
          Previous guesses: <span className='guesses-span'>0</span>
        </p>
        <p className='message hidden'></p>

        <button className='start-btn hidden' onClick={newGame}>
          Start new game
        </button>
      </div>
    </div>
  );
};

export default App;
