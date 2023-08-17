import { useState } from "react";
import AnswerModal from "./AnswerModal";

const Answer = (props: any) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const handleRedirectToAnswer = () => {
        window.location.pathname = props.answerRefDocument
    }
    const handleReplyClick = () => {
      setIsModalVisible(true);
      if(props.redirectInsteadOnlyReply) {
        window.location.pathname = props.answerRefDocument
      }
    };
  
    const handleModalClose = () => {
      setIsModalVisible(false);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <p className="text-gray-600 mb-2">
                {props.content.title}
            </p>
            {/* <p className="mb-2">
                Resposta: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                metus non ligula posuere ornare. Fusce condimentum, ligula quis
                tristique egestas, ex felis efficitur mauris, vel tristique libero dui a
                urna.
            </p> */}
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <button onClick={handleReplyClick} className="text-blue-500 hover:underline">Responder</button>
                   {props.showSeeAllAnswersButton && <button onClick={handleRedirectToAnswer} className="pl-3 text-blue-500 hover:underline">Ver todas as respostas</button>} 
                    {/* <button className="text-gray-400 hover:text-blue-500 flex items-center space-x-1">
                        <span>0</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 1a1 1 0 011 1v12h5a1 1 0 110 2h-6a1 1 0 01-1-1V2a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <button className="text-gray-400 hover:text-red-500 flex items-center space-x-1">
                        <span>0</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a1 1 0 01-1-1v-12a1 1 0 011-1h6a1 1 0 110 2h-5v10a1 1 0 01-1 1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button> */}
                </div>
                <div className="text-gray-500">
                    4 horas atrás
                </div>
            </div>

            {isModalVisible && <AnswerModal/>}
        </div>
    );
}

export default Answer;
