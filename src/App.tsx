import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import './App.css'

const initialTodos: Array<Todo> = [
  {
    text: "walk the dog",
    complete: true
  },
  {
    text: "walk the cat",
    complete: false
  }
]

const App: React.FC = () => {
  const [todos, setTodos] = React.useState(initialTodos);

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }])
    }
  }
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })

    setTodos(newTodos)
  }
  return (
    <div className="App">
      <TodoList toggleTodo={toggleTodo} todos={todos} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
