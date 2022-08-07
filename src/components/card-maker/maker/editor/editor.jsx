import React from "react";
import Button from "../../../button/button";
import styles from "./editor.module.css";
import ImgFileInput from "./img_file_input/img_file_input";

const Editor = ({ card }) => {
  const { name, company, job, email, message, theme } = card;

  const onSubmit = () => {};

  return (
    <li className={styles.editor}>
      <form className={styles.editorForm}>
        <input
          type="text"
          value={name}
          className={`${styles.name} ${styles.input}`}
          placeholder="Name"
        />
        <input
          type="text"
          value={company}
          className={`${styles.company} ${styles.input}`}
          placeholder="Company"
        />
        <select
          className={`${styles.select} ${styles.input}`}
          name="theme"
          value={theme}
        >
          <option value={"purple"}>Purple</option>
          <option value={"pink"}>Pink</option>
          <option value={"blue"}>Blue</option>
          <option value={"dark"}>Dark</option>
        </select>
        <input
          type="text"
          value={job}
          className={`${styles.job} ${styles.input}`}
          placeholder="Job"
        />
        <input
          type="text"
          value={email}
          className={`${styles.email} ${styles.input}`}
          placeholder="E-mail"
        />
        <textarea
          className={`${styles.message} ${styles.input}`}
          name="message"
          value={message}
          placeholder="Memo"
        />
        <div className={styles.buttons}>
          <ImgFileInput
            name={name ? name : "No file"}
            onclick={onclick}
          ></ImgFileInput>
          <Button name={"Delete"} onclick={onSubmit}></Button>
        </div>
      </form>
    </li>
  );
};

export default Editor;
