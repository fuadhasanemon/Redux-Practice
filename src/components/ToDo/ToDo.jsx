import React, { useEffect, useState } from "react";
import "./toDo.scss";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, deleteTodo, getTodos } from "../../redux/todo/todoActions";

const ToDo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const { todos } = useSelector(state => state.todo);

  const handleTodoAdd = () => {
    dispatch(addTodos(todo));
  };

  const handleTodoDelete = id => {
    dispatch(deleteTodo(id));
  };
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className="col-md-5">
      <div className="card">
        <div className="card-body">
          <div className="list-group d-flex">
            <input
              className="form-control list-group-item mb-2"
              type="text"
              value={todo}
              onChange={e => setTodo(e.target.value)}
              placeholder="Todo"
            />

            <button className="btn btn-primary" onClick={handleTodoAdd}>
              Add
            </button>
          </div>

          <h2>My Todos</h2>

          <hr />

          <ul className="list-group">
            {todos.map(({ name, id }, index) => {
              return (
                <li className="list-group-item do-list" key={index}>
                  {name}
                  <button
                    className="btn btn-danger"
                    onClick={() => handleTodoDelete(id)}
                  >
                    <i class="bx bxs-trash"></i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
