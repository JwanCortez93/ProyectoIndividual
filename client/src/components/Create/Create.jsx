import style from "../../Modules/Create.module.css";
import { Form } from "./Form";
import { useState, useEffect } from "react";
import axios from "axios";

export const Create = ({ genres, platforms, stores }) => {
  return (
    <div className={style.container}>
      <Form genres={genres} platforms={platforms} stores={stores} />
    </div>
  );
};
