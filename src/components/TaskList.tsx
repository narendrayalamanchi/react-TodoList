import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan, faSquareCheck, faRectangleXmark } from '@fortawesome/free-regular-svg-icons';

interface TaskListProps {
  taskInput: string[];
  onDelete: (index: number) => void;
  onEdit: (index: number, newTask: string) => void;
}

function TaskList({ taskInput, onDelete, onEdit }: TaskListProps) {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  const handleEditClick = (index: number, currentText: string) => {
    setEditingIndex(index);
    setEditText(currentText);
  };

  const handleSaveClick = () => {
    if (editingIndex !== null) {
      onEdit(editingIndex, editText);
      setEditingIndex(null);
      setEditText('');
    }
  };

  const handleCancelClick = () => {
    setEditingIndex(null);
    setEditText('');
  };

  return (
    <div className="card">
      {taskInput.length > 0 && <div className="card-header"><strong>To dos</strong></div>}
      <ul className="list-group list-group-flush">
        {taskInput.map((task, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {editingIndex === index ? (
              <span>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <FontAwesomeIcon icon={faSquareCheck} style={{ cursor: 'pointer', marginLeft: '10px' }} onClick={handleSaveClick} />
                <FontAwesomeIcon icon={faRectangleXmark} style={{ cursor: 'pointer', marginLeft: '10px' }} onClick={handleCancelClick} />
              </span>
            ) : (
              <span>{task}</span>
            )}
            <span>
              <FontAwesomeIcon
                icon={faPenToSquare}
                style={{ cursor: 'pointer' }}
                onClick={() => handleEditClick(index, task)}
              />
              &nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon
                icon={faTrashCan}
                style={{ cursor: 'pointer' }}
                onClick={() => onDelete(index)}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;