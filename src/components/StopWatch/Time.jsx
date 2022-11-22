import useStopWatch from "../../hooks/useStopWatch";

const Time = () => {
  const { timer } = useStopWatch();

  return (
    <div className="numbers">
      <span>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:</span>
      <span> {("0" + (timer % 60)).slice(-2)}</span>
    </div>
  );
};

export default Time;
