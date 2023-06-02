import "./App.css";
import Navbars from "./components/Navbar";
import Notification from "./components/Notification";
import Option from "./components/Option";
import Video from "./components/video";
import Videoplaye from "./components/Videoplaye";

function App() {
  return (
    <div className="App   w-screen ">
      {/* <Navbars /> */}
      <Videoplaye />
      <Option>
        <Notification />
      </Option>
      {/* <Video /> */}
    </div>
  );
}

export default App;
