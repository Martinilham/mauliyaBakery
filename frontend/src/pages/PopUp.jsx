import React from 'react';
import Blur from 'react-blur';

const PopUp = ({ isOpen, onClose, children  }) => {
    if (!isOpen) return null;
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen">
      <div className="fixed inset-0 bg-black opacity-20"></div>
      <div className="relative bg-white rounded-lg p-8 max-w-md mx-auto">
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
