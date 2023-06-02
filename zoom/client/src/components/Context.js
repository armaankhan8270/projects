import { createContext, useContext, useState, useRef, useEffect } from "react";
import * as io from "socket.io-client";
import Peer from "simple-peer";
const VideoContext = createContext();
const socket = io("http://localhost:3001");

export const StateVideoContext = ({ children }) => {
  const [stream, setstream] = useState("");
  const [me, setme] = useState("");
  const [call, setcall] = useState({});
  const [name, setName] = useState("");
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setcallEnded] = useState(false);
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setstream(currentStream);
        myVideo.current.srcObject = currentStream;
      });
    socket.on("me", (id) => setme(id));
    socket.on("callUser", ({ signal, from, name: callName }) => {
      setcall({ isRecivedCall: true, from, name: callName, signal });
    });
  }, []);
  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: call.from });
    });

    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  //
  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name,
      });
    });

    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setcallEnded(true);
    connectionRef.current.destroy();
    window.location.reload();
  };

  return (
    <VideoContext.Provider
      value={{
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
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const GlobalVideoContetx = () => useContext(VideoContext);
