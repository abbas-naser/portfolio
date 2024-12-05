import Profile from "./components/Profile/Profile.jsx";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

import "./App.css";
export default function App() {
  return (
    <div className="App">
      <main>
        <Profile />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
