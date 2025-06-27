import { useState } from 'react';
import Heading from './heading.jsx';
import Input from './todo input.jsx';
import T1 from './todo1.jsx';

function Final() {
  const [todoItems, setTodoItems] = useState([
    { todoname: 'go to college', tododate: '2025-06-09' },
    { todoname: 'go to home', tododate: '2025-06-09' },
    { todoname: 'go to eat', tododate: '2025-06-09' },
    { todoname: 'go for study', tododate: '2025-06-09' },
    { todoname: 'go to bed for sleep', tododate: '2025-06-09' }
  ]);

  const handleAdd = (name, date) => {
    if (!name || !date) return;
    const newItem = { todoname: name, tododate: date };
    setTodoItems([...todoItems, newItem]);
  };

  const handleRemove = (itemToRemove) => {
    const updatedItems = todoItems.filter(item => item !== itemToRemove);
    setTodoItems(updatedItems);
  };

  return (
    <>
      <center>
        <Heading />
      </center>
      <div classNameNameName="main-content">
        <Input onAdd={handleAdd} />
        <T1 datasend={todoItems} click={handleRemove} />
      </div>
    </>
  );
}

export default Final;
