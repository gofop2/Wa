import React from "react";

function Footer() {
  return (
  <footer>
    <p>
      &copy; {new Date().getFullYear()}{" "}
      <a href="mailto:tadeas.bajer@student.gyarab.cz">Tadeáš Bajer</a>
      </p>
    </footer>
  );
}
export default Footer;
