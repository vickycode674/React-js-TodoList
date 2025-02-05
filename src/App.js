import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';
import AddItem from './AddItem';
function App() {
 const [tasks,taskList] = useState(JSON.parse(localStorage.getItem('todo_list')));

    const [newItem,setNewItem] = useState('');

    const addItem = (item) =>{
      const id = tasks.length ? tasks[tasks.length-1].id + 1 : 1;
      const addNewItem = {id,checked:false,item}
      const listItems = [...tasks,addNewItem]
      taskList(listItems)
      localStorage.setItem("todo_list",JSON.stringify(listItems));
    }

    const handleTasksChange = (id) =>{
     const listItems = tasks.map ((item)=>
      item.id === id ? {...item ,checked:!item.checked} : item
     )
     taskList(listItems);
     localStorage.setItem("todo_list",JSON.stringify(listItems));
    }

    const deleteTask = (id) =>{
     const getFinalList = tasks.filter(item => item.id !==id); //to delete things we need to use filter
     taskList(getFinalList);
     localStorage.setItem("todo_list",JSON.stringify(getFinalList));
    }

    const handleNewList = (e) =>{
     e.preventDefault();
     if(!newItem) return ;
     console.log(newItem);
     addItem(newItem)
     setNewItem('');
    }
  return (
  <div className='App'>
    <Header titless="Chengalapattu Vivek Sai's TODO LIST"/>
    <AddItem
    newItem={newItem}
    setNewItem={setNewItem}
    handleNewList={handleNewList}
    />
    <Content 
       tasks={tasks}
       taskList={taskList}
       handleTasksChange={handleTasksChange}
       deleteTask={deleteTask}
       />
    <Footer 
    length={tasks.length}/>
  </div> 
  );
}

export default App;
