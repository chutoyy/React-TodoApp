import { useState } from 'react';
import '../../App.css'
import Todo from '../../components/Todo';
import { Helmet } from "react-helmet";

interface Todo {
  title: string,
  isDone: boolean
}

function TodoPage() {
  // function addTodos{}
  const [todoTitle, setTodoTitle] = useState("")

  const [todos, setTodos] = useState<Todo[]>([])
 
  // function handleChangeTitle(event: any){
  //   setPageTitle(event?.target.value);
  // }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const newTodo = {
      title: todoTitle,
      isDone: false
    }
    setTodos(todos => [...todos, newTodo]);
    setTodoTitle("")
  }

  return (
    <div>
        <Helmet>
            <title> Todo App</title>
            
        </Helmet>


        <h1> Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input 
          name="title"
          type='text' 
          placeholder='tâche'
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
          <button
          onClick={()=>{handleSubmit}}
          disabled={!todoTitle}
          >Add</button>
      </form>  
    
      {todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            id={index + 1}
            title={todo.title}
            isDone={todo.isDone}
          />
        )
      })}
    </div>
  )
}

export default TodoPage
