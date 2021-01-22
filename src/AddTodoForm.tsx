import React, { ChangeEvent, FormEvent } from 'react'

interface AddTodoFormProps {
  addTodo: AddTodo
}
const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {
  const [newTodo, setNewTodo] = React.useState("");
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e:FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addTodo(newTodo)
    setNewTodo("")
  }
  return (
    <form>
      <input 
        type="text" value={newTodo}
      onChange={handleChange}
      />
      <button 
      type="submit"
      onClick={handleSubmit}
      >add</button>
    </form>
    
  )
}
export default AddTodoForm;
