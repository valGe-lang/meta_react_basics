import "./App.css";
import Homepage from "./components/Homepage";
import AboutLittleLemon from "./components/AboutLittleLemon";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import { Routes, Route, Link } from "react-router-dom";
import Weekend from "./components/Weekend";
import Workdays from "./components/Workdays";
import CurrentMessage from "./components/CurrentMessage";
import LogInOutButton from "./components/LogInOutButton"
import logo from "./assets/logo.png"
import React from "react";
import ReactPlayer from "react-player/youtube";
import VideoPlayer from "./components/VideoPlayer";

function App() {

  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  function toggle2() {
    if(bird2.paused) {
      bird2.play();
    } else {
      bird2.pause();
    }
  }

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
    console.log(toggle1);
  };

  return (
    <div>
      <button onClick={toggle1}>Caspian Tern 1</button>
      <button onClick={toggle2}>Caspian Tern 2</button>
    </div>
  );
}

export default App;






// function App () {
//   return (
//     <div>
//     <img height={200} src={logo} alt="Logo" />
//     <LogInOutButton isLoggedIn={false} />
//     <VideoPlayer />



//     </div>
//   )

// }

// export default App;


// function App() {
//   return (
//     <div>
// 	  <nav>
//       <Link to="/Contact" className="nav-item">Contact</Link>
//       <Link to="/" className="nav-item">Homepage</Link>
//       <Link to="/about" className="nav-item">About Little Lemon</Link>
//       <Link to ="/menu" className="nav-item">Menu</Link>
// 	  </nav>
//       <Routes>
//         <Route path="/Contact" element={<Contact />}></Route>
//         <Route path="/" element={<Homepage />}></Route>
//         <Route path="/about" element={<AboutLittleLemon />}></Route>
//         <Route path="/Menu" element={<Menu />}></Route>
//       </Routes>
//     </div>
//   );
// };

// export default App;


