import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem,setNewItem,handleNewList}) => {
  return (
  <form className='addForm' onSubmit={handleNewList}>
     <label htmlFor='addItem'>Add Item</label>
     <input
     autoFocus
     id='addIten'
     type='text'
     placeholder='Add Item'
     required
     value={newItem}
     onChange={(e)=>setNewItem(e.target.value)}
     />
     <button
      type='submit'
      aria-label='Add item'
      >
        <FaPlus/>
      </button>
  </form>
)
}

export default AddItem