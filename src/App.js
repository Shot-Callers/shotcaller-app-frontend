import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
// import mockUser from "./mockUsers.js";
// import mockBasketBallCourts from "./mockBasketballCourts.js";
import {
  AboutUs,
  CourtEdit,
  CourtIndex,
  CourtNew,
  CourtProtectedIndex,
  CourtShow,
  Home,
  Login,
  NotFound,
  SignUp,
} from "./pages/Index.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

// Images
import player3 from "./assests/Player3.png";
import player5 from "./assests/Player5.png";
import player6 from "./assests/Player6.png";
import player7 from "./assests/Player7.png";
import player4 from "./assests/Player4.png";
import player10 from "./assests/Player10.png";
import player11 from "./assests/Player11.png";
import player12 from "./assests/Player12.png";
import player13 from "./assests/Player13.png";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [basketballcourts, setBasketBallCourts] = useState([]);

  const players = [
    player3,
    player4,
    player5,
    player6,
    player7,
    player10,
    player11,
    player12,
    player13,
  ];

  const randomPlayers = () =>
    players[Math.floor(Math.random() * players.length)];

  const colors = ["#6BBAFF", "#FFA34A", "#FF5F5F", "#7052FF", "#19D79E"];
  const randomColors = () => colors[Math.floor(Math.random() * colors.length)];

  // URLs
  const url = "https://shotcaller-backend.onrender.com";
  // const url = "http://localhost:3000";

  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        localStorage.setItem("token", response.headers.get("Authorization"));
        return response.json();
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload));
        setCurrentUser(payload);
      })
      .catch((error) => console.log("login errors: ", error));
  };

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        localStorage.setItem("token", response.headers.get("Authorization"));
        return response.json();
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload));
        setCurrentUser(payload);
      })
      .catch((error) => console.log("login errors: ", error));
  };

  const logout = (id) => {
    fetch(`${url}/signout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setCurrentUser();
      })
      .catch((error) => console.log("log out errors: ", error));
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser));
    }
    readCourts();
  }, []);

  const readCourts = () => {
    fetch(`${url}/basketball_courts`)
      .then((res) => res.json())
      .then((data) => setBasketBallCourts(data))
      .catch((err) => console.log(err));
  };

  const createCourts = (court) => {
    fetch(`${url}/basketball_courts`, {
      body: JSON.stringify(court),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
      .then((res) => res.json())
      .then(() => readCourts())
      .catch((err) => console.log(err));
  };

  const handleEditCourt = (court, id) => {
    fetch(`${url}/basketball_courts/${id}`, {
      body: JSON.stringify(court),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((res) => res.json())
      .then(() => readCourts())
      .catch((errors) => console.log(errors));
  };

  const deleteCourt = (id) => {
    fetch(`${url}/basketball_courts/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => readCourts())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header currentUser={currentUser} logout={logout} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/signup" element={<SignUp signup={signup} />} />
        <Route
          path="/courtindex"
          element={
            <CourtIndex
              basketballcourts={basketballcourts}
              randomColors={randomColors}
              randomPlayers={randomPlayers}
            />
          }
        />
        {currentUser && (
          <Route
            path="/mycourts"
            element={
              <CourtProtectedIndex
                currentUser={currentUser}
                basketballcourts={basketballcourts}
                randomColors={randomColors}
                randomPlayers={randomPlayers}
              />
            }
          />
        )}
        <Route
          path="/courtshow/:id"
          element={
            <CourtShow
              basketballcourts={basketballcourts}
              deleteCourt={deleteCourt}
              currentUser={currentUser}
              randomColors={randomColors}
              randomPlayers={randomPlayers}
            />
          }
        />
        <Route
          path="/courtnew"
          element={
            <CourtNew currentUser={currentUser} createCourts={createCourts} />
          }
        />
        <Route
          path="/courtedit/:id"
          element={
            <CourtEdit
              basketballcourts={basketballcourts}
              currentUser={currentUser}
              handleEditCourt={handleEditCourt}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
