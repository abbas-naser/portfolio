import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>Abbas Naser &copy; {new Date().getFullYear()}</p>
        <button
          className="button-link-style go-up"
          onClick={() => window.scrollTo(0, 0)}
        >
          TOP
        </button>
      </div>
    </footer>
  );
}
