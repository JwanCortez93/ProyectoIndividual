import style from "../../Modules/Landing.module.css";
import { LandingNav } from "../Landing/LandingNav";

import { useState } from "react";
import { validateEmail, validatePassword } from "./UserValidation";
import { NewUserForm } from "./NewUserForm";

export const Landing = ({ login, setAccess }) => {
  const [check, setCheck] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    userError: "",
    passwordError: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailStatus = validateEmail(userData.email);
    const passwordStatus = validatePassword(userData.password);
    await setErrors({
      userError: emailStatus,
      passwordError: passwordStatus,
    });

    if (!errors.userError && !errors.passwordError) {
      login(userData);
    }
  };

  const handleRegister = () => {
    setCheck(true);
  };

  return (
    <div>
      <LandingNav />

      <div className={style.container}>
        <img
          src="/Background GOW.png"
          alt="Background"
          className={style.background}
        />
        <div className={style.foreground}>
          <img className={style.img} src="/Logo with name.png" alt="Logo"></img>
          <div className={style.textContainer}>
            <div className={style.text}>
              <h1 className={style.mainText}>
                Keep track of what you've played
              </h1>
              <h2 className={style.additionalText}>
                Create your own log of every game you've played so far. <br />
                Check out their reviews and share your thoughts!
              </h2>
            </div>
            <div className={style.text}>
              <h1 className={style.mainText}>
                Keep track of what you wanna play
              </h1>
              <h2 className={style.additionalText}>
                Wishlist the upcoming games so you won't miss their release!
                You'll never forget to pre-order ever again
              </h2>
            </div>
            <div className={style.text}>
              <h1 className={style.mainText}>Let everyone know what's good</h1>
              <h2 className={style.additionalText}>
                Make yourself known in the community! Connect with those who
                share your tastes and let them know what they're missing
              </h2>
            </div>
          </div>
        </div>
        <div className={style.loginDiv}>
          <div className={style.form_button}>
            <form onSubmit={handleSubmit} className={style.form}>
              <div>
                <input
                  placeholder="Email:"
                  className={style.inputText}
                  type="text"
                  name="email"
                  onChange={handleChange}
                ></input>

                {errors.userError ? <p>{errors.userError}</p> : null}
              </div>
              <div>
                <input
                  placeholder="Password:"
                  className={style.inputText}
                  type="password"
                  name="password"
                  onChange={handleChange}
                ></input>
                {errors.passwordError ? <p>{errors.passwordError}</p> : null}
              </div>
              <button type="submit" className={style.button}>
                Log In
              </button>
            </form>
            <label
              style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
            >
              Don't have an account?
            </label>
            <button className={style.registerButton} onClick={handleRegister}>
              Register!
            </button>
          </div>
        </div>
        <div className={check ? style.createUser2 : style.createUser1}>
          <NewUserForm setAccess={setAccess} />
        </div>
      </div>
    </div>
  );
};
