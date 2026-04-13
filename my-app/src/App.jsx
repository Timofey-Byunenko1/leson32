
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Swapi from "./pages/Swapi";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/swapi" element={<Swapi />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App; 