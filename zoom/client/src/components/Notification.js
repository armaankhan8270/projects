import React from "react";
import { GlobalVideoContetx } from "./Context";

const Notification = () => {
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
  return (
    <div>
      {!callAccepted ? (
        <div className="shadow-lg px-44 capitalize mt-4 flex justify-between">
          <h1 className="text-3xl w-1/2 p-4 rounded-lg shadow-purple-800 shadow-lg text-black m-2">
            Call From :{call.name}
          </h1>
          <button
            className=" w-1/2 shadow-lg bg-green-600 rounded-lg m-2"
            onClick={answerCall}
          >
            Answer
          </button>
        </div>
      ) : (
        "s"
      )}
    </div>
  );
};

export default Notification;
