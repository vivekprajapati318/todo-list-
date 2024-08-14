import './App.css';
import{useState} from 'react'

function App() {
  let [ToDolist,setToDolist]=useState([])
  // let [ToDolist,setToDolist]=useState([])
   
 let saveToDolist =(event)=>{
 
     let toname=event.target.toname.value;
     if(!ToDolist.includes(toname)){
       let finaldolist=[...ToDolist,toname]
       setToDolist(finaldolist)
     }
     else{
      alert('todo is aleready exsist')
     }
    event.preventDefault();
  }
  let list=ToDolist.map((value,index)=>{
  return(
    <ToDolistItems value={value} key={index} indexNumber={index} 
    ToDolist={ToDolist} setToDolist={setToDolist}
    /> 
  )
  })

  return (
  <div className="App">
        <h1>Todo List</h1>
        <form onSubmit={saveToDolist}>
          <input type='text' name='toname' />
            <button>save</button>
        </form>
      <div className='outerdiv'>
        <ul>
        
         {list}
        
        </ul>
      </div> 
    </div>
    
  );
}

export default App;
function ToDolistItems({value,indexNumber,ToDolist,setToDolist})
{
  let deleteRow=()=>{
    let finalData=ToDolist.filter((v,i)=>i!=indexNumber)
  setToDolist(finalData)
  }
  return(
    <li>{indexNumber+1}-{value} <span onClick={deleteRow}>&times;</span></li>

  )
}
