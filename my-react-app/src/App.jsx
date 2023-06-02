import "./App.css";
import React from "react";
import call from "./call.webp";
import apple from './apple.webp'
function App() {
  const url = localStorage.getItem("pp");
  return (
    <div className="App">
      {/* <button onClick={}>google</button> */}
      <ul className="brightness-100  bg-cyan-500 shadow-lg shadow-cyan-500/50 divide-x s w-full h-16 flex  rounded text-white justify-center space-x-5 bolder">
        <img
          className="justify-start p-1 rounded-lg"
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt=""
        />
        <li className="p-4 text-2xl px-2 uppercase">home</li>
        <li className="p-4 text-2xl px-2 uppercase">about</li>
        <li className="p-4 text-2xl px-2 uppercase">contac</li>
        <li className="p-4 text-2xl px-2 uppercase">signin</li>
      </ul>
      <div className="flex flex-wrap bg-gray-400 h-84 pt-5 border-t-emerald-200 mt-10 mr-5 ml-5 rounded-lg ">
        <h1 className=" font-mono text-4xl font-extrabold">
          Best Phones Dealar
        </h1>
        <p className="w-1/2   pl-32 font-serif pt-4 border-0 box-shadow  ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          ullam, dicta, inventore, incidunt doloribus omnis similique ad sequi
          quisquam velit provident pariatur adipisci aperiam quam? Iure ipsa
          odio atque magnam!
        </p>
        <div className=" place-items-end gap-4  place-items-center flex">
        <button className="  bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 ">
            BUY NOW
          </button>
          <button className="hover:bg-sky-700 bg-gradient-to-r gap-4  from-purple-500 via-purple-600 to-purple-700 rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 ">
            Contact US
          </button>
        </div>
       
        <div className="">

          <img className="ml-72 " src={apple} alt="" height='300px' />
        </div>
        
        
        <div className="  pt-4">
          {/* <img src={call} alt="" /> */}
        </div>
      </div>
      <div className="flex bg-white-900">
<ul className="flex gap-5 uppercase text-lg font-serif mt-12">
  <li>home</li>
  <li>contact</li>
  <li>about</li>
  <img className="w-16 -mt-4 ml-72" src={apple} alt="" />
  <button className="bg-gray-900 text-3xl text-end text-white rounded-lg p-4 ml-96">Subscribe</button>
</ul>
      </div>
      <div className=" text-white w-1/2 h-96 bg-gray-900 rounded-lg">
        .
        <div>

<h1 className="text-5xl text-end mr-4 text-white mt-20">Mobilise Wrist</h1>
<h1 className="text-2xl text-white">Ut vel nunc a est auctor lacinia.</h1>
<p className="mt-5 w-1/2">Curabitur convallis aliquet dignissim. Nulla at risus feugiat, egestas lacus at, pharetra risus. Aliquam vitae semper leo, quis ornare massa. Aenean dignissim facilisis imperdiet.</p>
      <img src="./t.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <h1 className='text-blue-900'>{localStorage.getItem('username')}</h1>
<h1>{url}</h1>
<img src='https://lh3.googleusercontent.com/a-/AFdZucrvBO7pSNY_0T2M_qPMIp8GY6PqeRD77ck5lqpGHQ=s96-c' alt="a" />
<h1>{localStorage.getItem('useremail')}</h1> */
}
