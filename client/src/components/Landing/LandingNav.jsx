import style from "../../Modules/LandingNav.module.css";
import { Logo } from "../Nav/Logo";
import { NavLinks } from "../Nav/NavLinks";

export const LandingNav = () => {
  return (
    <div className={style.div}>
      <Logo className={style.logo} />

      <NavLinks />
    </div>
  );
};
