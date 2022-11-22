import useCountdown from "../../hooks/useCountdown";
import Counter from "./Counter";
import Message from "./Message";

const CountdownTimer = () => {
  const targetTime = "Nov 22 2022 23:47:00";

  const [days, hours, minutes, seconds] = useCountdown(targetTime);

  if (days + hours + minutes + seconds <= 0) {
    return <Message />;
  } else {
    return (
      <Counter days={days} hours={hours} minutes={minutes} seconds={seconds} />
    );
  }
};

export default CountdownTimer;
