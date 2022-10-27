import { useRouter } from 'next/router'
import { useState } from 'react'
import {collection,getDocs,query, where} from 'firebase/firestore'
import {db} from '../../../firebase.config'
import Link from 'next/link'
import { Disclosure,Popover, Menu, Transition } from '@headlessui/react'
import {
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'
import {
  ArrowTrendingUpIcon,
  FireIcon,
  HomeIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import Navbar from '../../../components/Navbar'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
import { MdTableRows } from 'react-icons/md';
import { TbLayoutColumns } from 'react-icons/tb';

export default function Index({questions}) {
  const router = useRouter()
  const {framework} = router.query
  const [grid,setGrid] = useState(true)
  const [search,setSearch] = useState(' ')
  const [difficulty,setDifficulty] = useState(4)

  console.log(questions);


  return (
    <div className='bg-black'>
      <Navbar/>
  <h1 className='text-center p-14 text-4xl font-extrabold'>Questions</h1>
    <div className="min-h-full bg-black">
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
        <Popover
          as="header"
          className={({ open }) =>
            classNames(
              open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
              'bg-white shadow-sm lg:static lg:overflow-y-visible'
            )
          }
        >
          {({ open }) => (
            <>
              <div className="  sm:px-6 lg:px-8 bg-black">
                <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                  <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                    <div className="flex flex-shrink-0 items-center">
                      <a href="#">
                        {/* <img
                          className="block h-8 w-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500"
                          alt="Your Company"
                        /> */}
                        <div className='flex font-bold  justify-evenly gap-3 border-2 border-blue-500 rounded-md p-3'>
                          <div>
                        <button className='hover:text-sky-500'>Easy</button>
                          </div>
                          <div>
                          <button className='hover:text-sky-500'>Medium</button>
                          </div>
                          <div>
                          <button className='hover:text-sky-500'>Hard</button>

                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                    <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                      <div className="w-full">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          <input
                            id="search"
                            name="search"
                            className="block w-full rounded-md border border-gray-300 bg-black py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-sky-500 focus:text-white-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                            placeholder="Search"
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
              
                  <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
  
                                          
                <a
                      href="#"
                      className=" inline-flex items-center rounded-md border border-transparent border-sky-600 px-2 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                    >
                     <div className='flex justify-evenly gap-4'>
                      <div>
                      <button onClick={() => setGrid(!grid)}><MdTableRows className={`${!grid ? 'text-2xl text-sky-600' : 'text-2xl hover:text-sky-600'}`}/></button>
                      </div>
                      <div>
                      <button onClick={() => setGrid(!grid)}><TbLayoutColumns className={`${grid ? 'text-2xl text-sky-600' : 'text-2xl hover:text-sky-600'}`} /></button>
                      </div>
                     </div>
                    </a>
                  </div>
                </div>
              </div>

            </>
          )}
        </Popover>
      {grid && (
        <section class=" body-font">
        <div class="container text-white bg-black  py-24 mx-auto">
          <div class="flex text-white bg-black flex-wrap ">
            {questions.map((question) => (
              <Link href={`/topics/${framework}/${question.data.Prompt}`}>
            <div class="p-4 cursor-pointer text-white bg-black md:w-1/3">
            <div class="flex rounded-lg h-full text-white bg-black0 p-8 flex-col">
              <div class="flex items-center mb-3 text-white bg-black">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-sky-500 text-white flex-shrink-0">
                {question.data.Difficulty}
                </div>
                <h2 class="text-white text-lg title-font font-medium">{question.data.Prompt}</h2>
            
                {question.data.Companies?.map(data => (
                  <>
                  </>
                ))}
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-white text-base">{question.data.Difficulty}</p>
                <a class="mt-3  text-white inline-flex items-center">Solve
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          </Link>
            ))}
          </div>
        </div>
      </section>
  
  
      )}
  

        <div className='mx-auto'>
        {!grid && (
              <div className="mt-8 p-50  flex flex-col bg-black">
              <div style={{padding:'50px'}} className="-my-2 p-50 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block p-50 min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="relative p-50 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table className="min-w-full p-50 table-fixed mx-auto divide-y divide-gray-300">
                      <thead className="bg-black text-white">
                        <tr>
                          <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                           
                          </th>
                          <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-white">
                            Question
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold  text-white">
                            Difficulty
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold  text-white">
                            Time
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Company
                          </th>
                          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-black text-white">
                        {questions.map((person) => (
                          <tr>
                            <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                            
                              <input
                                type="checkbox"
                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                                value={person.email}                             
                              />
                            </td>
                            <td
                              className={classNames(
                                'whitespace-nowrap py-4 pr-3 text-sm font-medium text-white'
                              )}
                            >
                              {person.data.Prompt}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{person.data.Prompt}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{person.data.Prompt}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{person.data.Tech}</td>
                            <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <a href="#" className="text-sky-600 hover:text-indigo-900">
                                Edit<span className="sr-only">, {person.data.Prompt}</span>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              </div>

        )}
        </div>








</div>
    
    </div>
    
  )
}


export const getServerSideProps = async (context) => {
  const {framework} = context.query
  const questionRef = collection(db,'Questions')
  const q = query(questionRef,where('Tech',"==",framework))
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