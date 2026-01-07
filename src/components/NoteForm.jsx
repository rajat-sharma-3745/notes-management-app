import { useState } from "react";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (title.trim() === "") {
      setError("Title is required. Please enter a title for your note.");
      return;
    }

    const newNote = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      createdAt: new Date().toLocaleString(),
    };

    onAddNote(newNote);
    setTitle("");
    setDescription("");
    setError("");
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (error && e.target.value.trim() !== "") {
      setError("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (title.trim() !== "") {
        handleSubmit();
      }
    }
  };

  const isDisabled = title.trim() === "";

  return (
    <div className="formContainer">
      <div className="formGroup">
        <label className="label">
          Title <span className="required">*</span>
        </label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          onKeyDown={handleKeyPress}
          placeholder="Enter note title..."
          className={`input ${error ? "inputError" : ""}`}
        />
        {error && (
          <div className="errorMessage">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}
      </div>

      <div className="formGroup">
        <label className="label">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter note description (optional)..."
          className="textarea"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={isDisabled}
        className={`button ${
          isDisabled
            ? "buttonDisabled"
            : `buttonPrimary`
        }`}
      >
        Add Note
      </button>
    </div>
  );
};
export default NoteForm;
