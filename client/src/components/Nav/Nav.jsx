import style from "../../Modules/Nav.module.css";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className={style.div}>
      <Link style={{ textDecoration: "none", color: "black" }} to="/home">
        <Logo />
      </Link>

      <NavLinks />
      <SearchBar />
    </div>
  );
};
