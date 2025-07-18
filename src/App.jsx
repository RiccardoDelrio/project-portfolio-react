import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <Navigation />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<Details />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
