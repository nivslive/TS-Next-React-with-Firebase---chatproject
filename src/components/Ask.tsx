import React, { useState } from 'react';
import AskModal from './AskModal'; // Import the modal component

const AskItem = ({ title, description, askId, answersCount }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleReplyClick = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="flex column bg-white shadow-lg rounded-lg p-4 mb-4">
      <div className="w-auto pr-[20px]">
        <div style={{ borderRadius: 20, borderWidth: 1, borderColor: "black", height: 50, width: 50 }}> oi </div>
      </div>
      <div className="w-full">
        <h1 className="text-gray-600 mb-2 text-2xl">
          {title}
        </h1>
        <p className="mb-2 text-gray-600 text-1xl">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button className="text-blue-500 hover:underline" onClick={handleReplyClick}>Responder</button>
            {/* ... Other buttons ... */}
          </div>
          <div className="text-gray-500">
            {answersCount}
          </div>
          <div className="text-gray-500">
            4 horas atrás
          </div>
        </div>
        {isModalVisible && (
          <AskModal askId={askId} onReplySubmit={handleModalClose} />
        )}
      </div>
    </div>
  );
}

export default AskItem;
