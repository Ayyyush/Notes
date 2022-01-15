import React,{useState} from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App(){
 
  const[addItem , setaddItem] = useState([]);

 const addNote = (note) =>{
  
      setaddItem((prevData) =>{
        console.log(prevData);
        return [...prevData , note];
      });
 }

const onDelete = (id) =>{
  setaddItem((oldData) =>{
    oldData.filter((currData , idx) =>{
      return idx !== id;
    })
  })
}

  return(
    <>
    
    <Header/>
    <CreateNote passNote = {addNote}/>
     
     { addItem.map((val , idx) =>{

       return(
         <Note 
               key = {idx} 
               id = {idx}
               title = {val.title}
               content = {val.content}
               deleteItem = {onDelete}
                
         />
       )
     })

     }



    </>
  )
}
export default App;