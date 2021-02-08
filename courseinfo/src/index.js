import React from "react";
import ReactDOM from "react-dom";

const Title = ({ course }) => {
  return <h1>{course}</h1>;
};

const Paragrahp = ({ part, exercise }) => {
  return <p>{part + " " + exercise}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Title course={course} />
      <Paragrahp part={part1} exercise={exercises1} />
      <Paragrahp part={part2} exercise={exercises2} />
      <Paragrahp part={part3} exercise={exercises3} />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
