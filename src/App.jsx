import "./App.css";
import Profile from "./Profile/Profile";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Projects from "./Projects/Projects";

export default function App() {
  return (
    <div className="App">
      <main>
        <Profile />
        <About />
        <Projects id="projects-content" />
      </main>
      <Footer />
    </div>
  );
}
