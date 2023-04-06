import { useState, useEffect } from "react";

function Form({ todos, addTodo }) {
  const [form, setForm] = useState({});

  useEffect(() => {
    setForm({});
  }, [todos]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    //if (form.todos === "") return false;
    addTodo([...todos, form]);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          name="todos"
          class="new-todo"
          placeholder="What needs to be done?"
          value={form.todos}
          onChange={onChangeInput}
          autoFocus
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default Form;
