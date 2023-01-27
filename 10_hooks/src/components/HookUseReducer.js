import { useReducer, useState } from "react"

const HookUseReducer = () => {
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state)
  })

  const initialTasks = [
    {id: 1, text: "Do something"},
    {id: 2, text: "Do another thing"},
  ]

  const taskReducer = (state, action) => {
    switch (action.type){
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText
        }

        setTaskText("")
        return [...state, newTask]
        
        case "DELETE":
          return state.filter((task) => task.id !== action.id)

        default:
          return state

    }
  }

  const [taskText, setTaskText] = useState("")
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatchTasks({type: "ADD"})
  }

  const removeTask = (id) => {
    dispatchTasks({type: "DELETE", id: id})
  }

  return (
    <div>
      <h2>useReducer</h2>
      <p>Number: {number}</p>
      <button onClick={dispatch}>Alter number</button>
      <hr />
      
      <h2>useReducer Actions</h2>
      <p>Tasks:</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Send" />
      </form>

      {tasks.map((task) => (
        <li onDoubleClick={() => removeTask(task.id)} key={task.id}>{task.text}</li>
      ))}

      <hr />
    </div>
  )
}

export default HookUseReducer