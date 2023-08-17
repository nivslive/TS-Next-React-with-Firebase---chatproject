import MainLayout from '@/layouts/MainLayout';
import React, { useState, useEffect } from 'react';
import { fetchFirestore } from '../../firebase/helpers'; // Importe o seu helper de Firestore corretamente
import Link from 'next/link';
// Importe o seu helper de Firestore corretamente

interface QuestionProps {
  title: string;
  description?: string;
  upvotes: number;
  downvotes: number;
  id: string; // Adicionamos uma propriedade para o ID do documento
}

const Question: React.FC<QuestionProps> = ({ title, description, upvotes, downvotes }) => {
  return (
    <div className="bg-white shadow p-4 mb-4 rounded">
      <div className="flex justify-between items-center">
        <h5 className="text-lg font-semibold mb-2 text-gray-800">{title}</h5>
        <div className="flex space-x-2">
          <button className="text-blue-500 hover:underline">Responder</button>
          {/* <div className="flex space-x-1 items-center">
            <span className="text-gray-600">{upvotes}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 1a1 1 0 011 1v12h5a1 1 0 110 2h-6a1 1 0 01-1-1V2a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex space-x-1 items-center">
            <span className="text-gray-600">{downvotes}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a1 1 0 01-1-1v-12a1 1 0 011-1h6a1 1 0 110 2h-5v10a1 1 0 01-1 1z" clipRule="evenodd" />
            </svg>
          </div> */}
        </div>
      </div>
      {description && <p className="text-gray-700 mb-2">{description}</p>}
      <p className="text-sm text-gray-500">4 horas atrás</p>
    </div>
  );
};

interface QuestionListProps {
  questions: QuestionProps[];
}

const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
  return (
    <div>
      {questions.map((question, index) => (
        <Link key={index} href={`/ask/${question.id}`}>
        <Question
            key={index}
            title={question.title}
            description={question.description}
            upvotes={question.upvotes}
            downvotes={question.downvotes} id={''}        
          />
        </Link>
      ))}
    </div>
  );
};

const QuestionForm: React.FC<{ onSubmit: (question: QuestionProps) => void }> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showDescriptionInput, setShowDescriptionInput] = useState(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setShowDescriptionInput(!!event.target.value);
  };

  const handleSubmit = () => {
    if (title) {
      const newQuestion: QuestionProps = {
        title,
        description: description || undefined,
        upvotes: 0,
        downvotes: 0,
        id: '', // O ID será definido pelo Firebase
      };

      // Adicione a nova pergunta usando o seu helper de Firestore
      fetchFirestore.setDoc('/asks', newQuestion).then((docRef: any) => {
        newQuestion.id = docRef.id;
        onSubmit(newQuestion);

        setTitle('');
        setDescription('');
        setShowDescriptionInput(false);
      });
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-gray-800"
        placeholder="Enter your question"
        value={title}
        onChange={handleTitleChange}
      />
      {showDescriptionInput && (
        <input
          type="text"
          className="block w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-gray-800"
          placeholder="Enter description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      )}
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md disabled:opacity-50"
        onClick={handleSubmit}
        disabled={!title}
      >
        Submit Question
      </button>
    </div>
  );
};

const Asks: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionProps[]>([]);

  useEffect(() => {
    const unsubscribe: any = () => {
        fetchFirestore.getDocs('asks', (doc: any) => {
            const data = doc.data();
            return {
              id: doc.id,
              title: data.title,
              description: data.description,
              upvotes: data.upvotes,
              downvotes: data.downvotes,
            };
          }).then((updatedQuestions: QuestionProps[] | any) => {
            setQuestions(updatedQuestions);
          });
    } 
    unsubscribe()
  }, []);

  const handleQuestionSubmit = async (newQuestion: QuestionProps) => {
    setQuestions([...questions, newQuestion]);
  };

  return (
    <MainLayout className="container m-5">
      <h1 className="text-2xl font-semibold mb-4 text-white">Perguntas</h1>
      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <QuestionForm onSubmit={handleQuestionSubmit} />
      </div>
      <QuestionList questions={questions} />
    </MainLayout>
  );
};

export default Asks;
