import React, { useState } from "react";
import { GlobalVideoContetx } from "./Context";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Video = () => {
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
      <div className="px-4 py-16 flex flex-wrap mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto sm:text-center lg:max-w-2xl">
          <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
            <video
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              alt=""
              ref={myVideo}
              type="video/mp4"
              controls
              autoPlay
            />
          </div>
          <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
            <video
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              alt=""
              ref={userVideo}
              type="video/mp4"
              controls
              autoPlay
            />
          </div>
          <p className="max-w-xl mb-4  text-black sm:mx-auto">Armaan</p>
          <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
              Account settings
            </h2>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 dark:text-gray-200" for="username">
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
        </div>
      </div>
    </div>
  );
};

export default Video;
