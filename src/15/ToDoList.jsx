import { useState } from "react"
import './ToDoList.css'

export default function ToDoList(){
  const [tasks,SetTasks] = useState(["Eat Breakfast", "Take a shower", "walk the dog"])
  const [newTask,SetNewTask] = useState("")


  function handleInputChange(event){
    SetNewTask(event.target.value)
  }

  function addTask(){
  if(newTask.trim() != ""){
    SetTasks(t=>[...t,newTask])
    SetNewTask("")
    }
  }

  function deleteTask(index){
    const updatedTasks =  tasks.filter((_,i)=> i !== index);
    SetTasks(updatedTasks);
  }

  function moveTaskUp(index){
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
      SetTasks(updatedTasks);  //바뀐걸 저장하는 부분
    }
  }

  function moveTaskDown(index){
    if(index < tasks.length -1){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index + 1]] =
      [updatedTasks[index + 1], updatedTasks[index]]
      SetTasks(updatedTasks)
    }
  }

  return(
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input type="text" placeholder="enter a task" value={newTask} onChange={handleInputChange}/>
        <button className="add-button" onClick={addTask}>Add</button>
      </div>
      <ol>
        {/* 중괄호 부분 일부러 뺀것임 */}
        {tasks.map((task,index)=> 
        <li key={index}>
          <span className="text">{task}</span>
          <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
          <button className="move-button" onClick={()=>moveTaskUp(index)}>Up👍</button>
          <button className="move-button" onClick={()=>moveTaskDown(index)}>Down😢</button>
        </li>
        )}
      </ol>
    </div>
  )
}