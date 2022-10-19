import { useRouter } from 'next/router'
import React,{useState} from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'

import {collection,getDocs,query, where} from 'firebase/firestore'
import {db} from '../../../../firebase.config'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Index({questions}) {
    const router = useRouter()
    const {prompt} = router.query
  return (
    <div>

    {prompt}
   {questions.map(doc => <iframe className='h-screen w-screen' src={doc.data.url}></iframe>)}
   
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

  