
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import mockUser from "./mockUsers.js"
import mockBasketBallCourts from "./mockBasketBallCourts.js"
import { AboutUs, CourtEdit, CourtIndex, CourtNew, CourtProtectedIndex, CourtShow, Home, Login, NotFound, SignUp } from "./pages/Index.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"




function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const [basketballcourts, setBasketBallCourts] = useState([mockBasketBallCourts])

  const login = (userInfo) => {
    fetch("http://localhost:3000/login", {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then((payload) => {
      localStorage.setItem("user", JSON.stringify(payload))
      setCurrentUser(payload)
    })
    .catch((error) => console.log("login errors: ", error))
  }

  const signup = (userInfo) => {
    fetch("http://localhost:3000/signup", {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload))
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error))
  }

  const logout = (id) => {
    fetch("http://localhost:3000/signout", {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setCurrentUser()
      })
      .catch((error) => console.log("log out errors: ", error))
  }


  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user")
  //   if (loggedInUser) {
  //     setCurrentUser(JSON.parse(loggedInUser))
  //   }
  //   readCourts()
  // }, [])

  return (
    <>
      <Header currentUser={currentUser} logout={logout} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login login={login}/>} />
        <Route path="/signup" element={<SignUp signup={signup} />} />
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
