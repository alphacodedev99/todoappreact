import { useEffect, useState } from 'react'
import './App.css'
import TodoInputComponent from './components/TodoInputComponent'
import TodoTaskComponent from './components/TodoTaskComponent'


function App() {
  const [todoTask, setTodoTask] = useState([]);

  useEffect(() => {
    console.log(todoTask)
  }, [todoTask])

  return (
    <>
      <h1 className='title'>TODO APP</h1>

      <TodoInputComponent todoTask={todoTask} setTodoTask={setTodoTask}/>
      <TodoTaskComponent todoTask={todoTask} />
      
     
    </>
  )
}

export default App
