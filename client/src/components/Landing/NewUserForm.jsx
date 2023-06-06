import { useEffect, useState } from "react";
import { validateEmail, validatePasswordCreated } from "./UserValidation";
import style from "../../Modules/NewUserForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const NewUserForm = ({ setAccess }) => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    checkPassword: "",
  });
  const [errors, setErrors] = useState({
    userError: "",
    passwordError: "",
  });

  const [checkSubmit, setCheckSubmit] = useState(0);

  const createUser = async (newUser) => {
    await axios.post("http://localhost:3001/users/create", newUser);
  };

  const handleChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailStatus = validateEmail(newUser.email);
    const passwordStatus = validatePasswordCreated(
      newUser.password,
      newUser.checkPassword
    );
    await setErrors({
      userError: emailStatus,
      passwordError: passwordStatus,
    });
    setCheckSubmit(checkSubmit + 1);
  };

  useEffect(() => {
    async function fetchData() {
      if (!errors.userError && !errors.passwordError) {
        const user = await createUser(newUser);

        setAccess(true);
        navigate("/home");
      }
    }
    fetchData();
  }, [checkSubmit]);

  return (
    <div style={{ backgroundColor: "blue" }}>
      <form className={style.container}>
        <div>
          <label className={style.label}>Email: </label>
          <input
            className={style.input}
            onChange={handleChange}
            type="email"
            name="email"
          />
        </div>
        <div>
          <label className={style.label}>Password: </label>
          <input
            className={style.input}
            onChange={handleChange}
            type="password"
            name="password"
          />
        </div>
        <div>
          <label className={style.label}>Rewrite your password: </label>
          <input
            className={style.input}
            onChange={handleChange}
            type="password"
            name="checkPassword"
          />
        </div>
        <div>
          {errors.userError ? (
            <p className={style.errors}>{errors.userError}</p>
          ) : null}
          {errors.passwordError ? (
            <p className={style.errors}>{errors.passwordError}</p>
          ) : null}
        </div>
        <button className={style.button} onClick={handleSubmit} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};
