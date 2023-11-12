import { useState } from "react";

const TaskModal = ({
  button,
  title,
  children,
  onClose,
  onCancel,
  onConfirm,
}: {
  button: JSX.Element;
  title: string;
  children: JSX.Element;
  onClose: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        style={{
          border: "none",
          background: "none",
        }}
        onClick={() => setShowModal(true)}
      >
        {button}
      </button>

      {showModal && (
        <>
          <div
            className="modal-backdrop fade show"
            style={{ opacity: 0.7 }}
          ></div>
          <div
            className="modal fade show"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{
              display: "block",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    {title}
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => {
                      setShowModal(false);
                      onClose();
                    }}
                  ></button>
                </div>
                <div className="modal-body">{children}</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setShowModal(false);
                      onCancel();
                    }}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setShowModal(false);
                      onConfirm();
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TaskModal;
