import { useRouter } from 'next/router'
import React,{useState} from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'

import {collection,getDocs,query, where} from 'firebase/firestore'
import {db} from '../../../../firebase.config'
import Navbar from '../../../../components/Navbar'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Index({questions}) {
  const [openTab, setOpenTab] = useState(1);
  const [solution,setSolution] = useState(false)
  const [question,setQuestion] = useState(true)
  const [resources,setResources] = useState(false)


  const [blur,setBlur] = useState(true)
    const router = useRouter()
    const {prompt} = router.query
  return (
    <div>
    <div className="flex flex-wrap justify-between">
        <div className="w-50">
          <ul
            className="flex mb-0 list-none flex-wrap  flex-row"
            role="tablist"
          >
            <li className="-mb-px border-sky-500 border-b-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-4 shadow-lg  block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-sky-600"
                    : "text-white bg-gray-700 border-3")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Boiler Plate
              </a>
            </li>
            <li className="-mb-px border-sky-500 border-b-2 border-l-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-4 shadow-lg  block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-sky-600"
                    : "text-white bg-gray-700 border-3")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Boiler Plate
              </a>
            </li>

          </ul>
          {/* <div className="relative flex flex-col min-w-0 break-words text-black  w-full shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                1st tab
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  2nd tab
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  3rd tab
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div>
        <ul
            className="flex mb-0 list-none flex-wrap  flex-row"
            role="tablist"
          >
             <li className="-mb-px border-sky-500 border-b-2 border-l-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-4 shadow-lg  block leading-normal " +
                  (question 
                    ? "text-white bg-sky-600"
                    : "text-white bg-gray-700 border-3")
                }
                onClick={e => {
                  e.preventDefault();
                  setQuestion(true);
                  setSolution(false)
                  setResources(false)
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Qustion 
              </a>
            </li>
            <li className="-mb-px border-sky-500 border-b-2 border-l-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-4 shadow-lg  block leading-normal " +
                  (solution
                    ? "text-white bg-sky-600"
                    : "text-white bg-gray-700 border-3")
                }
                onClick={e => {
                  e.preventDefault();
                  setSolution(true);
                  setQuestion(false)
                  setResources(false)
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Solution
              </a>
            </li>
            <li className="-mb-px border-sky-500 border-b-2 border-l-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-4 shadow-lg  block leading-normal " +
                  (resources
                    ? "text-white bg-sky-600"
                    : "text-white bg-gray-700 border-3")
                }
                onClick={e => {
                  e.preventDefault();
                  setResources(true);
                  setQuestion(false)
                  setSolution(false)
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Resources
              </a>
            </li>
          </ul>
        </div>
      </div>
    <div class="grid grid-cols-6 ">
  <div class=" col-span-4 bg-white">
  {questions.map(doc =>  (
    <>

    {solution ? <iframe className='h-screen w-full' src={doc.data.solution}></iframe> : <iframe className='h-screen w-full' src={doc.data.url}></iframe>}
    
    </>
  ))}

  </div>
  <div class="col-end-7 col-span-2 bg-black">
  {questions.map(doc => (
    <>
    {question &&  (
    <div className='p-3 text-center'>
    <h1 className='mt-5 text-white font-bold text-3xl px-4'>{doc.data.Prompt}</h1>
    <h1 className='mt-5 text-white font-bold text-3xl px-4'>{doc.data.Prompt}</h1>
    <h1 className='text-white'>Hints</h1>
    <button className='text-white' onClick={() => setBlur(false)}>See hint</button>
    <div className={`${blur ? 'blur text-white' : 'text-white'}`}>
      <p>Hints on something</p>
    </div>
    <div>
      <p>Hints on another thing</p>
    </div>
    </div>
    )}
    {solution && (
          <div className='p-3 text-center'>
          <h1 className='mt-5 text-white font-bold text-3xl px-4'>Solution</h1>
          <h1 className='mt-5 text-white font-bold text-3xl px-4'></h1>
          <h1 className='text-white'>Hints</h1>
          <button className='text-white' onClick={() => setBlur(false)}>See hint</button>
          <div className={`${blur ? 'blur text-white' : 'text-white'}`}>
            <p>Hints on something</p>
          </div>
          <div>
            <p>Hints on another thing</p>
          </div>
          </div>
    )}
    {resources && (
    <div className='p-3 text-center'>
    <h1 className='mt-5 text-white font-bold text-3xl px-4'>Resources</h1>
    <h1 className='mt-5 text-white font-bold text-3xl px-4'></h1>
    <h1 className='text-white'>Hints</h1>
    <button className='text-white' onClick={() => setBlur(false)}>See hint</button>
    <div className={`${blur ? 'blur text-white' : 'text-white'}`}>
      <p>Hints on something</p>
    </div>
    <div>
      <p>Hints on another thing</p>
    </div>
    </div>
      
    )}
  

    </>
  ))}
  
    
  </div>
</div>
   
    </div>
  )
}
export const getServerSideProps = async (context) => {
    const {prompt} = context.query
    const questionRef = collection(db,'Questions')
    const q = query(questionRef,where('Prompt',"==",prompt))
    const querySnap = await getDocs(q)
    let questions = []
    querySnap.forEach(doc => {
      return questions.push({
        id:doc.id,
        data:doc.data()
      })
    })
    return {
      props:{
        questions
      }
    }
  }

