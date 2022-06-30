import moonIcon from "../assets/icon-moon.svg";
import sunIcon from "../assets/icon-sun.svg";

export default function Header({ colorScheme, changeColorScheme }) {
  return (
    <header className="header">
      <h1 className="devfinder-logo">devfinder</h1>
      <div className="light-switch" onClick={changeColorScheme}>
        {colorScheme === "light" ? (
          <>
            <span>Dark</span>
            <object
              type="image/svg+xml"
              data={moonIcon}
              aria-label="switch to dark mode"
            />
          </>
        ) : (
          <>
            <span>Light</span>
            <object
              type="image/svg+xml"
              data={sunIcon}
              aria-label="switch to light mode"
            />
          </>
        )}
      </div>
    </header>
  );
}
