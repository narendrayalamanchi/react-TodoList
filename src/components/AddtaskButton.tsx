import { useState } from "react";


interface AddtaskProps{
  onAdd: (taskName: string) => void;
}

function AddtaskButton({onAdd}: AddtaskProps) {
  const [taskName, setTaskName]= useState('');

  const handleAddClick = () => {
    onAdd(taskName);
    setTaskName('');
  };
  
  return (
    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter To dos" value={taskName} onChange={(e)=>setTaskName(e.target.value) } />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleAddClick}>Button</button>
    </div>
  )
}

export default AddtaskButton
