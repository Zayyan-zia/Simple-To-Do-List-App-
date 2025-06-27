import { useState } from 'react';
import { MdLibraryAddCheck } from "react-icons/md";
function Input({ onAdd }) {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onAdd(task.trim(), date);
      setTask('');
      setDate('');
    }
  };

  const handleClick = () => {
    onAdd(task.trim(), date);
    setTask('');
    setDate('');
  };

  return (
    <div classNameNameName="input-search">
      <input
        type="text"
        placeholder="Enter your ToDo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleClick}>
<MdLibraryAddCheck />
      </button>
    </div>
  );
}

export default Input;
