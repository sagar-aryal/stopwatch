import Buttons from "./Buttons";
import Time from "./Time";

const StopWatch = () => {
  return (
    <div className="stopwatch">
      <h1>Stop Watch</h1>
      <Time />
      <Buttons />
    </div>
  );
};

export default StopWatch;
