import './App.css';
import {Note} from './Node.js'
import {useState} from 'react'

export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  
  if(typeof notes === "undefined" || notes.length === 0){
    return "No tenemos notas que mostrar";
  }

  const handleChange = (event) => {
    setNewNote(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    setNotes(notes.concat(noteToAddToState));
    setNewNote("");
  }

  return (
    <di>
      <h1>Notes</h1>
      <ol>
        {notes.map((note) => { return <Note key={note.id} {...note}></Note>})}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}/>
        <button>Crear nota</button>
      </form>
    </di>
  );
}