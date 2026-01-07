const ConfirmationModal = ({ isOpen, noteTitle, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onCancel}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <h3 className="modalTitle">Delete Note?</h3>
        <p className="modalText">
          Are you sure you want to delete "<strong>{noteTitle}</strong>"? This
          action cannot be undone.
        </p>
        <div className="modalActions">
          <button onClick={onCancel} className={`button buttonSecondary`}>
            Cancel
          </button>
          <button onClick={onConfirm} className={`button buttonDanger`}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
