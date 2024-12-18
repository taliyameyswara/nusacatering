import React from "react";
import Loading from "./Loading";

const Modal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  isLoading,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-400"
              >
                Batal
              </button>
              <button
                onClick={onConfirm}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-red-600"
              >
                Keluar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
