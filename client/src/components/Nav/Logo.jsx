import style from "../../Modules/Logo.module.css";

export const Logo = () => {
  return (
    <div style={{ height: "100%" }}>
      <img className={style.logo} src="/Logo without name.png" alt="Logo" />
    </div>
  );
};
