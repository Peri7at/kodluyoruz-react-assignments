import { useState, useEffect } from "react";

function Form({ todos, addTodo }) {
  const [form, setForm] = useState([]);

  useEffect(() => {
    setForm({ todo: "" });
  }, [todos]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value, completed: false });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (form.todo === "") return false;
    addTodo([...todos, form]);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          name="todo"
          class="new-todo"
          placeholder="What needs to be done?"
          onChange={onChangeInput}
          value={form.todo}
          autoFocus
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default Form;
