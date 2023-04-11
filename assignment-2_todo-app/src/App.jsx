import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([
    { todo: "Learn React", completed: false },
    { todo: "Have a life!", completed: false },
  ]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <header className="header">
        <h1>todos</h1>
        <Form todos={todos} addTodo={setTodos} />
      </header>
      <body>
        <List todos={todos} />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
