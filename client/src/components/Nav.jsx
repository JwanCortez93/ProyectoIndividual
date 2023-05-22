import style from "./Modules/Nav.module.css";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { SearchBar } from "./SearchBar";

export const Nav = () => {
  return (
    <div className={style.div}>
      <Logo />
      <NavLinks />
      <SearchBar />
    </div>
  );
};
