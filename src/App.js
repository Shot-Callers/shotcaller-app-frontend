
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import mockUser from "./mockUsers.js"
import mockBasketBallCourts from "./mockBasketBallCourts.js"
import { AboutUs, CourtEdit, CourtIndex, CourtNew, CourtProtectedIndex, CourtShow, Home, Login, NotFound, SignUp } from "./pages/Index.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"




function App() {
  const [currentUser, setCurrentUser] = useState(mockUser[0])
  const [basketballcourts, setBasketBallCourts] = useState([mockBasketBallCourts])
  return (
    <>
      <Header currentUser={currentUser} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courtindex" element={<CourtIndex basketballcourts={basketballcourts} />} />
        {
          currentUser && <Route path="/mycourts" element={<CourtProtectedIndex currentUser={currentUser} basketballcourts={basketballcourts} />} />
        }
        <Route path="/courtshow/:id" element={<CourtShow basketballcourts={basketballcourts} />} />
        <Route path="/courtnew" element={<CourtNew  currentUser={currentUser} />} />
        <Route path="/courtedit/:id" element={<CourtEdit basketballcourts={basketballcourts}  />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
