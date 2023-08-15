'use client';
import Answer from '@/components/Answer'
import Ask from '@/components/Ask'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [answers, setAnswers] = useState<any>([]);
  const [askTitle, setAskTitle] = useState<any>('');

  useEffect(() => {
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Ask title={askTitle} />
      {/* Check if answers is defined before calling .map() */}
      {answers && answers.map((answer: any, index: number) => (
        <Answer key={index} content={answer.content} />
      ))}
    </main>
  );
}
