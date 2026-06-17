import React from "react";

function Footer({ author }) {
  return (
    <footer className="footer">
      <p>&copy; 2025 {author}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
