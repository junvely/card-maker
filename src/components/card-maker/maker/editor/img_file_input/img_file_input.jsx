import React from "react";
import styles from "./img_file_input.module.css";

const ImgFileInput = ({ name, onclick }) => (
  <button className={styles.imgFileInput} onClick={onclick}>
    {name}
  </button>
);

export default ImgFileInput;
