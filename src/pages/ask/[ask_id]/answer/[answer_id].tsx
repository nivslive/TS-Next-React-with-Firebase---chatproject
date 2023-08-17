import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { fetchFirestore } from '../../../../../firebase/helpers';
import MainLayout from '@/layouts/MainLayout';
import Answer from '@/components/Answer';
const AnswerId = () => {
    const [answers, setAnswers] = useState<any[]>([]); // Inicialize "answers" como um array vazio
    const [ask, setAsk] = useState<any>({
      title: '',
      description: '',
      ref: '',
    });
    const router = useRouter();
    const { ask_id, answer_id } = router.query;
    console.log(ask_id)
  
    useEffect(() => {
      async function fetchData() {
        if (ask_id) {
          const askData: any = await fetchFirestore.getDoc(`/asks/${ask_id}/answers/${answer_id}`);
          console.log(await askData, 'askData');
          setAsk(await askData);
  
          // Fetch answers associated with the ask_id
          const answersData: any[] = await fetchFirestore.getDocs(`/asks/${ask_id}/answers/${answer_id}/answers`, (e: any) => {
            const data = e.data();
            return {
              title: data.title,
              ref: e.ref.path
              // description: e.description,
            }
          });
          console.log(answersData, 'answerData');
          setAnswers(answersData);
        }
      }
      fetchData();
    }, [ask_id]);
    return (

        <MainLayout className="flex min-h-screen flex-col items-center justify-between p-24">
          {/* <Answer askId={ask_id} title={ask && ask.title} description={ask && ask.description} answersCount={answers.length}/> */}
          {ask.description}
          <Answer content={ask} answerRefDocument={ask} />
          {/* Check if answers is defined before calling .map() */}
          {Array.isArray(answers) && answers.length > 0 ? (
            answers.map((answer: any, index: number) => {
              const ref = answer.ref.replace(/asks/g, "ask").replace(/answers/g, "answer");
              console.log(ref);
              return (
              <Answer key={index} content={answer} answerRefDocument={ref} answerOfAnswer answerOfAnswerId={answer.ref} />
            )})
          ) : (
            <p>No answers available.</p>
          )}
        </MainLayout>
      );
}

export default AnswerId