import React from "react";
import "./background.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeBgImg } from "../../redux/background/backgroundActions";

const Background = () => {
  const { background } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="col-md-5">
      <div className="card">
        <div className="card-body">
          <img className="cardImage" src={background} alt="" />

          <hr />

          <select
            name=""
            id=""
            className="form-control"
            onChange={e => dispatch(changeBgImg(e.target.value))}
          >
            <option value="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
              Flower
            </option>
            <option value="https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-little-girl-baby-girl-hd-wallpapers-indian-baby-image_2948600.jpg">
              Baby
            </option>
            <option value="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg">
              Food
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Background;
