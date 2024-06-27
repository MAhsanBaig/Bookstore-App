import React, { useEffect, useState } from 'react'
import axios from "axios"
import Cards from './Cards'
import { Link } from "react-router-dom"

const Course = () => {
  const [book,setbook]=useState([])
  useEffect(()=>{
    const getbook =async()=>{
      try{
       const res = await axios.get("http://localhost:4001/book")
       console.log(res.data)
       setbook(res.data)
      }
      catch(error) {
        console.log(error)
      }
    }
    getbook() 
  },[])
  return (
    <>
      <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white'>
        <div className=' flex flex-col  justify-center items-center text-center'>
          <h1 className='mt-32 text-2xl md:text-4xl  dark:bg-slate-900 dark:text-white'>
            We're delighted to have you <span className='text-pink-500'>Here! :)</span>
          </h1>
          <p className='mt-12  dark:bg-slate-900 dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto veritatis expedita minima, voluptate esse unde vero impedit, commodi quam perspiciatis repudiandae debitis? Quisquam cupiditate repudiandae quidem, hic quia quo Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis commodi illo, sint eveniet placeat odio laboriosam, ullam illum veniam molestias fuga ab est incidunt dicta hic consequuntur nisi autem neque!
          </p>
          <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200'>
              Back
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Course
