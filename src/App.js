import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

function App() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <Route exact path="/" element={<HomePage register={register} />} />
          <p>{data}</p>
          <input type="submit" />
        </form>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
