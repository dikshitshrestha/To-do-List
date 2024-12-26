import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowUp, faArrowDown, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

export default function TodoList(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function handleAddTask() {
        if(newTask.trim() !== ""){
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    function handleDeleteTask(index){
        setTasks(tasks.filter((_,i)=> i !== index))
    }

    function handleDownTask(index){
        if(index < tasks.length-1){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index+1]] = 
            [updatedTask[index+1], updatedTask[index]]
            setTasks(updatedTask);
        }
    }

    function handleUpTask(index){
        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index-1]] = 
            [updatedTask[index-1], updatedTask[index]]
            setTasks(updatedTask);
        }
    }
    return(
        <div className="bg-gray-900 h-screen flex justify-center">
            <div className="mt-40 bg-gray-700 h-2/4 w-1/4 p-10 text-center rounded-lg">
            <h1 className="text-white text-xl"><b>To-do List</b></h1>
                <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter your task" className="outline-none p-2 h-8 rounded-lg mt-2 text-center"/>
                <button onClick={handleAddTask} className="bg-white ml-1 h-8 w-8 rounded-lg"><FontAwesomeIcon icon={faSquarePlus} /></button>
            <div>
            <ol>
                {tasks.map((task,index)=><li key={index} className="mt-3 text-white bg-gray-900 rounded-lg">
                    <span>{task}</span>
                    <button onClick={()=>handleUpTask(index)} className="ml-2 text-green-500"><FontAwesomeIcon icon={faArrowUp} /></button>
                    <button onClick={()=>handleDownTask(index)} className="ml-2 text-purple-500"><FontAwesomeIcon icon={faArrowDown} /></button>
                    <button onClick={() => handleDeleteTask(index)} className="ml-2 text-red-500"><FontAwesomeIcon icon={faTrash} /></button>
                </li>)}
            </ol>
            </div>
            </div>
        </div>
    );
}