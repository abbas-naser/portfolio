import "./App.css";
import Profile from "./Profile/Profile";
import About from "./About/About";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <main>
        <Profile />
        <About />
      </main>
      <Footer />
    </div>
  );
}
