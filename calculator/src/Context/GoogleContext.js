import React, { createContext ,useState} from "react";
import axios from "axios";

const url='https://www.googleapis.com/customsearch/v1?key=AIzaSyCVxaYbuG83qNrA_ZY3335kMrT6F5ZQZ2s&cx=3457a841d725a4cc6&q=armaan'
export const GoogleDataContext=createContext()

export const GoogleState=({children})=>{
    const [Result, setResult] = useState('armaan');
    const [data, setdata] = useState([])
    const [Search, setSearch] = useState('')
    const [Loading, setLoading] = useState(false)
const getData=async(type)=>{
setLoading(true)
await axios.get(url).then(async(res)=>{
    const GoogleData=await res.
    setdata(GoogleData)
    console.log(
        data
    )
    setLoading(false)
})
// const response= await fetch(`${url}`)
//     const searchdata =await response.json()
//     await setdata(searchdata)
//     setLoading(false)
//     console.log(searchdata)

}
    return(
        <GoogleDataContext.Provider value={{Result ,setResult,getData,data,setLoading,Loading,Search,setSearch}}>
{children}
        </GoogleDataContext.Provider>
    )
}

// params: {hl: 'en', q: 'Avengers+Endgame', gl: 'us'},
// headers: {
//   'X-RapidAPI-Key': 'a5b7dc09ddmshb18d68644d1a9f6p10ba0fjsn33eb270b5302',
//   'X-RapidAPI-Host': 'google-search1.p.rapidapi.com'
// }