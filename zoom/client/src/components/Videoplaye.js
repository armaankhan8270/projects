import React, { useState } from "react";
// import copy from "copy-text-to-clipboard";

import { GlobalVideoContetx } from "./Context";
import copy from "copy-to-clipboard";

const Videoplaye = () => {
  const {
    call,
    callAccepted,
    myVideo,
    userVideo,
    stream,
    name,
    setName,
    callEnded,
    me,
    callUser,
    leaveCall,
    answerCall,
  } = GlobalVideoContetx();
  console.log(myVideo);
  console.log(userVideo);
  return (
    <div>
      <div className="flex flex-wrap lg:h-[550px] lg:px-8   ">
        {/* //Myvideo */}
        <div
          className={`shadow-lg rounded-lg ${
            callAccepted ? "w-1/2" : "w-full"
          }  m-1 `}
        >
          <video
            ref={myVideo}
            type="video/mp4"
            controls
            autoPlay
            className=" object-cover w-full h-56  shadow-lg sm:h-64 md:h-80 lg:h-96  rounded-lg  shadow-white"
          />
          <h1 className=" text-xl font-bold  text-black text-center font-sans p-2 shadow-md m-1 rounded px-12 ">
            YOu{" "}
          </h1>
        </div>

        {/* //UserVideo */}
        {callAccepted ? (
          <div className="shadow-lg rounded h-54 w-[670px] m-1">
            <video
              ref={userVideo}
              type="video/mp4"
              controls
              autoPlay
              // className="w-72 h-44 ml-10 rounded-lg shadow-md shadow-white"
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            />
            <h1 className=" text-xl font-bold text-black text-center font-sans p-2 shadow-md m-1 rounded px-12 ">
              USER: {call.name}
            </h1>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Videoplaye;
