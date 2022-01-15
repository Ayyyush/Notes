import React , {useState} from "react";
import './App.css'
import AddIcon from '@mui/icons-material/Add';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function CreateNote(props){
  const [note, setnote] = useState({
       title : "",
       content : "",
  });
  
 
  const inputEvent = (event) =>{
    setnote((prevData) =>{
     const {name , value} = event.target;
      return {
        ...prevData,
        [name] : value,
      }
    })
    
  }
  const addEvent = () =>{

    props.passNote(note);
    setnote(({
      title : "",
      content : "",
 }));
    
  }
  
  return(
    <>
   <div className="div">
   <div className="main_note">
    <form >
    <input type="text" 
           placeholder="Title" 
           id="input" 
           name = "title" 
           autoComplete="off" 
           onChange={inputEvent} 
           value={note.title} />
   <textarea 
         
         id="" 
         cols="7" rows="" 
         placeholder="Write Notes" 
         name = "content" 
         autoComplete="off" 
         onChange={inputEvent} 
         value={note.content}></textarea>
    </form>
    </div>
    <button className="btn btn-warning" onClick={addEvent}> <AddIcon/></button>
   </div>
    </>
  )
}
export default CreateNote;