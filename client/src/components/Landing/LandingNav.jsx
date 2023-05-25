import style from "../../Modules/LandingNav.module.css";
import { Logo } from "../Nav/Logo";
import { NavLinks } from "../Nav/NavLinks";
import { SearchBar } from "../Nav/SearchBar";

import { Link } from "react-router-dom";

export const LandingNav = () => {
  return (
    <div className={style.div}>
      <Link style={{ textDecoration: "none", color: "black" }} to="/home">
        <Logo className={style.logo} />
      </Link>

      <NavLinks />
      <SearchBar />
    </div>
  );
};
