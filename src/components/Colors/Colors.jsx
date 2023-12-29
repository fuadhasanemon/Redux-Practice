import React from "react";
import "./colors.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  colorBlue,
  colorGreen,
  colorOrange,
  colorRed
} from "../../redux/color/colorActions";

const Colors = () => {
  const { color } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div className="col-md-5">
      <div className="card">
        <div className="card-body">
          <h2
            className="text-center py-5 text__bg"
            style={{ backgroundColor: color }}
          >
            BG COLORS
          </h2>
          <hr />
          <div className="text-center py-5">
            <button
              className="btn btn-danger me-1"
              onClick={() => dispatch(colorRed())}
            >
              RED
            </button>
            <button
              className="btn btn-success me-1"
              onClick={() => dispatch(colorGreen())}
            >
              GREEN
            </button>
            <button
              className="btn btn-primary me-1"
              onClick={() => dispatch(colorBlue())}
            >
              BLUE
            </button>
            <button
              className="btn btn-warning me-1"
              onClick={() => dispatch(colorOrange())}
            >
              ORANGE
            </button>
            <button
              className="btn btn-dark"
              onClick={() => dispatch({ type: "GOLD" })}
            >
              GOLD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
