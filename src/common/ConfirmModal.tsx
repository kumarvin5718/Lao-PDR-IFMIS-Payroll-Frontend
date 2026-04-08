import React from "react";

interface Props {
  show: boolean;
  title?: string;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmModal: React.FC<Props> = ({
  show,
  title = "Confirm Submission",
  onCancel,
  onConfirm
}) => {
  if (!show) return null;

  return (
    <div
      className="modal d-flex align-items-center justify-content-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.6)",
        zIndex: 1050
      }}
    >
      <div
        className="bg-white rounded-3 shadow-lg"
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "0"
        }}
      >
        {/* Header */}
        <div className="px-3 py-2 border-bottom d-flex justify-content-between align-items-center">
          <h6 className="mb-0 fw-semibold">{title}</h6>
          <button
            className="btn btn-sm btn-light border"
            onClick={onCancel}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-3 py-4">
        
          <div className="mt-3 p-2 rounded bg-warning-subtle border">
            <small className="text-dark fw-semibold">
              ⚠️ This action is final. Once submitted, the record will be permanently saved and cannot be edited
            </small>
          </div>
        </div>

        {/* Footer */}
        <div className="px-3 py-2 border-top d-flex justify-content-end gap-2">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="btn btn-success btn-sm px-3"
            onClick={onConfirm}
          >
            Yes, Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;