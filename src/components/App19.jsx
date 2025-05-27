import React, { useState, useEffect } from 'react';

export default function App19() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (wickets >= 10) {
      setGameOver(true);
    }
  }, [wickets]);

  const handleRun = () => {
    if (!gameOver) {
      setRuns(runs + 1);
    }
  };

  const handleWicket = () => {
    if (!gameOver) {
      setWickets(wickets + 1);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>App19</h1>
      <h2>Assignment</h2>
      <h2>Cricket Scoreboard</h2>

      <div style={{ margin: 20 }}>
        <h1>{runs}</h1>
        <button onClick={handleRun} disabled={gameOver}>Run</button>
        <h1>{wickets}</h1>
        <button onClick={handleWicket} disabled={gameOver}>Wicket</button>
      </div>

      <div>
        {gameOver ? (
          <h3>Game Over!</h3>
        ) : (
          <>
            <h4>Well Done!</h4>
            <h4>Better Luck Next Time!</h4>
          </>
        )}
      </div>
    </div>
  );
}