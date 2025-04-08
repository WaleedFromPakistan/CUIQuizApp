"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import questions from '../../Components/questions.json';

const Page = () => {
  const params = useParams();
  const [count, setCount] = useState(0);
  const [currSubject, setSubject] = useState(null);
  const [currQuestion, setQuestion] = useState([]);
  const [score, setScore] = useState(0);
  const [buttonStatus, setStatus] = useState("Next");
  const [resultBox , setResultBox] = useState(false)

  useEffect(() => {
    if (params?.slug) {
      const subject = questions.find((q) => q.subject === params.slug);
      if (subject) {
        setSubject(subject);
        setQuestion(subject.questions);
      }
    }
  }, [params]);

  const handleClick = () => {
      if (count < currQuestion.length - 1) {
        setCount(count + 1);
      }
      else if(count+1 > currQuestion.length)
      {
        setStatus('Submit')
       
      }
  };

  const check = (opt) => {
    // Placeholder for answer checking
    if(opt === currQuestion[count].correct)
      {
        setScore((prev)=>prev +1);
      }
  };

  if (!currSubject || currQuestion.length === 0) {
    return (
      <div className='h-[560px] w-full bg-yellow-50 flex justify-center items-center'>
        <div className="text-center text-black font-extrabold text-xl mt-10">Loading quiz...</div>;
      </div>
    )
    
  }

  return (
    <div className='h-[560px] w-full bg-yellow-50 flex justify-center items-center'>
      
      <div className='h-[500px] w-[1000px] flex flex-col py-3 bg-gray-800 rounded-xl'>
      {!resultBox? 
      <div>
        <div className='flex flex-row gap-10 p-3 justify-center text-white font-extrabold text-2xl'>
          <h3>Question no. {currQuestion[count].id}</h3>
          <h3>{currQuestion[count].question}</h3>
        </div>
        <div className='h-[340px] w-[900px] bg-gray-700 m-auto flex flex-wrap rounded-xl justify-around'>
          {currQuestion[count].options.map((opt, index) => (
            <div
              key={index}
              className="h-[100px] w-[400px] bg-gray-200 m-auto rounded-xl font-extrabold cursor-pointer text-center text-2xl"
              onClick={() => {
                check(opt);
              }}
            >
              <h3 className='my-6'>{opt}</h3>
            </div>
          ))}
        </div>
        <div
          className='h-[50px] w-[150px] my-4 rounded-xl mx-auto bg-blue-700 text-white text-2xl font-bold text-center py-2 cursor-pointer'
          onClick={handleClick}
        >
          {buttonStatus} &gt;
        </div>
      </div>
       :
    
       <div>Hi</div>  
       
       }
    </div>   
   </div>
  );
};

export default Page;
