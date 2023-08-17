import React, { useState } from 'react';
import { fetchFirestore } from '../../firebase/helpers';

const AnswerModal = ({ askId, answerId, onReplySubmit, answerOfAnswer, answerOfAnswerId }: any) => {
  const [replyText, setReplyText] = useState('');

  const handleReplySubmit = async () => {
    if (replyText) {
      const newAnswer = {title: replyText}; // Customize as needed
      if(answerOfAnswer) {
        await fetchFirestore.setDoc(`/asks/${askId}/answers/${answerId}/answers${answerOfAnswerId}`, newAnswer);
      } else {
        await fetchFirestore.setDoc(`/asks/${askId}/answers/${answerId}`, newAnswer);
      }
      onReplySubmit(); // Notify the parent component that a reply was submitted
      setReplyText('');
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
        className="w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Enter your reply"
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={handleReplySubmit}
      >
        Send
      </button>
    </div>
  );
}

export default AnswerModal;
