import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PDFGenerator from "./pages/PDFGenerator";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PDFGenerator />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
