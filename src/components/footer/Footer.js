import React from "react";

export default function Footer() {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/agustin-coelho-2a5767175/"
        target="_blank"
      >
        <img
          style={{ width: 40, marginRight: 20 }}
          src="/images/sobreMi/linkedin.png"
        />
      </a>
      <a target="_blank" href="https://github.com/ccoelh0">
        <img
          style={{ width: 40, marginRight: 20 }}
          src="/images/sobreMi/github.png"
        />
      </a>
      <a target="_blank" href="mailto:coelhoagustin1@gmail.com">
        <img style={{ width: 40 }} src="/images/sobreMi/gmail.png" />
      </a>
    </footer>
  );
}
