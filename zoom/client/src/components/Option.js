import React, { useState } from "react";
import { GlobalVideoContetx } from "./Context";
import copy from "copy-to-clipboard";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Option = ({ children }) => {
  const [idToCall, setidToCall] = useState("");
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
      <section class="max-w-4xl mt-4 p-6 mx-auto capitalize bg-white rounded-md shadow-md dark:bg-gray-800">
        <h1 className="text-center p-3 m-2 text-black text-xl">Make call</h1>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-black dark:text-gray-200" for="username">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username">
              ID
            </label>
            <input
              value={idToCall}
              onChange={(e) => setidToCall(e.target.value)}
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div class="flex justify-between px-16 gap-10 mt-6">
          {callAccepted && !callEnded ? (
            <button
              onClick={leaveCall}
              class="px-8 w-full py-2.5 leading-5 text-white transition-colors duration-300 transform bg-pink-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              hangUp
            </button>
          ) : (
            <button
              onClick={() => {
                callUser(idToCall);
                console.log(idToCall);
              }}
              class="px-8 w-full py-2.5 leading-5 text-white transition-colors duration-300 transform bg-pink-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              CAll
            </button>
          )}

          <CopyToClipboard text={me}>
            <button class="px-8 py-2.5 w-full leading-5 text-white transition-colors duration-300 transform bg-pink-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Copy
            </button>
          </CopyToClipboard>
        </div>
      </section>
      {children}
    </div>
  );
};

export default Option;
