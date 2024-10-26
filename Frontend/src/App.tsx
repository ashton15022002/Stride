import { Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import OurServices from "@/pages/services";
import GetHelp from "@/pages/help";
import Explore from "@/pages/explore";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path="/" />
        {/* <Route element={<AboutPage />} path="/about" /> */}
        <Route element={<OurServices />} path="/services" />
        {/* <Route element={<GetHelp />} path="/help" /> */}
        {/* <Route element={<Explore />} path="/explore" /> */}
      </Routes>
    </>
  )
}

export default App;