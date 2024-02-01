import { useState } from "react"
import { NoteProps} from "./types/noteProps";
import Note from "./components/note";
import "./App.css";

export default function App() {
const[noteTitle,setNoteTitle]=useState('');
const[noteText,setNoteText]=useState('');
const[noteDate,setNoteDate]=useState('');
const[notes, setNotes] = useState<NoteProps[]>([]);

const handleSave = () => {
  const newNote: NoteProps = {
    noteTitle: noteTitle,
    noteText: noteText,
    noteDate: noteDate,
  };
  setNotes([...notes, newNote]);
  setNoteTitle("");
  setNoteText("");
  setNoteDate("");
};

const sortedNotes = [...notes].sort((a, b) => {
  return new Date(a.noteDate).getTime() - new Date(b.noteDate).getTime();
});

  return (
    <>
    <div id="whole">
      <div>
        <h2>Add Note:</h2>
        <label>Title:
        <input type="text" value={noteTitle} onChange={(event) => setNoteTitle(event.target.value)}/>
        </label>
        <label>Text: 
        <textarea value={noteText} onChange={(event) => setNoteText(event.target.value)}/>
        </label>
        <label>Date: 
        <input type="date" value={noteDate} onChange={(event) => setNoteDate(event.target.value)}/>
        </label>
        <button type="button" onClick={handleSave}>Save</button>
      </div>
      <div>
        <h2>Notes:</h2>
        {sortedNotes.length > 0 ? (
          sortedNotes.map((note, index) => (
            <div id="note">
            <Note 
              key={index}
              noteTitle={note.noteTitle}
              noteText={note.noteText}
              noteDate={note.noteDate}
            />
            </div>
          ))
        ) : (
          <p id="before">No notes available.</p>
        )}
      </div>
      </div>
    
    </>
  )
}


