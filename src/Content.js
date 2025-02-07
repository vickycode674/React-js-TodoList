import React from 'react'
import ItemsList from './ItemsList';
const Content = ({tasks,setTasks,handleTasksChange,deleteTask}) => {

    // //use State fucntionality
    // const [name,setName] = useState('earn');

    // function handleNameChanges(){
    //     const names = ["Earn",'Grow',"Give"];
    //     const int = Math.floor(Math.random()*3); 
    //     setName(names[int]);
    //     // setText(` ${names[int]} money`);
    //     }
    // const [count,setCount] = useState(99)




    // function incrementFucntion() {
    //     setCount(count+1);
    // }
    // function decrementFucntion() {
    //     setCount(count-1);
    //     setCount((count)=>{return count-1}) 
    // }
  return (
    <>
     {/* <p>Welcome to the world of react hooks and learn by {name}</p>
     <button onClick={handleNameChanges}>Subscribe</button>
     <button onClick={decrementFucntion}>-</button>
     <span>{count}</span>
     <button onClick={incrementFucntion}>+</button> */}
     {
     (tasks.length) ? (
     <ItemsList 
     tasks ={tasks}
     setTasks={setTasks}
     handleTasksChange={handleTasksChange}
     deleteTask={deleteTask}
     />
) : 
(<p>The List is Empty </p>)   
}
 </>
 )
}
export default Content