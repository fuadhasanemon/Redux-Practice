import React from "react";
import "./counter.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  counterDesc,
  counterInc,
  counterOt,
  counterRandom,
  counterReset
} from "../../redux/counter/counterActions";

const Counter = () => {
  const { counter } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="col-md-5">
      <div className="card">
        <div className="card-body">
          <h1 className="text-center py-5">{counter}</h1>
          <hr />
          <div className="text-center py-5">
            <button
              className="btn btn-primary me-1"
              onClick={() => dispatch(counterInc())}
            >
              INC
            </button>
            <button
              className="btn btn-danger me-1"
              onClick={() => dispatch(counterDesc())}
            >
              DESC
            </button>
            <button
              className="btn btn-warning me-1"
              onClick={() => dispatch(counterReset())}
            >
              Reset
            </button>
            <button
              className="btn btn-info me-1"
              onClick={() => dispatch(counterOt())}
            >
              Osthir reset
            </button>
            <button
              className="btn btn-success"
              onClick={() =>
                dispatch(counterRandom(Math.floor(Math.random() * 1000)))
              }
            >
              Random
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
