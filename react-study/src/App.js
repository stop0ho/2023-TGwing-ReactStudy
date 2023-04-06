import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/css/header.css";
import "./assets/css/navigation.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Out from "./pages/Out";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:title" element={<Out />} />
      </Routes>
    </div>
  );
}

export default App;
