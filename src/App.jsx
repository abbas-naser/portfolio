import "./App.css";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";

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
