import React from 'react'
import Lineitem from './Lineitem';
const ItemsList = ({tasks,handleTasksChange,deleteTask}) => {
  return (
    <ul>
    {tasks.map((item)=>(
     <Lineitem 
      handleTasksChange={handleTasksChange}
      deleteTask={deleteTask}
      item={item}
      key={item.id}
      />
    ))
    }
   </ul>
)
}

export default ItemsList