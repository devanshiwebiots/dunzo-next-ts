import React from "react";
import { CountdownRenderProps } from "react-countdown";

const CountdownRenderer: React.FC<CountdownRenderProps> = ({ days, hours, minutes, seconds }) => {
  return (
      <ul>
        <li>
          <h5>{days}</h5>
          <span>Days</span>
        </li>
        <li>
          <h5>{hours}</h5>
          <span>Hours</span>
        </li>
        <li>
          <h5>{minutes}</h5>
          <span>Min</span>
        </li>
        <li>
          <h5>{seconds}</h5>
          <span>Sec</span>
        </li>
      </ul>
  );
};

export default CountdownRenderer;
