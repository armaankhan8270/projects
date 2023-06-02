import React from 'react'
import { useState,useEffect, } from 'react'
import { useLocation } from 'react-router-dom'
import { GoogleDataContext } from '../Context/GoogleContext'

const Search = () => {
  const id='3457a841d725a4cc6'
  const apikey='AIzaSyCVxaYbuG83qNrA_ZY3335kMrT6F5ZQZ2s'
  // const {Result ,setResult,getData,data,setLoading,Loading,Search,setSearch} =useContext(GoogleDataContext)
  return (
    <div className='text-black w-[1000px] ml-[20%]'><div className='gcse-search'></div>
        <input type="text"className='bg-white w-[1000px] text-black shadow-lg rounded-xl outline-none focus:outline:none text-2xl p-2   'placeholder='Search' name="" id="" />
    </div>
  )
}

export default Search