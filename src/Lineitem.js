import React from 'react';
import {FaTrashAlt} from "react-icons/fa";

const Lineitem = ({item,deleteTask,handleTasksChange}) => {
  return (
    <li className='item' key={item.id}>
    <input
      type = "checkbox"
      onChange={()=>handleTasksChange(item.id)}
      checked = {item.checked}
    />

    <label
       style={(item.checked)?{textDecoration:'line-through'}:null}
    >{item.item}</label>
    
    <FaTrashAlt
     role='button'
     onClick={()=>deleteTask(item.id)}
     tabIndex="0"
     aria-label={`Delete ${item.item}`} 
    />
  </li>  )
}

export default Lineitem