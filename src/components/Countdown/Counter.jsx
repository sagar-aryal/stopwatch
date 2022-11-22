const Counter = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <h1>Countdown Timer</h1>
      <div className="show-counter">
        <span>{days} Days </span>
        <span>{hours} Hours </span>
        <span>{minutes} Minutes </span>
        <span>{seconds} Seconds </span>
      </div>
    </>
  );
};

export default Counter;
