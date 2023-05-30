import { useState } from "react";
import { validateEmail, validatePasswordCreated } from "./UserValidation";
import style from "../../Modules/Landing.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const NewUserForm = () => {
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

  const createUser = async (newUser) => {
    await axios.post("http://localhost:3001/users/create", newUser);
  };

  const handleChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
    console.log(newUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailStatus = validateEmail(newUser.email);
    const passwordStatus = validatePasswordCreated(
      newUser.password,
      newUser.checkPassword
    );
    setErrors({
      userError: emailStatus,
      passwordError: passwordStatus,
    });

    if (!errors.userError && !errors.passwordError) {
      createUser(newUser);

      navigate("/home");
    }
  };

  return (
    <form className={style.formUser}>
      <label>Email: </label>
      <input onChange={handleChange} type="email" name="email" />
      <label>Password: </label>
      <input onChange={handleChange} type="password" name="password" />
      <label>Rewrite your password: </label>
      <input onChange={handleChange} type="password" name="checkPassword" />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </form>
  );
};
