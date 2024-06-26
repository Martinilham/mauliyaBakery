import React from 'react';
import "animate.css"

const PopUp = ({ isOpen, onClose, children  }) => {
    if (!isOpen) return null;
  return (
    <div className="absolute z-10 inset-0 overflow-y-auto animate__animated animate__fadeIn top-0 left-64">
    <div className="flex items-center justify-center min-h-screen ">
      <div className="fixed inset-0 bg-black opacity-20"></div>
      <div className="relative bg-white rounded-lg p-8 max-w-md mx-auto animate__animated animate__pulse">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-600"
        >
          &#10005;
        </button>
        {children}
      </div>
    </div>
  </div>
  );
};

export default PopUp;
