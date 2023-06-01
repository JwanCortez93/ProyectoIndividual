import style from "../../Modules/Nav.module.css";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { SearchBar } from "./SearchBar";
import { Link, useLocation } from "react-router-dom";

export const Nav = () => {
  const location = useLocation();

  return (
    <div className={style.div}>
      <Link style={{ textDecoration: "none", color: "black" }} to="/home">
        <Logo className={style.logo} />
      </Link>

      <NavLinks />
      {!location.pathname.includes("/detail") && <SearchBar />}
    </div>
  );
};
