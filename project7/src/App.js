import logo from "./logo.svg";
import "./App.css";
import Book from "./Book";
import Record from "./Record";
import Member from "./Member";
import LibraryManagementSystem from "./LibraryManagementSystem";

function App() {
  return (
    <div className="App">
      <Book />
      <Record />
      <Member />
      <LibraryManagementSystem />
    </div>
  );
}

export default App;
