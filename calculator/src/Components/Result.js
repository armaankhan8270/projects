import React, { useContext } from 'react'
import { useState,useEffect, } from 'react'
import { useLocation } from 'react-router-dom'
import { GoogleDataContext } from '../Context/GoogleContext'
import axios from 'axios'
import google from './download.png'

// import {Loading} from './Loading'

const Result = () => {
  const [data, setdata] = useState([])
  const [searchterm, setsearchterm] = useState("success")
 
  const url=`https://www.googleapis.com/customsearch/v1?key=AIzaSyCVxaYbuG83qNrA_ZY3335kMrT6F5ZQZ2s&cx=3457a841d725a4cc6&q=${searchterm}`
  const {Result ,setResult,setLoading,Loading,Search,setSearch} =useContext(GoogleDataContext)
  const location=useLocation()
  // useEffect(()=>{
  //   getData()
  //     },[])
  console.log(location.pathname)
 
  // if(Loading)return<Loading/>
  const getdata=async()=>{
    await axios.get(url).then((res)=>{
      const Gdata=res.data.items
      setdata(Gdata)
      console.log(Gdata)
    }).catch((e)=>console.log(e))
    // getdata()
    
    }
  

switch (location.pathname) {
  case '/search':
    return (
      <div
      className='text-center dark:bg-gray-900 dark:text-white w-[1600px]  p-10 mt-10 shadow-xl  border-cyan-900'>
        <div >
        <div className='mb-5 flex bg-white rounded-full hover:shadow-lg text-black w-[800px] ml-[20%]'>
        
       <button className='text-4xl mr-5 hover:shadow-xl p-2 rounded-full ' onClick={getdata}>🔍</button>
        <input  onChange={(e)=>{
          setsearchterm(e.target.value)
         
          
          // if (e.keyCode === ENTER_KEY_CODE)
          
        }}  type="text"className='bg-white w-[600px] text-black  rounded-full outline-none focus:outline:none text-2xl p-2    'placeholder='Search' name="" id="" />
        <img className='text-4xl  h-12 p-1 rounded-full' onClick={getdata} src={google} alt="" />
    </div>
          {/* {data?data.map((items,ind)=>{
            return(
              <div  key={ind} className='text-white'>
                {items.title}
              </div>
            )
          }):''} */}
          <div className='  justify-start space-y-6'>
  
          {data.map((items,ind)=>(
            <div key={ind} className=" w-full">
              <h1 className='text-2xl text-start w-full'>{items.title}</h1>
            <a href={items.link} target="_blank" rel="noreferrer">
              <p className="text-sm text-start w-1/2  ">{items.snippet}</p>
              <p className="text-start  text-lg hover:underline dark:text-blue-300 text-blue-700  ">{items.link  ? items.link.substring(0, 30) : items.link}</p>
            </a>
          </div>
          ))}
          </div>
          {/* <button onClick={getdata}>Getdata</button> */}
        </div>
      </div>
    )
  case '/Images':
    return 'Image';
  case '/Videos':
    return 'videos';

  default:return "Error"

}
// return(
//     <div>Resultss{Result}
    
//     </div>
//   )
}

export default Result