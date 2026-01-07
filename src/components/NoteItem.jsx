
const NoteItem = ({ note, onDelete }) => {

  return (
    <div
      className={`noteItem`}

    >
      <div className="noteHeader">
        <h3 className="noteTitle">{note.title}</h3>
        <button
          onClick={() => onDelete(note.id, note.title)}
          className={`deleteButton`}
        >
          Delete
        </button>
      </div>
      {note.description && (
        <p className="noteDescription">{note.description}</p>
      )}
      <div className="noteTimestamp">Created: {note.createdAt}</div>
    </div>
  );
};
export default NoteItem;
