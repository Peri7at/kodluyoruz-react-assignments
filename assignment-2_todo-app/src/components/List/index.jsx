import React from "react";

function List() {
  return (
    <div className="main">
      <input type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li class="completed">
          <div class="view">
            <input class="toggle" type="checkbox" />
            <label>Learn JavaScript</label>
            <button class="destroy"></button>
          </div>
        </li>
        <li>
          <div class="view">
            <input class="toggle" type="checkbox" />
            <label>Learn React</label>
            <button class="destroy"></button>
          </div>
        </li>
        <li>
          <div class="view">
            <input class="toggle" type="checkbox" />
            <label>Have a life!</label>
            <button class="destroy"></button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default List;
