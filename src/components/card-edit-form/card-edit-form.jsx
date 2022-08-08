import React from "react";
import Button from "../button/button";
import styles from "./card-edit-form.module.css";
import ImgFileInput from "../img_file_input/img_file_input";

const EditForm = ({ card, onDelete }) => {
  const { id, name, company, job, email, message, theme } = card;

  return (
    <li className={styles.editor}>
      <form className={styles.editorForm}>
        <input
          className={`${styles.name} ${styles.input}`}
          type="text"
          defaultValue={name}
          placeholder="Name"
        />
        <input
          className={`${styles.company} ${styles.input}`}
          type="text"
          defaultValue={company}
          placeholder="Company"
        />
        <select
          className={`${styles.select} ${styles.input}`}
          name="theme"
          defaultValue={theme}
        >
          <option value={"purple"}>Purple</option>
          <option value={"pink"}>Pink</option>
          <option value={"blue"}>Blue</option>
          <option value={"dark"}>Dark</option>
        </select>
        <input
          className={`${styles.job} ${styles.input}`}
          type="text"
          defaultValue={job}
          placeholder="Job"
        />
        <input
          className={`${styles.email} ${styles.input}`}
          type="text"
          defaultValue={email}
          placeholder="E-mail"
        />
        <textarea
          className={`${styles.message} ${styles.input}`}
          name="message"
          defaultValue={message}
          placeholder="Memo"
        />
        <div className={styles.buttons}>
          <ImgFileInput
            name={name ? name : "No file"}
            onclick={onclick}
          ></ImgFileInput>
          <Button name={"Delete"} onClick={() => onDelete(id)}></Button>
        </div>
      </form>
    </li>
  );
};

export default EditForm;
