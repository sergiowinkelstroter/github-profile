import { Container } from "./components/Container";
import { Repos } from "./components/Repos";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />} />
      <Route path="/repos" element={<Repos />} />
    </Routes>
  );
}

export default App;
