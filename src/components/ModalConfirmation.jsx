import React from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const ModalConfirmation = ({
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
      <div className="bg-white rounded-xl shadow-lg p-6 w-96">
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
              <Link
                onClick={onConfirm}
                to="/"
                className="px-4 py-1.5 bg-red-800 text-white rounded-lg hover:bg-red-700"
              >
                Keluar
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalConfirmation;
