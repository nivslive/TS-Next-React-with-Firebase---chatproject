'use client';
import Answer from '@/components/Answer'
import Ask from '@/components/Ask'
import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { fetchFirestore } from '../../../firebase/helpers';

export default function Home() {
  const [answers, setAnswers] = useState<any>([]);
  const [ask, setAsk] = useState<any>('');

  useEffect(() => {
    async function fetchData() {
      const data: any = await fetchFirestore.getDoc('/asks/dsVvz1cqJZVJ3AjPzpKw')
      console.log(data);
      setAsk(data);
    }
    fetchData();
    console.log(ask)
  }, []);

  return (
    <MainLayout className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Ask title={askTitle} /> */}
      {/* Check if answers is defined before calling .map() */}
      {answers && answers.map((answer: any, index: number) => (
        <Answer key={index} content={answer.content} />
      ))}
    </MainLayout>
  );
}
