import useStopWatch from "../hooks/useStopWatch";

const Buttons = () => {
  const {
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useStopWatch();

  return (
    <div className="buttons">
      {!isActive && !isPaused ? (
        <button onClick={handleStart}>Start</button>
      ) : isPaused ? (
        <button onClick={handlePause}>Pause</button>
      ) : (
        <button onClick={handleResume}>Resume</button>
      )}
      <button onClick={handleReset} disabled={!isActive}>
        Reset
      </button>
    </div>
  );
};

export default Buttons;
