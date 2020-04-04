import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-5" style={{ fontSize: "0.8rem" }}>
      <div>© 2020 The Media Trust. All rights reserved.</div>
      <div>
        Developer by{" "}
        <a
          href="https://www.kpadenou.net"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          Kokou Kpadenou
        </a>{" "}
        <span role="img" aria-label="Emoji">
          &#128526;
        </span>
      </div>
    </footer>
  );
};

export default Footer;
