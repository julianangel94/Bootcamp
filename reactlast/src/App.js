import "./App.css";
import { Note } from "./Node.js";
import { useEffect, useState } from "react";
import { getAllNotes } from "./services/notes/getAllNotes";
import { createNote } from "./services/notes/createNote";

//pintar datos desde un api
export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // //useeffect con fetch
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setNotes(json);
  //         setLoading(false);
  //       });
  //   }, 2000);
  // }, []);

  // useeffect con axios libreria
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getAllNotes().then((notes) => {
        setNotes(notes);
        setLoading(false);
      });
    }, 2000);
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1,
    };

    setError("");

    createNote(noteToAddToState)
      .then((newNote) => {
        setNotes((prevNotes) => prevNotes.concat(newNote));
      })
      .catch((error) => {
        console.error(error);
        setError("La API tiene problemas al crear la nota");
      });

    //setNotes(notes.concat(noteToAddToState));
    setNewNote("");
  };

  return (
    <di>
      <h1>Notes</h1>
      {loading ? "Cargando..." : ""}
      <ol>
        {notes.map((note) => {
          return <Note key={note.id} {...note}></Note>;
        })}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear nota</button>
      </form>
      <p>{error ? error : ""}</p>
    </di>
  );
}

// Pintar datos desde un array local
// export default function App(props) {
//   const [notes, setNotes] = useState(props.notes);
//   const [newNote, setNewNote] = useState("");
//   const [showAll, setShowAll] = useState(true);

//   if (typeof notes === "undefined" || notes.length === 0) {
//     return "No tenemos notas que mostrar";
//   }

//   const handleChange = (event) => {
//     setNewNote(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const noteToAddToState = {
//       id: notes.length + 1,
//       content: newNote,
//       date: new Date().toISOString(),
//       important: Math.random() < 0.5,
//     };

//     setNotes(notes.concat(noteToAddToState));
//     setNewNote("");
//   };

//   const handleShowAll = (event) => {
//     setShowAll(() => !showAll);
//   };

//   return (
//     <di>
//       <h1>Notes</h1>
//       <button onClick={handleShowAll}>
//         {showAll ? "Show only important" : "Show all"}
//       </button>
//       <ol>
//         {notes
//           .filter((note) => {
//             if (showAll === true) return true;
//             return note.important === true;
//           })
//           .map((note) => {
//             return <Note key={note.id} {...note}></Note>;
//           })}
//       </ol>

//       <form onSubmit={handleSubmit}>
//         <input type="text" onChange={handleChange} value={newNote} />
//         <button>Crear nota</button>
//       </form>
//     </di>
//   );
// }
