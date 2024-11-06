
import { useState } from 'react';
import './App.css'
import AddtaskButton from './components/AddtaskButton'
import TaskList from './components/TaskList'

function App() {

  const [taskInput, setTaskInput] = useState<string[]>([]);
  const handleAddTask = (data: string) => {
    setTaskInput((prevTasks) => [...prevTasks, data]);
  };

  const handleDeleteTask = (index: number) => {
    setTaskInput( (prevTasks) => prevTasks.filter((_,i) => i != index) );
  };
  const handleEditTask = (index: number, taskName: string) => {
    setTaskInput((prevTasks) =>
      prevTasks.map((task, i) => (i === index ? taskName : task))
    );
  };

  return (
    <>
      <AddtaskButton onAdd={handleAddTask} />
      <TaskList taskInput={taskInput} onDelete={handleDeleteTask} onEdit={handleEditTask}/>
    </>
  )
}

export default App
