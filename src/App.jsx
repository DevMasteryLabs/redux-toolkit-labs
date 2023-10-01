import { BrowserRouter, Route, Routes } from "react-router-dom";

import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Playlist from "./pages/Playlist";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Navbar />
        <SubNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  )
}

export default App
