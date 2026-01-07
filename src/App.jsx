import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import NoteForm from "./components/NoteForm";
import EmptyState from "./components/EmptyState";
import NoteList from "./components/NoteList";
import ConfirmationModal from "./components/ConfirmationModal";
import './app.css'

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState({ isOpen: false, noteId: null, noteTitle: '' });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const handleDeleteClick = (noteId, noteTitle) => {
    setConfirmDelete({ isOpen: true, noteId, noteTitle });
  };

  const handleConfirmDelete = () => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== confirmDelete.noteId));
    setConfirmDelete({ isOpen: false, noteId: null, noteTitle: '' });
  };

  const handleCancelDelete = () => {
    setConfirmDelete({ isOpen: false, noteId: null, noteTitle: '' });
  };

  if (isLoading) {
    return (
      <div className="app">
        <Loader />
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Notes Management</h1>
        <p className="subtitle">Organize your thoughts and ideas</p>
      </header>

      <NoteForm  onAddNote={handleAddNote} />

      {notes.length === 0 ? (
        <EmptyState />
      ) : (
        <NoteList notes={notes} onDelete={handleDeleteClick} />
      )}

      <ConfirmationModal
        isOpen={confirmDelete.isOpen}
        noteTitle={confirmDelete.noteTitle}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

export default App;