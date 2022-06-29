import moonIcon from "../assets/icon-moon.svg";

export default function Header() {
  return (
    <header className="header">
      <h1 className="devfinder-logo">devfinder</h1>
      <div className="light-switch">
        <span>Dark</span>
        <object type="image/svg+xml" data={moonIcon} aria-label="dark mode" />
      </div>
      <div hidden>
        {/* Light <img src="../assets/icon-sun.svg" alt="" /> */}
      </div>
    </header>
  );
}
