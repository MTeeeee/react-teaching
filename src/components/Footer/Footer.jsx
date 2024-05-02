import style from "./Footer.module.css";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Wir haben das Jahr {year}</p>
    </footer>
  );
}

export default Footer;
