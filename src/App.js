import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState,useEffect } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';
function App() {
//  const [tasks,taskList] = useState(JSON.parse(localStorage.getItem('todo_list')) || []);
const [tasks,taskList] = useState([]);

const API_URL = 'http://localhost:5000/tasks';

    const [newItem,setNewItem] = useState('');
    
    const [search,setSearch] = useState('');

    const [fetchError,setFetchError] = useState(null);

    const [ isLoading,setisLoading]  = useState(true);

    useEffect(() => {
      // Load tasks from localStorage on page refresh
      // const storedTasks = JSON.parse(localStorage.getItem('todo_list')) || [];
      // taskList(storedTasks); //storing in otehr variables with values
      const fetchItems = async () =>{
        try{
          const response = await fetch(API_URL);
          if(!response.ok){
            throw Error("Data not Received");
          }
          console.log("here is the response wer are getting================",response);
          const listItems = await response.json();
          console.log("here is the list items============",listItems);
          taskList(listItems);
          setFetchError(null);

        }
        catch(err){
          setFetchError(err.message)
        }
        finally{
          setisLoading(false);
        }
      }
      setTimeout(()=>{
        (async () => await fetchItems())()
      },2000)
    }, []);

    const addItem = async(item) =>{
      const id = tasks.length ? tasks[tasks.length-1].id + 1 : 1;
      const addNewItem = {id,checked:false,item}
      const listItems = [...tasks,addNewItem]
      taskList(listItems)

      const postOptions = {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(addNewItem)
      }

      const result = await apiRequest(API_URL,postOptions);
      console.log("result===============",result);
       if(result) setFetchError(result);

    }

    const handleTasksChange = async(id) =>{
     const listItems = tasks.map ((item)=>
      item.id === id ? {...item ,checked:!item.checked} : item
     )
     taskList(listItems);
     const myItem = listItems.filter((item)=>item.id==id) //selecting respective id so that we can change status of true /false

     const updateOptions = 
     {
      method : 'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked:myItem[0]})
     }
     const reqUrl = `${API_URL}/${id}`
     const result = await apiRequest(reqUrl,updateOptions);

     if(result) setFetchError(result);
    }

    const deleteTask = async(id) =>{
     const getFinalList = tasks.filter(item => item.id !==id); //to delete things we need to use filter
     taskList(getFinalList);
     const deleteOptions = 
     {
      method : 'DELETE',
     }

     const reqUrl = `${API_URL}/${id}`
     console.log("here is the requ url=============",reqUrl);
     const result = await apiRequest(reqUrl,deleteOptions);

     if(result) setFetchError(result);
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
    <SearchItem
    search = {search}
    setSearch = {setSearch}
    />
    <main>
      {fetchError && <p>`Error: ${fetchError}</p>}
      {isLoading && <p>Loading Item ..</p>}

     {!isLoading && !fetchError &&  <Content 
        tasks={tasks.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        taskList={taskList}
        handleTasksChange={handleTasksChange}
        deleteTask={deleteTask}
      />
     }
    </main>
    <Footer 
    length={tasks.length}/>
  </div> 
  );
}

export default App;
