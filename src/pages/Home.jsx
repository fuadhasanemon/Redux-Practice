import React from "react";
import Counter from "../components/Counter/Counter";
import Colors from "../components/Colors/Colors";
import Backround from "../components/Background/Background";
import ToDo from "../components/ToDo/ToDo";

const Home = () => {
  return (
    <div className="container my-5">
      {/* <div className="row justify-content-center mb-5">
        <Counter />
      </div>

      <div className="row justify-content-center mb-5">
        <Colors />
      </div>

      <div className="row justify-content-center mb-5">
        <Backround />
      </div> */}

      <div className="row justify-content-center">
        <ToDo />
      </div>
    </div>
  );
};

export default Home;
