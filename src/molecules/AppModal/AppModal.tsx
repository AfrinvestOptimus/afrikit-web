import React from 'react';

interface BVNModalProps {
  onClose?: () => void;
  onConfirm?: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode
}

const AppModal: React.FC<BVNModalProps> = ({ onClose, onConfirm , title, subtitle, children}) => {
  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center px-lg">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
       <div className="flex justify-between items-center p-lg">
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>
        <div className="p-lg">
          {children ? children : <p className="mb-4">Children content required...</p>}
        </div>
        <div className="p-4">
          <button
            onClick={onConfirm}
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppModal;